// HUD.js — Waddle Wars UI overlay
// Player state used: hp, stamina (0–100), isFallen, _stunTimer
// Weapon state used: ammo, reserveAmmo, isReloading, _isCharging, _chargeTimer

export default class HUD {
  constructor() {
    this._el = {};
    this._killFeedEntries = [];
    this._notifyTimer = null;
    this._vignetteTimer = null;
    this._injectStyles();
    this._buildDOM();
    this._cacheEls();
  }

  _injectStyles() {
    const css = `
      #hud-root * { box-sizing: border-box; user-select: none; pointer-events: none; font-family: 'Segoe UI', system-ui, sans-serif; }
      #hud-root { position: fixed; inset: 0; z-index: 100; }

      /* crosshair */
      #hud-crosshair { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 24px; height: 24px; }
      .ch-line { position: absolute; background: rgba(255,255,255,0.85); border-radius: 1px; transition: transform 0.12s ease; }
      .ch-top    { width: 2px; height: 8px; top: 0;    left: 11px; }
      .ch-bottom { width: 2px; height: 8px; bottom: 0; left: 11px; }
      .ch-left   { height: 2px; width: 8px; left: 0;   top: 11px; }
      .ch-right  { height: 2px; width: 8px; right: 0;  top: 11px; }
      #hud-crosshair.shooting .ch-top    { transform: translateY(-4px); }
      #hud-crosshair.shooting .ch-bottom { transform: translateY(4px); }
      #hud-crosshair.shooting .ch-left   { transform: translateX(-4px); }
      #hud-crosshair.shooting .ch-right  { transform: translateX(4px); }

      /* charge ring */
      #hud-charge { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 56px; height: 56px; opacity: 0; transition: opacity 0.1s; }
      #hud-charge.visible { opacity: 1; }
      #hud-charge svg { width: 100%; height: 100%; transform: rotate(-90deg); }
      #hud-charge-text { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-size: 10px; color: #fff; font-weight: 600; }

      /* bottom-left: HP */
      #hud-hp { position: absolute; bottom: 28px; left: 24px; display: flex; flex-direction: column; gap: 5px; width: 180px; }
      #hud-hp-label { display: flex; align-items: center; gap: 6px; }
      #hud-hp-value { font-size: 22px; font-weight: 700; color: #fff; line-height: 1; }
      #hud-hp-bar { width: 100%; height: 6px; background: rgba(255,255,255,0.15); border-radius: 3px; overflow: hidden; }
      #hud-hp-fill { height: 100%; width: 100%; background: #4488ff; border-radius: 3px; transition: width 0.25s ease, background 0.4s ease; }
      #hud-hp.danger #hud-hp-fill { background: #ff4444; animation: hpPulse 0.6s ease-in-out infinite alternate; }
      @keyframes hpPulse { from { opacity: 1; } to { opacity: 0.5; } }

      /* bottom-left (below HP): Stamina */
      #hud-stamina { position: absolute; bottom: 0px; left: 24px; display: flex; flex-direction: column; gap: 3px; width: 180px; }
      #hud-stamina-label { font-size: 10px; color: rgba(255,255,255,0.45); letter-spacing: 0.08em; }
      #hud-stamina-bar { width: 100%; height: 4px; background: rgba(255,255,255,0.12); border-radius: 2px; overflow: hidden; }
      #hud-stamina-fill { height: 100%; width: 100%; background: #44ddaa; border-radius: 2px; transition: width 0.1s linear, background 0.3s ease; }
      #hud-stamina.low  #hud-stamina-fill { background: #ffaa33; }
      #hud-stamina.empty #hud-stamina-fill { background: #ff4444; animation: hpPulse 0.5s ease-in-out infinite alternate; }
      #hud-stamina.fallen #hud-stamina-label { color: #ff8844; }

      /* bottom-right: Ammo — sits above the minimap */
      #hud-ammo { position: absolute; bottom: 160px; right: 24px; display: flex; flex-direction: column; align-items: flex-end; gap: 3px; }
      #hud-ammo-main { display: flex; align-items: baseline; gap: 6px; }
      #hud-ammo-mag { font-size: 32px; font-weight: 700; color: #fff; line-height: 1; transition: color 0.2s; }
      #hud-ammo-reserve { font-size: 14px; color: rgba(255,255,255,0.5); }
      #hud-ammo-status { font-size: 12px; font-weight: 600; letter-spacing: 0.1em; height: 16px; }
      #hud-ammo.empty #hud-ammo-mag { color: #ff4444; }
      #hud-ammo.reloading #hud-ammo-mag { color: #ffaa33; }
      .ammo-flash { animation: ammoFlash 0.4s ease-in-out infinite alternate; }
      @keyframes ammoFlash { from { opacity: 1; } to { opacity: 0.3; } }

      /* top-right: kill feed */
      #hud-killfeed { position: absolute; top: 20px; right: 20px; display: flex; flex-direction: column; align-items: flex-end; gap: 5px; width: 260px; }
      .kill-entry { background: rgba(0,0,0,0.45); padding: 5px 10px; border-radius: 4px; font-size: 13px; color: #fff; white-space: nowrap; animation: killFadeIn 0.2s ease; transition: opacity 0.5s; }
      .kill-entry .killer { color: #88ccff; font-weight: 600; }
      .kill-entry .victim { color: #ff8888; font-weight: 600; }
      .kill-entry.fading { opacity: 0; }
      @keyframes killFadeIn { from { opacity: 0; transform: translateX(8px); } to { opacity: 1; transform: none; } }

      /* top-left: player count */
      #hud-count { position: absolute; top: 20px; left: 20px; background: rgba(0,0,0,0.4); padding: 6px 12px; border-radius: 4px; font-size: 13px; color: rgba(255,255,255,0.8); }

      /* top-center: game timer */
      #hud-timer { position: absolute; top: 14px; left: 50%; transform: translateX(-50%); background: rgba(0,0,30,0.65); border: 1px solid rgba(100,200,255,0.2); padding: 6px 20px; border-radius: 6px; text-align: center; display: none; min-width: 120px; }
      #hud-timer.visible { display: block; }
      #hud-timer-value { font-size: 22px; font-weight: 700; color: #fff; font-family: 'Courier New', monospace; letter-spacing: 0.06em; }
      #hud-timer-label { font-size: 10px; color: rgba(170,220,255,0.6); letter-spacing: 0.14em; text-transform: uppercase; margin-top: 1px; }
      #hud-timer.urgent #hud-timer-value { color: #ff4444; animation: timerPulse 0.5s ease-in-out infinite alternate; }
      @keyframes timerPulse { from { opacity: 1; } to { opacity: 0.4; } }

      /* top-center: zone timer (below game timer) */
      #hud-zone { position: absolute; top: 72px; left: 50%; transform: translateX(-50%); background: rgba(0,0,30,0.5); padding: 6px 16px; border-radius: 4px; font-size: 13px; color: #aaddff; text-align: center; display: none; }
      #hud-zone.visible { display: block; }
      #hud-zone.urgent { animation: zonePulse 0.5s ease-in-out infinite alternate; }
      @keyframes zonePulse { from { color: #aaddff; } to { color: #fff; } }

      /* K/D/A Tab scoreboard overlay */
      #hud-scoreboard { position: fixed; inset: 0; background: rgba(0,5,20,0.82); display: none; align-items: flex-start; justify-content: center; padding-top: 80px; z-index: 200; pointer-events: none; }
      #hud-scoreboard.visible { display: flex; }
      #hud-scoreboard-inner { background: rgba(5,15,40,0.95); border: 1px solid rgba(100,180,255,0.25); border-radius: 10px; padding: 20px 28px; min-width: 520px; max-width: 700px; width: 90%; }
      #hud-scoreboard-title { font-size: 13px; font-weight: 700; letter-spacing: 0.18em; color: rgba(160,210,255,0.7); text-transform: uppercase; text-align: center; margin-bottom: 14px; }
      .sb-row { display: grid; grid-template-columns: 28px 1fr 52px 52px 52px 64px; align-items: center; gap: 4px; padding: 5px 4px; border-radius: 4px; }
      .sb-row.header { font-size: 10px; color: rgba(150,190,230,0.55); letter-spacing: 0.12em; text-transform: uppercase; border-bottom: 1px solid rgba(100,180,255,0.12); padding-bottom: 8px; margin-bottom: 4px; }
      .sb-row.me { background: rgba(100,180,255,0.1); }
      .sb-row:not(.header):hover { background: rgba(255,255,255,0.03); }
      .sb-rank { font-size: 12px; color: rgba(200,220,255,0.45); text-align: center; }
      .sb-rank.gold   { color: #ffd700; font-weight: 700; }
      .sb-rank.silver { color: #c0c0c0; font-weight: 600; }
      .sb-rank.bronze { color: #cd7f32; font-weight: 600; }
      .sb-name { display: flex; align-items: center; gap: 7px; font-size: 13px; color: #d0e8ff; overflow: hidden; }
      .sb-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
      .sb-name-text { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
      .sb-stat { font-size: 14px; font-weight: 600; text-align: center; font-family: 'Courier New', monospace; }
      .sb-k   { color: #88ddff; }
      .sb-d   { color: #ff8888; }
      .sb-a   { color: #88ffbb; }
      .sb-kd  { color: rgba(200,220,255,0.55); font-size: 12px; }
      .sb-col-header { text-align: center; }

      /* Final scoreboard (game over) */
      #hud-final-scoreboard { position: fixed; inset: 0; background: rgba(0,5,20,0.88); display: none; align-items: center; justify-content: center; z-index: 300; pointer-events: none; }
      #hud-final-scoreboard.visible { display: flex; }
      #hud-final-inner { background: rgba(5,15,40,0.97); border: 1px solid rgba(255,215,0,0.3); border-radius: 12px; padding: 28px 36px; min-width: 540px; max-width: 720px; width: 92%; }
      #hud-final-title { font-size: 24px; font-weight: 700; letter-spacing: 0.1em; color: #ffd700; text-align: center; margin-bottom: 6px; text-shadow: 0 0 20px rgba(255,215,0,0.4); }
      #hud-final-subtitle { font-size: 12px; color: rgba(200,180,100,0.6); letter-spacing: 0.14em; text-align: center; text-transform: uppercase; margin-bottom: 20px; }

      /* center: notification */
      #hud-notify { position: absolute; top: 42%; left: 50%; transform: translate(-50%,-50%); font-size: 28px; font-weight: 700; color: #fff; text-shadow: 0 0 20px rgba(100,180,255,0.8); letter-spacing: 0.05em; text-align: center; opacity: 0; transition: opacity 0.15s; }
      #hud-notify.visible { opacity: 1; }

      /* state banner */
      #hud-state-banner { position: absolute; top: 38%; left: 50%; transform: translate(-50%,-50%); font-size: 15px; font-weight: 600; color: rgba(255,255,255,0.7); letter-spacing: 0.15em; text-align: center; opacity: 0; transition: opacity 0.2s; }
      #hud-state-banner.visible { opacity: 1; }

      /* damage vignette */
      #hud-vignette { position: absolute; inset: 0; background: radial-gradient(ellipse at center, transparent 50%, #aaccff 130%); opacity: 0; transition: opacity 0.08s ease-in; }

      /* minimap */
      #hud-minimap { position: absolute; bottom: 28px; right: 24px; width: 120px; height: 120px; }
      #hud-minimap canvas { width: 100%; height: 100%; border-radius: 50%; }

      /* kill streak banner */
      #hud-streak {
        position: absolute; top: 34%; left: 50%;
        transform: translate(-50%, -50%) scale(0.6);
        font-size: 40px; font-weight: 900; letter-spacing: 0.08em;
        text-align: center; white-space: nowrap;
        opacity: 0;
        transition: opacity 0.12s ease, transform 0.28s cubic-bezier(0.34,1.56,0.64,1);
        text-shadow: 0 0 24px currentColor, 0 3px 10px rgba(0,0,0,0.9);
      }
      #hud-streak.pop { opacity: 1; transform: translate(-50%, -50%) scale(1); }
      #hud-streak.fade { opacity: 0; transform: translate(-50%,-50%) scale(0.85); transition: opacity 0.4s ease, transform 0.4s ease; }

      /* respawn countdown */
      #hud-respawn {
        position: absolute; inset: 0; display: none;
        flex-direction: column; align-items: center; justify-content: center;
        gap: 6px; background: rgba(0,0,10,0.42);
      }
      #hud-respawn.visible { display: flex; }
      #hud-respawn-label { font-size: 13px; color: rgba(255,255,255,0.5); letter-spacing: 0.22em; text-transform: uppercase; }
      #hud-respawn-count {
        font-size: 96px; font-weight: 900; color: #ff4444; line-height: 1;
        font-family: 'Courier New', monospace;
        text-shadow: 0 0 50px rgba(255,68,68,0.55);
        animation: respawnPulse 1s ease-in-out infinite;
      }
      @keyframes respawnPulse { 0%,100% { transform: scale(1); opacity:1; } 50% { transform: scale(1.07); opacity:0.75; } }

      /* Menu button — always visible, top-left below player count */
      #hud-menu-btn {
        position: absolute; top: 58px; left: 20px;
        width: 34px; height: 34px;
        background: rgba(0,0,30,0.65); border: 1px solid rgba(100,200,255,0.2);
        border-radius: 6px; cursor: pointer;
        display: flex; align-items: center; justify-content: center;
        font-size: 16px; color: rgba(255,255,255,0.75);
        pointer-events: auto;
        transition: background 0.15s, color 0.15s;
        outline: none;
      }
      #hud-menu-btn:hover { background: rgba(30,60,120,0.85); color: #fff; border-color: rgba(100,200,255,0.4); }

      /* Menu / pause overlay */
      #hud-menu-overlay {
        position: fixed; inset: 0; background: rgba(0,5,20,0.88);
        display: none; align-items: center; justify-content: center;
        z-index: 500; pointer-events: none;
      }
      #hud-menu-overlay.visible { display: flex; pointer-events: auto; }
      #hud-menu-inner {
        background: rgba(5,15,40,0.97); border: 1px solid rgba(100,180,255,0.25);
        border-radius: 12px; padding: 28px 36px;
        min-width: 460px; max-width: 620px; width: 90%;
        max-height: 82vh; overflow-y: auto;
        pointer-events: auto;
      }
      #hud-menu-title {
        font-size: 18px; font-weight: 700; letter-spacing: 0.12em;
        color: #aaddff; text-align: center; margin-bottom: 18px;
        text-transform: uppercase;
      }
      .menu-action-btn {
        display: block; width: 100%; padding: 10px 14px; margin-bottom: 10px;
        background: rgba(100,180,255,0.1); border: 1px solid rgba(100,180,255,0.2);
        border-radius: 6px; color: #fff; font-size: 14px; font-weight: 600;
        letter-spacing: 0.08em; cursor: pointer; text-align: center;
        pointer-events: auto; font-family: 'Segoe UI', system-ui, sans-serif;
        transition: background 0.15s;
      }
      .menu-action-btn:hover { background: rgba(100,180,255,0.25); }

      /* How to Play section */
      .htp-section { margin-top: 16px; }
      .htp-title {
        font-size: 10px; color: rgba(160,210,255,0.55); letter-spacing: 0.16em;
        text-transform: uppercase; margin-bottom: 8px;
        border-bottom: 1px solid rgba(100,180,255,0.12); padding-bottom: 6px;
      }
      .htp-row {
        display: flex; justify-content: space-between; align-items: center;
        padding: 5px 4px; font-size: 13px; border-radius: 3px;
      }
      .htp-row:nth-child(even) { background: rgba(255,255,255,0.03); }
      .htp-key {
        color: #88ccff; font-family: 'Courier New', monospace; font-weight: 700;
        white-space: nowrap; min-width: 130px;
      }
      .htp-desc { color: rgba(200,220,255,0.8); text-align: right; }

      /* Play Again button in final scoreboard */
      #hud-play-again-btn {
        display: block; width: 100%; margin-top: 22px; padding: 13px;
        background: rgba(80,180,80,0.18); border: 1px solid rgba(100,200,80,0.35);
        border-radius: 8px; color: #88ff88; font-size: 16px; font-weight: 700;
        letter-spacing: 0.1em; cursor: pointer; text-align: center;
        pointer-events: auto; font-family: 'Segoe UI', system-ui, sans-serif;
        transition: background 0.15s;
      }
      #hud-play-again-btn:hover { background: rgba(80,180,80,0.38); }
    `;
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
  }

  _buildDOM() {
    const root = document.createElement('div');
    root.id = 'hud-root';
    root.innerHTML = `
      <div id="hud-crosshair">
        <div class="ch-line ch-top"></div>
        <div class="ch-line ch-bottom"></div>
        <div class="ch-line ch-left"></div>
        <div class="ch-line ch-right"></div>
      </div>

      <div id="hud-charge">
        <svg viewBox="0 0 56 56" fill="none">
          <circle cx="28" cy="28" r="24" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
          <circle id="hud-charge-arc" cx="28" cy="28" r="24"
            stroke="#44ccff" stroke-width="3" stroke-linecap="round"
            stroke-dasharray="150.8" stroke-dashoffset="150.8"/>
        </svg>
        <div id="hud-charge-text"></div>
      </div>

      <div id="hud-hp">
        <div id="hud-hp-label">
          <span style="font-size:16px">🐧</span>
          <span id="hud-hp-value">100</span>
        </div>
        <div id="hud-hp-bar"><div id="hud-hp-fill"></div></div>
      </div>

      <div id="hud-stamina">
        <div id="hud-stamina-label">STAMINA</div>
        <div id="hud-stamina-bar"><div id="hud-stamina-fill"></div></div>
      </div>

      <div id="hud-ammo">
        <div id="hud-ammo-main">
          <span id="hud-ammo-mag">20</span>
          <span id="hud-ammo-reserve">/ 80</span>
        </div>
        <div id="hud-ammo-status"></div>
      </div>

      <div id="hud-killfeed"></div>
      <div id="hud-count">— alive 🐧</div>

      <div id="hud-timer">
        <div id="hud-timer-value">10:00</div>
        <div id="hud-timer-label">FFA</div>
      </div>

      <div id="hud-zone">❄ Blizzard closes in <span id="hud-zone-time">--</span>s</div>
      <div id="hud-notify"></div>
      <div id="hud-state-banner"></div>
      <div id="hud-vignette"></div>
      <div id="hud-streak"></div>
      <div id="hud-respawn">
        <div id="hud-respawn-label">Respawning in</div>
        <div id="hud-respawn-count">5</div>
      </div>
      <div id="hud-minimap"><canvas id="hud-minimap-canvas" width="120" height="120"></canvas></div>

      <div id="hud-scoreboard">
        <div id="hud-scoreboard-inner">
          <div id="hud-scoreboard-title">Scoreboard — FFA</div>
          <div id="hud-scoreboard-rows"></div>
        </div>
      </div>

      <div id="hud-final-scoreboard">
        <div id="hud-final-inner">
          <div id="hud-final-title">GAME OVER</div>
          <div id="hud-final-subtitle">Final Standings</div>
          <div id="hud-final-rows"></div>
          <button id="hud-play-again-btn">🔄 Play Again</button>
        </div>
      </div>

      <button id="hud-menu-btn" title="Menu / How to Play [ESC]">☰</button>

      <div id="hud-menu-overlay">
        <div id="hud-menu-inner">
          <div id="hud-menu-title">☰ Waddle Wars</div>
          <button class="menu-action-btn" id="hud-resume-btn">▶  Resume Game  [ESC]</button>

          <div class="htp-section">
            <div class="htp-title">Controls</div>
            <div class="htp-row"><span class="htp-key">W A S D</span><span class="htp-desc">Move</span></div>
            <div class="htp-row"><span class="htp-key">Mouse</span><span class="htp-desc">Aim / Look around</span></div>
            <div class="htp-row"><span class="htp-key">Left Click</span><span class="htp-desc">Throw snowball</span></div>
            <div class="htp-row"><span class="htp-key">Hold Left Click</span><span class="htp-desc">Charge a power throw</span></div>
            <div class="htp-row"><span class="htp-key">F</span><span class="htp-desc">Melee slap</span></div>
            <div class="htp-row"><span class="htp-key">C</span><span class="htp-desc">Slide</span></div>
            <div class="htp-row"><span class="htp-key">Shift</span><span class="htp-desc">Sprint / boost</span></div>
            <div class="htp-row"><span class="htp-key">Space</span><span class="htp-desc">Jump</span></div>
            <div class="htp-row"><span class="htp-key">R</span><span class="htp-desc">Reload</span></div>
            <div class="htp-row"><span class="htp-key">Tab</span><span class="htp-desc">Show scoreboard</span></div>
            <div class="htp-row"><span class="htp-key">ESC</span><span class="htp-desc">This menu</span></div>
          </div>

          <div class="htp-section">
            <div class="htp-title">Tips</div>
            <div class="htp-row"><span class="htp-desc" style="width:100%">❄ Pick up glowing Snow Caches for +20 ammo</span></div>
            <div class="htp-row"><span class="htp-desc" style="width:100%">🐧 Slide into enemies for a sneaky melee hit</span></div>
            <div class="htp-row"><span class="htp-desc" style="width:100%">⚡ Charge shots deal triple damage</span></div>
            <div class="htp-row"><span class="htp-desc" style="width:100%">🏆 Most kills when the timer runs out wins</span></div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(root);
  }

  _cacheEls() {
    [
      'hud-crosshair','hud-charge','hud-charge-arc','hud-charge-text',
      'hud-hp','hud-hp-value','hud-hp-fill',
      'hud-stamina','hud-stamina-label','hud-stamina-fill',
      'hud-ammo','hud-ammo-mag','hud-ammo-reserve','hud-ammo-status',
      'hud-killfeed','hud-count','hud-zone','hud-zone-time',
      'hud-timer','hud-timer-value','hud-timer-label',
      'hud-scoreboard','hud-scoreboard-rows','hud-scoreboard-title',
      'hud-final-scoreboard','hud-final-title','hud-final-rows',
      'hud-notify','hud-state-banner','hud-vignette',
      'hud-streak','hud-respawn','hud-respawn-count',
      'hud-menu-overlay', 'hud-menu-btn', 'hud-resume-btn', 'hud-play-again-btn',
    ].forEach(id => { this._el[id] = document.getElementById(id); });

    // Menu button wires
    this._el['hud-menu-btn'].addEventListener('click', () => this.showMenuOverlay());
    this._el['hud-resume-btn'].addEventListener('click', () => this.hideMenuOverlay());
    this._el['hud-menu-overlay'].addEventListener('click', (e) => {
      if (e.target === this._el['hud-menu-overlay']) this.hideMenuOverlay();
    });
    this._el['hud-play-again-btn'].addEventListener('click', () => location.reload());

    this._minimapCanvas  = document.getElementById('hud-minimap-canvas');
    this._minimapCtx     = this._minimapCanvas.getContext('2d');
    this._minimapSize    = 120;
    this._minimapRange   = 200;
    this._minimapBgCanvas = null;
    this._zoneRadius     = null;
    this._zoneActive     = false;
  }

  // ── Master update — call every frame ──────────────────────────────────────
  update(player, weapon, remotePlayers = []) {
    this._updateHP(player.hp);
    this._updateStamina(player.slideFuel, player.isFallen);
    this._updateAmmo(weapon.ammo, weapon.reserveAmmo, weapon.isReloading);
    this._updateCharge(weapon._isCharging, weapon._chargeTimer);
    this._updateStateBanner(player._stunTimer, player.isFallen);
    this._updateMinimap(player, remotePlayers, player._yaw ?? 0);
  }

  // ── Set map — call once after map.build() ────────────────────────────────
  setMap(map) {
    this._minimapRange    = map.mapHalf ?? 200;
    this._minimapBgCanvas = this._prerenderMapBg(map);
  }

  _prerenderMapBg(map) {
    const size = this._minimapSize;
    const half = size / 2;
    const range = this._minimapRange;

    const offscreen = document.createElement('canvas');
    offscreen.width = offscreen.height = size;
    const ctx = offscreen.getContext('2d');

    // Collect obstacles in a common format: { x, z, w, d, topY }
    const obs = [];

    if (map.minimapObstacles) {
      // GlacierCanyonMap format: { type, position:{x,y,z}, size:{x,y,z} }
      for (const ob of map.minimapObstacles) {
        if (ob.type !== 'box') continue;
        obs.push({ x: ob.position.x, z: ob.position.z, w: ob.size.x, d: ob.size.z,
                   topY: ob.position.y + ob.size.y / 2 });
      }
    } else if (map.obstacles) {
      // BaseMap config format: { type, pos:[x,y,z], size:[w,h,d] }
      for (const ob of map.obstacles) {
        if (ob.type !== 'box') continue;
        obs.push({ x: ob.pos[0], z: ob.pos[2], w: ob.size[0], d: ob.size[2],
                   topY: ob.pos[1] + ob.size[1] / 2 });
      }
    }

    // Sort lowest-first so taller surfaces paint on top
    obs.sort((a, b) => a.topY - b.topY);

    const toX = (x) => half + (x / range) * half;
    const toZ = (z) => half + (z / range) * half;
    const toPx = (u) => (u / (range * 2)) * size;

    for (const ob of obs) {
      const cx = toX(ob.x), cz = toZ(ob.z);
      const pw = toPx(ob.w), pd = toPx(ob.d);

      // Boundary walls (very wide) — thin border line
      if (ob.w > range || ob.d > range) {
        ctx.strokeStyle = 'rgba(120,160,200,0.5)';
        ctx.lineWidth   = 1;
        ctx.strokeRect(cx - pw / 2, cz - pd / 2, pw, pd);
        continue;
      }

      // Fill color by elevation
      let fill;
      if      (ob.topY < 4)  fill = 'rgba(60,100,150,0.70)';   // ground-level obstacles
      else if (ob.topY < 9)  fill = 'rgba(90,130,190,0.75)';   // spawn pads / low platforms
      else if (ob.topY < 13) fill = 'rgba(110,155,220,0.80)';  // mid platforms
      else                   fill = 'rgba(160,200,255,0.88)';  // bridge / high ground

      ctx.fillStyle = fill;
      ctx.fillRect(cx - pw / 2, cz - pd / 2, pw, pd);
    }

    return offscreen;
  }

  // ── Zone ring — call from game state callback ────────────────────────────
  setZone(radius, active) {
    this._zoneRadius = radius;
    this._zoneActive = active;
  }

  // ── Minimap ───────────────────────────────────────────────────────────────
  _updateMinimap(player, remotePlayers, yaw) {
    const ctx  = this._minimapCtx;
    const size = this._minimapSize;
    const half = size / 2;
    const range = this._minimapRange;

    ctx.clearRect(0, 0, size, size);

    // ── Clip all drawing to the circular region ──
    ctx.save();
    ctx.beginPath();
    ctx.arc(half, half, half, 0, Math.PI * 2);
    ctx.clip();

    // Dark base fill
    ctx.fillStyle = 'rgba(5,15,35,0.80)';
    ctx.fillRect(0, 0, size, size);

    // Pre-rendered map geometry
    if (this._minimapBgCanvas) {
      ctx.drawImage(this._minimapBgCanvas, 0, 0);
    }

    // Faint grid lines
    ctx.strokeStyle = 'rgba(255,255,255,0.07)';
    ctx.lineWidth   = 0.5;
    ctx.beginPath(); ctx.moveTo(half, 0); ctx.lineTo(half, size); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, half); ctx.lineTo(size, half); ctx.stroke();

    const toX = (x) => half + (x / range) * half;
    const toZ = (z) => half + (z / range) * half;

    // ── Zone / blizzard ring ──
    if (this._zoneActive && this._zoneRadius != null && this._zoneRadius < range * 2) {
      const ringR = (this._zoneRadius / range) * half;
      ctx.beginPath();
      ctx.arc(half, half, ringR, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(100,200,255,0.7)';
      ctx.lineWidth   = 1.5;
      ctx.stroke();
      // Danger tint outside ring
      ctx.save();
      ctx.beginPath();
      ctx.arc(half, half, half, 0, Math.PI * 2);
      ctx.arc(half, half, ringR, 0, Math.PI * 2, true);
      ctx.fillStyle = 'rgba(80,140,200,0.18)';
      ctx.fill();
      ctx.restore();
    }

    // ── Remote player dots ──
    for (const rp of remotePlayers) {
      if (!rp.position) continue;
      const mx = toX(rp.position.x);
      const mz = toZ(rp.position.z);
      if (Math.hypot(mx - half, mz - half) > half - 2) continue;
      ctx.beginPath();
      ctx.arc(mx, mz, 4.5, 0, Math.PI * 2);
      ctx.fillStyle = rp.color || '#ff5555';
      ctx.fill();
      ctx.strokeStyle = 'rgba(0,0,0,0.5)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // ── Local player — direction arrow ──
    const px = toX(player.body.position.x);
    const pz = toZ(player.body.position.z);

    // Facing vector on minimap (yaw=0 → facing -Z → up on minimap)
    const fx = Math.sin(yaw);
    const fz = -Math.cos(yaw);

    const tipLen  = 9;
    const baseHW  = 4.5;
    const tx = px + fx * tipLen;
    const tz = pz + fz * tipLen;
    // Perpendicular
    const bx = px - fz * baseHW;
    const bz = pz + fx * baseHW;
    const cx2 = px + fz * baseHW;
    const cz2 = pz - fx * baseHW;

    ctx.beginPath();
    ctx.moveTo(tx, tz);
    ctx.lineTo(bx, bz);
    ctx.lineTo(cx2, cz2);
    ctx.closePath();
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = 'rgba(100,200,255,0.8)';
    ctx.shadowBlur  = 4;
    ctx.fill();
    ctx.shadowBlur = 0;

    ctx.restore(); // end circular clip

    // ── Border ring ──
    ctx.save();
    ctx.beginPath();
    ctx.arc(half, half, half - 1, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255,255,255,0.25)';
    ctx.lineWidth   = 1.5;
    ctx.stroke();
    ctx.restore();
  }

  // ── HP ────────────────────────────────────────────────────────────────────
  _updateHP(hp) {
    const pct = Math.max(0, Math.min(100, hp));
    this._el['hud-hp-value'].textContent = Math.round(hp);
    this._el['hud-hp-fill'].style.width = pct + '%';
    this._el['hud-hp'].classList.toggle('danger', hp <= 30);
  }

  // ── Stamina (reuse slideFuel 0–3, map to 0–100%) ─────────────────────────
  _updateStamina(fuel, isFallen) {
    const MAX = 3;
    const pct = Math.max(0, Math.min(1, fuel / MAX)) * 100;
    this._el['hud-stamina-fill'].style.width = pct + '%';
    this._el['hud-stamina'].classList.toggle('low',    pct < 50 && pct > 10);
    this._el['hud-stamina'].classList.toggle('empty',  pct <= 10);
    this._el['hud-stamina'].classList.toggle('fallen', isFallen);
    this._el['hud-stamina-label'].textContent = isFallen ? 'WIPEOUT' : 'STAMINA';
  }

  // ── Ammo ──────────────────────────────────────────────────────────────────
  _updateAmmo(mag, reserve, reloading) {
    const status = this._el['hud-ammo-status'];
    this._el['hud-ammo-mag'].textContent = mag;
    this._el['hud-ammo-reserve'].textContent = '/ ' + reserve;
    this._el['hud-ammo'].classList.toggle('empty',    mag === 0 && !reloading);
    this._el['hud-ammo'].classList.toggle('reloading', reloading);
    if (reloading) {
      status.textContent = 'RELOADING...';
      status.style.color = '#ffaa33';
      status.classList.add('ammo-flash');
    } else if (mag === 0) {
      status.textContent = 'RELOAD  [R]';
      status.style.color = '#ff5533';
      status.classList.add('ammo-flash');
    } else {
      status.textContent = '';
      status.classList.remove('ammo-flash');
    }
  }

  // ── Charge ring ───────────────────────────────────────────────────────────
  _updateCharge(isCharging, chargeTimer) {
    this._el['hud-charge'].classList.toggle('visible', isCharging);
    if (!isCharging) return;
    const pct = Math.min(chargeTimer / 4.0, 1);
    this._el['hud-charge-arc'].setAttribute('stroke-dashoffset', (150.8 * (1 - pct)).toFixed(1));
    this._el['hud-charge-arc'].setAttribute('stroke',
      pct < 0.5 ? '#44ccff' : pct < 0.85 ? '#ffaa33' : '#ff4444');
    this._el['hud-charge-text'].textContent = pct >= 1 ? 'MAX' : '';
  }

  // ── State banner ──────────────────────────────────────────────────────────
  _updateStateBanner(stunTimer, isFallen) {
    const b = this._el['hud-state-banner'];
    if (stunTimer > 0)   { b.textContent = '★ STUNNED ★'; b.classList.add('visible'); }
    else if (isFallen)   { b.textContent = '💥 WIPEOUT';  b.classList.add('visible'); }
    else                 { b.classList.remove('visible'); }
  }

  // ── Public event methods ───────────────────────────────────────────────────
  shootFeedback() {
    const el = this._el['hud-crosshair'];
    el.classList.add('shooting');
    setTimeout(() => el.classList.remove('shooting'), 150);
  }

  takeDamage() {
    if (this._vignetteTimer) clearTimeout(this._vignetteTimer);
    const v = this._el['hud-vignette'];
    v.style.transition = 'opacity 0.08s ease-in';
    v.style.opacity = '0.55';
    this._vignetteTimer = setTimeout(() => {
      v.style.transition = 'opacity 0.5s ease-out';
      v.style.opacity = '0';
    }, 120);
  }

  addKill(killerName, victimName, method) {
    const icon = method === 'melee' ? '🐧' : '❄';
    const el = document.createElement('div');
    el.className = 'kill-entry';
    el.innerHTML = `<span class="killer">${killerName}</span> ${icon} <span class="victim">${victimName}</span>`;
    this._el['hud-killfeed'].appendChild(el);
    this._killFeedEntries.push(el);
    if (this._killFeedEntries.length > 5) this._killFeedEntries.shift().remove();
    setTimeout(() => {
      el.classList.add('fading');
      setTimeout(() => { el.remove(); }, 500);
    }, 5000);
  }

  notify(text, duration = 2000) {
    if (this._notifyTimer) clearTimeout(this._notifyTimer);
    const el = this._el['hud-notify'];
    el.textContent = text;
    el.classList.add('visible');
    this._notifyTimer = setTimeout(() => el.classList.remove('visible'), duration);
  }

  setZoneTimer(seconds) {
    const el = this._el['hud-zone'];
    if (seconds === null) { el.classList.remove('visible','urgent'); return; }
    el.classList.add('visible');
    el.classList.toggle('urgent', seconds < 5);
    this._el['hud-zone-time'].textContent = Math.ceil(seconds);
  }

  setPlayerCount(alive, total) {
    this._el['hud-count'].textContent = `${alive} / ${total} alive 🐧`;
  }

  // ── Game timer ────────────────────────────────────────────────────────────
  setGameTimer(seconds, totalSeconds) {
    const el = this._el['hud-timer'];
    if (seconds == null || seconds <= 0) {
      el.classList.remove('visible', 'urgent');
      return;
    }
    el.classList.add('visible');
    el.classList.toggle('urgent', seconds <= 30);
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    this._el['hud-timer-value'].textContent =
      String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0');

    const totalMins = totalSeconds ? Math.round(totalSeconds / 60) : null;
    this._el['hud-timer-label'].textContent = totalMins ? `FFA  ${totalMins} min` : 'FFA';
  }

  // ── Live scoreboard (Tab hold) ────────────────────────────────────────────
  showScoreboard(players, myId) {
    const el = this._el['hud-scoreboard'];
    el.classList.add('visible');
    this._el['hud-scoreboard-title'].textContent = 'Scoreboard — FFA  [TAB]';
    this._el['hud-scoreboard-rows'].innerHTML = this._buildScoreboardHTML(players, myId);
  }

  hideScoreboard() {
    this._el['hud-scoreboard'].classList.remove('visible');
  }

  // ── Final scoreboard (game over) ──────────────────────────────────────────
  showFinalScoreboard(standings, myId, winnerName) {
    const el = this._el['hud-final-scoreboard'];
    el.classList.add('visible');
    this._el['hud-final-title'].textContent = winnerName ? `🏆 ${winnerName} WINS!` : 'GAME OVER';
    this._el['hud-final-rows'].innerHTML = this._buildScoreboardHTML(standings, myId);
  }

  hideFinalScoreboard() {
    this._el['hud-final-scoreboard'].classList.remove('visible');
  }

  _buildScoreboardHTML(players, myId) {
    const sorted = [...players].sort((a, b) => b.kills - a.kills || a.deaths - b.deaths);
    const rankIcons = ['🥇', '🥈', '🥉'];
    const header = `
      <div class="sb-row header">
        <div></div>
        <div>Player</div>
        <div class="sb-col-header">K</div>
        <div class="sb-col-header">D</div>
        <div class="sb-col-header">A</div>
        <div class="sb-col-header">K/D</div>
      </div>`;

    const rows = sorted.map((p, i) => {
      const isMe = p.id === myId;
      const kd = p.deaths > 0 ? (p.kills / p.deaths).toFixed(2) : p.kills.toFixed(1);
      const rankClass = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';
      const rankLabel = rankIcons[i] ?? `${i + 1}`;
      return `
        <div class="sb-row${isMe ? ' me' : ''}">
          <div class="sb-rank ${rankClass}">${rankLabel}</div>
          <div class="sb-name">
            <span class="sb-dot" style="background:${p.color ?? '#888'}"></span>
            <span class="sb-name-text">${_escHtml(p.username ?? 'Penguin')}${isMe ? ' ★' : ''}</span>
          </div>
          <div class="sb-stat sb-k">${p.kills ?? 0}</div>
          <div class="sb-stat sb-d">${p.deaths ?? 0}</div>
          <div class="sb-stat sb-a">${p.assists ?? 0}</div>
          <div class="sb-stat sb-kd">${kd}</div>
        </div>`;
    }).join('');

    return header + rows;
  }

  // ── Kill streak banner ────────────────────────────────────────────────────
  notifyStreak(text, color) {
    if (this._streakTimer)     clearTimeout(this._streakTimer);
    if (this._streakFadeTimer) clearTimeout(this._streakFadeTimer);
    const el = this._el['hud-streak'];
    el.style.color = color;
    el.textContent = text;
    el.classList.remove('pop', 'fade');
    void el.offsetWidth; // force reflow → restart transition
    el.classList.add('pop');
    this._streakFadeTimer = setTimeout(() => {
      el.classList.remove('pop');
      el.classList.add('fade');
    }, 1900);
    this._streakTimer = setTimeout(() => {
      el.classList.remove('pop', 'fade');
    }, 2500);
  }

  // ── Respawn countdown ─────────────────────────────────────────────────────
  showRespawnCountdown(seconds) {
    clearInterval(this._respawnInterval);
    let remaining = Math.ceil(seconds);
    this._el['hud-respawn-count'].textContent = remaining;
    this._el['hud-respawn'].classList.add('visible');
    this._respawnInterval = setInterval(() => {
      remaining--;
      this._el['hud-respawn-count'].textContent = Math.max(0, remaining);
      if (remaining <= 0) this.hideRespawnCountdown();
    }, 1000);
  }

  hideRespawnCountdown() {
    clearInterval(this._respawnInterval);
    this._el['hud-respawn'].classList.remove('visible');
  }

  // ── Menu / How to Play overlay ────────────────────────────────────────────
  showMenuOverlay() { this._el['hud-menu-overlay'].classList.add('visible'); }
  hideMenuOverlay() { this._el['hud-menu-overlay'].classList.remove('visible'); }
  isMenuVisible()   { return this._el['hud-menu-overlay'].classList.contains('visible'); }

  show() { document.getElementById('hud-root').style.display = ''; }
  hide() { document.getElementById('hud-root').style.display = 'none'; }
}

function _escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}