// 08 · ПРЕДАТЕЛЬ — the compound; Eladio approves Nacho; the 3 a.m. gate; kitchen fire; the attack (insert); Lalo survives; Nacho gone
CH_V0 = 444.04;
const [T_START, T_END] = chRange(8);
function buildScenes() {
  const D = [0, 0]; divider(D, 8, 'ПРЕДАТЕЛЬ', T_START);
  hold(T_START, Wt('мексике') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · the big house in Mexico; family, guards; Eladio approves Nacho as the new man in the North
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2100, 1);
  pw('compound', Wt('дом') - .5, { x: A1[0] - 560, y: A1[1] - 120, w: 520, rot: -.04, order: 100, off: 1, caption: capt('ДОМ В МЕКСИКЕ', Wt('охрана') - .2), capSize: 20 });
  pw('eladio', Wt('представляет') - .4, { x: A1[0] + 200, y: A1[1] - 80, w: 560, rot: .02, order: 110, off: 1 });
  pw('nachoeladio', Wt('одобряет') - .6, { x: A1[0] - 560, y: A1[1] + 280, w: 460, rot: .03, order: 120, off: 1, caption: capt('НОВЫЙ ЧЕЛОВЕК НА СЕВЕРЕ', Wt('севере') - .2), capSize: 18 });
  goTo(A1, Wt('мексике') + .2, Wt('дом') - .2, A1[0] - 860, A1[1] - 460);
  camKey(Wt('дом') + .1, A1[0] - 540, A1[1] - 100, 1.05, -.015); camKey(Wt('представляет') + .1, A1[0] + 200, A1[1] - 60, 1.02, .01);
  camKey(Wt('одобряет') - .2, A1[0] - 400, A1[1] + 200, .98, -.01);

  // S2 · at night Gus's killers come; Nacho must open the back gate at 3 a.m.; Lalo isn't asleep; kitchen fire, distraction, the gate
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 1900, .9);
  const nt = card({ x: A2[0] - 560, y: A2[1] - 100, w: 460, h: 300, rot: -.03, order: 200, color: '#f3efe2', lined: false, tIn: Wt('ворота') - .5, dur: .3, enter: 'slide', dx: -400, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -60, `700 26px ${MONO}`, INK, 'center'); drawTyped(g, it.b, t, 0, 40, `800 84px ${SANS}`, RED, 'center'); } });
  nt.a = typed('задние ворота', Wt('ворота') - .2, .04); nt.b = typed('03:00', Wt('три') - .1, .08);
  pw('kitchenfire', Wt('пожар') - .6, { x: A2[0] + 160, y: A2[1] - 100, w: 520, rot: .02, order: 210, off: 1, caption: capt('ПОЖАР НА КУХНЕ', Wt('пожар')), capSize: 20 });
  const gt = pw('nachogate', Wt('открывает') - .6, { x: A2[0] + 160, y: A2[1] + 300, w: 520, rot: -.02, order: 220, off: 1 });
  gt.stamps = [stamp('ВОРОТА ОТКРЫТЫ', Wt('открывает') + .4, { x: 0, y: 60, size: 48, rot: -.07, shake: 12 })];
  card({ x: A2[0] - 560, y: A2[1] + 260, w: 1, h: 1, shadow: 0, lit: false, order: 230, tIn: 0, scrawls: [scrawl('Лало не спит', Wt('спит') - .4, .5, { size: 50, rot: -.05 })] });
  goTo(A2, Wt('одобряет') + .5, Wt('ночью') - .2, A2[0] - 860, A2[1] - 460);
  camKey(Wt('ворота') + .1, A2[0] - 540, A2[1] - 60, 1.05, -.015); camKey(Wt('спит') + .1, A2[0] - 520, A2[1] + 200, 1.02, -.01);
  camKey(Wt('пожар') + .1, A2[0] + 160, A2[1] - 80, 1.05, .015); camKey(Wt('открывает') + .2, A2[0] + 160, A2[1] + 280, 1.05, .01);

  // S3 · the attack (original scene)
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 1800, .85);
  dlgShot('d_attack', A3[0], A3[1] - 20, { w: 960, order: 300 });
  goTo(A3, DLGT.d_attack - .8, DLGT.d_attack - .1, A3[0] - 860, A3[1] - 460);
  camKey(DLGT.d_attack + .1, A3[0], A3[1] - 20, 1.08, 0); camKey(DLGT.d_attack + 15.8, A3[0], A3[1] + 30, 1.2, .01);

  // S4 · killers slaughter almost everyone; Lalo survives, kills all attackers; makes the last one call and report success; Nacho is gone — he understands
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  const sv = pw('lalotunnel', Wt('выживает') - .6, { x: A4[0] - 560, y: A4[1] - 120, w: 460, rot: -.04, order: 400, off: 1 });
  sv.stamps = [stamp('ВЫЖИЛ', Wt('выживает') + .1, { x: 0, y: 60, size: 60, rot: -.07, shake: 16 })];
  pw('caller', Wt('последнего') - .5, { x: A4[0] + 160, y: A4[1] - 60, w: 600, rot: .02, order: 410, off: 1, caption: capt('«ЗАДАНИЕ ВЫПОЛНЕНО»', Wt('выполнено') - .3), capSize: 22 });
  const ns = pw('nachoface', Wt('исчез') - .6, { x: A4[0] - 560, y: A4[1] + 300, w: 380, rot: .04, order: 420 });
  ns.stamps = [stamp('ПРЕДАТЕЛЬ', Wt('понимает') + .1, { x: 0, y: 40, size: 50, rot: -.08, shake: 16 })];
  goTo(A4, DLGT.d_attack + 16.1, Wt('наёмники') + .3, A4[0] - 860, A4[1] - 460);
  camKey(Wt('выживает'), A4[0] - 540, A4[1] - 100, 1.05, -.015); camKey(Wt('последнего') + .1, A4[0] + 160, A4[1] - 40, 1.02, .01);
  camKey(Wt('исчез') - .1, A4[0] - 540, A4[1] + 260, 1.05, -.015); camKey(T_END, A4[0] - 540, A4[1] + 280, 1.14, -.015);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
