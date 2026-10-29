// 07 · ДЕНЬГИ
CH_V0 = 387.3;
const [T_START, T_END] = chRange(7);
function buildScenes() {
  const D = [0, 0]; divider(D, 7, 'ДЕНЬГИ', T_START);
  hold(T_START, Wt('пятому') + .3, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · millions, and he cannot touch them; tries to give his share away; Walter won't let him
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, 1);
  const mn = typedCard({ x: A1[0] - 380, y: A1[1] - 60, w: 680, h: 360, rot: -.02, order: 100, tIn: Wt('пятому') - .1, dur: .3, enter: 'slide', dx: -500, dy: 0 },
    [[typed('ЧТО ЕСТЬ:', Wt('есть') - .1, .05), -300, -100, `700 34px ${MONO}`], [typed('$ МИЛЛИОНЫ', Wt('миллионы') - .1, .05, { heavy: true }), -300, -20, `800 56px ${MONO}`, RED],
     [typed('прикоснуться: нельзя', Wt('прикоснуться') - .3, .03), -300, 70, `700 32px ${MONO}`]]);
  pw('moneywalk', Wt('мечтал') - .3, { x: A1[0] + 520, y: A1[1] - 220, w: 480, rot: .04, order: 110, off: 1, caption: capt('МЕЧТА КАПИТАНА КУКА', Wt('кук')), capSize: 20 });
  const gv = card({ x: A1[0] + 540, y: A1[1] + 220, w: 500, h: 300, rot: -.03, order: 120, lined: true, tIn: Wt('отдать') - .3, dur: .3, enter: 'slide', dx: 400, dy: 200,
    text: (g, t, it) => { g.fillStyle = INK; g.font = `700 28px ${MONO}`; g.textAlign = 'left'; g.fillText('ОТДАТЬ ДОЛЮ:', -210, -90); drawChecks(g, t, it.cl, `700 28px ${MONO}`); } });
  gv.cl = [checkLine('СЕМЬЕ МАЛЬЧИКА', Wt('мальчика') + .1, 'v', -200, -20), checkLine('ВНУЧКЕ МАЙКА', Wt('майка') + .1, 'v', -200, 60)];
  gv.stamps = [stamp('УОЛТЕР: НЕТ', Wt('сделать') + .1, { x: 0, y: 150, size: 54, rot: -.08, shake: 14 })];
  goTo(A1, Wt('пятому') + .3, Wt('сезону') + .1, A1[0] - 860, A1[1] - 420);
  hold(Wt('сезону') + .1, Wt('кук') + .3, A1[0] - 380, A1[1] - 60, 1.08, -.015, { dz: .05 });
  camKey(Wt('прикоснуться') + .4, A1[0] - 100, A1[1] - 20, .9, 0); camKey(Wt('отдать') + .2, A1[0] + 520, A1[1] + 200, 1.05, .015);
  camKey(Wt('сделать') + .5, A1[0] + 540, A1[1] + 240, 1.1, .015);

  // S2 · the night drive: stacks of money onto lawns. Not generosity — getting rid of what burns
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, .9);
  pw('jhomeless', Wt('садится') - .3, { x: A2[0] - 600, y: A2[1] - 160, w: 520, rot: -.05, order: 200, off: 1 });
  const th = pw('jthrow', Wt('выбрасывая') - .5, { x: A2[0] + 160, y: A2[1] - 20, w: 820, rot: .015, order: 210, off: 2 });
  for (let k = 0; k < 6; k++) sfx('drop', Wt('выбрасывая') + k * .35);
  pw('jdrive', Wt('щедрости') - .4, { x: A2[0] - 600, y: A2[1] + 260, w: 480, rot: .04, order: 220, off: 0 });
  card({ x: A2[0] + 160, y: A2[1] + 440, w: 1, h: 1, shadow: 0, lit: false, order: 230, tIn: 0, scrawls: [scrawl('ЖЖЁТ РУКИ', Wt('жжёт') - .2, .45, { size: 70, rot: -.04 })] });
  goTo(A2, Wt('сделать') + .5, Wt('тогда') + .1, A2[0] - 900, A2[1] - 440);
  hold(Wt('тогда') + .1, Wt('альбукерке') + .3, A2[0] - 580, A2[1] - 140, 1.08, -.02, { dz: .05 });
  camKey(Wt('выбрасывая') + .2, A2[0] + 160, A2[1] - 20, 1.08, .01); camKey(Wt('газоны') + .4, A2[0] + 180, A2[1], 1.2, .015);
  camKey(Wt('щедрости') + .2, A2[0] - 300, A2[1] + 200, .95, 0); camKey(Wt('руки') + .4, A2[0] + 100, A2[1] + 260, 1.0, .01);

  // S3 · the realisation: the cigarette, Saul's man, Walter's order. Brock was poisoned by Walter
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2100, 1);
  pw('jrealize', Wt('понимает') - .3, { x: A3[0] - 560, y: A3[1] - 140, w: 560, rot: -.04, order: 300, off: 1, caption: capt('СИГАРЕТА С ЯДОМ', Wt('ядом')), capSize: 24 });
  pw('jsaul', Wt('сола') - .5, { x: A3[0] - 560, y: A3[1] + 240, w: 520, rot: .04, order: 310, off: 0, caption: capt('ЧЕЛОВЕК СОЛА · ПРИКАЗ УОЛТЕРА', Wt('приказу')), capSize: 18 });
  const vd = card({ x: A3[0] + 380, y: A3[1] - 40, w: 680, h: 420, rot: .02, order: 320, lined: false, tIn: Wt('брока') - .3, dur: .3, enter: 'slide', dx: 500, dy: 0,
    text: (g, t, it) => { g.fillStyle = INK; g.font = `700 34px ${MONO}`; g.textAlign = 'left'; g.fillText('БРОКА ОТРАВИЛ:', -300, -120);
      drawTyped(g, it.a, t, -300, -30, `800 54px ${SANS}`); drawPen(g, it.p, t); drawTyped(g, it.b, t, -300, 80, `800 64px ${SANS}`, RED); } });
  vd.a = typed('ГУС', Wt('=гус') - .1, .06); vd.p = pen([[-310, -40], [-160, -46]], Wt('=гус') + .3, .2, { width: 9 }); vd.b = typed('УОЛТЕР', Wt('уолтер', 3) - .1, .06);
  goTo(A3, Wt('руки') + .5, Wt('потом') + .1, A3[0] - 900, A3[1] - 440);
  hold(Wt('потом') + .1, Wt('сола') + .2, A3[0] - 540, A3[1] - 120, 1.08, -.015, { dz: .05 });
  camKey(Wt('приказу') + .2, A3[0] - 540, A3[1] + 220, 1.05, -.01); camKey(Wt('брока') + .2, A3[0] + 360, A3[1] - 40, 1.05, .01);
  camKey(Wt('уолтер', 3) + .4, A3[0] + 360, A3[1] - 20, 1.15, .015);

  // S4 · the gas can in the Whites' house; for the first time he sees his teacher as he is
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, .95);
  const gc = pw('gascan', Wt('врывается') - .3, { x: A4[0] - 200, y: A4[1] - 20, w: 860, rot: -.015, order: 400, off: 2 });
  gc.stamps = [stamp('БЕНЗИН', Wt('бензина'), { x: -200, y: 120, size: 70, rot: -.08, shake: 16 })];
  pw('walthat', Wt('учителя') - .5, { x: A4[0] + 620, y: A4[1] - 160, w: 460, rot: .05, order: 410, caption: capt('УЧИТЕЛЬ — КАКОЙ ЕСТЬ', Wt('есть', 2) - .3), capSize: 20 });
  goTo(A4, Wt('уолтер', 3) + .5, Wt('джесси', 3) + .1, A4[0] - 860, A4[1] - 440);
  camKey(Wt('джесси', 3) + .1, A4[0] - 200, A4[1] - 20, 1.08, -.01); camKey(Wt('бензина') + .4, A4[0] - 200, A4[1], 1.2, -.015);
  camKey(Wt('учителя') + .2, A4[0] + 400, A4[1] - 100, 1.0, .015); camKey(T_END, A4[0] + 560, A4[1] - 140, 1.15, .02);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
