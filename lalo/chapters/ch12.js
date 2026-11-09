// 12 · ЛАБОРАТОРИЯ — laundry; camcorder; lab speech (insert); the light goes out; the shot; dying laughing; buried under the lab
CH_V0 = 645.32;
const [T_START, T_END] = chRange(12);
function buildScenes() {
  const D = [0, 0]; divider(D, 12, 'ЛАБОРАТОРИЯ', T_START);
  hold(T_START, Wt('прачечной') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · kills the guards; Gus realizes he was fooled and drives there himself; Lalo meets him with a gun, makes him show the lab; turns on the camera: proof for Eladio; Lalo won
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 1900, .9);
  pw('guards', Wt('охрану') - .5, { x: A1[0] - 620, y: A1[1] - 160, w: 440, rot: -.05, order: 100, off: 1, caption: capt('ОХРАНА УБИТА', Wt('охрану')), capSize: 20 });
  pw('gusarrive', Wt('обманули') - .5, { x: A1[0] - 620, y: A1[1] + 220, w: 440, rot: .04, order: 105, off: 1, caption: capt('ГУС ЕДЕТ САМ', Wt('сам') - .1), capSize: 20 });
  const cm = pw('lalocam', Wt('камеру') - .7, { x: A1[0] + 100, y: A1[1] - 40, w: 640, rot: .015, order: 110, off: 1 });
  pw('gusfilmed', Wt('доказательство') - .5, { x: A1[0] + 760, y: A1[1] - 140, w: 400, rot: .05, order: 120, off: 1, caption: capt('ДОКАЗАТЕЛЬСТВО ДЛЯ ЭЛАДИО', Wt('эладио') - .2), capSize: 16 });
  const wn = card({ x: A1[0] + 100, y: A1[1] + 380, w: 1, h: 1, shadow: 0, lit: false, order: 130, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  wn.s = stamp('ЛАЛО ПОБЕДИЛ', Wt('победил') + .05, { size: 72, rot: -.05, shake: 16 });
  goTo(A1, Wt('прачечной') + .2, Wt('убивает') - .3, A1[0] - 860, A1[1] - 460);
  camKey(Wt('убивает') + .1, A1[0] - 600, A1[1] - 140, 1.05, -.015); camKey(Wt('обманули'), A1[0] - 600, A1[1] + 200, 1.05, .01);
  camKey(Wt('встречает'), A1[0] + 100, A1[1] - 20, 1.0, .01); camKey(Wt('доказательство') + .2, A1[0] + 600, A1[1] - 60, 1.0, .015);
  camKey(Wt('победил') + .2, A1[0] + 200, A1[1] + 220, .9, 0);

  // S2 · original scene: Lalo in the lab, "dug his own grave"
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 1800, .85);
  dlgShot('d_lab', A2[0], A2[1] - 20, { w: 940, order: 200 });
  goTo(A2, Wt('никому') + .4, DLGT.d_lab - .1, A2[0] - 860, A2[1] - 460);
  camKey(DLGT.d_lab + .1, A2[0], A2[1] - 20, 1.08, 0); camKey(DLGT.d_lab + 22.6, A2[0], A2[1] + 30, 1.18, .01);

  // S3 · Gus prepared too: the light goes out; in the dark Gus takes a hidden gun; shot; bullet in the throat; dies laughing
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 1700, .8);
  pw('labdark', Wt('готовился') - .5, { x: A3[0] - 620, y: A3[1] - 140, w: 440, rot: -.05, order: 300, off: 1, caption: capt('ГАСНЕТ СВЕТ', Wt('свет') - .2), capSize: 20 });
  const sh = pw('gusafter', Wt('выстрел') - .7, { x: A3[0] - 620, y: A3[1] + 240, w: 440, rot: .03, order: 305, off: 1 });
  sh.stamps = [stamp('ВЫСТРЕЛ', Wt('выстрел') + .1, { x: 0, y: 40, size: 60, rot: -.08, shake: 20 })];
  sfx('shot', Wt('выстрел') + .05); shake(Wt('выстрел') + .05, 20);
  pw('lalodying', Wt('падает') - .5, { x: A3[0] + 200, y: A3[1] - 40, w: 680, rot: .015, order: 310, off: 1, caption: capt('УМИРАЕТ, СМЕЯСЬ', Wt('смеясь') - .3), capSize: 24 });
  const why = typedCard({ x: A3[0] + 200, y: A3[1] + 380, w: 680, h: 150, rot: -.02, order: 320, tIn: Wt('может') - .4, dur: .3, enter: 'slide', dx: 0, dy: 300 },
    [[typed('над тем, как близко подошёл?', Wt('близко') - .4, .03), -300, -15, `700 26px ${MONO}`], [typed('над игрой, которую так любил?', Wt('игрой') - .3, .03), -300, 35, `700 26px ${MONO}`, RED]]);
  goTo(A3, DLGT.d_lab + 22.9, Wt('готовился') - .3, A3[0] - 860, A3[1] - 460);
  camKey(Wt('готовился'), A3[0] - 600, A3[1] - 120, 1.08, -.015); camKey(Wt('выстрел') - .3, A3[0] - 600, A3[1] + 220, 1.08, .01);
  camKey(Wt('падает') + .2, A3[0] + 200, A3[1] - 20, 1.05, .01); camKey(Wt('смеётся') + .3, A3[0] + 200, A3[1] + 120, 1.0, .01); camKey(Wt('любил') + .4, A3[0] + 200, A3[1] + 200, .95, .01);

  // S4 · Mike buries Lalo and Howard under the lab floor — where Walter will cook blue meth; the lab stands on the grave of the man who nearly exposed it
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 1900, .9);
  pw('mikeface', Wt('хоронит') - .5, { x: A4[0] - 640, y: A4[1] - 140, w: 400, rot: -.05, order: 400, caption: capt('МАЙК ХОРОНИТ', Wt('хоронит') + .1), capSize: 20 });
  const gv = card({ x: A4[0] + 40, y: A4[1] - 40, w: 760, h: 440, rot: -.01, order: 410, lined: false, color: '#2a2523', tIn: Wt('полом') - .5, dur: .3, enter: 'slide', dx: 0, dy: -400,
    text: (g, t, it) => { g.fillStyle = '#6d6a64'; g.fillRect(-380, -220, 760, 150); g.fillStyle = '#e8e2d4'; g.font = `800 34px ${SANS}`; g.textAlign = 'center'; g.fillText('СУПЕРЛАБОРАТОРИЯ', 0, -130);
      g.strokeStyle = '#e8e2d4'; g.setLineDash([12, 10]); g.lineWidth = 3; g.beginPath(); g.moveTo(-380, -70); g.lineTo(380, -70); g.stroke(); g.setLineDash([]);
      drawTyped(g, it.a, t, -170, 60, `800 34px ${SANS}`, '#e8e2d4', 'center'); drawTyped(g, it.b, t, 170, 60, `800 34px ${SANS}`, '#e8e2d4', 'center'); drawTyped(g, it.c, t, 0, 170, `700 26px ${MONO}`, '#d06a5a', 'center'); } });
  gv.a = typed('† ЛАЛО', Wt('хоронит') + .4, .06); gv.b = typed('† ХОВАРД', Wt('ховарда') - .1, .06); gv.c = typed('под полом лаборатории', Wt('полом') - .2, .03);
  pw('walthat', Wt('уолтер') - .4, { x: A4[0] + 760, y: A4[1] - 100, w: 380, rot: .05, order: 420, caption: capt('ЗДЕСЬ БУДЕТ ВАРИТЬ УОЛТЕР', Wt('варить') - .2), capSize: 16 });
  card({ x: A4[0] + 40, y: A4[1] + 380, w: 1, h: 1, shadow: 0, lit: false, order: 430, tIn: 0, scrawls: [scrawl('лаборатория на могиле', Wt('могиле') - .4, .7, { size: 50, rot: -.03 })] });
  goTo(A4, Wt('любил') + .8, Wt('майк') - .1, A4[0] - 860, A4[1] - 460);
  camKey(Wt('хоронит') + .1, A4[0] - 620, A4[1] - 120, 1.08, -.015); camKey(Wt('полом'), A4[0] + 40, A4[1] - 20, .95, 0);
  camKey(Wt('уолтер') + .1, A4[0] + 740, A4[1] - 80, 1.08, .015); camKey(Wt('могиле'), A4[0] + 40, A4[1] + 200, .9, 0); camKey(T_END, A4[0] + 40, A4[1] + 220, .98, 0);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
