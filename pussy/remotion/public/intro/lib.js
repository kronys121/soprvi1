// Shared helpers for the Sopranos motion variants
const W = 1920, H = 1080;
const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const lerp = (a, b, t) => a + (b - a) * t;
const prog = (t, a, b) => clamp((t - a) / (b - a));
const eio = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const eout = t => 1 - Math.pow(1 - t, 3);
const eout5 = t => 1 - Math.pow(1 - t, 5);
const ein = t => t * t * t;
const back = (t, s = 1.70158) => { const c3 = s + 1; return 1 + c3 * Math.pow(t - 1, 3) + s * Math.pow(t - 1, 2); };
function rng(seed) { let s = (seed >>> 0) || 1; return () => { s ^= s << 13; s ^= s >>> 17; s ^= s << 5; return (s >>> 0) / 4294967296; }; }
function mk(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }

// film grain plates
const GRAIN = [];
function makeGrain() {
  for (let k = 0; k < 10; k++) {
    const c = mk(960, 540), g = c.getContext('2d'), id = g.createImageData(960, 540), r = rng(k * 7919 + 13);
    for (let i = 0; i < id.data.length; i += 4) {
      const v = 128 + (r() + r() + r() - 1.5) * 110;
      id.data[i] = id.data[i + 1] = id.data[i + 2] = v; id.data[i + 3] = 255;
    }
    g.putImageData(id, 0, 0); GRAIN.push(c);
  }
}
function applyGrain(ctx, t, amt) {
  ctx.save(); ctx.globalCompositeOperation = 'overlay'; ctx.globalAlpha = amt;
  ctx.drawImage(GRAIN[Math.floor(t * 24) % GRAIN.length], 0, 0, W, H); ctx.restore();
}
function vignette(ctx, strength, color = '0,0,0') {
  const g = ctx.createRadialGradient(W / 2, H / 2, H * 0.35, W / 2, H / 2, H * 1.05);
  g.addColorStop(0, `rgba(${color},0)`); g.addColorStop(1, `rgba(${color},${strength})`);
  ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
}

// Placeholder "frame" with silhouette, label and blurred caches for depth of field
function makePlaceholder(w, h, num, label, opt = {}) {
  const c = mk(w, h), g = c.getContext('2d');
  const tone = opt.tone || ['#4a3f35', '#1c1814'];
  const bg = g.createLinearGradient(0, 0, w, h); bg.addColorStop(0, tone[0]); bg.addColorStop(1, tone[1]);
  g.fillStyle = bg; g.fillRect(0, 0, w, h);
  // soft key light
  const kl = g.createRadialGradient(w * .3, h * .25, 10, w * .3, h * .25, w * .8);
  kl.addColorStop(0, 'rgba(255,220,170,.22)'); kl.addColorStop(1, 'rgba(255,220,170,0)');
  g.fillStyle = kl; g.fillRect(0, 0, w, h);
  // diagonal hatch
  g.save(); g.strokeStyle = 'rgba(255,255,255,.035)'; g.lineWidth = 2;
  for (let x = -h; x < w; x += 26) { g.beginPath(); g.moveTo(x, h); g.lineTo(x + h, 0); g.stroke(); }
  g.restore();
  // silhouette (head + shoulders)
  const sx = w * (opt.sx || .5), sh = h;
  g.fillStyle = 'rgba(0,0,0,.42)';
  g.beginPath(); g.ellipse(sx, sh * .42, sh * .15, sh * .19, 0, 0, Math.PI * 2); g.fill();
  g.beginPath(); g.moveTo(sx - sh * .42, sh); g.quadraticCurveTo(sx - sh * .38, sh * .64, sx, sh * .62);
  g.quadraticCurveTo(sx + sh * .38, sh * .64, sx + sh * .42, sh); g.closePath(); g.fill();
  // rim light on silhouette
  g.strokeStyle = 'rgba(255,214,160,.18)'; g.lineWidth = 3;
  g.beginPath(); g.ellipse(sx, sh * .42, sh * .15, sh * .19, 0, -2.6, -0.9); g.stroke();
  // frame marks
  g.strokeStyle = 'rgba(240,230,210,.35)'; g.lineWidth = 2; const m = 22, L = 34;
  [[m, m, 1, 1], [w - m, m, -1, 1], [m, h - m, 1, -1], [w - m, h - m, -1, -1]].forEach(([x, y, dx, dy]) => {
    g.beginPath(); g.moveTo(x, y + dy * L); g.lineTo(x, y); g.lineTo(x + dx * L, y); g.stroke();
  });
  const fs = Math.round(Math.max(16, w / 34));
  g.fillStyle = 'rgba(240,230,210,.85)'; g.font = `600 ${fs}px "DejaVu Sans Mono"`; g.textBaseline = 'top';
  g.fillText(`КАДР ${String(num).padStart(2, '0')}`, m + 14, m + 12);
  g.fillStyle = 'rgba(240,230,210,.55)'; g.font = `${Math.round(fs * .8)}px "DejaVu Sans Mono"`; g.textBaseline = 'bottom';
  g.fillText(label, m + 14, h - m - 12);
  g.textAlign = 'right'; g.fillText('ЗАГЛУШКА', w - m - 14, h - m - 12);
  const blur = px => { const b = mk(w, h), bg2 = b.getContext('2d'); bg2.filter = `blur(${px}px)`; bg2.drawImage(c, 0, 0); return b; };
  return { c, b1: blur(5), b2: blur(14), w, h };
}
// draw placeholder with blur amount 0..1 (crossfade between caches)
function drawPH(ctx, ph, x, y, s, rot, blurAmt = 0, alpha = 1) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s); ctx.globalAlpha *= alpha;
  const dx = -ph.w / 2, dy = -ph.h / 2;
  if (blurAmt <= 0.001) ctx.drawImage(ph.c, dx, dy);
  else if (blurAmt < .5) { ctx.drawImage(ph.c, dx, dy); ctx.globalAlpha *= blurAmt * 2; ctx.drawImage(ph.b1, dx, dy); }
  else { ctx.drawImage(ph.b1, dx, dy); ctx.globalAlpha *= (blurAmt - .5) * 2; ctx.drawImage(ph.b2, dx, dy); }
  ctx.restore();
}

// Motion-blur accumulation: render `draw(ctx,t)` at several sub-times
function setupRenderer(draw, post, opts = {}) {
  const cv = document.getElementById('cv'); cv.width = W; cv.height = H;
  const out = cv.getContext('2d');
  const acc = mk(W, H), actx = acc.getContext('2d');
  const S0 = opts.samples || 4, shutter = (opts.shutter || .5) / 60;
  window.renderAt = t => {
    out.clearRect(0, 0, W, H); const S = opts.samplesAt ? opts.samplesAt(t) : S0;
    for (let k = 0; k < S; k++) {
      const tt = Math.max(0, t - shutter * k / S);
      actx.setTransform(1, 0, 0, 1, 0, 0); actx.globalAlpha = 1; actx.globalCompositeOperation = 'source-over';
      draw(actx, tt);
      out.globalAlpha = 1 / (k + 1); out.drawImage(acc, 0, 0);
    }
    out.globalAlpha = 1; post(out, t);
  };
}
function typed(str, t, start, per) { const n = Math.floor(clamp((t - start) / per, 0, str.length)); return str.slice(0, n); }
