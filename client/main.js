import { Game } from './src/Game.js';
import { audio } from './src/AudioManager.js';

const bgMusic = new Audio('/music/bg.mp3');
bgMusic.loop = true;
bgMusic.volume = 0.15;

// Start lobby music on first user gesture (browser autoplay policy)
function startLobbyMusic() {
  bgMusic.play().catch(() => {});
  document.removeEventListener('click', startLobbyMusic);
  document.removeEventListener('keydown', startLobbyMusic);
}
document.addEventListener('click', startLobbyMusic);
document.addEventListener('keydown', startLobbyMusic);

const usernameInput = document.getElementById('username-input');
const joinBtn = document.getElementById('join-btn');
const usernameError = document.getElementById('username-error');
const lobby = document.getElementById('lobby');

joinBtn.addEventListener('click', startGame);
usernameInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') startGame(); });

function startGame() {
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
  audio.resume();
  bgMusic.pause();
  bgMusic.currentTime = 0;
  lobby.style.transition = 'opacity 0.5s';
  lobby.style.opacity = '0';
  setTimeout(() => {
    lobby.style.display = 'none';
    const game = new Game(name);
    game.start(); // HUD.show() is called inside Game.start()
  }, 500);
}
