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

      /* top-center: zone timer */
      #hud-zone { position: absolute; top: 20px; left: 50%; transform: translateX(-50%); background: rgba(0,0,30,0.5); padding: 6px 16px; border-radius: 4px; font-size: 13px; color: #aaddff; text-align: center; display: none; }
      #hud-zone.visible { display: block; }
      #hud-zone.urgent { animation: zonePulse 0.5s ease-in-out infinite alternate; }
      @keyframes zonePulse { from { color: #aaddff; } to { color: #fff; } }

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
      <div id="hud-zone">❄ Blizzard closes in <span id="hud-zone-time">--</span>s</div>
      <div id="hud-notify"></div>
      <div id="hud-state-banner"></div>
      <div id="hud-vignette"></div>
      <div id="hud-minimap"><canvas id="hud-minimap-canvas" width="120" height="120"></canvas></div>
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
      'hud-notify','hud-state-banner','hud-vignette',
    ].forEach(id => { this._el[id] = document.getElementById(id); });

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

  show() { document.getElementById('hud-root').style.display = ''; }
  hide() { document.getElementById('hud-root').style.display = 'none'; }
}