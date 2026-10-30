// 04 · ПОЧТОВАЯ КОМНАТА
CH_V0 = 265.5;
const [T_START, T_END] = chRange(4);
function buildScenes() {
  const D = [0, 0]; divider(D, 4, 'ПОЧТОВАЯ КОМНАТА', T_START);
  hold(T_START, Wt('хорошего') + .3, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · the mailroom at his brother's firm; studying in secret; American Samoa, nights, years; the bar exam
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, 1);
  pw('hhm', Wt('устраивается') - .3, { x: A1[0] - 400, y: A1[1] - 20, w: 720, rot: -.02, order: 100, off: 2, caption: capt('HHM · ПОЧТОВАЯ КОМНАТА', Wt('комнате')), capSize: 22 });
  const dp = card({ x: A1[0] + 560, y: A1[1] - 40, w: 540, h: 440, rot: .03, order: 110, color: '#f3efe2', lined: false, tIn: Wt('заочно') - .3, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => { g.strokeStyle = '#8a6a2a'; g.lineWidth = 6; g.strokeRect(-250, -200, 500, 400);
      g.fillStyle = INK; g.font = `700 24px "DejaVu Serif"`; g.textAlign = 'center'; g.fillText('UNIVERSITY OF', 0, -130); g.font = `800 34px "DejaVu Serif"`; g.fillText('AMERICAN SAMOA', 0, -85);
      g.font = `400 italic 24px "DejaVu Serif"`; g.fillText('Juris Doctor · заочно', 0, -30);
      drawTyped(g, it.a, t, 0, 40, `700 26px ${MONO}`, INK, 'center'); drawTyped(g, it.b, t, 0, 90, `700 26px ${MONO}`, INK, 'center'); drawStamp(g, it.s, t); } });
  dp.a = typed('годами · по ночам', Wt('годами') - .1, .04); dp.b = typed('экзамен: СДАН', Wt('экзамен') - .1, .04); dp.s = { text: 'ЮРИСТ', t: Wt('адвоката'), size: 60, rot: -.1, x: 120, y: 150 };
  goTo(A1, Wt('хорошего') + .3, Wt('устраивается') + .1, A1[0] - 760, A1[1] - 400);
  hold(Wt('устраивается') + .1, Wt('юриста') + .3, A1[0] - 400, A1[1] - 20, 1.05, -.015, { dz: .05 });
  camKey(Wt('заочно') + .2, A1[0] + 500, A1[1] - 40, 1.05, .015); camKey(Wt('пятёрку') + .3, A1[0] + 520, A1[1] + 20, 1.12, .015);

  // S2 · the firm says no; he blames Howard for years; then the truth: it was Chuck
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, .95);
  const no = typedCard({ x: A2[0] - 560, y: A2[1] - 200, w: 520, h: 200, rot: -.04, order: 200, tIn: Wt('фирма') - .3, dur: .3, enter: 'slide', dx: -400, dy: -200 },
    [[typed('HHM: ОТКАЗ', Wt('отказывается') - .2, .05), -230, 10, `800 44px ${SANS}`, RED]]);
  const hw = pw('hhm', Wt('ховард') - .4, { x: A2[0] - 560, y: A2[1] + 200, w: 500, rot: .04, order: 210, off: 8, caption: capt('ХОВАРД ХЭМЛИН?', Wt('хэмлин')), capSize: 22 });
  const kt = pw('kimtells', Wt('узнаёт') - .4, { x: A2[0] + 300, y: A2[1] - 20, w: 760, rot: .02, order: 220, off: 2 });
  kt.stamps = [stamp('ЧАК', Wt('=сам') + .2, { x: 0, y: 70, size: 100, rot: -.08, shake: 20 })];
  goTo(A2, Wt('пятёрку') + .5, Wt('фирма') + .1, A2[0] - 860, A2[1] - 440);
  hold(Wt('фирма') + .1, Wt('ненавидит') + .3, A2[0] - 560, A2[1] - 20, 1.0, -.015, { dz: .05 });
  camKey(Wt('узнаёт') + .2, A2[0] + 300, A2[1] - 20, 1.05, .01); camKey(Wt('делал') + .4, A2[0] + 300, A2[1], 1.2, .015);

  // S3 · his tragedy: neither sheep nor wolf, just a good man — right things go unnoticed, cons work
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2100, 1);
  const tr = card({ x: A3[0] - 120, y: A3[1] - 360, w: 860, h: 160, rot: -.015, order: 300, lined: false, tIn: Wt('трагизм') - .3, dur: .3, enter: 'slide', dx: 0, dy: -300,
    text: (g, t, it) => { drawTyped(g, it.a, t, -390, -10, `700 30px ${MONO}`); drawTyped(g, it.b, t, -390, 40, `800 36px ${SANS}`, RED); } });
  tr.a = typed('не овца · не волк', Wt('овца') - .3, .04); tr.b = typed('= просто хороший человек', Wt('хороший') - .3, .03);
  pw('bingo', Wt('находит') - .4, { x: A3[0] - 600, y: A3[1] + 40, w: 500, rot: -.04, order: 310, off: 4, caption: capt('ДЕЛО ДОМА ПРЕСТАРЕЛЫХ', Wt('престарелых')), capSize: 20 });
  pw('dmquit', Wt('престижную') - .4, { x: A3[0] - 60, y: A3[1] + 60, w: 500, rot: .03, order: 320, off: 2, caption: capt('УШЁЛ САМ', Wt('уходит')), capSize: 22 });
  pw('skate', Wt('хитрит') - .5, { x: A3[0] + 500, y: A3[1] + 40, w: 500, rot: -.03, order: 330, off: 5, caption: capt('ХИТРОСТЬ: РАБОТАЕТ', Wt('работает') - .2), capSize: 20 });
  const sc = card({ x: A3[0] - 100, y: A3[1] + 460, w: 1, h: 1, shadow: 0, lit: false, order: 340, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  sc.s = stamp('УРОК ВЫУЧЕН', Wt('выучивает') - .1, { size: 70, rot: -.07, shake: 16 });
  goTo(A3, Wt('делал') + .5, Wt('трагизм') + .1, A3[0] - 800, A3[1] - 560);
  hold(Wt('трагизм') + .1, Wt('замечают') + .3, A3[0] - 120, A3[1] - 300, 1.0, -.01, { dz: .05 });
  camKey(Wt('находит') + .2, A3[0] - 560, A3[1] + 40, 1.05, -.015); camKey(Wt('престижную') + .2, A3[0] - 60, A3[1] + 60, 1.05, .01);
  camKey(Wt('хитрит') + .2, A3[0] + 480, A3[1] + 40, 1.05, .015); camKey(Wt('уроку') + .2, A3[0] - 60, A3[1] + 200, .85, 0); camKey(T_END, A3[0] - 80, A3[1] + 260, .95, -.01);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
