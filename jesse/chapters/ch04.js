// 04 · ГЕЙЛ
CH_V0 = 221.6;
const [T_START, T_END] = chRange(4);
function buildScenes() {
  const D = [0, 0]; divider(D, 4, 'ГЕЙЛ', T_START);
  hold(T_START, Wt('третьем') + .3, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · working for Gus; Gus plans to replace Walter with Gale; Gale must vanish
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, 1);
  pw('gus', Wt('гуса') - .3, { x: A1[0] - 560, y: A1[1] - 40, w: 520, rot: -.04, order: 100, caption: capt('ГУС ФРИНГ', Wt('фринга')), capSize: 26 });
  pw('gale', Wt('гейлом') - .4, { x: A1[0] + 120, y: A1[1] - 20, w: 620, rot: .03, order: 110, off: 0, caption: capt('ГЕЙЛ БЕТИКЕР · ЗАМЕНА', Wt('бетикером')), capSize: 22 });
  const ex = typedCard({ x: A1[0] + 720, y: A1[1] + 260, w: 460, h: 180, rot: .05, order: 120, tIn: Wt('выжить') - .3, dur: .3, enter: 'slide', dx: 400, dy: 200 },
    [[typed('ЧТОБЫ ВЫЖИТЬ:', Wt('выжить'), .04), -200, -20, `700 32px ${MONO}`], [typed('Гейл должен исчезнуть', Wt('исчез') - .3, .03), -200, 40, `700 28px ${MONO}`, RED]]);
  tag({ x: A1[0] - 560, y: A1[1] + 320, w: 440, rot: .04, label: 'УОЛТЕР — ЗАЛОЖНИК', tIn: Wt('заложниках') - .2, order: 130, size: 34 });
  goTo(A1, Wt('третьем') + .3, Wt('сезоне') + .1, A1[0] - 860, A1[1] - 420);
  hold(Wt('сезоне') + .1, Wt('фринга') + .4, A1[0] - 520, A1[1] - 40, 1.08, -.015, { dz: .05 });
  camKey(Wt('гейлом') + .2, A1[0] + 120, A1[1] - 20, 1.08, .01); camKey(Wt('исчез') + .4, A1[0] + 600, A1[1] + 200, 1.0, .015);
  camKey(Wt('заложниках') + .4, A1[0] - 400, A1[1] + 220, .95, -.01);

  // S2 · Walter calls Jesse; Jesse goes. The door, the gun, shaking hands, tears; Gale begs; Jesse fires
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2100, .9);
  const jg = pw('jgun', Wt('звонит') - .3, { x: A2[0] - 260, y: A2[1] - 20, w: 860, rot: -.01, order: 200, off: 0 });
  const tr = card({ x: A2[0] + 640, y: A2[1] - 120, w: 440, h: 380, rot: .03, order: 210, lined: true, tIn: Wt('трясутся') - .3, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => drawChecks(g, t, it.cl, `700 32px ${MONO}`) });
  tr.cl = [checkLine('ПИСТОЛЕТ', Wt('пистолетом') + .1, 'v', -170, -110), checkLine('РУКИ ДРОЖАТ', Wt('руки') + .05, 'v', -170, -30), checkLine('СЛЁЗЫ', Wt('слёзы') + .05, 'v', -170, 50)];
  const gf = pw('jgunface', Wt('просит') - .3, { x: A2[0] + 380, y: A2[1] + 360, w: 640, rot: .02, order: 220, off: 7 });
  sfx('shot', Wt('стреляет') + .2); shake(Wt('стреляет') + .2, 22);
  FX.push({ name: 'zoomblur', fn: t => Math.sin(Math.PI * clamp(prog(t, Wt('стреляет') + .15, Wt('стреляет') + .7))) * .9 });
  goTo(A2, Wt('заложниках') + .5, Wt('поэтому') + .1, A2[0] - 900, A2[1] - 420);
  hold(Wt('поэтому') + .1, Wt('едет') + .5, A2[0] - 260, A2[1] - 20, 1.05, -.01, { dz: .06 });
  camKey(Wt('трясутся') + .2, A2[0] + 400, A2[1] - 60, 1.0, .015); camKey(Wt('просит') + .1, A2[0] + 380, A2[1] + 340, 1.1, .01);
  camKey(Wt('стреляет') + .3, A2[0] + 380, A2[1] + 350, 1.35, .015);

  // S3 · not for money, not for power: to save Walter, whom he still sees as almost a father
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2000, 1);
  const wh = typedCard({ x: A3[0] - 300, y: A3[1] - 40, w: 760, h: 420, rot: -.02, order: 300, tIn: Wt('выстреле') - .3, dur: .3, enter: 'slide', dx: 0, dy: 500 },
    [[typed('ЗАЧЕМ?', Wt('весь'), .05), -330, -120, `800 48px ${SANS}`], [typed('— деньги', Wt('денег') - .1, .04), -310, -40, `700 34px ${MONO}`], [typed('— власть', Wt('власти') - .1, .04), -310, 20, `700 34px ${MONO}`],
     [typed('→ спасти Уолтера', Wt('спасти') - .1, .035), -310, 110, `800 40px ${SANS}`, RED]]);
  wh.pens = [pen([[-320, -50], [-80, -54]], Wt('денег') + .3, .2, { width: 7 }), pen([[-320, 10], [-80, 6]], Wt('власти') + .3, .2, { width: 7 })];
  pw('rvin', Wt('отцом') - .6, { x: A3[0] + 560, y: A3[1] - 60, w: 520, rot: .04, order: 310, off: 2, caption: capt('«ПОЧТИ ОТЕЦ»', Wt('отцом') - .3), capSize: 26 });
  card({ x: A3[0] + 100, y: A3[1] + 400, w: 1, h: 1, shadow: 0, lit: false, order: 320, tIn: 0, scrawls: [scrawl('УМИРАЕТ ИЗНУТРИ', Wt('умирать') - .2, .55, { size: 64, rot: -.04 })] });
  goTo(A3, Wt('стреляет') + .9, Wt('выстреле') + .1, A3[0] - 860, A3[1] - 440);
  hold(Wt('выстреле') + .1, Wt('власти') + .5, A3[0] - 300, A3[1] - 40, 1.1, -.015, { dz: .05 });
  camKey(Wt('спасти') + .3, A3[0] + 200, A3[1] - 40, .95, .01); camKey(Wt('отцом') + .3, A3[0] + 520, A3[1] - 60, 1.08, .015);
  camKey(Wt('умирать') + .3, A3[0] + 120, A3[1] + 220, .95, 0); camKey(T_END, A3[0] + 120, A3[1] + 260, 1.02, -.01);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
