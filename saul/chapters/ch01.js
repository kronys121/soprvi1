// 01 · ВОЛКИ И ОВЦЫ  (insert: "В мире есть волки и овцы, пацан")
CH_V0 = 63.5;
const [T_START, T_END] = chRange(1);
function buildScenes() {
  const D = [0, 0]; divider(D, 1, 'ВОЛКИ И ОВЦЫ', T_START);
  hold(T_START, Wt('чтобы') + .3, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · the little store in Cicero; the kind father who believed every sob story
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, 1);
  pw('dadstore', Wt('магазина') - .3, { x: A1[0] - 360, y: A1[1] - 20, w: 780, rot: -.02, order: 100, off: 0, caption: capt('СИСЕРО, ИЛЛИНОЙС', Wt('сисеро')), capSize: 26 });
  const fd = card({ x: A1[0] + 560, y: A1[1] - 40, w: 480, h: 400, rot: .03, order: 110, lined: true, tIn: Wt('отец') - .3, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => { g.fillStyle = INK; g.font = `700 30px ${MONO}`; g.textAlign = 'left'; g.fillText('ОТЕЦ:', -200, -140); drawChecks(g, t, it.cl, `700 30px ${MONO}`); } });
  fd.cl = [checkLine('ДОБРЫЙ', Wt('добрый') + .1, 'v', -180, -60), checkLine('МЯГКИЙ', Wt('мягкий') + .1, 'v', -180, 20), checkLine('ВЕРИТ ВСЕМ', Wt('каждому') + .1, 'v', -180, 100)];
  typedCard({ x: A1[0] + 560, y: A1[1] + 320, w: 520, h: 140, rot: -.03, order: 120, lined: false, tIn: Wt('дай') - .2, dur: .25, enter: 'slide', dx: 0, dy: 300 },
    [[typed('«дай на бензин, ребёнок болеет»', Wt('дай'), .03, { silent: true }), -240, 10, `400 italic 26px "DejaVu Serif"`]]);
  goTo(A1, Wt('чтобы') + .3, Wt('понять') + .1, A1[0] - 760, A1[1] - 400);
  hold(Wt('понять') + .1, Wt('держал') + .2, A1[0] - 360, A1[1] - 20, 1.05, -.015, { dz: .05 });
  camKey(Wt('отец') + .3, A1[0] + 500, A1[1] - 20, 1.05, .015); camKey(Wt('давал') + .4, A1[0] + 520, A1[1] + 200, 1.0, .01);

  // S2 · the flashback: a grifter conning the father; "wolves and sheep" (original dub)
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, .95);
  pw('dadstore', Wt('флешбэков') - .3, { x: A2[0] - 620, y: A2[1] - 180, w: 500, rot: -.05, order: 200, off: 4, caption: capt('МАЛЕНЬКИЙ ДЖИММИ', Wt('маленький')), capSize: 22 });
  dlgShot('d_wolves', A2[0] + 160, A2[1] - 20, { w: 900, order: 210 });
  const wv = card({ x: A2[0] - 620, y: A2[1] + 260, w: 500, h: 220, rot: .03, order: 220, lined: false, tIn: Wt('волки') - .2, dur: .3, enter: 'slide', dx: -400, dy: 200,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -20, `800 54px ${SANS}`, RED, 'center'); drawTyped(g, it.b, t, 0, 60, `800 54px ${SANS}`, INK, 'center'); } });
  wv.a = typed('ВОЛКИ', Wt('волки'), .06); wv.b = typed('ОВЦЫ', Wt('овцы'), .06);
  goTo(A2, Wt('всем') + .5, Wt('одном') + .1, A2[0] - 900, A2[1] - 440);
  hold(Wt('одном') + .1, Wt('жизни') + .3, A2[0] - 600, A2[1] - 160, 1.1, -.02, { dz: .05 });
  camKey(Wt('волки') + .2, A2[0] - 600, A2[1] + 200, 1.05, -.01); camKey(DLGT.d_wolves + .1, A2[0] + 160, A2[1] - 20, 1.08, 0);
  camKey(DLGT.d_wolves + 10.7, A2[0] + 160, A2[1] + 30, 1.2, .01);

  // S3 · when the father turns away, Jimmy reaches for the till
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 1900, .95);
  const rg = pw('register', Wt('отворачивается') - .5, { x: A3[0] - 120, y: A3[1] - 20, w: 900, rot: -.01, order: 300, off: 4 });
  rg.stamps = [stamp('ПЕРВЫЙ РАЗ', Wt('кассе') - .1, { x: 0, y: 80, size: 70, rot: -.07, shake: 14 })];
  card({ x: A3[0] - 120, y: A3[1] + 450, w: 1, h: 1, shadow: 0, lit: false, order: 310, tIn: 0, scrawls: [scrawl('КЛЮЧ КО ВСЕМУ', Wt('ключ') - .1, .5, { size: 66, rot: -.04 })] });
  goTo(A3, DLGT.d_wolves + 10.8, Wt('когда') + .1, A3[0] - 800, A3[1] - 460);
  camKey(Wt('когда') + .1, A3[0] - 120, A3[1] - 20, 1.05, 0); camKey(Wt('кассе') + .4, A3[0] - 120, A3[1], 1.25, .01); camKey(Wt('всему') + .4, A3[0] - 120, A3[1] + 200, 1.0, 0);

  // S4 · not born evil: kindness = defenceless; the store failed, the father died; honest people lose
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  const nb = typedCard({ x: A4[0] - 340, y: A4[1] - 60, w: 760, h: 480, rot: -.02, order: 400, tIn: Wt('родился') - .3, dur: .3, enter: 'slide', dx: -500, dy: 0 },
    [[typed('НЕ РОДИЛСЯ ЗЛЫМ', Wt('родился') - .1, .04), -340, -160, `800 40px ${SANS}`], [typed('доброта = беззащитность', Wt('доброта') - .1, .03), -340, -80, `700 32px ${MONO}`],
     [typed('магазин — разорился', Wt('=магазин') - .1, .035), -340, 0, `400 30px ${MONO}`], [typed('отец — умер', Wt('умер') - .2, .04), -340, 60, `400 30px ${MONO}`],
     [typed('ВЫВОД: честные проигрывают', Wt('честные') - .2, .03), -340, 150, `700 32px ${MONO}`, RED]]);
  pw('funeral', Wt('умер') - .4, { x: A4[0] + 560, y: A4[1] - 180, w: 460, rot: .05, order: 410, off: 2 });
  const sh = card({ x: A4[0] + 560, y: A4[1] + 240, w: 1, h: 1, shadow: 0, lit: false, order: 420, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  sh.s = stamp('НЕ ОВЦА', Wt('собирался') - .2, { size: 90, rot: -.07, shake: 16 });
  goTo(A4, Wt('всему') + .5, Wt('джимми', 4) + .1, A4[0] - 860, A4[1] - 440);
  hold(Wt('джимми', 4) + .1, Wt('беззащитным') + .3, A4[0] - 340, A4[1] - 80, 1.1, -.015, { dz: .05 });
  camKey(Wt('умер') + .3, A4[0] + 200, A4[1] - 40, .9, .01); camKey(Wt('проигрывают') + .3, A4[0] - 340, A4[1] + 40, 1.1, -.01);
  camKey(Wt('собирался') + .3, A4[0] + 520, A4[1] + 200, 1.1, .015); camKey(T_END, A4[0] + 520, A4[1] + 220, 1.2, .02);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
