export class AudioManager {
  constructor() {
    this._ctx = new (window.AudioContext || window.webkitAudioContext)();

    // Volume hierarchy: layers → _musicMasterGain / _sfxGain → _masterGain → destination
    this._masterGain = this._ctx.createGain();
    this._masterGain.gain.value = 1.0;
    this._masterGain.connect(this._ctx.destination);

    this._musicMasterGain = this._ctx.createGain();
    this._musicMasterGain.gain.value = 0.55;
    this._musicMasterGain.connect(this._masterGain);

    this._sfxGain = this._ctx.createGain();
    this._sfxGain.gain.value = 2.0;
    this._sfxGain.connect(this._masterGain);

    // Slide loop state
    this._slideNode = null;
    this._slideGain = null;

    // Music state
    this._musicRunning  = false;
    this._musicNodes    = []; // long-lived nodes stopped on stopMusic
    this._musicTimers   = []; // setTimeout IDs for hi-hat etc.
    this._melodyTimeout = null;
    this._chordTimeout  = null;
    this._chordState    = 1;
    this._melodyChain   = null;
    this._hiHatStrong   = true;
  }

  resume() {
    if (this._ctx.state === 'suspended') this._ctx.resume();
  }

  // ── Music ──────────────────────────────────────────────────────────────────

  startMusic() {
    if (this._musicRunning) return;
    this._musicRunning = true;

    // Fade in over 2s
    const now = this._ctx.currentTime;
    this._musicMasterGain.gain.cancelScheduledValues(now);
    this._musicMasterGain.gain.setValueAtTime(0, now);
    this._musicMasterGain.gain.linearRampToValueAtTime(0.55, now + 2);

    this._startSubBass();
    this._startChordPads();
    this._startVinylCrackle();
    this._startHiHat();
    this._startMelody();
  }

  stopMusic() {
    this._musicRunning = false;

    if (this._melodyTimeout) clearTimeout(this._melodyTimeout);
    if (this._chordTimeout)  clearTimeout(this._chordTimeout);
    this._musicTimers.forEach(t => clearTimeout(t));
    this._musicTimers   = [];
    this._melodyChain   = null;
    this._chordState    = 1;
    this._hiHatStrong   = true;

    const ctx = this._ctx;
    const now = ctx.currentTime;
    const nodesToStop = this._musicNodes;
    this._musicNodes = [];

    this._musicMasterGain.gain.cancelScheduledValues(now);
    this._musicMasterGain.gain.setValueAtTime(this._musicMasterGain.gain.value, now);
    this._musicMasterGain.gain.linearRampToValueAtTime(0, now + 1.5);

    setTimeout(() => {
      for (const node of nodesToStop) {
        try { node.stop?.(); } catch (_) {}
        try { node.disconnect?.(); } catch (_) {}
      }
    }, 1600);
  }

  // Layer 1 — Sub-bass with 0.6Hz LFO heartbeat pulse
  _startSubBass() {
    const ctx = this._ctx;

    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = 55;

    // LFO amplitude ±0.06 added to DC 0.06 → total gain 0 to 0.12
    const lfo = ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.value = 0.6;

    const lfoDepth = ctx.createGain();
    lfoDepth.gain.value = 0.06;

    const bassGain = ctx.createGain();
    bassGain.gain.value = 0.06; // DC offset

    lfo.connect(lfoDepth);
    lfoDepth.connect(bassGain.gain); // audio-rate AudioParam modulation
    osc.connect(bassGain);
    bassGain.connect(this._musicMasterGain);

    osc.start();
    lfo.start();
    this._musicNodes.push(osc, lfo, lfoDepth, bassGain);
  }

  // Layer 2 — Chord pads: C major ↔ A minor crossfade every 8s
  _startChordPads() {
    const ctx   = this._ctx;
    const C_MAJ = [130, 164, 196]; // C3, E3, G3
    const A_MIN = [110, 130, 164]; // A2, C3, E3

    const chord1Gain = ctx.createGain();
    chord1Gain.gain.value = 0.04;
    chord1Gain.connect(this._musicMasterGain);

    const chord2Gain = ctx.createGain();
    chord2Gain.gain.value = 0;
    chord2Gain.connect(this._musicMasterGain);

    for (const freq of C_MAJ) {
      const osc = ctx.createOscillator();
      osc.type = 'triangle';
      osc.frequency.value = freq;
      const f = ctx.createBiquadFilter();
      f.type = 'lowpass';
      f.frequency.value = 400;
      osc.connect(f);
      f.connect(chord1Gain);
      osc.start();
      this._musicNodes.push(osc, f);
    }

    for (const freq of A_MIN) {
      const osc = ctx.createOscillator();
      osc.type = 'triangle';
      osc.frequency.value = freq;
      const f = ctx.createBiquadFilter();
      f.type = 'lowpass';
      f.frequency.value = 400;
      osc.connect(f);
      f.connect(chord2Gain);
      osc.start();
      this._musicNodes.push(osc, f);
    }

    this._musicNodes.push(chord1Gain, chord2Gain);
    this._scheduleChordCrossfade(chord1Gain, chord2Gain);
  }

  _scheduleChordCrossfade(g1, g2) {
    if (!this._musicRunning) return;
    this._chordTimeout = setTimeout(() => {
      if (!this._musicRunning) return;
      const now  = this._ctx.currentTime;
      const FADE = 2;
      if (this._chordState === 1) {
        g1.gain.cancelScheduledValues(now); g1.gain.setValueAtTime(g1.gain.value, now); g1.gain.linearRampToValueAtTime(0, now + FADE);
        g2.gain.cancelScheduledValues(now); g2.gain.setValueAtTime(g2.gain.value, now); g2.gain.linearRampToValueAtTime(0.04, now + FADE);
        this._chordState = 2;
      } else {
        g2.gain.cancelScheduledValues(now); g2.gain.setValueAtTime(g2.gain.value, now); g2.gain.linearRampToValueAtTime(0, now + FADE);
        g1.gain.cancelScheduledValues(now); g1.gain.setValueAtTime(g1.gain.value, now); g1.gain.linearRampToValueAtTime(0.04, now + FADE);
        this._chordState = 1;
      }
      this._scheduleChordCrossfade(g1, g2);
    }, 8000);
  }

  // Layer 3 — Pentatonic music-box melody
  _buildShortReverb() {
    const ctx = this._ctx;
    const len = Math.ceil(ctx.sampleRate * 0.3);
    const buf = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = buf.getChannelData(ch);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3);
    }
    const conv = ctx.createConvolver();
    conv.buffer = buf;
    return conv;
  }

  _startMelody() {
    if (!this._musicRunning) return;
    const ctx = this._ctx;

    // Lazy-init shared signal chain: bandpass → (reverb | dry) → musicMasterGain
    if (!this._melodyChain) {
      const bandpass = ctx.createBiquadFilter();
      bandpass.type = 'bandpass';
      bandpass.frequency.value = 1200;
      bandpass.Q.value = 0.8;

      const reverb    = this._buildShortReverb();
      const reverbOut = ctx.createGain();
      reverbOut.gain.value = 0.55;
      const dryOut = ctx.createGain();
      dryOut.gain.value = 0.45;

      bandpass.connect(reverb);
      reverb.connect(reverbOut);
      reverbOut.connect(this._musicMasterGain);
      bandpass.connect(dryOut);
      dryOut.connect(this._musicMasterGain);

      this._melodyChain = { bandpass };
      this._musicNodes.push(bandpass, reverb, reverbOut, dryOut);
    }

    const PENTA = [523, 587, 659, 784, 880];
    const roll  = Math.random();

    // 20% rest — silence is groove
    if (roll < 0.2) {
      this._melodyTimeout = setTimeout(() => this._startMelody(), 350 + Math.random() * 550);
      return;
    }

    const freq = PENTA[Math.floor(Math.random() * PENTA.length)];
    this._playMelodyNote(freq);

    // 10% double-note (32nd-note repeat 80ms later)
    if (Math.random() < 0.1) {
      const t = setTimeout(() => { if (this._musicRunning) this._playMelodyNote(freq); }, 80);
      this._musicTimers.push(t);
    }

    this._melodyTimeout = setTimeout(() => this._startMelody(), 350 + Math.random() * 550);
  }

  _playMelodyNote(freq) {
    if (!this._melodyChain) return;
    const ctx = this._ctx;
    const now = ctx.currentTime;
    const { bandpass } = this._melodyChain;

    const osc = ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.value = freq;

    const env = ctx.createGain();
    env.gain.setValueAtTime(0.0001, now);
    env.gain.linearRampToValueAtTime(0.12, now + 0.008);
    env.gain.setValueAtTime(0.12,   now + 0.008 + 0.15);
    env.gain.linearRampToValueAtTime(0.0001, now + 0.008 + 0.15 + 0.25);

    osc.connect(env);
    env.connect(bandpass);

    const dur = 0.008 + 0.15 + 0.25 + 0.02;
    osc.start(now);
    osc.stop(now + dur);
    // Disconnect env once osc finishes to avoid accumulating silent GainNodes
    osc.onended = () => { try { env.disconnect(); } catch (_) {} };
  }

  // Layer 4 — Hi-hat texture (0.5s beat, alternating strong / weak)
  _startHiHat() {
    this._hiHatStrong = true;
    this._tickHiHat();
  }

  _tickHiHat() {
    if (!this._musicRunning) return;
    const ctx   = this._ctx;
    const frames = Math.ceil(ctx.sampleRate * 0.05);
    const buf    = ctx.createBuffer(1, frames, ctx.sampleRate);
    const d      = buf.getChannelData(0);
    for (let i = 0; i < frames; i++) d[i] = Math.random() * 2 - 1;

    const src = ctx.createBufferSource();
    src.buffer = buf;

    const filter = ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 8000;

    const gain = ctx.createGain();
    const now  = ctx.currentTime;
    const gv   = this._hiHatStrong ? 0.04 : 0.025;
    gain.gain.setValueAtTime(gv, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);

    src.connect(filter);
    filter.connect(gain);
    gain.connect(this._musicMasterGain);
    src.start(now);

    this._hiHatStrong = !this._hiHatStrong;

    const t = setTimeout(() => this._tickHiHat(), 500);
    this._musicTimers.push(t);
  }

  // Layer 5 — Vinyl crackle (looping bandpass noise, constant)
  _startVinylCrackle() {
    const ctx    = this._ctx;
    const len    = ctx.sampleRate * 2;
    const buf    = ctx.createBuffer(1, len, ctx.sampleRate);
    const d      = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;

    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.loop   = true;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 2000;
    filter.Q.value = 0.3;

    const gain = ctx.createGain();
    gain.gain.value = 0.015;

    src.connect(filter);
    filter.connect(gain);
    gain.connect(this._musicMasterGain);
    src.start();

    this._musicNodes.push(src, gain);
  }

  // ── SFX helpers ───────────────────────────────────────────────────────────

  _makeNoise(durationSec, filterType, filterFreq, filterQ, gainStart) {
    const ctx    = this._ctx;
    const frames = Math.ceil(ctx.sampleRate * durationSec);
    const buf    = ctx.createBuffer(1, frames, ctx.sampleRate);
    const d      = buf.getChannelData(0);
    for (let i = 0; i < frames; i++) d[i] = Math.random() * 2 - 1;

    const src = ctx.createBufferSource();
    src.buffer = buf;

    const filter = ctx.createBiquadFilter();
    filter.type = filterType;
    filter.frequency.value = filterFreq;
    filter.Q.value = filterQ;

    const gain = ctx.createGain();
    const now  = ctx.currentTime;
    gain.gain.setValueAtTime(gainStart, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + durationSec);

    src.connect(filter);
    filter.connect(gain);
    gain.connect(this._sfxGain);
    src.start(now);
    src.stop(now + durationSec + 0.01);
  }

  _makeTone(freq, durationSec, gainVal, startOffsetSec = 0) {
    const ctx = this._ctx;
    const now = ctx.currentTime + startOffsetSec;

    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = freq;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(gainVal, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + durationSec);

    osc.connect(gain);
    gain.connect(this._sfxGain);
    osc.start(now);
    osc.stop(now + durationSec + 0.01);
  }

  // ── SFX ───────────────────────────────────────────────────────────────────

  shoot() {
    this._makeNoise(0.08, 'lowpass', 600, 1.0, 0.25);
  }

  hitTerrain() {
    this._makeNoise(0.06, 'lowpass', 350, 1.0, 0.2);
  }

  hitPlayer(distanceRatio = 1) {
    const r = Math.max(0, Math.min(1, distanceRatio));
    this._makeNoise(0.07, 'lowpass', 500, 1.0, 0.05 + 0.3 * r);
  }

  meleeSwoosh() {
    this._makeNoise(0.12, 'bandpass', 600, 1.5, 0.35);
  }

  meleeHit() {
    // Stage 1: low thud
    this._makeNoise(0.06, 'lowpass', 200, 1.0, 0.5);
    // Stage 2: body impact sine 30ms later
    setTimeout(() => {
      if (this._ctx.state !== 'running') return;
      const ctx = this._ctx;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = 180;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);
      osc.connect(gain);
      gain.connect(this._sfxGain);
      osc.start(now);
      osc.stop(now + 0.09);
    }, 30);
  }

  jump(isSecondJump = false) {
    if (!isSecondJump) {
      this._makeTone(320, 0.07, 0.18);
    } else {
      this._makeTone(320, 0.07, 0.18, 0);
      this._makeTone(420, 0.07, 0.18, 0.025); // 25ms later
    }
  }

  footstep() {
    // New node every call — AudioBufferSourceNode cannot be restarted
    this._makeNoise(0.045, 'lowpass', 110, 1.0, 0.3);
  }

  slideStart() {
    if (this._slideNode) return; // already running
    const ctx        = this._ctx;
    const sampleRate = ctx.sampleRate;

    // 1s looping white noise buffer (loop avoids clicks from short buffer)
    const buf = ctx.createBuffer(1, sampleRate, sampleRate);
    const d   = buf.getChannelData(0);
    for (let i = 0; i < sampleRate; i++) d[i] = Math.random() * 2 - 1;

    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.loop   = true;

    // Band 80–300Hz = smooth ice scrape
    const hp = ctx.createBiquadFilter();
    hp.type = 'highpass';
    hp.frequency.value = 80;

    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 300;

    const gain = ctx.createGain();
    const now  = ctx.currentTime;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.08, now + 0.1); // fade in over 0.1s

    src.connect(hp);
    hp.connect(lp);
    lp.connect(gain);
    gain.connect(this._sfxGain);
    src.start(now);

    this._slideNode = src;
    this._slideGain = gain;
  }

  slideStop() {
    if (!this._slideNode) return;
    const ctx  = this._ctx;
    const now  = ctx.currentTime;
    const node = this._slideNode;
    const gain = this._slideGain;

    // Clear refs immediately so a rapid slideStart() can create a new node
    this._slideNode = null;
    this._slideGain = null;

    // Smooth fade out, then stop source
    gain.gain.cancelScheduledValues(now);
    gain.gain.setTargetAtTime(0.0001, now, 0.05); // ~0.15s decay
    node.stop(now + 0.3);
  }

  pickup() {
    const ctx = this._ctx;
    const now = ctx.currentTime;
    for (const baseFreq of [880, 1320]) {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(baseFreq, now);
      osc.frequency.linearRampToValueAtTime(baseFreq + 5, now + 0.18); // slight pitch rise
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
      osc.connect(gain);
      gain.connect(this._sfxGain);
      osc.start(now);
      osc.stop(now + 0.19);
    }
  }

  kill() {
    // "Ding-ding" — C5 then E5 60ms later, both scheduled precisely
    this._makeTone(523, 0.08, 0.25, 0);
    this._makeTone(659, 0.12, 0.30, 0.06);
  }

  died() {
    const ctx = this._ctx;
    const now = ctx.currentTime;

    // Pitch glide 440→180Hz over 600ms
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.linearRampToValueAtTime(180, now + 0.6);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.6);
    osc.connect(gain);
    gain.connect(this._sfxGain);
    osc.start(now);
    osc.stop(now + 0.61);

    // Soft thud 200ms after glide ends — scheduled at now+0.8 via AudioContext time
    const frames = Math.ceil(ctx.sampleRate * 0.08);
    const buf = ctx.createBuffer(1, frames, ctx.sampleRate);
    const d   = buf.getChannelData(0);
    for (let i = 0; i < frames; i++) d[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const f = ctx.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.value = 200;
    f.Q.value = 1.0;
    const ng = ctx.createGain();
    ng.gain.setValueAtTime(0.15, now + 0.8);
    ng.gain.exponentialRampToValueAtTime(0.0001, now + 0.88);
    src.connect(f);
    f.connect(ng);
    ng.connect(this._sfxGain);
    src.start(now + 0.8);
    src.stop(now + 0.89);
  }

  win() {
    const ctx = this._ctx;
    const now = ctx.currentTime;

    // C5→E5→G5→E5→C6 fanfare — all via AudioContext time, no setTimeout
    // Notes spaced: 120ms duration + 80ms gap = 200ms start-to-start
    // C6 overlaps last E5 (starts 80ms into it)
    const melody = [
      { freq: 523,  t: 0    }, // C5
      { freq: 659,  t: 0.20 }, // E5
      { freq: 784,  t: 0.40 }, // G5
      { freq: 659,  t: 0.60 }, // E5
      { freq: 1047, t: 0.68 }, // C6 — starts while E5 fades (overlap)
    ];

    for (const { freq, t } of melody) {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = freq;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.3, now + t);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + t + 0.12);
      osc.connect(gain);
      gain.connect(this._sfxGain);
      osc.start(now + t);
      osc.stop(now + t + 0.13);
    }

    // Sustained chord C5+E5+G5 after fanfare ends (C6 ends at now+0.80)
    const chordT = now + 0.80;
    for (const freq of [523, 659, 784]) {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = freq;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.2, chordT);
      gain.gain.exponentialRampToValueAtTime(0.0001, chordT + 0.4);
      osc.connect(gain);
      gain.connect(this._sfxGain);
      osc.start(chordT);
      osc.stop(chordT + 0.41);
    }
  }

  streak(level = 2) {
    // Ascending chime fanfare — more notes the higher the streak
    const intervals = [0, 4, 7, 12, 15]; // C E G C' D'
    const count = Math.min(level, intervals.length);
    for (let i = 0; i < count; i++) {
      const freq = 523 * Math.pow(2, intervals[i] / 12);
      this._makeTone(freq, 0.16, 0.22 + 0.04 * i, i * 0.09);
    }
  }

  takeDamage() {
    const ctx = this._ctx;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(250, now);
    osc.frequency.linearRampToValueAtTime(100, now + 0.18);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.22, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
    osc.connect(gain);
    gain.connect(this._sfxGain);
    osc.start(now);
    osc.stop(now + 0.19);
  }

  // ── Volume controls ────────────────────────────────────────────────────────

  setMasterVolume(v) {
    this._masterGain.gain.setTargetAtTime(Math.max(0, Math.min(1, v)), this._ctx.currentTime, 0.05);
  }

  setMusicVolume(v) {
    this._musicMasterGain.gain.setTargetAtTime(Math.max(0, Math.min(1, v)), this._ctx.currentTime, 0.05);
  }

  setSFXVolume(v) {
    this._sfxGain.gain.setTargetAtTime(Math.max(0, Math.min(1, v)), this._ctx.currentTime, 0.05);
  }
}

export const audio = new AudioManager();
