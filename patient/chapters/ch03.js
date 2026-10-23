// 03 · ОТЕЦ
CH_V0 = 174.2;
const [T_START, T_END] = chRange(3);
function buildScenes() {
  const D = [0, 0]; divider(D, 3, 'ОТЕЦ', T_START);
  hold(T_START, Wt('пятая') + .25, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · episode card College (A1)
  const A1 = [1900, -200]; lamp(A1[0], A1[1] - 200, 1500, 1);
  const ep = typedCard({ x: A1[0], y: A1[1], w: 900, h: 560, rot: -.02, order: 100, tIn: T_START,
    extra: (g, t) => { for (let k = 0; k < 5; k++) { const ts = Wt('лучших') - .1 + k * .09, p = prog(t, ts, ts + .25); if (p <= 0) continue; const s = back(p, 2.6);
      g.save(); g.translate(-280 + k * 140, 170); g.scale(s, s); g.fillStyle = RED; g.beginPath(); for (let i = 0; i < 10; i++) { const r = i % 2 ? 22 : 52, a = -Math.PI / 2 + i * Math.PI / 5; g.lineTo(Math.cos(a) * r, Math.sin(a) * r); } g.fill(); g.restore(); } } },
    [[typed('СЕЗОН 1 · СЕРИЯ 5', Wt('серия'), .035), -400, -110, `700 38px ${MONO}`], [typed('«COLLEGE»', Wt('college'), .06), -400, 20, `800 96px ${SANS}`]]);
  for (let k = 0; k < 5; k++) sfx('tick', Wt('лучших') - .1 + k * .09);
  link(A1[0] - 450, A1[1] - 280, Wt('пятая') + .25, Wt('серия') + .2);
  travel(Wt('пятая') + .25, Wt('серия') + .2);
  hold(Wt('серия') + .2, Wt('сериале') + .6, A1[0] + 10, A1[1] + 10, 1.25, .015, { dz: .1 });

  // S2 · road trip map + car (A2)
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  const route = [[-420, 230], [-360, 120], [-250, 60], [-180, -40], [-60, -90], [40, -160], [160, -200], [300, -250], [380, -300]];
  card({ x: A2[0] - 200, y: A2[1], w: 1100, h: 720, rot: .015, order: 200, tIn: T_START, color: '#e4dcc4',
    text: (g, t, it) => {
      g.strokeStyle = 'rgba(80,90,110,.25)'; g.lineWidth = 3; const r = rng(4);
      for (let i = 0; i < 16; i++) { g.beginPath(); let x = -540, y = -340 + r() * 680; g.moveTo(x, y); while (x < 540) { x += 60; y += (r() - .5) * 60; g.lineTo(x, y); } g.stroke(); }
      g.fillStyle = 'rgba(90,120,160,.25)'; g.beginPath(); g.ellipse(420, 120, 160, 260, .3, 0, 7); g.fill();
      g.fillStyle = INK; g.font = `700 30px ${MONO}`; g.textAlign = 'left'; g.fillText('НЬЮ-ДЖЕРСИ', -500, 290); g.fillText('МЭН', 330, -320);
      drawPen(g, it.rt, t); const p = eio(prog(t, it.rt.t0, it.rt.t0 + it.rt.dur));
      if (p > 0) { const i = Math.min(route.length - 2, Math.floor(p * (route.length - 1))), u = p * (route.length - 1) - i; const x = lerp(route[i][0], route[i + 1][0], u), y = lerp(route[i][1], route[i + 1][1], u);
        g.fillStyle = RED; g.beginPath(); g.arc(x, y, 14, 0, 7); g.fill(); }
    } }).rt = pen(route, Wt('везет'), 1.6, { width: 7, color: '#c62a22' });
  photo({ x: A2[0] + 560, y: A2[1] + 160, w: 640, rot: .05, order: 210, tIn: Wt('дочь') + .1, dur: .3, enter: 'drop', dx: 200, dy: -240, src: vid('car', Wt('дочь'), 0),
    caption: typed('МЕДОУ И ПАПА', Wt('медоу') + .3, .03, { silent: true }), capSize: 26 });
  tag({ x: A2[0] + 520, y: A2[1] - 300, w: 560, rot: -.05, label: 'ЗАБОТЛИВЫЙ ПАПА', tIn: Wt('заботливый') + .05, order: 220, size: 40 });
  link(A2[0] - 700, A2[1] - 330, Wt('сериале') + .6, Wt('тони') + .1);
  travel(Wt('сериале') + .6, Wt('тони') + .1);
  hold(Wt('тони') + .1, Wt('колледжи') + .5, A2[0] - 120, A2[1] - 20, 1.0, -.01, { dz: .06 });
  hold(Wt('колледжи') + .9, Wt('машине') + .3, A2[0] + 500, A2[1] + 60, 1.2, .02, { dz: .08 });

  // S3 · Meadow asks (A3)
  const A3 = [4400, 1800]; lamp(A3[0], A3[1] - 200, 1700, 1);
  photo({ x: A3[0] - 380, y: A3[1], w: 700, rot: -.02, order: 300, tIn: Wt('медоу', 2) - .1, dur: .3, enter: 'drop', dx: -200, dy: -200, src: vid('meadowask', Wt('медоу', 2), 0) });
  const tr = typedCard({ x: A3[0] + 520, y: A3[1] + 40, w: 640, h: 440, rot: .025, order: 310, tIn: Wt('медоу', 2) + .1, dur: .3, enter: 'slide', dx: 500, dy: 100 },
    [[typed('СТЕНОГРАММА · МАШИНА', Wt('медоу', 2) + .3, .02, { silent: true }), -290, -110, `700 28px ${MONO}`], [typed('МЕДОУ:', Wt('спрашивает'), .04), -290, -10, `400 30px ${MONO}`],
     [typed('— Ты в мафии?', Wt('связан'), .05, { heavy: true }), -290, 60, `700 46px ${MONO}`]]);
  link(A3[0] - 750, A3[1] - 240, Wt('машине') + .3, Wt('медоу', 2) + .2);
  travel(Wt('машине') + .3, Wt('медоу', 2) + .2);
  hold(Wt('медоу', 2) + .2, Wt('мафией') + .6, A3[0] + 60, A3[1] + 10, .98, .01, { dz: .14 });

  // S4 · informant at the gas station (A4)
  const A4 = [2100, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  photo({ x: A4[0] - 640, y: A4[1] - 100, w: 520, rot: -.05, order: 400, tIn: Wt('тони', 2) + .1, dur: .3, enter: 'drop', dx: -150, dy: -200, src: vid('tonyspot', Wt('тони', 2), 0) });
  photo({ x: A4[0] + 40, y: A4[1] + 60, w: 640, rot: .03, order: 410, tIn: Wt('заправке') + .05, dur: .3, enter: 'drop', dx: 0, dy: -240, src: vid('febby', Wt('заправке'), 0),
    caption: typed('ЗАПРАВКА', Wt('заправке') + .3, .04, { silent: true }), capSize: 28 });
  const idc = card({ x: A4[0] + 780, y: A4[1] - 160, w: 640, h: 380, rot: .04, order: 420, color: '#dfe6ea', tIn: Wt('который') - .05, dur: .3, enter: 'slide', dx: 500, dy: -300,
    text: (g, t) => {
      g.fillStyle = '#5a3a2a'; g.fillRect(-320, -190, 640, 64); g.fillStyle = '#efe7dd'; g.font = `800 30px ${SANS}`; g.textAlign = 'left'; g.letterSpacing = '4px'; g.fillText('ВОДИТЕЛЬСКИЕ ПРАВА', -295, -148); g.letterSpacing = '0px';
      g.fillStyle = INK; g.font = `400 22px ${MONO}`; g.fillText('ИМЯ', -295, -80);
      const A = 'ФЕББИ ПЕТРУЛИО', B = 'ФРЕД ПИТЕРС', ABC = 'АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЭЮЯ', t0 = Wt('чужим') - .3; let s = '';
      for (let k = 0; k < Math.max(A.length, B.length); k++) { const tk = t0 + .3 + k * .045; if (t < t0) s += A[k] || ' '; else if (t >= tk) s += B[k] || ' '; else s += (B[k] || ' ') === ' ' ? ' ' : ABC[Math.floor((t * 37 + k * 7) * 3) % ABC.length]; }
      g.font = `700 46px ${MONO}`; g.fillText(s, -295, -20);
    } });
  for (let k = 0; k < 14; k++) sfx('roll', Wt('чужим') + k * .045);
  idc.stamps = [stamp('ИНФОРМАТОР', Wt('информатором') + .1, { x: 30, y: 100, size: 58, rot: -.08, shake: 12 })];
  link(A4[0] - 900, A4[1] - 290, Wt('мафией') + .6, Wt('тони', 2) + .2);
  travel(Wt('мафией') + .6, Wt('тони', 2) + .2);
  hold(Wt('тони', 2) + .2, Wt('банды') + .3, A4[0] - 300, A4[1] - 20, 1.05, -.015, { dz: .06 });
  hold(Wt('который') + .3, Wt('именем') + .6, A4[0] + 680, A4[1] - 120, 1.25, .02, { dz: .08 });

  // S5 · tour brochure vs tracking vs strangling (A5)
  const A5 = [-200, 1900]; lamp(A5[0], A5[1] - 200, 2200, 1);
  typedCard({ x: A5[0] - 820, y: A5[1] - 160, w: 520, h: 640, rot: -.04, order: 500, color: '#e9eef2', lined: false, tIn: Wt('экскурсиями') - .1, dur: .3, enter: 'slide', dx: -500, dy: 0,
    extra: (g) => { g.fillStyle = '#2e4a6b'; g.fillRect(-260, -320, 520, 120); g.fillStyle = '#e9eef2'; g.font = `800 40px ${SANS}`; g.textAlign = 'center'; g.fillText('КОЛЛЕДЖ', 0, -246); } },
    [[typed('ЭКСКУРСИЯ', Wt('экскурсиями'), .05), 0, -120, `700 38px ${MONO}`, INK, 'center'], [typed('10:00 кампус', Wt('дочери'), .03, { silent: true }), -220, -30, `400 28px ${MONO}`], [typed('12:00 общежитие', Wt('дочери') + .4, .03, { silent: true }), -220, 30, `400 28px ${MONO}`], [typed('14:00 ...', Wt('дочери') + .8, .03, { silent: true }), -220, 90, `400 28px ${MONO}`]]);
  photo({ x: A5[0] - 60, y: A5[1] - 220, w: 520, rot: .05, order: 510, tIn: Wt('выслеживает') + .05, dur: .3, enter: 'drop', dx: 0, dy: -200, src: vid('track', Wt('выслеживает'), 1.8) });
  const st = photo({ x: A5[0] + 640, y: A5[1] + 140, w: 720, rot: -.03, order: 520, tIn: Wt('душит') - .05, dur: .28, enter: 'drop', dx: 200, dy: -240, src: vid('strangle', Wt('душит'), 1.0) });
  st.stamps = [stamp('УБИЙСТВО', Wt('руками'), { x: 0, y: 70, size: 76, rot: -.1, shake: 18 })];
  link(A5[0] - 1080, A5[1] - 480, Wt('именем') + .6, Wt('между') + .3);
  travel(Wt('именем') + .6, Wt('между') + .3);
  camKey(Wt('между') + .3, A5[0] - 700, A5[1] - 120, 1.1, -.02); camKey(Wt('выслеживает') + .3, A5[0] - 150, A5[1] - 160, 1.15, .01);
  hold(Wt('душит') + .1, Wt('руками') + .6, A5[0] + 620, A5[1] + 160, 1.3, -.025, { dz: .08 });

  // S6 · back to Meadow (A6)
  const A6 = [-100, 3700]; lamp(A6[0], A6[1] - 200, 1700, 1);
  photo({ x: A6[0], y: A6[1] - 60, w: 780, rot: .02, order: 600, tIn: Wt('возвращается') - .05, dur: .3, enter: 'drop', dx: 0, dy: -260, src: vid('return', Wt('возвращается'), 0) });
  typedCard({ x: A6[0] + 40, y: A6[1] + 400, w: 920, h: 130, rot: -.015, order: 610, lined: false, tIn: Wt('как') - .1, dur: .3, enter: 'slide', dx: 0, dy: 300 }, [[typed('КАК НИ В ЧЁМ НЕ БЫВАЛО', Wt('как'), .035), 0, 16, `700 46px ${MONO}`, INK, 'center']]);
  link(A6[0] - 400, A6[1] - 300, Wt('руками') + .6, Wt('потом') + .2);
  travel(Wt('руками') + .6, Wt('потом') + .2);
  hold(Wt('потом') + .2, Wt('бывало') + .6, A6[0] + 10, A6[1] + 60, 1.1, .015, { dz: .08 });

  // S7 · two sides, double exposure (A7)
  const A7 = [2300, 3700]; lamp(A7[0], A7[1] - 200, 2000, 1);
  const tMerge = Wt('совмещать') - .2;
  item({ x: A7[0], y: A7[1], w: 1500, h: 700, order: 700, tIn: Wt('одного') - .2, dur: .3, enter: 'slide', dx: 0, dy: 500,
    draw: (g, t) => {
      const m = eio(prog(t, tMerge, tMerge + .9)), w = 640, h = photoH(640), sep = lerp(370, 0, m);
      const drawP = (src, x, a, r, label, la) => { g.save(); g.translate(x, 0); g.rotate(r * (1 - m)); g.globalAlpha *= a; drawPhoto(g, t, { w, h, src, order: 701 + (x > 0) }); if (la > 0) { g.globalAlpha *= la; g.fillStyle = INK; g.font = `800 40px ${SANS}`; g.textAlign = 'center'; g.fillText(label, 0, h / 2 - 22); } g.restore(); };
      drawP(vid('car', Wt('одного') - .2, 3.0), -sep, 1, -.04, 'ОТЕЦ', prog(t, Wt('тони-отцу'), Wt('тони-отцу') + .2) * (1 - m));
      if (t > Wt('обе') - .1) drawP(vid('strangle', Wt('обе') - .1, 4.0), sep, lerp(clamp((t - Wt('обе') + .1) * 4), .5, m), .04, 'УБИЙЦА', prog(t, Wt('тони-убийцу'), Wt('тони-убийцу') + .2) * (1 - m));
      if (m > .6) { g.globalAlpha = (m - .6) / .4; g.fillStyle = INK; g.font = `800 40px ${SANS}`; g.textAlign = 'center'; g.fillText('ОДИН ЧЕЛОВЕК', 0, h / 2 - 22); g.globalAlpha = 1; }
    } });
  sfx('drop', Wt('обе'), { size: 640 }); sfx('slide', tMerge, { dur: .9 }); sfx('hitlow', tMerge + .9);
  link(A7[0] - 760, A7[1] - 330, Wt('бывало') + .6, Wt('сериал', 2) + .3);
  travel(Wt('бывало') + .6, Wt('сериал', 2) + .3);
  camKey(Wt('сериал', 2) + .3, A7[0] - 120, A7[1] - 20, .92, -.01); camKey(Wt('пугает'), A7[0], A7[1], .86, 0);
  hold(Wt('пугает') + .4, Wt('совмещать') + 1.0, A7[0], A7[1] + 10, .95, .01, { dz: .25 });

  // S8 · AJ (A8)
  const A8 = [4700, 3600]; lamp(A8[0], A8[1] - 200, 2000, 1);
  typedCard({ x: A8[0] - 760, y: A8[1] - 330, w: 480, h: 160, rot: -.04, order: 800, lined: false, tIn: Wt('позже') - .1, dur: .3, enter: 'slide', dx: -300, dy: 0 }, [[typed('ПОВТОР: СЫН', Wt('повторится'), .04), 0, 16, `700 40px ${MONO}`, INK, 'center']]);
  photo({ x: A8[0] - 300, y: A8[1] + 80, w: 560, rot: -.04, order: 810, tIn: Wt('эй-джей') - .05, dur: .3, enter: 'drop', dx: -100, dy: -240, src: vid('ajsit', Wt('эй-джей'), 0), caption: typed('ЭЙ-ДЖЕЙ', Wt('эй-джей') + .2, .05, { silent: true }), capSize: 28 });
  tag({ x: A8[0] - 760, y: A8[1] + 470, w: 470, rot: -.05, label: 'ПОТЕРЯННЫЙ', tIn: Wt('потерянным') + .05, order: 820 });
  tag({ x: A8[0] + 60, y: A8[1] + 520, w: 500, rot: .05, label: 'ДЕПРЕССИВНЫЙ', tIn: Wt('депрессивным') + .05, order: 821 });
  const pool = photo({ x: A8[0] + 520, y: A8[1] - 140, w: 640, rot: .05, order: 830, tIn: Wt('утопиться') - .05, dur: .3, enter: 'drop', dx: 200, dy: -200, src: vid('ajpool', Wt('утопиться'), 0) });
  pool.stamps = [stamp('СЕЗОН 6', Wt('шестом') + .3, { x: 150, y: -110, size: 46, rot: .08, shake: 6 })];
  sfx('splash', Wt('утопиться') + 1.0);
  link(A8[0] - 1000, A8[1] - 410, Wt('совмещать') + 1.0, Wt('позже') + .2);
  travel(Wt('совмещать') + 1.0, Wt('позже') + .2);
  camKey(Wt('позже') + .2, A8[0] - 520, A8[1] - 50, 1.0, -.01); hold(Wt('эй-джей') + .2, Wt('депрессивным') + .6, A8[0] - 360, A8[1] + 200, 1.05, -.015, { dz: .05 });
  hold(Wt('шестом'), Wt('бассейне') + .4, A8[0] + 480, A8[1] - 100, 1.25, .02, { dz: .07 });

  // S9 · the hug: not a boss, a father (A9)
  const A9 = [6900, 3500]; lamp(A9[0], A9[1] - 200, 2000, 1);
  const hug = photo({ x: A9[0], y: A9[1] - 40, w: 900, rot: -.015, order: 900, tIn: Wt('вытаскивает') - .1, dur: .3, enter: 'drop', dx: 0, dy: -280, src: vid('ajhug', Wt('вытаскивает'), 0) });
  const nb = typedCard({ x: A9[0] + 30, y: A9[1] + 470, w: 820, h: 150, rot: .015, order: 910, lined: false, tIn: Wt('момент') - .05, dur: .3, enter: 'slide', dx: 0, dy: 300 },
    [[typed('НЕ БОСС', Wt('босса'), .05), -200, 20, `800 60px ${SANS}`, INK, 'center'], [typed('ОТЕЦ', Wt('отца') + .15, .06, { heavy: true }), 220, 20, `800 60px ${SANS}`, RED, 'center']]);
  nb.pens = [pen([[-330, 6], [-70, 0]], Wt('отца') - .15, .22, { width: 9 })];
  hug.stamps = [stamp('НАПУГАН', Wt('напуган'), { x: 220, y: 120, size: 84, rot: -.08, shake: 16 })];
  focus(Wt('ярости') - .3, Wt('себя') + .8, [hug], .9);
  link(A9[0] - 470, A9[1] - 330, Wt('бассейне') + .4, Wt('вытаскивает') + .2);
  travel(Wt('бассейне') + .4, Wt('вытаскивает') + .2);
  camKey(Wt('вытаскивает') + .2, A9[0], A9[1] - 30, 1.05, .01); camKey(Wt('себя') + .3, A9[0] - 20, A9[1] - 60, 1.45, -.02);
  camKey(Wt('момент') + .3, A9[0] + 20, A9[1] + 200, 1.0, 0); camKey(Wt('напуган') + .3, A9[0] + 60, A9[1] + 120, 1.1, .015); camKey(T_END, A9[0] + 80, A9[1] + 100, 1.16, .02);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8], [6000, 4500, 'ashtray', 1.0, 1.9], [8000, 3000, 'pen', 1.2, 1.85, -.3]]);
  CAMK.sort((a, b) => a.t - b.t);
}
