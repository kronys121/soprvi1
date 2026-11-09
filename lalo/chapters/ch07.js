// 07 · КИМ — the shot-up car; the apartment; the story again and again; Kim (insert); Lalo leaves with Nacho
CH_V0 = 402.79;
const [T_START, T_END] = chRange(7);
function buildScenes() {
  const D = [0, 0]; divider(D, 7, 'КИМ', T_START);
  hold(T_START, Wt('собирается') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · about to leave for Mexico, finds Jimmy's car in the desert, riddled with bullets
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, 1);
  pw('findcar', Wt('находит') - .5, { x: A1[0] - 560, y: A1[1] - 100, w: 520, rot: -.04, order: 100, off: 1 });
  const ch = pw('carholes', Wt('изрешечённую') - .6, { x: A1[0] + 260, y: A1[1] - 40, w: 680, rot: .02, order: 110, off: 1 });
  ch.stamps = [stamp('СЛЕДЫ ПУЛЬ', Wt('пулями') + .1, { x: 0, y: 120, size: 60, rot: -.07, shake: 14 })];
  goTo(A1, Wt('собирается') + .2, Wt('мексику') - .1, A1[0] - 860, A1[1] - 460);
  camKey(Wt('находит'), A1[0] - 540, A1[1] - 80, 1.05, -.015); camKey(Wt('изрешечённую'), A1[0] + 260, A1[1] - 20, 1.05, .015);

  // S2 · comes to Jimmy and Kim's apartment; makes Jimmy tell the story again and again, word for word, smiling; nobody shoots, yet someone may die
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 1900, .95);
  pw('apartment', Wt('квартиру') - .5, { x: A2[0] - 380, y: A2[1] - 80, w: 680, rot: -.015, order: 200, off: 1, caption: capt('КВАРТИРА ДЖИММИ И КИМ', Wt('ким') - .1), capSize: 22 });
  pw('lalojimmy', Wt('напротив') - .5, { x: A2[0] + 560, y: A2[1] - 120, w: 440, rot: .04, order: 210, off: 1 });
  const ag = typedCard({ x: A2[0] + 560, y: A2[1] + 240, w: 440, h: 200, rot: -.03, order: 215, tIn: Wt('снова') - .4, dur: .3, enter: 'slide', dx: 300, dy: 200 },
    [[typed('ещё раз.', Wt('снова') - .2, .05), -180, -40, `700 28px ${MONO}`], [typed('слово в слово.', Wt('слово') - .2, .04), -180, 10, `700 28px ${MONO}`], [typed('С УЛЫБКОЙ.', Wt('улыбкой') - .2, .05), -180, 70, `800 34px ${SANS}`, RED]]);
  card({ x: A2[0] - 380, y: A2[1] + 380, w: 1, h: 1, shadow: 0, lit: false, order: 220, tIn: 0, scrawls: [scrawl('никто не стреляет', Wt('стреляет') - .3, .7, { size: 46, rot: -.04 })] });
  goTo(A2, Wt('пулями') + .6, Wt('приходит') - .1, A2[0] - 860, A2[1] - 460);
  camKey(Wt('квартиру'), A2[0] - 380, A2[1] - 60, 1.02, -.01); camKey(Wt('напротив') + .2, A2[0] + 540, A2[1] - 100, 1.08, .015);
  camKey(Wt('снова') + .3, A2[0] + 540, A2[1] + 160, 1.02, .01); camKey(Wt('напряжённых'), A2[0] - 200, A2[1] + 200, .9, 0); camKey(Wt('умрёт') + .3, A2[0] - 200, A2[1] + 220, .98, 0);

  // S3 · Kim steps in and goes at Lalo (original dub)
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 1900, .9);
  pw('kimface', Wt('вмешивается') - .5, { x: A3[0] - 640, y: A3[1] - 120, w: 420, rot: -.05, order: 300, caption: capt('КИМ ВЕКСЛЕР', Wt('вмешивается') + .1), capSize: 22 });
  dlgShot('d_kim', A3[0] + 180, A3[1] - 20, { w: 900, order: 310 });
  goTo(A3, Wt('умрёт') + .6, Wt('тогда') - .1, A3[0] - 860, A3[1] - 460);
  hold(Wt('тогда') - .1, DLGT.d_kim - .2, A3[0] - 600, A3[1] - 80, 1.08, -.015, { dz: .05 });
  camKey(DLGT.d_kim + .1, A3[0] + 180, A3[1] - 20, 1.08, 0); camKey(DLGT.d_kim + 23.5, A3[0] + 180, A3[1] + 30, 1.18, .01);

  // S4 · Lalo backs off; leaves for Mexico with Nacho; but remembers the apartment — and will return
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  pw('laloleave', Wt('отступает') - .4, { x: A4[0] - 380, y: A4[1] - 80, w: 680, rot: -.015, order: 400, off: 1, caption: capt('В МЕКСИКУ, С НАЧО', Wt('начо') - .1), capSize: 22 });
  const rt = card({ x: A4[0] + 560, y: A4[1] - 40, w: 420, h: 280, rot: .03, order: 410, color: '#f3efe2', lined: false, tIn: Wt('запомнил') - .4, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -40, `700 26px ${MONO}`, INK, 'center'); drawTyped(g, it.b, t, 0, 50, `800 40px ${SANS}`, RED, 'center'); } });
  rt.a = typed('запомнил квартиру', Wt('запомнил') - .1, .03); rt.b = typed('ВЕРНЁТСЯ', Wt('вернётся') - .2, .06);
  goTo(A4, DLGT.d_kim + 23.8, Wt('отступает') - .1, A4[0] - 860, A4[1] - 460);
  camKey(Wt('отступает') + .2, A4[0] - 380, A4[1] - 60, 1.02, -.01); camKey(Wt('запомнил') + .1, A4[0] + 540, A4[1] - 20, 1.05, .015); camKey(T_END, A4[0] + 540, A4[1], 1.14, .015);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
