// 02 · ЛИШНИЙ  (insert: "Да, мистер Уайт! Ну давай, наука!")
CH_V0 = 103.0;
const [T_START, T_END] = chRange(2);
function buildScenes() {
  const D = [0, 0]; divider(D, 2, 'ЛИШНИЙ', T_START);
  hold(T_START, Wt('первоначальному') + .3, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · the original plan: Jesse dies in season one
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 1900, 1);
  const pl = typedCard({ x: A1[0] - 300, y: A1[1] - 20, w: 820, h: 460, rot: -.02, order: 100, tIn: Wt('плану') - .3, dur: .3, enter: 'slide', dx: -500, dy: 0 },
    [[typed('ПЕРВОНАЧАЛЬНЫЙ ПЛАН', Wt('плану'), .035), -370, -150, `800 40px ${SANS}`], [typed('Джесси: погибает, сезон 1', Wt('погибнуть') - .2, .03), -370, -70, `700 32px ${MONO}`],
     [typed('В. Гиллиган:', Wt('винс'), .04), -370, 20, `700 32px ${MONO}`], [typed('«одноразовый персонаж»', Wt('одноразового') - .1, .03), -370, 80, `400 italic 32px "DejaVu Serif"`, RED]]);
  pl.pens = [pen([[-380, -80], [140, -86]], Wt('передумали'), .3, { width: 8 })];
  pw('jyellow', Wt('аарон') - .3, { x: A1[0] + 620, y: A1[1] - 40, w: 560, rot: .04, order: 110, off: 2, caption: capt('ААРОН ПОЛ', Wt('пол')), capSize: 28 });
  goTo(A1, Wt('первоначальному') + .3, Wt('плану') + .1, A1[0] - 800, A1[1] - 400);
  hold(Wt('плану') + .1, Wt('персонажа') + .4, A1[0] - 300, A1[1] - 20, 1.1, -.015, { dz: .05 });
  camKey(Wt('аарон') + .2, A1[0] + 560, A1[1] - 40, 1.08, .015); camKey(Wt('передумали') + .4, A1[0] + 200, A1[1] - 20, .88, 0);

  // S2 · funny, clumsy, loud, alive: the bathtub through the floor
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  const tr = card({ x: A2[0] - 620, y: A2[1] - 60, w: 460, h: 420, rot: -.03, order: 200, lined: true, tIn: Wt('получился') - .3, dur: .3, enter: 'slide', dx: -400, dy: 0,
    text: (g, t, it) => drawChecks(g, t, it.cl, `700 32px ${MONO}`) });
  tr.cl = [checkLine('СМЕШНОЙ', Wt('смешным') + .1, 'v', -180, -120), checkLine('НЕЛЕПЫЙ', Wt('нелепым') + .1, 'v', -180, -40), checkLine('ГРОМКИЙ', Wt('громким') + .1, 'v', -180, 40), checkLine('ЖИВОЙ', Wt('живым') + .05, 'v', -180, 120)];
  pw('bathtub', Wt('растворяет') - .3, { x: A2[0] + 60, y: A2[1] - 240, w: 500, rot: .04, order: 210, off: 0 });
  const tf = pw('tubfall', Wt('проваливается') - .6, { x: A2[0] + 400, y: A2[1] + 200, w: 680, rot: -.02, order: 220, off: 4 });
  sfx('crash', Wt('=пол', 2)); shake(Wt('=пол', 2), 18);
  goTo(A2, Wt('передумали') + .4, Wt('получился') + .1, A2[0] - 860, A2[1] - 420);
  hold(Wt('получился') + .1, Wt('живым') + .4, A2[0] - 600, A2[1] - 40, 1.1, -.015, { dz: .05 });
  camKey(Wt('растворяет') + .2, A2[0] + 60, A2[1] - 220, 1.08, .01); camKey(Wt('=пол', 2) + .4, A2[0] + 380, A2[1] + 190, 1.15, -.01);

  // S3 · "Yeah, science!" (original dub) — the only one who really enjoys this
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2000, 1);
  typedCard({ x: A3[0] - 560, y: A3[1] - 380, w: 560, h: 170, rot: -.04, order: 295, lined: false, tIn: Wt('кричит') - .2, dur: .3, enter: 'slide', dx: -400, dy: 0 },
    [[typed('«ДА, НАУКА!»', Wt('кричит') + .45, .05), 0, 18, `800 50px ${SANS}`, RED, 'center']]);
  dlgShot('d_science', A3[0], A3[1] - 20, { w: 940, order: 300 });
  const sc = card({ x: A3[0], y: A3[1] + 450, w: 1, h: 1, shadow: 0, lit: false, order: 310, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  sc.s = stamp('НАУКА!', DLGT.d_science + 2.8, { size: 96, rot: -.07, shake: 18 });
  card({ x: A3[0] + 620, y: A3[1] + 300, w: 1, h: 1, shadow: 0, lit: false, order: 320, tIn: 0, scrawls: [scrawl('ЕДИНСТВЕННЫЙ, КТО РАДУЕТСЯ', Wt('радуется') - .6, .6, { size: 46, rot: -.05 })] });
  goTo(A3, Wt('=пол', 2) + .5, Wt('кричит') + .1, A3[0] - 860, A3[1] - 420);
  hold(Wt('кричит') + .1, DLGT.d_science - .2, A3[0] - 500, A3[1] - 340, 1.15, -.015, { dz: .05 });
  camKey(DLGT.d_science + .1, A3[0], A3[1] - 20, 1.15, 0); camKey(DLGT.d_science + 4.6, A3[0], A3[1] + 20, 1.3, .01);
  camKey(Wt('радуется') + .3, A3[0] + 300, A3[1] + 180, .95, .01);

  // S4 · three Emmys; the throwaway character became the heart of the show
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  typedCard({ x: A4[0] - 400, y: A4[1] - 300, w: 560, h: 200, rot: -.04, order: 400, tIn: Wt('итоге') - .3, dur: .3, enter: 'slide', dx: -400, dy: -200 },
    [[typed('ААРОН ПОЛ', Wt('аарон', 2), .04), -240, -20, `700 36px ${MONO}`], [typed('«ЭММИ» × 3', Wt('премии') - .2, .05), -240, 50, `800 44px ${SANS}`, RED]]);
  item({ x: A4[0] - 400, y: A4[1] - 40, w: 560, h: 200, order: 410, shadow: 0, lit: false, tIn: 0, draw: (g, t) => {
    for (let k = 0; k < 3; k++) { const tk = Wt('три') + k * .2; if (t < tk) continue; const p = eio(clamp((t - tk) / .2)), x = -120 + k * 120;
      g.save(); g.translate(x, 20 - 40 * (1 - p)); g.globalAlpha = p; g.fillStyle = '#c9a33a'; g.beginPath(); g.moveTo(-24, 70); g.lineTo(24, 70); g.lineTo(14, 50); g.lineTo(-14, 50); g.fill();
      g.fillRect(-5, -20, 10, 72); g.beginPath(); g.arc(0, -36, 18, 0, 7); g.fill(); g.strokeStyle = '#c9a33a'; g.lineWidth = 6; g.beginPath(); g.arc(0, -50, 34, Math.PI * 1.1, Math.PI * 1.9); g.stroke(); g.restore(); } } });
  for (let k = 0; k < 3; k++) sfx('pen', Wt('три') + k * .2, { dur: .08 });
  const ht = pw('jhug', Wt('=персонаж') - .3, { x: A4[0] + 420, y: A4[1] - 20, w: 680, rot: .03, order: 420, off: 6 });
  ht.stamps = [stamp('СЕРДЦЕ СЕРИАЛА', Wt('сердцем') - .1, { x: 0, y: 60, size: 56, rot: -.07, shake: 14 })];
  goTo(A4, Wt('радуется') + .5, Wt('итоге') + .1, A4[0] - 860, A4[1] - 420);
  hold(Wt('итоге') + .1, Wt('эмми') + .4, A4[0] - 400, A4[1] - 160, 1.1, -.015, { dz: .05 });
  camKey(Wt('=персонаж') + .3, A4[0] + 400, A4[1] - 20, 1.05, .01); camKey(T_END, A4[0] + 420, A4[1] + 20, 1.2, .015);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
