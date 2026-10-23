// Scenes for "Intro + Patient" main section (T 14.4 -> 125.0). All timings are anchored to voice words via Wt().
const T_START = 14.4, T_END = 125.0;
const photo = o => item({ draw: drawPhoto, w: 560, ...o, h: o.h || photoH(o.w || 560) });
const card = o => item({ draw: drawCard, ...o });
const vid = (key, t0, off = 0) => ({ vid: key, t0, off });
const FG = [];   // foreground parallax props: {x,y,p,spr,s,rot,a,t0,t1}
const fgProp = o => FG.push({ p: 1.8, s: 1, rot: 0, a: .9, t0: -1e9, t1: 1e9, ...o });
const TAPES = [];
const SPINE = [];  // red thread pins along the investigation path
const spinePin = (x, y, t) => { SPINE.push({ x, y, t }); pin(x, y, t, { silent: true, r: 17 }); };
// fly the camera from current spot to the next scene; the red thread follows
function travel(t0, t1) { sfx('whoosh', t0, { dur: t1 - t0 + .25, soft: true }); fast(t0, t1, 6); }

function buildScenes() {
  // ================= S1 · accusations (A = 0,0) =================
  lamp(0, -150, 1700, 1);
  const a1 = photo({ x: -560, y: -70, rot: -.07, tIn: 14.62, dur: .3, enter: 'drop', dx: -60, dy: -120, src: vid('strangle', 14.3, .4) });
  a1.stamps = [stamp('УБИЙСТВО', Wt('людей'), { x: 0, y: 60, size: 64, rot: -.1 })];
  const a2 = photo({ x: 0, y: 70, rot: .05, tIn: Wt('изменяет') + .18, dur: .3, enter: 'drop', dx: 40, dy: -140, drot: -.3, src: vid('gloria', Wt('изменяет'), 2.2) });
  a2.stamps = [stamp('ИЗМЕНА', Wt('жене'), { x: 0, y: 50, size: 70, rot: .06 })];
  const a3 = photo({ x: 560, y: -40, rot: -.04, tIn: Wt('врет') + .16, dur: .3, enter: 'drop', dx: 80, dy: -120, src: vid('lie', Wt('врет'), .2) });
  a3.stamps = [stamp('ЛОЖЬ', Wt('себя'), { x: 0, y: 40, size: 92, rot: -.07 })];
  camKey(14.40, -560, -60, 1.48, -.03); camKey(15.55, -500, -50, 1.42, -.025);
  camKey(15.95, 0, 70, 1.46, .02); camKey(16.95, 50, 60, 1.40, .015);
  camKey(17.32, 560, -40, 1.48, -.02); camKey(18.40, 520, -30, 1.38, -.015);
  camKey(19.25, 0, -10, .80, -.01);
  spinePin(560, -235, 17.4); travel(19.35, 20.05);

  // ================= S2 · six seasons (A = 2400,-300) =================
  const A2 = [2400, -300]; lamp(A2[0] - 100, A2[1] - 200, 1800, 1);
  // TV-guide slips raining down on "миллионы зрителей"
  const r2 = rng(21);
  for (let i = 0; i < 22; i++) {
    const t = Wt('миллионы') + i * .055;
    card({ x: A2[0] + (r2() - .5) * 1700, y: A2[1] - 230 + r2() * 720, rot: (r2() - .5) * 1.2, w: 230, h: 120, tIn: t, dur: .28, enter: 'drop', dx: (r2() - .5) * 200, dy: -200, snd: i % 3 === 0,
      color: '#e2dccd', order: -50 + i, text: (g) => { g.fillStyle = INK; g.font = `700 26px ${MONO}`; g.textAlign = 'center'; g.fillText('HBO', 0, -12); g.font = `400 22px ${MONO}`; g.fillText('ВС · 21:00', 0, 26); } });
  }
  const seasonsStill = ['s1', 's2', 's3', 's4', 's5', 's6'], folders = [];
  for (let i = 0; i < 6; i++) {
    const t = Wt('шесть') + i * .2, u = i - 2.5;
    const f = item({ draw: drawFolder, x: A2[0] + u * 290, y: A2[1] + 40 + Math.abs(u) * 34, rot: u * .055, w: 480, h: 360, tIn: t, dur: .3, enter: 'slide', dx: u * 60, dy: 700, drot: u * .1, tab: `СЕЗОН ${i + 1}`,
      text: (g, tt, it) => { const im = got(stillUrl(seasonsStill[i])); g.save(); g.rotate(-.04 + i * .015); g.fillStyle = '#eee9de'; g.fillRect(-170, -150, 340, 236); if (im) g.drawImage(im, -158, -138, 316, 180); g.fillStyle = INK; g.font = `700 22px ${MONO}`; g.textAlign = 'center'; g.fillText(String([1999, 2000, 2001, 2002, 2004, 2006][i]), 0, 72); g.restore(); drawClip(g, -60, -160); },
      src: { still: seasonsStill[i] } });
    folders.push(f);
  }
  // kinetic count "6 СЕЗОНОВ" floating above the desk
  const sez = typed('СЕЗОНОВ', Wt('сезонов'), .045, { silent: true });
  item({ x: A2[0] - 40, y: A2[1] - 400, w: 900, h: 260, L0: .35, shadow: 0, lit: false, tIn: Wt('шесть') - .05, dur: .25, enter: 'fade', order: 500,
    draw: (g, t) => {
      const n = clamp(Math.floor((t - Wt('шесть')) / .2) + 1, 1, 6), pop = Math.exp(-Math.max(0, (t - Wt('шесть')) % .2) * 20);
      g.save(); g.shadowColor = 'rgba(0,0,0,.6)'; g.shadowBlur = 30; g.shadowOffsetY = 18;
      g.fillStyle = '#f2ede4'; g.font = `800 ${230 + pop * 20}px ${SANS}`; g.textAlign = 'right'; g.textBaseline = 'middle'; g.fillText(String(n), -60, 0);
      g.font = `800 96px ${SANS}`; g.textAlign = 'left'; g.letterSpacing = '6px'; const k = Math.floor(clamp((t - sez.t0) / sez.per, 0, 7)); g.fillText(sez.str.slice(0, k), -20, 8); g.letterSpacing = '0px'; g.restore();
    } });
  const ser = typed('86 СЕРИЙ', Wt('каждую'), .05);
  card({ x: A2[0] + 40, y: A2[1] + 420, w: 520, h: 120, rot: .02, tIn: Wt('каждую') - .05, dur: .3, enter: 'slide', dx: 0, dy: 300, order: 120,
    text: (g, t) => drawTyped(g, ser, t, 0, 18, `700 56px ${MONO}`, INK, 'center') });
  camKey(20.05, A2[0], A2[1] + 60, .82, .01); camKey(21.40, A2[0] - 60, A2[1] - 40, .86, .005);
  camKey(23.40, A2[0] + 120, A2[1] - 70, .9, -.005); camKey(25.30, A2[0] + 240, A2[1] + 20, .96, -.01);
  const f6 = folders[5]; const f6p = [f6.x - 10, f6.y - 40];
  camKey(26.60, f6p[0], f6p[1], 2.3, .035); camKey(28.30, f6p[0] + 25, f6p[1] + 5, 2.42, .04);
  focus(26.2, 28.6, [f6], 1);
  travel(28.45, 29.05); thread([[560, -235], [A2[0] + 1050, A2[1] - 560]], 19.3, 20.05, { silent: true, under: true });
  spinePin(A2[0] + 1050, A2[1] - 560, 20.0);

  // ================= S3 · mugshot (A = 4600,200) =================
  const A3 = [4600, 200]; lamp(A3[0], A3[1] - 250, 1600, 1);
  const board = item({ x: A3[0], y: A3[1], w: 980, h: 760, rot: .01, order: 200, tIn: 28.5, enter: 'none',
    draw: (g, t, it) => {
      g.fillStyle = '#2c2d2e'; g.fillRect(-490, -380, 980, 760);
      g.strokeStyle = 'rgba(230,225,215,.45)'; g.fillStyle = 'rgba(230,225,215,.6)'; g.font = `700 22px ${MONO}`; g.textAlign = 'left';
      for (let k = 0; k <= 8; k++) { const y = 300 - k * 80; g.lineWidth = k % 2 ? 1.5 : 3; g.beginPath(); g.moveTo(-490, y); g.lineTo(490, y); g.stroke(); if (k % 2 === 0) g.fillText(`${150 + k * 5}`, -478, y - 8); }
      const im = got(srcUrl(it.src, t)); if (im) g.drawImage(im, -330, -250, 660, 375);
      g.strokeStyle = 'rgba(0,0,0,.6)'; g.lineWidth = 4; g.strokeRect(-330, -250, 660, 375);
      g.fillStyle = '#111'; g.fillRect(-330, 150, 660, 110); g.strokeStyle = '#ddd'; g.lineWidth = 2; g.strokeRect(-322, 158, 644, 94);
      drawTyped(g, it.nm, t, 0, 210, `700 40px ${MONO}`, '#f0ece2', 'center'); drawTyped(g, it.no, t, 0, 244, `400 24px ${MONO}`, '#bdb7aa', 'center');
    }, src: vid('mug', 29.0, 0) });
  board.nm = typed('СОПРАНО, ЭНТОНИ ДЖ.', Wt('тони', 2), .042); board.no = typed('НЬЮ-ДЖЕРСИ · 1999', Wt('тони', 2) + .9, .03, { silent: true });
  const roles = [['ПАЦИЕНТ', -720, -260], ['СЫН', 690, -300], ['ОТЕЦ', 760, 120], ['МУЖ', -760, 160], ['БОСС', 0, 520]];
  roles.forEach(([lab, dx, dy], i) => {
    const t = Wt('сложных') - .1 + i * .3;
    item({ draw: drawTag, x: A3[0] + dx, y: A3[1] + dy, w: 300, h: 92, rot: (i % 2 ? .06 : -.07), label: lab, tIn: t, dur: .26, enter: 'pop', order: 260 + i, size: 42 });
    thread([[A3[0] + dx - 120 * Math.sign(dx || 1), A3[1] + dy], [A3[0] + Math.sign(dx) * 330, A3[1] + (dy > 0 ? 125 : -250)]], t, t + .25, { silent: true, sag: .4, width: 4 });
  });
  camKey(29.05, A3[0], A3[1] - 70, 1.22, .01); camKey(30.85, A3[0] + 10, A3[1] - 50, 1.5, .02);
  camKey(31.85, A3[0], A3[1] + 40, .78, 0); camKey(33.20, A3[0] + 40, A3[1] + 30, .82, -.01);
  focus(29.0, 30.9, [board], .55);
  travel(28.5, 29.05); thread([[A2[0] + 1050, A2[1] - 560], [A3[0] + 450, A3[1] - 360]], 28.5, 29.05, { silent: true, under: true });
  spinePin(A3[0] + 450, A3[1] - 360, 29.2);

  // ================= S4 · open the case (A = 6900,-200) =================
  const A4 = [6900, -200]; lamp(A4[0] - 200, A4[1] - 300, 2000, 1);
  const tOpen = Wt('открываем');
  const inside = item({ x: A4[0], y: A4[1], w: 1500, h: 1000, order: 300, tIn: 33.0, enter: 'none',
    draw: (g) => { g.fillStyle = '#b8955a'; g.fillRect(-750, -500, 1500, 1000); g.fillStyle = 'rgba(0,0,0,.08)'; g.fillRect(-750, -500, 1500, 1000); g.fillStyle = '#c2a064'; g.fillRect(-750, -560, 380, 70); } });
  const ev = [['УЛИКА 01', 'melfi', 'ПАЦИЕНТ'], ['УЛИКА 02', 'livia', 'СЫН'], ['УЛИКА 03', 'family', 'ОТЕЦ'], ['УЛИКА 04', 'carmela', 'МУЖ'], ['УЛИКА 05', 'bing', 'БОСС']];
  ev.forEach(([tag, still, cap], i) => {
    const x = A4[0] - 560 + i * 280, y = A4[1] - 170 + (i % 2) * 60;
    const ph = photo({ x, y, w: 250, rot: (i % 2 ? .05 : -.06), order: 310 + i, tIn: 33.0, src: { still }, capSize: 22, caption: typed(cap, 33.0, .001, { silent: true }) });
    item({ draw: drawTag, x: x + 30, y: y + 150, w: 200, h: 64, rot: (i % 2 ? -.08 : .06), label: tag, size: 26, order: 320 + i, tIn: 33.0 });
  });
  const cover = item({ x: A4[0], y: A4[1], w: 1500, h: 1000, order: 400, tIn: 33.0, enter: 'none', shadow: 1,
    draw: (g, t) => {
      const p = eio(prog(t, tOpen, tOpen + .62)), ang = p * Math.PI, c = Math.cos(ang);
      g.save(); g.translate(-750, 0); g.scale(c, 1 + .06 * Math.sin(ang)); g.translate(750, 0);
      if (c > 0) {
        g.drawImage(paper(1500, 1000, MANILA, false, 41), -750, -500);
        g.fillStyle = PAPER; g.fillRect(-330, -10, 660, 170); g.strokeStyle = 'rgba(0,0,0,.3)'; g.lineWidth = 2; g.strokeRect(-330, -10, 660, 170);
        g.fillStyle = INK; g.font = `700 62px ${MONO}`; g.textAlign = 'center'; g.fillText('ДЕЛО № 1999', 0, 80); g.font = `400 30px ${MONO}`; g.fillText('Т. СОПРАНО', 0, 130);
        drawStamp(g, { text: 'СЕКРЕТНО', t: 0, size: 96, rot: -.08, x: 0, y: -230 }, 99);
        g.fillStyle = `rgba(0,0,0,${p * .5})`; g.fillRect(-750, -500, 1500, 1000);
      } else { g.drawImage(paper(1500, 1000, '#bf9c60', false, 42), -750, -500); g.fillStyle = `rgba(0,0,0,${(1 - p) * .5})`; g.fillRect(-750, -500, 1500, 1000); }
      g.restore();
    } });
  sfx('flip', tOpen, { big: true }); fast(tOpen, tOpen + .62, 5);
  const sym = card({ x: A4[0] + 420, y: A4[1] + 250, w: 620, h: 300, rot: .03, order: 420, lined: true, tIn: Wt('сочувствовать') - .1, dur: .3, enter: 'slide', dx: 500, dy: 200,
    text: (g, t, it) => { drawTyped(g, it.ty, t, -280, -98, `700 34px ${MONO}`); drawTyped(g, it.ty2, t, -280, -40, `400 26px ${MONO}`); } });
  sym.ty = typed('СОЧУВСТВИЕ К', Wt('сочувствовать'), .05); sym.ty2 = typed('объект:', Wt('сочувствовать') + .7, .04, { silent: true });
  sym.stamps = [stamp('ЧУДОВИЩУ', Wt('чудовищу'), { x: 10, y: 60, size: 72, rot: -.05, shake: 14 })];
  const lg = photo({ x: A4[0] - 260, y: A4[1] + 260, w: 520, rot: -.05, order: 430, tIn: Wt('трюк') + .05, dur: .3, enter: 'drop', dx: -200, dy: -200, src: vid('laugh', Wt('трюк') - .2, 2.6) });
  lg.stamps = [stamp('СРАБОТАЛО', Wt('сработал') + .12, { x: 0, y: 40, size: 66, rot: .07 })];
  camKey(33.95, A4[0], A4[1] + 40, .88, -.01); camKey(34.35, A4[0] + 30, A4[1] + 20, .92, -.012);
  camKey(35.70, A4[0] - 420, A4[1] - 110, 1.3, .015); camKey(37.30, A4[0] + 380, A4[1] - 90, 1.32, .01);
  camKey(39.30, A4[0] + 400, A4[1] + 220, 1.45, .02); camKey(41.20, A4[0] + 380, A4[1] + 240, 1.55, .025);
  camKey(42.50, A4[0] - 150, A4[1] + 250, 1.25, 0); camKey(44.30, A4[0], A4[1] + 120, .95, -.01);
  focus(39.5, 41.6, [sym], .7);
  travel(33.35, 33.95); thread([[A3[0] + 450, A3[1] - 360], [A4[0] - 650, A4[1] - 470]], 33.35, 33.95, { silent: true, under: true });
  spinePin(A4[0] - 650, A4[1] - 470, 33.9);

  // ================= S5 · spoilers tape (foreground) =================
  const st5 = card({ x: A4[0] + 560, y: A4[1] - 140, w: 1, h: 1, shadow: 0, order: 450, tIn: 44, draw: (g, t, it) => drawStamp(g, it.s, t) });
  st5.s = stamp('ВНИМАНИЕ', Wt('предупрежу'), { size: 110, rot: -.1, shake: 12 });
  TAPES.push({ t0: Wt('спойлеры') - .35, dur: .5, ang: -.2, y: -60, dir: 1, out: 48.42 });
  TAPES.push({ t0: Wt('шести', 1) - .25, dur: .45, ang: .16, y: 170, dir: -1, out: 48.5 });
  TAPES.forEach(tp => sfx('tape', tp.t0, { dur: tp.dur }));
  camKey(46.20, A4[0] + 200, A4[1] - 80, 1.02, -.02); camKey(48.30, A4[0] + 260, A4[1] - 20, 1.12, -.04);

  // ================= S6 · chapter 01 divider (A = 6900,1700) =================
  const A6 = [6900, 1700]; lamp(A6[0], A6[1] - 200, 1500, .9);
  const ch = item({ draw: drawFolder, x: A6[0], y: A6[1], w: 1200, h: 760, rot: -.015, order: 600, tIn: 48.2, enter: 'none', tab: 'ГЛАВА 01',
    text: (g, t, it) => {
      g.fillStyle = 'rgba(40,25,10,.8)'; g.font = `400 30px ${MONO}`; g.textAlign = 'center'; g.fillText('ДЕЛО № 1999 · Т. СОПРАНО', 0, -250);
      const word = 'ПАЦИЕНТ', t0 = Wt('сезонам') + .3; g.font = `800 170px ${SANS}`; g.textBaseline = 'middle'; g.letterSpacing = '10px';
      const total = g.measureText(word).width; let x = -total / 2;
      [...word].forEach((c, k) => { const w = g.measureText(c).width + 10, p = eout5(prog(t, t0 + k * .07, t0 + k * .07 + .35)); if (p > 0) { g.save(); g.translate(x + w / 2, 40 + (1 - p) * 70); g.rotate((1 - p) * (k % 2 ? .25 : -.2)); g.globalAlpha *= clamp(p * 2); g.fillStyle = INK; g.textAlign = 'center'; g.fillText(c, 0, 0); g.restore(); } x += w; });
      g.letterSpacing = '0px';
      if (it.s) drawStamp(g, it.s, t);
    } });
  ch.s = stamp('01', Wt('сезонам') + .05, { x: 420, y: -220, size: 120, rot: .1, shake: 9 });
  [...'ПАЦИЕНТ'].forEach((c, k) => sfx('type', Wt('сезонам') + .3 + k * .07 + .3, { heavy: true }));
  camKey(49.05, A6[0], A6[1] + 10, .95, .01); camKey(50.55, A6[0] + 20, A6[1] + 10, 1.12, .02);
  travel(48.5, 49.05); thread([[A4[0] - 650, A4[1] - 470], [A4[0] + 760, A4[1] + 420], [A6[0] + 560, A6[1] - 330]], 48.5, 49.05, { silent: true, under: true });
  spinePin(A6[0] + 560, A6[1] - 330, 49.1);

  // ================= S7 · how gangster stories begin (A = 4800,1900) =================
  const A7 = [4800, 1900]; lamp(A7[0] - 100, A7[1] - 150, 1500, 1);
  const c7 = card({ x: A7[0], y: A7[1], w: 920, h: 560, rot: -.02, order: 700, lined: true, tIn: 50.4, enter: 'none',
    text: (g, t, it) => { drawTyped(g, it.h1, t, -410, -98, `700 36px ${MONO}`); drawTyped(g, it.l1, t, -360, 20, `700 54px ${MONO}`); drawTyped(g, it.l2, t, -360, 124, `700 54px ${MONO}`); } });
  c7.h1 = typed('ГАНГСТЕРСКАЯ ИСТОРИЯ. НАЧАЛО:', Wt('гангстерская'), .035);
  c7.l1 = typed('1. убийство', Wt('убийства'), .045); c7.l2 = typed('2. ограбление', Wt('ограбления'), .042);
  c7.pens = [pen([[-380, 2], [-30, -4], [40, 6]], Wt('клан'), .3, { width: 9 }), pen([[-380, 106], [10, 100], [110, 112]], Wt('клан') + .32, .32, { width: 9 })];
  c7.stamps = [stamp('ОБМОРОК', Wt('обморока'), { x: 120, y: 190, size: 100, rot: -.12, shake: 16 })];
  photo({ x: A7[0] + 720, y: A7[1] - 120, w: 460, rot: .08, order: 710, tIn: Wt('начинается', 2) + .1, dur: .3, enter: 'drop', dx: 200, dy: -160, src: { still: 'bbq' }, caption: typed('ДВОР, БАРБЕКЮ', Wt('начинается', 2) + .4, .03, { silent: true }), capSize: 24 });
  camKey(51.25, A7[0] - 60, A7[1] + 10, 1.28, -.015); camKey(53.60, A7[0] + 10, A7[1] + 20, 1.32, -.02);
  camKey(55.20, A7[0] + 260, A7[1] + 30, 1.05, .01); camKey(56.45, A7[0] + 220, A7[1] + 60, 1.12, .015);
  travel(50.7, 51.25); thread([[A6[0] + 560, A6[1] - 330], [A7[0] - 470, A7[1] - 320]], 50.7, 51.25, { silent: true, under: true });
  spinePin(A7[0] - 470, A7[1] - 320, 51.3);

  // ================= S8 · collapse (A = 2600,1600) =================
  const A8 = [2600, 1600]; lamp(A8[0], A8[1] - 200, 1500, 1);
  const tFall = Wt('сознание');
  const col = photo({ x: A8[0], y: A8[1], w: 860, rot: .015, order: 800, tIn: 56.6, enter: 'none', src: vid('collapse', 57.0, 4.5 - (tFall - 57.0)),
    caption: typed('НЬЮ-ДЖЕРСИ · ЗАДНИЙ ДВОР', Wt('глава') + .2, .035), capSize: 30 });
  // ECG thread under the photo: beats, then flatline at the fall
  item({ x: A8[0], y: A8[1] + 380, w: 1300, h: 200, shadow: 0, order: 810, tIn: 56.6, lit: false,
    draw: (g, t) => {
      const t0 = 57.2, p = prog(t, t0, tFall + .9), xs = -620 + 1240 * p; if (p <= 0) return;
      g.save(); g.strokeStyle = '#c62a22'; g.lineWidth = 5; g.lineCap = 'round'; g.lineJoin = 'round'; g.shadowColor = 'rgba(0,0,0,.45)'; g.shadowOffsetX = 5; g.shadowOffsetY = 7; g.shadowBlur = 4;
      g.beginPath(); g.moveTo(-620, 0); const flatX = -620 + 1240 * prog(tFall, t0, tFall + .9);
      for (let x = -620; x <= xs; x += 6) { let y = 0; if (x < flatX) { const ph = ((x + 620) % 230) / 230; if (ph > .4 && ph < .5) y = -Math.sin((ph - .4) / .1 * Math.PI) * 90 * (ph < .45 ? 1 : -.4); } g.lineTo(x, y); }
      g.stroke(); g.restore();
    } });
  for (let k = 0; k < 4; k++) sfx('heart', 57.2 + k * .62 * 1.05);
  sfx('boom', tFall); shake(tFall, 22);
  FX.push({ name: 'faint', fn: t => { const a = prog(t, tFall - .1, tFall + .45), b = 1 - prog(t, tFall + .9, tFall + 1.7); return clamp(Math.min(eio(a), eio(b))); } });
  camKey(57.15, A8[0] - 30, A8[1] - 20, 1.25, .01); camKey(tFall - .15, A8[0], A8[1] - 40, 1.55, .02);
  camKey(tFall + .55, A8[0] + 60, A8[1] + 90, 1.22, .12); camKey(tFall + 1.6, A8[0] + 20, A8[1] + 30, 1.18, .03);
  travel(56.6, 57.15); thread([[A7[0] - 470, A7[1] - 320], [A8[0] + 380, A8[1] - 300]], 56.6, 57.15, { silent: true, under: true });
  spinePin(A8[0] + 380, A8[1] - 300, 57.2);

  // ================= S9 · ducks fly away (A = 500,1900) =================
  const A9 = [500, 1900]; lamp(A9[0], A9[1] - 200, 1500, 1);
  const tFly = Wt('улетели'), tFeed = 61.5;
  const duck = photo({ x: A9[0], y: A9[1], w: 820, rot: -.03, order: 900, tIn: 61.1, enter: 'none',
    src: t => t < Wt('которые') + .45 ? vid('feed', tFeed, 0) : vid('fly', Wt('которые') + .45, Math.max(0, 1.75 - (tFly - Wt('которые') - .45))),
    caption: typed('ДИКИЕ УТКИ · БАССЕЙН', Wt('утки') - .05, .035), capSize: 30,
    exit: { type: 'fly', t: tFly + .05, dur: .75, dx: 1500, dy: -1100, drot: .6, L: 1.3, gone: true } });
  pin(A9[0], A9[1] - 250, 61.0, { silent: true });
  sfx('pop', tFly + .02); sfx('flap', tFly - .3, { dur: 1.2 });
  // empty outline left behind
  item({ x: A9[0], y: A9[1], w: 820, h: photoH(820), rot: -.03, order: 890, shadow: 0, tIn: 61.0, lit: false,
    draw: (g, t) => { const a = prog(t, tFly + .1, tFly + .6); if (a <= 0) return; g.save(); g.globalAlpha *= a * .55; g.strokeStyle = '#e8e2d4'; g.setLineDash([22, 16]); g.lineWidth = 4; g.strokeRect(-410, -photoH(820) / 2, 820, photoH(820)); g.restore(); } });
  camKey(61.75, A9[0] - 20, A9[1] - 10, 1.3, -.02); camKey(Wt('которые'), A9[0], A9[1] + 10, 1.36, -.025);
  camKey(tFly - .05, A9[0] + 10, A9[1], 1.38, -.02); camKey(tFly + .55, A9[0] + 260, A9[1] - 200, 1.2, .02); camKey(67.05, A9[0] + 120, A9[1] - 60, 1.12, .01);
  travel(61.2, 61.75); thread([[A8[0] + 380, A8[1] - 300], [A9[0] - 380, A9[1] - 330]], 61.2, 61.75, { silent: true, under: true });
  spinePin(A9[0] - 380, A9[1] - 330, 61.8);

  // ================= S10 · doctors, referral to Melfi (A = -1700,1700) =================
  const A10 = [-1700, 1700]; lamp(A10[0], A10[1] - 200, 1800, 1);
  const med = card({ x: A10[0] - 300, y: A10[1] - 40, w: 720, h: 520, rot: -.03, order: 1000, lined: true, tIn: 66.9, enter: 'none',
    text: (g, t, it) => { drawTyped(g, it.hd, t, -320, -100, `700 32px ${MONO}`); it.ls.forEach((l, k) => drawTyped(g, l, t, -320, -14 + k * 64, `700 36px ${MONO}`)); } });
  med.hd = typed('МЕДИЦИНСКОЕ ОБСЛЕДОВАНИЕ', 67.0, .02, { silent: true });
  med.ls = [typed('ЭКГ ......... НОРМА', Wt('врачи') + .1, .022), typed('КРОВЬ ....... НОРМА', Wt('врачи') + .55, .022), typed('МРТ ......... НОРМА', Wt('ничего') + .45, .022)];
  med.stamps = [stamp('ПРИЧИНА НЕ НАЙДЕНА', Wt('находят') + .1, { x: 20, y: 190, size: 46, rot: -.07 })];
  photo({ x: A10[0] - 820, y: A10[1] - 360, w: 500, rot: .06, order: 1005, tIn: 67.25, dur: .3, enter: 'drop', dx: -200, dy: -200, src: vid('mri', 67.0, 1.2), caption: typed('МРТ', 67.6, .05, { silent: true }), capSize: 26 });
  const ref = card({ x: A10[0] + 420, y: A10[1] + 90, w: 820, h: 520, rot: .025, order: 1010, color: '#e9e0f0', tIn: Wt('отправляют'), dur: .38, enter: 'slide', dx: 900, dy: 150, drot: .2,
    text: (g, t, it) => { g.fillStyle = 'rgba(70,40,100,.8)'; g.font = `800 40px ${SANS}`; g.textAlign = 'left'; g.letterSpacing = '4px'; g.fillText('НАПРАВЛЕНИЕ', -370, -170); g.letterSpacing = '0px';
      g.fillStyle = 'rgba(70,40,100,.35)'; g.fillRect(-370, -150, 740, 3); drawTyped(g, it.a, t, -370, -80, `400 32px ${MONO}`); drawTyped(g, it.b, t, -370, 30, `700 44px ${MONO}`); } });
  ref.a = typed('к психотерапевту:', Wt('психотерапевту'), .035); ref.b = typed('Д-Р ДЖЕННИФЕР МЕЛФИ', Wt('дженнифер'), .04);
  photo({ x: A10[0] + 640, y: A10[1] - 300, w: 420, rot: -.07, order: 1015, tIn: Wt('доктору') - .1, dur: .3, enter: 'drop', dx: 150, dy: -200, src: vid('melfi', Wt('доктору'), 0), clip: { x: -120 } });
  camKey(67.55, A10[0] - 480, A10[1] - 150, 1.08, .015); camKey(69.40, A10[0] - 400, A10[1] - 110, 1.12, .01);
  camKey(70.30, A10[0] + 380, A10[1] - 20, 1.18, -.01); camKey(72.10, A10[0] + 480, A10[1] - 90, 1.18, -.015); camKey(73.45, A10[0] + 520, A10[1] - 60, 1.24, -.02);
  travel(67.0, 67.55); thread([[A9[0] - 380, A9[1] - 330], [A10[0] - 820, A10[1] - 600]], 67.0, 67.55, { silent: true, under: true });
  spinePin(A10[0] - 820, A10[1] - 600, 67.6);

  // ================= S11 · he hates it =================
  const irr = photo({ x: A10[0] + 700, y: A10[1] + 280, w: 560, rot: .12, order: 1100, tIn: Wt('он', 2) + .2, dur: .28, enter: 'drop', dx: 300, dy: -150, src: vid('irritated', Wt('он', 2), 0) });
  card({ x: A10[0] + 300, y: A10[1] + 420, w: 1, h: 1, shadow: 0, order: 1110, tIn: 73, lit: false, scrawls: [scrawl('НЕНАВИДИТ', Wt('ненавидит'), .55, { size: 92, rot: -.1 })] });
  camKey(74.10, A10[0] + 560, A10[1] + 300, 1.32, .03); camKey(75.40, A10[0] + 520, A10[1] + 330, 1.28, .035);

  // ================= S12 · shame, risk, redacted transcript (A = -3900,1650) =================
  const A12 = [-3900, 1650]; lamp(A12[0], A12[1] - 250, 1800, .95);
  const sr = card({ x: A12[0] - 640, y: A12[1] - 120, w: 560, h: 520, rot: -.04, order: 1200, tIn: 75.3, enter: 'none', color: '#e6dfcf', text: (g) => { g.fillStyle = INK; g.font = `700 30px ${MONO}`; g.textAlign = 'center'; g.fillText('МАФИОЗИ У ПСИХИАТРА', 0, -200); } });
  sr.stamps = [stamp('ПОЗОР', Wt('позор'), { x: 0, y: -60, size: 92, rot: -.08 }), stamp('РИСК', Wt('риск'), { x: 10, y: 120, size: 100, rot: .07, shake: 14 })];
  const lines = ['ПАЦИЕНТ: — — — — — — — — — —', 'ВРАЧ:    — — — — — —', 'ПАЦИЕНТ: — — — — — — — — —', '         — — — — — — — —', 'ВРАЧ:    — — — — —', 'ПАЦИЕНТ: — — — — — — — — — — —', '         — — — — — —'];
  const tr = card({ x: A12[0] + 120, y: A12[1] + 20, w: 820, h: 980, rot: .02, order: 1210, tIn: 75.3, enter: 'none',
    text: (g, t) => {
      g.fillStyle = INK; g.font = `700 32px ${MONO}`; g.textAlign = 'left'; g.fillText('СТЕНОГРАММА СЕАНСА', -370, -400); g.font = `400 24px ${MONO}`; g.fillText('Д-Р Дж. МЕЛФИ · ПАЦИЕНТ: Т.С.', -370, -360);
      g.font = `400 28px ${MONO}`; lines.forEach((l, k) => g.fillText(l, -370, -260 + k * 86));
      lines.forEach((l, k) => { const t0 = Wt('болтает') + k * .1, p = eio(prog(t, t0, t0 + .28)); if (p > 0) { g.fillStyle = 'rgba(10,10,10,.93)'; g.fillRect(-250, -292 + k * 86, 620 * p, 44); g.fillStyle = INK; } });
    } });
  sfx('marker', Wt('болтает'), { dur: .95 });
  photo({ x: A12[0] + 780, y: A12[1] - 360, w: 460, rot: .08, order: 1220, tIn: Wt('вдруг') + .1, dur: .3, enter: 'drop', dx: 200, dy: -150, src: vid('crew', Wt('вдруг'), 0), caption: typed('«БАДА БИНГ»', Wt('вдруг') + .4, .03, { silent: true }), capSize: 24 });
  camKey(76.05, A12[0] - 560, A12[1] - 140, 1.15, -.02); camKey(78.70, A12[0] - 500, A12[1] - 80, 1.2, -.02);
  camKey(79.55, A12[0] + 520, A12[1] - 240, 1.12, .015); camKey(80.45, A12[0] + 160, A12[1] - 80, 1.25, .01); camKey(81.55, A12[0] + 160, A12[1] + 10, 1.32, .005);
  travel(75.5, 76.05); thread([[A10[0] - 820, A10[1] - 600], [A10[0] + 1000, A10[1] + 600], [A12[0] - 640, A12[1] - 380]], 75.5, 76.05, { silent: true, under: true });
  spinePin(A12[0] - 640, A12[1] - 380, 76.1);

  // ================= S13 · Chase's device (A = -3800,3400) =================
  const A13 = [-3800, 3400]; lamp(A13[0], A13[1] - 200, 1500, .95);
  const c13 = card({ x: A13[0], y: A13[1], w: 900, h: 520, rot: -.02, order: 1300, lined: true, tIn: 81.4, enter: 'none',
    text: (g, t, it) => { drawTyped(g, it.a, t, -400, -98, `700 34px ${MONO}`); drawTyped(g, it.b, t, -400, 20, `700 64px ${MONO}`); drawTyped(g, it.c, t, -400, 140, `400 32px ${MONO}`); } });
  c13.a = typed('ПРИЁМ №1', Wt('этом', 2) - .16, .05); c13.b = typed('ГЛАВНЫЙ ПРИЁМ', Wt('главный'), .04);
  c13.c = typed('Дэвид Чейз · создатель сериала', Wt('дэвида'), .028);
  c13.pens = [pen([[-400, 44], [80, 40], [150, 48]], Wt('прием') + .15, .35, { width: 9 })];
  camKey(82.10, A13[0] - 40, A13[1] - 10, 1.3, .02); camKey(85.35, A13[0] + 40, A13[1] + 10, 1.4, .025);
  travel(81.6, 82.1); thread([[A12[0] - 640, A12[1] - 380], [A13[0] - 420, A13[1] - 280]], 81.6, 82.1, { silent: true, under: true });
  spinePin(A13[0] - 420, A13[1] - 280, 82.15);

  // ================= S14 · first time in the chair (A = -1600,3500) =================
  const A14 = [-1600, 3500]; lamp(A14[0], A14[1] - 200, 1700, 1);
  const work = photo({ x: A14[0] - 560, y: A14[1] - 80, w: 520, rot: -.06, order: 1400, tIn: 85.2, enter: 'none', src: { still: 'work' }, caption: typed('«РАБОТА»', 85.2, .001, { silent: true }), capSize: 28,
    exit: { type: 'slideout', t: Wt('работе') + .35, dur: .45, dx: -900, dy: 250, drot: -.3, fade: true, gone: true } });
  work.pens = [pen([[-230, -150], [230, 140]], Wt('работе'), .18, { width: 10 }), pen([[230, -150], [-230, 140]], Wt('работе') + .18, .18, { width: 10 })];
  const chair = photo({ x: A14[0], y: A14[1], w: 820, rot: .02, order: 1410, tIn: Wt('кресле') + .1, dur: .32, enter: 'drop', dx: 0, dy: -260,
    src: t => t < 90.3 ? vid('enter', Wt('кресле'), 2.2) : vid('chair', 90.3, 0) });
  const adj = [['РАСТЕРЯННЫЙ', 'растерянным', -720, -330, -.07], ['РАЗДРАЖЁННЫЙ', 'раздраженным', 730, -290, .06], ['УЯЗВИМЫЙ', 'уязвимым', 40, 450, -.03]];
  adj.forEach(([lab, w, dx, dy, r]) => {
    const t = Wt(w) + .05;
    item({ draw: drawTag, x: A14[0] + dx, y: A14[1] + dy, w: 430, h: 100, rot: r, label: lab, size: 44, tIn: t, dur: .26, enter: 'pop', order: 1420 });
    thread([[A14[0] + dx + (dx < 0 ? 190 : dx > 100 ? -190 : 0), A14[1] + dy + (dy > 0 ? -50 : 0)], [A14[0] + (dx < 0 ? -300 : dx > 100 ? 300 : 0), A14[1] + (dy > 0 ? 250 : -230)]], t, t + .22, { silent: true, sag: .3, width: 4 });
  });
  camKey(86.05, A14[0] - 480, A14[1] - 60, 1.3, -.02); camKey(87.70, A14[0] - 420, A14[1] - 40, 1.33, -.02);
  camKey(88.75, A14[0], A14[1] + 10, 1.2, .01); camKey(90.20, A14[0] + 10, A14[1] + 30, 1.12, .015); camKey(92.90, A14[0] + 20, A14[1] + 60, .84, .005);
  travel(85.5, 86.05); thread([[A13[0] - 420, A13[1] - 280], [A14[0] - 820, A14[1] - 330]], 85.5, 86.05, { silent: true, under: true });
  spinePin(A14[0] - 820, A14[1] - 330, 86.1);

  // ================= S15 · ducks = family (A = 700,3600) =================
  const A15 = [700, 3600]; lamp(A15[0], A15[1] - 200, 1700, 1);
  const cry = photo({ x: A15[0], y: A15[1], w: 760, rot: -.015, order: 1500, tIn: 93.3, enter: 'none', src: vid('cry', 95.9, 0) });
  const dk = photo({ x: A15[0] - 760, y: A15[1] - 90, w: 470, rot: -.08, order: 1505, tIn: 93.3, enter: 'none', src: { still: 'duckspool' }, caption: typed('УТКИ', 93.3, .001, { silent: true }), capSize: 26 });
  const fm = photo({ x: A15[0] + 760, y: A15[1] - 60, w: 470, rot: .07, order: 1506, tIn: 93.3, enter: 'none', src: { still: 'family' }, caption: typed('СЕМЬЯ', 93.3, .001, { silent: true }), capSize: 26 });
  pin(dk.x, dk.y - 150, 93.3, { silent: true }); pin(fm.x, fm.y - 150, 93.3, { silent: true }); pin(A15[0], A15[1] - 235, 93.3, { silent: true });
  thread([[dk.x, dk.y - 150], [A15[0], A15[1] - 235], [fm.x, fm.y - 150]], Wt('уток'), Wt('семью', 1) - 1.2, {});
  const eq = card({ x: A15[0], y: A15[1] + 420, w: 620, h: 130, rot: .015, order: 1510, tIn: Wt('понимаем') - .05, dur: .3, enter: 'slide', dx: 0, dy: 300,
    text: (g, t, it) => drawTyped(g, it.ty, t, 0, 20, `700 58px ${MONO}`, INK, 'center') });
  eq.ty = typed('УТКИ = СЕМЬЯ', Wt('понимаем'), .05);
  camKey(94.05, A15[0], A15[1] + 60, .9, .01); camKey(96.40, A15[0] - 10, A15[1] + 40, .98, .005);
  camKey(97.55, A15[0] - 60, A15[1] - 70, 2.05, -.02); camKey(98.25, A15[0] - 70, A15[1] - 75, 2.12, -.025);
  focus(96.7, 98.6, [cry], 1);
  travel(93.5, 94.05); thread([[A14[0] - 820, A14[1] - 330], [A15[0] - 760, A15[1] - 240]], 93.5, 94.05, { silent: true, under: true });

  // ================= S16 · human first, gangster second (A = 2900,3500) =================
  const A16 = [2900, 3500]; lamp(A16[0], A16[1] - 200, 1500, 1);
  const tFlip = Wt('потом', 1);
  const flip = item({ x: A16[0], y: A16[1], w: 760, h: photoH(760) + 90, rot: .02, order: 1600, tIn: 98.3, enter: 'none',
    draw: (g, t, it) => {
      const p = eio(prog(t, tFlip, tFlip + .5)), c = Math.cos(p * Math.PI), front = c >= 0, w = 760, h = photoH(760);
      g.save(); g.scale(Math.max(.02, Math.abs(c)), 1 + .05 * Math.sin(p * Math.PI)); g.translate(0, -45);
      const fake = { w, h, src: { still: front ? 'ducks' : 'bing' }, order: front ? 1601 : 1602 };
      drawPhoto(g, t, fake); g.fillStyle = `rgba(0,0,0,${(1 - Math.abs(c)) * .4})`; g.fillRect(-w / 2, -h / 2, w, h); g.restore();
      const ty = front ? it.a : it.b; if (p > .45 && p < .55) return;
      drawTyped(g, ty, t, 0, h / 2 + 40, `800 60px ${SANS}`, front ? '#f2ede4' : '#e04535', 'center');
    } });
  flip.a = typed('1. ЧЕЛОВЕК', Wt('человека'), .05, { heavy: true }); flip.b = typed('2. ГАНГСТЕР', Wt('гангстера'), .045, { heavy: true });
  sfx('flip', tFlip); fast(tFlip, tFlip + .5, 4);
  camKey(98.85, A16[0] - 20, A16[1] + 40, 1.28, -.04); camKey(tFlip - .1, A16[0] + 10, A16[1] + 50, 1.33, -.01); camKey(tFlip + .6, A16[0] + 30, A16[1] + 50, 1.35, .035); camKey(102.55, A16[0] + 40, A16[1] + 60, 1.38, .04);
  travel(98.3, 98.85); thread([[A15[0] + 760, A15[1] - 210], [A16[0] - 300, A16[1] - 320]], 98.3, 98.85, { silent: true, under: true });
  spinePin(A16[0] - 300, A16[1] - 320, 98.9);

  // ================= S17 · inside Tony's head (A = 5000,3600) =================
  const A17 = [5000, 3600]; lamp(A17[0], A17[1] - 200, 1700, 1);
  const head = item({ x: A17[0], y: A17[1], w: 1300, h: 740, rot: -.01, order: 1700, tIn: 102.4, enter: 'none',
    draw: (g, t) => { const im = got(stillUrl('tonyclose')); g.fillStyle = '#e9e3d6'; g.fillRect(-650, -370, 1300, 740); if (im) g.drawImage(im, -625, -345, 1250, 690); const dim = prog(t, 106.2, 106.9) * .35; if (dim > 0) { g.fillStyle = `rgba(0,0,0,${dim})`; g.fillRect(-650, -370, 1300, 740); } } });
  const trip = [['СНЫ', 'сны', 'dream', -560, 0, 1.0], ['СТРАХИ', 'страхи', 'fear', 0, -40, 1.3], ['ПРИСТУПЫ', 'приступы', 'attack', 560, 10, .2]], tri = [];
  trip.forEach(([lab, w, key, dx, dy, off], i) => {
    const t = Wt(w);
    const ph = photo({ x: A17[0] + dx, y: A17[1] + dy, w: 520, rot: (i - 1) * .06, L0: .32, order: 1750 + i, tIn: t - .05, dur: .32, enter: 'drop', dx: 0, dy: 120, drot: (i - 1) * -.3, src: vid(key, t - .4, off) });
    ph.stamps = [stamp(lab, t + .12, { x: 0, y: 80, size: 60, rot: (i % 2 ? .06 : -.08), shake: 7 })]; tri.push(ph);
  });
  FX.push({ name: 'zoomblur', fn: t => Math.sin(Math.PI * clamp(prog(t, 105.15, 106.05))) });
  sfx('whoosh', 105.1, { dur: 1.1 });
  camKey(103.15, A17[0] + 20, A17[1] + 30, .92, .02); camKey(105.0, A17[0] - 60, A17[1] - 110, 1.45, .01);
  camKey(105.95, A17[0] - 90, A17[1] - 150, 2.7, -.02); camKey(106.75, A17[0], A17[1], .9, -.01); camKey(109.05, A17[0] + 30, A17[1] + 20, .95, .01);
  focus(106.9, 109.4, tri, .8);
  travel(102.6, 103.15); thread([[A16[0] - 300, A16[1] - 320], [A17[0] - 640, A17[1] - 380]], 102.6, 103.15, { silent: true, under: true });
  spinePin(A17[0] - 640, A17[1] - 380, 103.2);

  // ================= S18 · shot, coma, Kevin Finnerty (A = 7200,3500) =================
  const A18 = [7200, 3500]; lamp(A18[0] + 600, A18[1] - 200, 2300, 1);
  const tShot = Wt('выстрела');
  const rep = card({ x: A18[0] - 200, y: A18[1] - 60, w: 820, h: 540, rot: -.02, order: 1800, lined: true, tIn: 109.0, enter: 'none',
    text: (g, t, it) => {
      drawTyped(g, it.a, t, -370, -100, `700 36px ${MONO}`); drawTyped(g, it.b, t, -370, 0, `700 44px ${MONO}`);
      if (t >= tShot) {   // bullet hole with torn burr and soot
        const s = 1 + .4 * Math.exp(-(t - tShot) * 20); g.save(); g.translate(190, 120); g.scale(s, s);
        const gr = g.createRadialGradient(0, 0, 4, 0, 0, 70); gr.addColorStop(0, 'rgba(20,10,5,.9)'); gr.addColorStop(.35, 'rgba(40,25,10,.45)'); gr.addColorStop(1, 'rgba(40,25,10,0)'); g.fillStyle = gr; g.beginPath(); g.arc(0, 0, 70, 0, 7); g.fill();
        g.fillStyle = '#0c0907'; g.beginPath(); for (let k = 0; k < 14; k++) { const a = k / 14 * 7, rr = 17 + (k % 3) * 6; g.lineTo(Math.cos(a) * rr, Math.sin(a) * rr); } g.fill();
        g.strokeStyle = 'rgba(30,20,10,.6)'; g.lineWidth = 2; for (let k = 0; k < 7; k++) { const a = k * .9 + .3; g.beginPath(); g.moveTo(Math.cos(a) * 22, Math.sin(a) * 22); g.lineTo(Math.cos(a) * (50 + k * 6), Math.sin(a) * (50 + k * 6)); g.stroke(); }
        g.restore();
      }
    } });
  rep.a = typed('СЕЗОН 6', Wt('шестом'), .05); rep.b = typed('ВЫСТРЕЛ ДЯДИ ДЖУНИОРА', Wt('после', 1) + .05, .035);
  sfx('shot', tShot); shake(tShot, 26); fast(tShot - .02, tShot + .1, 6);
  photo({ x: A18[0] - 760, y: A18[1] + 330, w: 420, rot: -.09, order: 1805, tIn: Wt('джуниора') + .05, dur: .3, enter: 'drop', dx: -150, dy: -200, src: { still: 'junior' }, caption: typed('ДЯДЯ ДЖУНИОР', Wt('джуниора') + .3, .03, { silent: true }), capSize: 24 });
  const coma = photo({ x: A18[0] + 760, y: A18[1] + 120, w: 640, rot: .04, order: 1810, tIn: Wt('целыми') + .15, dur: .3, enter: 'drop', dx: 200, dy: -200, src: vid('coma', Wt('целыми'), 0) });
  coma.stamps = [stamp('КОМА', Wt('комы'), { x: 0, y: 60, size: 90, rot: -.09, shake: 12 })];
  photo({ x: A18[0] + 1650, y: A18[1] + 380, w: 600, rot: -.05, order: 1820, tIn: Wt('странном') + .1, dur: .3, enter: 'drop', dx: 200, dy: -150, src: vid('finnerty', Wt('странном'), 0) });
  const badge = card({ x: A18[0] + 1600, y: A18[1] - 230, w: 760, h: 420, rot: .03, order: 1830, color: '#dfe6ea', tIn: Wt('где') - .05, dur: .3, enter: 'slide', dx: 600, dy: -300,
    text: (g, t, it) => {
      g.fillStyle = '#284b63'; g.fillRect(-380, -210, 760, 70); g.fillStyle = '#eef3f6'; g.font = `800 34px ${SANS}`; g.textAlign = 'left'; g.letterSpacing = '4px'; g.fillText('УДОСТОВЕРЕНИЕ', -350, -163); g.letterSpacing = '0px';
      g.fillStyle = INK; g.font = `400 24px ${MONO}`; g.fillText('ИМЯ', -350, -88); g.fillText('ПРОФЕССИЯ', -350, 76);
      const A = 'ЭНТОНИ СОПРАНО', B = 'КЕВИН ФИННЕРТИ', ABC = 'АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЭЮЯ', t0 = Wt('кевин') - .75;
      let s = ''; for (let k = 0; k < Math.max(A.length, B.length); k++) { const tk = t0 + .3 + k * .045; if (t < t0) s += A[k] || ' '; else if (t >= tk) s += B[k] || ' '; else { const ch = (B[k] || ' ') === ' ' ? ' ' : ABC[Math.floor((t * 37 + k * 7) * 3) % ABC.length]; s += ch; } }
      g.font = `700 54px ${MONO}`; g.fillText(s, -350, -20); drawTyped(g, it.job, t, -350, 140, `700 44px ${MONO}`);
    } });
  badge.job = typed('продавец', Wt('продавец'), .05);
  for (let k = 0; k < 14; k++) sfx('roll', Wt('кевин') - .75 + .3 + k * .045);
  photo({ x: A18[0] + 2200, y: A18[1] - 40, w: 380, rot: .11, order: 1840, tIn: Wt('финнерти') + .15, dur: .28, enter: 'drop', dx: 150, dy: -160, src: { still: 'card' } });
  camKey(109.85, A18[0] - 240, A18[1] - 70, 1.3, .02); camKey(tShot - .05, A18[0] - 200, A18[1] - 40, 1.38, .02);
  camKey(112.20, A18[0] - 420, A18[1] + 120, 1.1, .005); camKey(113.70, A18[0] + 700, A18[1] + 110, 1.2, -.015); camKey(115.60, A18[0] + 760, A18[1] + 100, 1.3, -.02);
  camKey(116.60, A18[0] + 1500, A18[1] + 150, .96, .01); camKey(118.40, A18[0] + 1600, A18[1] - 200, 1.35, .02); camKey(120.20, A18[0] + 1620, A18[1] - 160, 1.42, .025);
  travel(109.3, 109.85); thread([[A17[0] - 640, A17[1] - 380], [A18[0] - 600, A18[1] - 330]], 109.3, 109.85, { silent: true, under: true });
  spinePin(A18[0] - 600, A18[1] - 330, 109.9);

  // ================= S19 · step back: the whole case =================
  thread([[A18[0] - 600, A18[1] - 330], [A15[0], A15[1] - 235]], 121.2, 122.6, { width: 7 });
  thread([[A3[0] + 450, A3[1] - 360], [A15[0], A15[1] - 235]], 121.5, 122.8, { width: 6, silent: true });
  thread([[A9[0] - 380, A9[1] - 330], [A15[0], A15[1] - 235]], 121.7, 123.0, { width: 6, silent: true });
  thread([[A12[0] - 640, A12[1] - 380], [A15[0], A15[1] - 235]], 121.9, 123.2, { width: 6, silent: true });
  camKey(121.4, A18[0] - 200, A18[1] + 200, .5, .01); camKey(123.8, 1700, 1900, .145, 0); camKey(125.0, 1700, 1900, .14, 0);
  sfx('rise', 120.4, { dur: 3.6 }); sfx('hit', 124.2);
  typed('ДАЛЕЕ  ·  ГЛАВА 02  ·  СЫН', 123.4, .03);

  // foreground out-of-focus props for depth
  fgProp({ x: -900, y: 300, spr: 'ashtray', s: 1.1, p: 1.9 }); fgProp({ x: 3300, y: 120, spr: 'smoke', s: 1.6, p: 1.5, a: .8 });
  fgProp({ x: 5500, y: 1200, spr: 'pen', s: 1.2, p: 1.85, rot: .6 }); fgProp({ x: 1600, y: 2350, spr: 'cup', s: 1.0, p: 1.9 });
  fgProp({ x: -2800, y: 2400, spr: 'smoke', s: 1.8, p: 1.5, a: .85 }); fgProp({ x: -2600, y: 3900, spr: 'pen', s: 1.3, p: 1.85, rot: -.4 });
  fgProp({ x: 1900, y: 4300, spr: 'ashtray', s: 1.0, p: 1.9 }); fgProp({ x: 6200, y: 2900, spr: 'smoke', s: 1.7, p: 1.5, a: .8 });
  fgProp({ x: 8400, y: 4100, spr: 'cup', s: 1.1, p: 1.9 }); fgProp({ x: 7900, y: 800, spr: 'pen', s: 1.2, p: 1.85, rot: .2 });
  // sort camera keys
  CAMK.sort((a, b) => a.t - b.t);
}
