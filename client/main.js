import { Game }    from './src/Game.js';
import Network     from './src/Network.js';
import { audio }   from './src/AudioManager.js';

// ── Lobby music (HTML <audio> — no AudioContext needed yet) ──────────────────
const bgMusic = new Audio('/music/bg.mp3');
bgMusic.loop   = true;
bgMusic.volume = 0.15;

function startLobbyMusic() {
  bgMusic.play().catch(() => {});
  document.removeEventListener('click',   startLobbyMusic);
  document.removeEventListener('keydown', startLobbyMusic);
}
document.addEventListener('click',   startLobbyMusic);
document.addEventListener('keydown', startLobbyMusic);

// ── DOM refs ─────────────────────────────────────────────────────────────────
const lobby           = document.getElementById('lobby');
const phase1          = document.getElementById('lobby-phase1');
const phase2          = document.getElementById('lobby-phase2');
const usernameInput   = document.getElementById('username-input');
const joinBtn         = document.getElementById('join-btn');
const usernameError   = document.getElementById('username-error');
const roomCodeEl      = document.getElementById('room-code');
const playerListEl    = document.getElementById('player-list');
const playerCountEl   = document.getElementById('player-count');
const startBtn        = document.getElementById('start-btn');
const soloBtn         = document.getElementById('solo-btn');
const lobbyWaitingTxt = document.getElementById('lobby-waiting-text');

// ── Phase 1: username entry ──────────────────────────────────────────────────
joinBtn.addEventListener('click', enterLobby);
usernameInput.addEventListener('keydown', e => { if (e.key === 'Enter') enterLobby(); });

let _network      = null;
let _username     = '';
let _gameLaunched = false;
let _soloTimer    = null;

async function enterLobby() {
  const name = usernameInput.value.trim();
  if (name.length < 2) {
    usernameError.textContent = 'Username must be at least 2 characters.';
    return;
  }
  if (!/^[a-zA-Z0-9_]+$/.test(name)) {
    usernameError.textContent = 'Only letters, numbers, and underscores.';
    return;
  }
  usernameError.textContent = '';
  _username = name;

  // Stop lobby music; AudioContext will resume when game starts
  bgMusic.pause();
  bgMusic.currentTime = 0;

  // ── Transition: phase 1 → phase 2 ─────────────────────────────────────────
  phase1.style.opacity    = '0';
  phase1.style.transition = 'opacity 0.25s';
  setTimeout(() => {
    phase1.style.display = 'none';
    phase2.style.display = 'block';
    phase2.style.opacity = '0';
    phase2.style.transition = 'opacity 0.3s';
    requestAnimationFrame(() => { phase2.style.opacity = '1'; });
  }, 250);

  // ── Wire map buttons (after phase2 is displayed) ──────────────────────────
  document.querySelectorAll('.map-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (_network) _network.requestMapChange(btn.dataset.map);
    });
  });

  // ── Solo fallback — show after 6 s if game hasn't started ─────────────────
  _soloTimer = setTimeout(() => {
    if (!_gameLaunched) soloBtn.style.display = 'block';
  }, 6000);

  startBtn.addEventListener('click', () => {
    if (_network) _network.requestStartGame();
  });

  soloBtn.addEventListener('click', () => launchGame(null));

  // ── Connect to server ──────────────────────────────────────────────────────
  _network = new Network();

  _network.onPlayerList(players => renderPlayerList(players));
  _network.onMapChanged(mapId   => highlightMapBtn(mapId));
  _network.onGameStarted(()     => launchGame(_network));

  try {
    const joinData = await Promise.race([
      _network.connect(_username),
      new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), 10000)),
    ]);

    roomCodeEl.textContent = joinData.roomCode ?? _username.slice(0, 6).toUpperCase();
    highlightMapBtn(joinData.mapId);
  } catch (err) {
    console.warn('[Lobby] server offline:', err.message);
    launchGame(null);
  }
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function renderPlayerList(players) {
  playerCountEl.textContent = `${players.length} / 16`;
  playerListEl.innerHTML = players.map(p => `
    <div class="player-item">
      <span class="player-dot" style="background:${p.color}"></span>
      <span class="player-name">${escHtml(p.username)}</span>
    </div>
  `).join('');

  if (players.length >= 2 && !_gameLaunched) {
    startBtn.style.display = 'block';
    lobbyWaitingTxt.style.display = 'none';
  } else {
    startBtn.style.display = 'none';
    lobbyWaitingTxt.style.display = 'block';
  }
}

function highlightMapBtn(mapId) {
  document.querySelectorAll('.map-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.map === mapId);
  });
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// ── Launch the 3D game ────────────────────────────────────────────────────────

function launchGame(network) {
  if (_gameLaunched) return;
  _gameLaunched = true;
  clearTimeout(_soloTimer);

  audio.resume();

  lobby.style.transition = 'opacity 0.5s';
  lobby.style.opacity    = '0';
  setTimeout(() => {
    lobby.style.display = 'none';
    const game = new Game(_username, network);
    game.start();
  }, 500);
}
