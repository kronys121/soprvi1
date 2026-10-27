// 03 · НОЖ  (insert: "Ну что ж, за работу")
CH_V0 = 207.9;
const [T_START, T_END] = chRange(3);
function buildScenes() {
  const D = [0, 0]; divider(D, 3, 'НОЖ', T_START);
  hold(T_START, Wt('серия') + .3, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · season 4, episode 1: Gus walks into the lab
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 1900, .95);
  typedCard({ x: A1[0] - 620, y: A1[1] - 300, w: 560, h: 150, rot: -.04, order: 100, lined: false, tIn: Wt('первая') - .2, dur: .3, enter: 'slide', dx: -400, dy: 0 },
    [[typed('S04E01 · «BOX CUTTER»', Wt('первая'), .03), 0, 14, `700 34px ${MONO}`, INK, 'center']]);
  pw('garrive', Wt('входит') - .3, { x: A1[0] + 120, y: A1[1] - 20, w: 820, rot: .015, order: 110, off: 0, caption: capt('ЛАБОРАТОРИЯ · ВХОДИТ ГУС', Wt('гус')), capSize: 24 });
  goTo(A1, Wt('серия') + .3, Wt('четвёртого') + .2, A1[0] - 900, A1[1] - 420);
  hold(Wt('четвёртого') + .2, Wt('лаборатории') + .3, A1[0] - 450, A1[1] - 220, 1.05, -.02, { dz: .05 });
  camKey(Wt('входит') + .2, A1[0] + 120, A1[1] - 20, 1.1, .01); camKey(Wt('молча') + .4, A1[0] + 120, A1[1], 1.2, .015);

  // S2 · the ritual: jacket off, suit on, box cutter
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  const rit = card({ x: A2[0] - 620, y: A2[1] - 60, w: 520, h: 520, rot: -.03, order: 200, lined: true, tIn: Wt('снимает') - .3, dur: .3, enter: 'slide', dx: -400, dy: 0,
    text: (g, t, it) => { g.fillStyle = INK; g.font = `700 34px ${MONO}`; g.textAlign = 'left'; g.fillText('ПОРЯДОК:', -220, -180); drawChecks(g, t, it.cl, `700 34px ${MONO}`); } });
  rit.cl = [checkLine('ПИДЖАК', Wt('пиджак') + .1, 'v', -200, -90), checkLine('НА ВЕШАЛКУ', Wt('вешает') + .1, 'v', -200, -10), checkLine('КОМБИНЕЗОН', Wt('комбинезон') + .1, 'v', -200, 70), checkLine('НОЖ', Wt('нож') + .05, 'v', -200, 150)];
  pw('gsuit', Wt('надевает') - .2, { x: A2[0] - 40, y: A2[1] - 260, w: 480, rot: .04, order: 210, off: 2 });
  const cut = pw('gcut', Wt('берёт') - .2, { x: A2[0] + 340, y: A2[1] + 120, w: 820, rot: -.015, order: 220, off: .5 });
  cut.greyAt = t => eio(prog(t, Wt('горло'), Wt('горло') + .8)) * .85;
  tag({ x: A2[0] + 560, y: A2[1] - 280, w: 360, rot: .06, label: 'ВИКТОР', tIn: Wt('виктору') + .05, order: 225, size: 40 });
  sfx('slap', Wt('горло') - .1); shake(Wt('горло') - .1, 14);
  focus(Wt('перерезает') - .2, Wt('помощнику') + .5, [cut], .9);
  goTo(A2, Wt('молча') + .4, Wt('снимает') + .1, A2[0] - 900, A2[1] - 400);
  hold(Wt('снимает') + .1, Wt('комбинезон') + .3, A2[0] - 420, A2[1] - 120, 1.0, -.015, { dz: .05 });
  camKey(Wt('берёт') + .1, A2[0] + 300, A2[1] + 110, 1.05, .01); camKey(Wt('горло') + .3, A2[0] + 340, A2[1] + 120, 1.3, .015);
  camKey(Wt('помощнику') + .4, A2[0] + 340, A2[1] + 140, 1.15, .01);

  // S3 · his offence: seen at Gale's, took too much on himself
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 1900, 1);
  const why = typedCard({ x: A3[0] - 200, y: A3[1] - 40, w: 840, h: 400, rot: -.02, order: 300, tIn: Wt('тот') - .2, dur: .3, enter: 'slide', dx: 0, dy: 500 },
    [[typed('ВИНА ВИКТОРА:', Wt('провинился'), .04), -380, -110, `700 38px ${MONO}`], [typed('— видели у дома Гейла', Wt('видели'), .03), -360, -20, `400 32px ${MONO}`],
     [typed('— взял на себя лишнее', Wt('слишком'), .03), -360, 50, `400 32px ${MONO}`], [typed('ПРИГОВОР: без слов', Wt('говорит'), .035), -380, 140, `700 34px ${MONO}`, RED]]);
  pw('gale', Wt('гейла') - .2, { x: A3[0] + 560, y: A3[1] - 260, w: 420, rot: .05, order: 310, off: 3, caption: capt('ГЕЙЛ', Wt('гейла')), capSize: 24 });
  goTo(A3, Wt('помощнику') + .4, Wt('тот') + .1, A3[0] - 800, A3[1] - 420);
  hold(Wt('тот') + .1, Wt('взял') + .4, A3[0] - 120, A3[1] - 80, 1.05, -.01, { dz: .06 });
  camKey(Wt('умирает') + .3, A3[0] - 100, A3[1] + 40, 1.1, -.01);

  // S4 · suit off, hands washed, jacket on -> "Ну что ж, за работу" (original dub)
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  const rev = card({ x: A4[0] - 640, y: A4[1] - 100, w: 480, h: 400, rot: .03, order: 400, lined: true, tIn: Wt('потом') - .3, dur: .3, enter: 'slide', dx: -400, dy: 0,
    text: (g, t, it) => drawChecks(g, t, it.cl, `700 32px ${MONO}`) });
  rev.cl = [checkLine('КОМБИНЕЗОН', Wt('комбинезон', 2) + .1, 'x', -200, -100), checkLine('РУКИ', Wt('руки') + .1, 'v', -200, -10), checkLine('ПИДЖАК', Wt('пиджак', 2) + .1, 'v', -200, 80)];
  dlgShot('d_work', A4[0] + 200, A4[1] - 20, { w: 900, order: 410 });
  const ws = card({ x: A4[0] + 200, y: A4[1] + 440, w: 1, h: 1, shadow: 0, lit: false, order: 420, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  ws.s = stamp('ЗА РАБОТУ', DLGT.d_work + 6.4, { size: 76, rot: -.06, shake: 14 });
  goTo(A4, Wt('взял') + .4, Wt('потом') + .1, A4[0] - 900, A4[1] - 420);
  hold(Wt('потом') + .1, DLGT.d_work - .3, A4[0] - 560, A4[1] - 80, 1.08, -.015, { dz: .05 });
  camKey(DLGT.d_work + .1, A4[0] + 200, A4[1] - 20, 1.12, 0); camKey(DLGT.d_work + 7.2, A4[0] + 200, A4[1] + 60, 1.25, .01);

  // S5 · violence as a tool; the lesson is for Walter
  const A5 = [-300, 1900]; lamp(A5[0], A5[1] - 200, 2000, 1);
  pw('gafter', Wt('эта') - .5, { x: A5[0] - 360, y: A5[1] - 420, w: 560, rot: -.04, order: 495, off: 2, caption: capt('ЛУЧШЕ ЛЮБОГО МОНОЛОГА', Wt('монолога') - .3), capSize: 22 });
  const tool = typedCard({ x: A5[0] - 360, y: A5[1] + 60, w: 740, h: 300, rot: -.02, order: 500, lined: false, tIn: Wt('насилие') - .2, dur: .3, enter: 'slide', dx: 0, dy: -400 },
    [[typed('НАСИЛИЕ:', Wt('насилие'), .05), -320, -50, `800 48px ${SANS}`], [typed('не эмоция', Wt('эмоция') - .2, .04), -320, 20, `700 38px ${MONO}`], [typed('= инструмент', Wt('инструмент'), .04), -320, 85, `700 38px ${MONO}`, RED]]);
  tool.pens = [pen([[-330, 10], [-40, 6]], Wt('эмоция') + .2, .25, { width: 7 })];
  const w5 = pw('waltface', Wt('урок') - .3, { x: A5[0] + 520, y: A5[1] - 40, w: 520, rot: .04, order: 510, caption: capt('АДРЕСАТ: УОЛТЕР', Wt('уолтеру')), capSize: 24 });
  card({ x: A5[0] + 100, y: A5[1] + 400, w: 1, h: 1, shadow: 0, lit: false, order: 520, tIn: 0, scrawls: [scrawl('НЕЗАМЕНИМЫХ НЕТ', Wt('незаменимых') - .1, .6, { size: 64, rot: -.04 })] });
  goTo(A5, DLGT.d_work + 7.3, Wt('эта') + .1, A5[0] - 860, A5[1] - 700);
  hold(Wt('эта') + .1, Wt('монолога') + .4, A5[0] - 340, A5[1] - 380, 1.1, -.015, { dz: .05 });
  camKey(Wt('насилие') + .3, A5[0] - 330, A5[1] + 60, 1.1, -.015); camKey(Wt('накладную') + .4, A5[0] - 300, A5[1] + 70, 1.15, -.01);
  camKey(Wt('урок') + .3, A5[0] + 440, A5[1] - 20, 1.05, .015); camKey(Wt('незаменимых') + .4, A5[0] + 160, A5[1] + 200, .88, 0); camKey(T_END, A5[0] + 160, A5[1] + 240, .95, -.01);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
