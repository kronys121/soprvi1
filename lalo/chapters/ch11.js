// 11 · ХОВАРД — Howard in the apartment; the shot (insert); innocent man; Kim sent to Gus's house; Jimmy tied; to the laundry
CH_V0 = 592.58;
const [T_START, T_END] = chRange(11);
function buildScenes() {
  const D = [0, 0]; divider(D, 11, 'ХОВАРД', T_START);
  hold(T_START, Wt('сначала') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · first, that same apartment; Howard Hamlin is there — head of Jimmy's old firm; Jimmy and Kim just ruined his reputation; he came to have it out
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 1900, .9);
  pw('apartment', Wt('квартиру') - .5, { x: A1[0] - 600, y: A1[1] - 140, w: 460, rot: -.05, order: 100, off: 6, caption: capt('ТА САМАЯ КВАРТИРА', Wt('ким') - .2), capSize: 20 });
  pw('howardface', Wt('ховард') - .5, { x: A1[0] + 60, y: A1[1] - 60, w: 520, rot: .02, order: 110, caption: capt('ХОВАРД ХЭМЛИН', Wt('хэмлин') - .2), capSize: 24 });
  const hw = typedCard({ x: A1[0] + 680, y: A1[1] - 60, w: 440, h: 300, rot: .04, order: 120, tIn: Wt('глава') - .4, dur: .3, enter: 'slide', dx: 400, dy: 0 },
    [[typed('глава фирмы, где', Wt('глава') - .2, .03), -180, -80, `700 24px ${MONO}`], [typed('работал Джимми', Wt('работал') - .2, .03), -180, -40, `700 24px ${MONO}`], [typed('репутация —', Wt('репутацию') - .3, .04), -180, 30, `800 30px ${SANS}`], [typed('РАЗРУШЕНА', Wt('аферой') - .4, .05), -180, 80, `800 34px ${SANS}`, RED]]);
  goTo(A1, Wt('сначала') + .2, Wt('квартиру') - .3, A1[0] - 860, A1[1] - 460);
  camKey(Wt('квартиру') + .1, A1[0] - 580, A1[1] - 120, 1.05, -.015); camKey(Wt('ховард') + .1, A1[0] + 60, A1[1] - 40, 1.02, .01);
  camKey(Wt('глава') + .2, A1[0] + 660, A1[1] - 40, 1.05, .015); camKey(Wt('объясниться') + .2, A1[0] + 300, A1[1], .92, 0);

  // S2 · Kim asks Howard to leave; Lalo shoots him in the head (original dub, two pieces)
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 1800, .85);
  card({ x: A2[0] - 640, y: A2[1] - 300, w: 1, h: 1, shadow: 0, lit: false, order: 190, tIn: 0, scrawls: [scrawl('«Ховард, уходите»', Wt('просит') - .2, .7, { size: 46, rot: -.05 })] });
  dlgShot('d_how1', A2[0] - 40, A2[1] - 20, { w: 900, order: 200 });
  dlgShot('d_how2', A2[0] - 20, A2[1] - 10, { w: 920, order: 210 });
  goTo(A2, Wt('объясниться') + .6, Wt('просит') - .2, A2[0] - 860, A2[1] - 460);
  camKey(Wt('просит') + .1, A2[0] - 400, A2[1] - 200, 1.0, -.01);
  camKey(DLGT.d_how1 + .1, A2[0] - 40, A2[1] - 20, 1.08, 0); camKey(DLGT.d_how2 + .1, A2[0] - 20, A2[1] - 10, 1.12, 0); camKey(DLGT.d_how2 + 14.6, A2[0] - 20, A2[1] + 20, 1.22, .01);

  // S3 · a turning point: Howard — innocent, just nearby; killed without anger, without hesitation, almost in passing; wrong place
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 1900, .9);
  const hf = pw('howardface', Wt('поворотный') - .4, { x: A3[0] - 400, y: A3[1] - 80, w: 560, rot: -.02, order: 300 });
  hf.stamps = [stamp('НЕВИНОВЕН', Wt('виноватый') + .1, { x: 0, y: 120, size: 60, rot: -.07, shake: 14 })];
  const nn = card({ x: A3[0] + 520, y: A3[1] - 60, w: 460, h: 320, rot: .03, order: 310, lined: true, tIn: Wt('злости') - .4, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.a, t, -200, -110, `800 28px ${SANS}`); drawChecks(g, t, it.cl, `700 26px ${MONO}`); } });
  nn.a = typed('ЛАЛО УБИВАЕТ:', Wt('убивает') - .2, .04);
  nn.cl = [checkLine('БЕЗ ЗЛОСТИ', Wt('злости') + .1, 'v', -190, -40), checkLine('БЕЗ КОЛЕБАНИЙ', Wt('колебаний') + .1, 'v', -190, 30), checkLine('МЕЖДУ ДЕЛОМ', Wt('делом') + .1, 'v', -190, 100)];
  card({ x: A3[0] + 60, y: A3[1] + 380, w: 1, h: 1, shadow: 0, lit: false, order: 320, tIn: 0, scrawls: [scrawl('не в том месте', Wt('месте') - .4, .6, { size: 52, rot: -.04 })] });
  goTo(A3, DLGT.d_how2 + 14.9, Wt('поворотный') - .3, A3[0] - 860, A3[1] - 460);
  hold(Wt('поворотный') - .3, Wt('рядом') + .3, A3[0] - 400, A3[1] - 60, 1.05, -.015, { dz: .05 });
  camKey(Wt('злости'), A3[0] + 500, A3[1] - 40, 1.05, .015); camKey(Wt('месте') - .2, A3[0] + 60, A3[1] + 200, .9, 0);

  // S4 · gives Jimmy Gus's address and description: go and shoot him; Jimmy talks him into sending Kim; Kim leaves with the gun; Jimmy tied; Lalo heads to the laundry
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  pw('laloinstr', Wt('адрес') - .5, { x: A4[0] - 600, y: A4[1] - 140, w: 460, rot: -.05, order: 400, off: 1, caption: capt('АДРЕС И ОПИСАНИЕ ГУСА', Wt('описание') - .2), capSize: 18 });
  const ord = card({ x: A4[0] - 600, y: A4[1] + 230, w: 460, h: 130, rot: .03, order: 405, color: '#f3efe2', lined: false, tIn: Wt('застрелить') - .4, dur: .3, enter: 'slide', dx: -300, dy: 200,
    text: (g, t, it) => drawTyped(g, it.a, t, 0, 14, `800 34px ${SANS}`, RED, 'center') });
  ord.a = typed('«ЗАСТРЕЛИ ЕГО»', Wt('застрелить') - .2, .05);
  pw('kimgo', Wt('уходит') - .6, { x: A4[0] + 80, y: A4[1] - 80, w: 560, rot: .02, order: 410, off: 1, caption: capt('КИМ С ПИСТОЛЕТОМ', Wt('пистолетом') - .2), capSize: 22 });
  pw('tie', Wt('связывает') - .5, { x: A4[0] + 720, y: A4[1] - 120, w: 420, rot: .05, order: 420, off: 1, caption: capt('ДЖИММИ СВЯЗАН', Wt('связывает') + .2), capSize: 20 });
  pw('laundry', Wt('прачечную') - .6, { x: A4[0] + 720, y: A4[1] + 260, w: 420, rot: -.04, order: 430, off: 4, caption: capt('→ ПРАЧЕЧНАЯ ГУСА', Wt('прачечную')), capSize: 20 });
  goTo(A4, Wt('месте') + .6, Wt('даёт') - .2, A4[0] - 860, A4[1] - 460);
  camKey(Wt('адрес') + .1, A4[0] - 580, A4[1] - 120, 1.05, -.015); camKey(Wt('застрелить') + .1, A4[0] - 580, A4[1] + 200, 1.05, -.01);
  camKey(Wt('уговаривает'), A4[0] + 80, A4[1] - 60, 1.0, .01); camKey(Wt('связывает') + .1, A4[0] + 700, A4[1] - 100, 1.08, .015);
  camKey(Wt('прачечную') + .1, A4[0] + 700, A4[1] + 240, 1.08, -.01); camKey(T_END, A4[0] + 700, A4[1] + 260, 1.16, -.01);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
