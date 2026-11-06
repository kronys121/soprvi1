// 11 · ДЖЕССИ  (insert: Mike drills Jesse "Ты проснулся, увидел её, и больше ничего не знаешь. Повтори.")
CH_V0 = 604.7;
const [T_START, T_END] = chRange(11);
function buildScenes() {
  const D = [0, 0]; divider(D, 11, 'ДЖЕССИ', T_START);
  hold(T_START, Wt('сторона') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · another side: a man who for years allowed himself no attachments gets attached to Jesse Pinkman; Gus sends them out together
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, 1);
  pw('jesse', Wt('привязывается') - .4, { x: A1[0] - 620, y: A1[1] - 160, w: 440, rot: -.05, order: 100, caption: capt('ДЖЕССИ ПИНКМАН', Wt('пинкману')), capSize: 22 });
  pw('drive', Wt('отправляет') - .4, { x: A1[0] + 200, y: A1[1] - 40, w: 760, rot: .015, order: 110, off: 3, caption: capt('ЗАДАНИЯ ВДВОЁМ', Wt('задания') - .3), capSize: 24 });
  card({ x: A1[0] - 560, y: A1[1] + 300, w: 1, h: 1, shadow: 0, lit: false, order: 120, tIn: 0, scrawls: [scrawl('годами — никаких привязанностей', Wt('привязанностей') - .6, .7, { size: 42, rot: -.04 })] });
  goTo(A1, Wt('сторона') + .2, Wt('человек') - .1, A1[0] - 760, A1[1] - 400);
  hold(Wt('человек') - .1, Wt('пинкману') + .3, A1[0] - 560, A1[1] + 40, 1.0, -.015, { dz: .05 });
  camKey(Wt('отправляет') + .1, A1[0] + 200, A1[1] - 40, 1.02, .015);

  // S2 · at first a useless kid; then he sees in him what he once saw in Matt: a smart boy with a good heart, dragged in by his elders
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  const cv = card({ x: A2[0] - 100, y: A2[1] - 40, w: 900, h: 440, rot: -.015, order: 200, lined: false, tIn: Wt('поначалу') - .3, dur: .3, enter: 'slide', dx: 0, dy: -400,
    text: (g, t, it) => { drawTyped(g, it.a, t, -400, -150, `700 30px ${MONO}`, '#888'); drawPen(g, it.p, t); drawTyped(g, it.b, t, -400, -60, `700 30px ${MONO}`);
      drawTyped(g, it.c, t, 0, 40, `800 60px ${SANS}`, RED, 'center'); drawTyped(g, it.d, t, 0, 140, `700 26px ${MONO}`, INK, 'center'); } });
  cv.a = typed('«бестолковый мальчишка»', Wt('бестолковым') - .3, .03); cv.p = pen([[-410, -158], [40, -164]], Wt('потом') + .1, .3, { width: 6 });
  cv.b = typed('видит в нём то, что видел в…', Wt('видеть') - .2, .03); cv.c = typed('МЭТТЕ', Wt('мэтте') - .1, .08); cv.d = typed('добрый парень, которого втянули старшие', Wt('втянули') - .6, .025);
  goTo(A2, Wt('задания') + .6, Wt('поначалу') - .3, A2[0] - 860, A2[1] - 440);
  hold(Wt('поначалу') - .3, Wt('мэтте') + .5, A2[0] - 100, A2[1] - 100, 1.05, -.01, { dz: .05 });
  camKey(Wt('втянули') + .3, A2[0] - 100, A2[1] + 40, 1.1, -.01);

  // S3 · Mike protects Jesse (original dub: drilling him after Jane's death)
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 1900, .9);
  pw('mikecoach', Wt('защищает') - .5, { x: A3[0] - 620, y: A3[1] - 160, w: 480, rot: -.05, order: 300, off: 2, caption: capt('ЗАЩИЩАЕТ', Wt('защищает')), capSize: 24 });
  dlgShot('d_woke', A3[0] + 180, A3[1] - 20, { w: 900, order: 310 });
  goTo(A3, Wt('мэтте') + 3.0, Wt('защищает') - .3, A3[0] - 860, A3[1] - 460);
  camKey(Wt('защищает') - .1, A3[0] - 600, A3[1] - 140, 1.1, -.015);
  camKey(DLGT.d_woke + .1, A3[0] + 180, A3[1] - 20, 1.08, 0); camKey(DLGT.d_woke + 13, A3[0] + 180, A3[1] + 40, 1.2, .01);

  // S4 · teaches him; in season five leaves him his share and tries to keep him from Walter; couldn't save his son — maybe this boy
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  const tc = card({ x: A4[0] - 520, y: A4[1] - 100, w: 520, h: 360, rot: -.03, order: 400, lined: true, tIn: Wt('учит') - .3, dur: .3, enter: 'slide', dx: -400, dy: 0,
    text: (g, t, it) => drawChecks(g, t, it.cl, `700 26px ${MONO}`) });
  tc.cl = [checkLine('УЧИТ', Wt('учит') + .1, 'v', -220, -100), checkLine('ОСТАВЛЯЕТ ДОЛЮ', Wt('долю') + .1, 'v', -220, -30), checkLine('БЕРЕЖЁТ ОТ УОЛТЕРА', Wt('уолтера') + .1, 'v', -220, 40)];
  pw('mikejesse12', Wt('пятом') - .4, { x: A4[0] + 380, y: A4[1] - 60, w: 660, rot: .02, order: 410, off: 2 });
  const sv = card({ x: A4[0], y: A4[1] + 420, w: 900, h: 170, rot: -.015, order: 420, lined: false, tIn: Wt('спасти') - .3, dur: .3, enter: 'slide', dx: 0, dy: 300,
    text: (g, t, it) => { drawTyped(g, it.a, t, -230, 0, `800 34px ${SANS}`, '#888', 'center'); drawTyped(g, it.c, t, 0, 0, `800 40px ${SANS}`, INK, 'center'); drawTyped(g, it.b, t, 230, 0, `800 34px ${SANS}`, RED, 'center'); } });
  sv.a = typed('СЫН — НЕ СПАС', Wt('сына') - .2, .04); sv.c = typed('→', Wt('может') - .2, .1); sv.b = typed('ЭТОГО МАЛЬЧИКА', Wt('мальчика') - .4, .04);
  goTo(A4, DLGT.d_woke + 13.2, Wt('учит') - .2, A4[0] - 860, A4[1] - 460);
  hold(Wt('учит') - .2, Wt('пятом') + .2, A4[0] - 520, A4[1] - 100, 1.08, -.015, { dz: .05 });
  camKey(Wt('долю') + .2, A4[0] + 380, A4[1] - 60, 1.02, .015); camKey(Wt('спасти') + .2, A4[0], A4[1] + 260, .95, 0); camKey(T_END, A4[0], A4[1] + 280, 1.05, 0);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
