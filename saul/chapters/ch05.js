// 05 · КИМ
CH_V0 = 339.3;
const [T_START, T_END] = chRange(5);
function buildScenes() {
  const D = [0, 0]; divider(D, 5, 'КИМ', T_START);
  hold(T_START, Wt('единственный') + .3, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · Kim Wexler: the only one who sees all of him; same mailroom, same climb — she made it
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, 1);
  pw('kimbed', Wt('целиком') - .4, { x: A1[0] - 400, y: A1[1] - 20, w: 720, rot: -.02, order: 100, off: 1, caption: capt('КИМ УЭКСЛЕР', Wt('уэкслер')), capSize: 28 });
  const cmp = card({ x: A1[0] + 560, y: A1[1] - 40, w: 520, h: 420, rot: .03, order: 110, lined: true, tIn: Wt('тоже') - .3, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => drawChecks(g, t, it.cl, `700 30px ${MONO}`) });
  cmp.cl = [checkLine('ПОЧТОВАЯ КОМНАТА', Wt('комнате') + .1, 'v', -210, -120), checkLine('УЧИЛАСЬ', Wt('училась') + .1, 'v', -210, -40), checkLine('НАВЕРХ', Wt('наверх') + .1, 'v', -210, 40)];
  cmp.stamps = [stamp('ПОЛУЧИЛОСЬ', Wt('удалось') + .2, { x: 0, y: 150, size: 54, rot: -.08, shake: 12 })];
  goTo(A1, Wt('единственный') + .3, Wt('человек') + .1, A1[0] - 760, A1[1] - 400);
  hold(Wt('человек') + .1, Wt('ким') + .5, A1[0] - 400, A1[1] - 20, 1.05, -.015, { dz: .05 });
  camKey(Wt('тоже') + .2, A1[0] + 500, A1[1] - 40, 1.05, .015); camKey(Wt('ему') + .3, A1[0] + 520, A1[1] + 60, 1.12, .015);

  // S2 · Kansas, a drinking mother; rely only on herself; never show weakness; flawless — and she loves breaking rules
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  const bg = typedCard({ x: A2[0] - 300, y: A2[1] - 60, w: 800, h: 460, rot: -.02, order: 200, tIn: Wt('выросла') - .3, dur: .3, enter: 'slide', dx: 0, dy: -400 },
    [[typed('КАНЗАС · МАТЬ ПИЛА', Wt('канзасе') - .2, .035), -360, -150, `700 34px ${MONO}`], [typed('— только на себя', Wt('рассчитывать') - .1, .035), -340, -70, `400 30px ${MONO}`],
     [typed('— никакой слабости', Wt('слабость') - .4, .035), -340, -10, `400 30px ${MONO}`], [typed('собранная · честная · правильная', Wt('собранная') - .1, .025), -360, 70, `700 30px ${MONO}`],
     [typed('НО: любит нарушать правила', Wt('нарушать') - .3, .03), -360, 150, `800 34px ${SANS}`, RED]]);
  pw('kimwork', Wt('безупречный') - .4, { x: A2[0] + 640, y: A2[1] - 40, w: 440, rot: .04, order: 210, off: 3 });
  goTo(A2, Wt('ему') + .5, Wt('выросла') + .1, A2[0] - 860, A2[1] - 460);
  hold(Wt('выросла') + .1, Wt('слабость') + .3, A2[0] - 300, A2[1] - 120, 1.08, -.015, { dz: .05 });
  camKey(Wt('безупречный') + .2, A2[0] + 200, A2[1] - 40, .92, .01); camKey(Wt('правила') + .4, A2[0] - 200, A2[1] + 120, 1.08, -.01);

  // S3 · the game: a bar, a smug rich mark, Victor and Giselle, drinks on him, leave laughing
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2000, .95);
  const kc = pw('kencon', Wt('придумывают') - .4, { x: A3[0] - 340, y: A3[1] - 20, w: 820, rot: -.015, order: 300, off: 3 });
  tag({ x: A3[0] + 480, y: A3[1] - 300, w: 420, rot: .06, label: 'ВИКТОР И ЖИЗЕЛЬ', tIn: Wt('виктор') - .05, order: 310, size: 36 });
  pw('kimlaugh', Wt('выпивают') - .4, { x: A3[0] + 600, y: A3[1] + 160, w: 500, rot: -.04, order: 320, off: 3, caption: capt('УХОДЯТ, СМЕЯСЬ', Wt('смеясь') - .3), capSize: 22 });
  goTo(A3, Wt('правила') + .5, Wt('придумывают') + .1, A3[0] - 800, A3[1] - 460);
  hold(Wt('придумывают') + .1, Wt('спектакль') + .3, A3[0] - 340, A3[1] - 20, 1.08, -.015, { dz: .05 });
  camKey(Wt('виктор') + .2, A3[0] + 300, A3[1] - 120, .95, .015); camKey(Wt('смеясь') + .4, A3[0] + 560, A3[1] + 160, 1.08, .015);

  // S4 · for Kim — a way to breathe; for Jimmy — showing who he is and getting admiration, not judgement
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  const tw = card({ x: A4[0] - 100, y: A4[1] - 40, w: 900, h: 420, rot: -.015, order: 400, lined: false, tIn: Wt('способ') - .3, dur: .3, enter: 'slide', dx: 0, dy: 500,
    text: (g, t, it) => { g.strokeStyle = INK; g.lineWidth = 3; g.beginPath(); g.moveTo(0, -170); g.lineTo(0, 170); g.stroke();
      drawTyped(g, it.a, t, -225, -110, `800 40px ${SANS}`, INK, 'center'); drawTyped(g, it.b, t, -225, -20, `700 32px ${MONO}`, INK, 'center');
      drawTyped(g, it.c, t, 225, -110, `800 40px ${SANS}`, INK, 'center'); drawTyped(g, it.d, t, 225, -20, `700 28px ${MONO}`, INK, 'center'); drawPen(g, it.p, t); drawTyped(g, it.e, t, 225, 90, `800 36px ${SANS}`, RED, 'center'); } });
  tw.a = typed('КИМ', Wt('ким', 3) - .1, .06); tw.b = typed('способ дышать', Wt('дышать') - .4, .04);
  tw.c = typed('ДЖИММИ', Wt('джимми', 3) - .1, .05); tw.d = typed('осуждение', Wt('осуждение') - .1, .04); tw.p = pen([[100, -30], [350, -34]], Wt('осуждение') + .4, .25, { width: 7 }); tw.e = typed('ВОСХИЩЕНИЕ', Wt('восхищение') - .1, .05);
  goTo(A4, Wt('смеясь') + .5, Wt('для') + .1, A4[0] - 860, A4[1] - 460);
  hold(Wt('для') + .1, Wt('восхищение') + .6, A4[0] - 100, A4[1] - 40, 1.08, -.01, { dz: .05 });

  // S5 · why Kim matters: Chuck sees only the con man; Kim loves the con man too — salvation and ruin
  const A5 = [-300, 1900]; lamp(A5[0], A5[1] - 200, 2000, 1);
  pw('chuckcold', Wt('чак') - .4, { x: A5[0] - 460, y: A5[1] - 40, w: 520, rot: -.04, order: 500, off: 3, caption: capt('ЧАК: ТОЛЬКО МОШЕННИК', Wt('мошенника') - .3), capSize: 20 });
  pw('kimbed', Wt('любит') - .4, { x: A5[0] + 440, y: A5[1] - 40, w: 520, rot: .04, order: 510, off: 5, caption: capt('КИМ: И МОШЕННИКА ТОЖЕ', Wt('тоже', 4) - .3), capSize: 20 });
  card({ x: A5[0], y: A5[1] + 360, w: 1, h: 1, shadow: 0, lit: false, order: 520, tIn: 0, scrawls: [scrawl('СПАСЕНИЕ И ПОГИБЕЛЬ', Wt('спасением') - .3, .6, { size: 60, rot: -.04 })] });
  goTo(A5, Wt('восхищение') + .6, Wt('вот') + .1, A5[0] - 860, A5[1] - 460);
  camKey(Wt('чак') + .2, A5[0] - 440, A5[1] - 40, 1.05, -.015); camKey(Wt('любит') + .2, A5[0] + 420, A5[1] - 40, 1.05, .015);
  camKey(Wt('поэтому') + .2, A5[0], A5[1] + 120, .9, 0); camKey(T_END, A5[0], A5[1] + 160, .98, -.01);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
