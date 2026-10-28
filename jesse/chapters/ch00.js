// 00 · cold open + intro
CH_V0 = 0;
const [T_START, T_END] = chRange(0);
FADE_IN = .6;
function buildScenes() {
  // S0 · Walter and Gus: what we felt for them
  const A0 = [0, 0]; lamp(A0[0], A0[1] - 200, 1900, 1);
  pw('walthat', .2, { x: A0[0] - 430, y: A0[1] - 40, w: 600, rot: -.04, order: 100, caption: capt('УОЛТЕР: БОЛЕЛИ', Wt('болели') - .2), capSize: 26 });
  pw('gus', Wt('гуса') - .3, { x: A0[0] + 430, y: A0[1] - 40, w: 600, rot: .04, order: 110, caption: capt('ГУС: УВАЖАЛИ', Wt('уважали') - .2), capSize: 26 });
  camKey(0, A0[0] - 300, A0[1], .9, -.01); camKey(Wt('себя') + .3, A0[0] - 430, A0[1] - 20, 1.05, -.015);
  camKey(Wt('гуса') + .2, A0[0] + 430, A0[1] - 20, 1.05, .015); camKey(Wt('врал') + .5, A0[0], A0[1] + 60, .85, 0);

  // S1 · and Jesse: we just loved him — case folder with his profile
  const A1 = [2600, 0]; lamp(A1[0], A1[1] - 200, 2000, 1);
  const fl = item({ draw: drawFolder, x: A1[0], y: A1[1] + 40, w: 1400, h: 900, rot: -.01, order: 200, tIn: Wt('джесси') - .4, dur: .4, enter: 'slide', dx: 0, dy: 900, tab: 'ДЕЛО № 0217',
    text: (g, t, it) => { drawStamp(g, { text: 'СЕКРЕТНО', t: 0, size: 70, rot: -.08, x: 440, y: -330 }, 99); } });
  pw('jesse', Wt('джесси') - .1, { x: A1[0] - 330, y: A1[1] - 20, w: 560, rot: -.03, order: 210, caption: capt('ДЖЕССИ ПИНКМАН', Wt('пинкмана')), capSize: 28 });
  const pr = card({ x: A1[0] + 350, y: A1[1] + 20, w: 520, h: 520, rot: .02, order: 220, lined: true, tIn: Wt('наркоман') - .3, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => drawChecks(g, t, it.cl, `700 32px ${MONO}`) });
  pr.cl = [checkLine('НАРКОМАН', Wt('наркоман') + .2, 'v', -210, -170), checkLine('ДИЛЕР', Wt('дилер') + .1, 'v', -210, -90), checkLine('ДВОЕЧНИК', Wt('двоечник') + .1, 'v', -210, -10), checkLine('«ЙОУ»', Wt('йоу') + .1, 'v', -210, 70)];
  pr.stamps = [stamp('СОВЕСТЬ: ЕСТЬ', Wt('совесть'), { x: 0, y: 190, size: 52, rot: -.07, shake: 14 })];
  goTo(A1, Wt('врал') + .5, Wt('джесси') + .2, A1[0] - 600, A1[1] - 600);
  hold(Wt('джесси') + .2, Wt('любили') + .5, A1[0] - 300, A1[1] - 20, 1.05, -.015, { dz: .05 });
  camKey(Wt('наркоман') + .3, A1[0] + 320, A1[1] - 20, 1.08, .01); camKey(Wt('совесть') + .5, A1[0] + 340, A1[1] + 100, 1.12, .015);

  // S2 · all of Walter's sins fall on him: threads from Walter to Jesse
  const A2 = [2600, 1900]; lamp(A2[0], A2[1] - 200, 2100, 1);
  pw('waltface', Wt('грехи') - .4, { x: A2[0] - 480, y: A2[1] - 120, w: 600, rot: -.05, order: 300, caption: capt('УОЛТЕР', Wt('грехи')), capSize: 26 });
  const js = pw('jfind', Wt('падают') - .3, { x: A2[0] + 380, y: A2[1] + 80, w: 760, rot: .03, order: 310, off: 4, caption: capt('ДЖЕССИ', Wt('него')), capSize: 26 });
  [-60, 40, 140].forEach((dy, k) => thread([[A2[0] - 220, A2[1] - 100 + k * 50], [A2[0] + 60, A2[1] + dy]], Wt('падают') + k * .15, Wt('него') + .3, {}));
  goTo(A2, Wt('совесть') + .5, Wt('грехи') + .1, A2[0] - 800, A2[1] - 500);
  hold(Wt('грехи') + .1, Wt('него') + .5, A2[0] - 40, A2[1] - 20, 1.0, .01, { dz: .06 });

  // S3 · we open the dossier; spoilers
  const A3 = [5200, 1900]; lamp(A3[0], A3[1] - 200, 2000, 1);
  mugBoard(A3, { still: 'jesse' }, typed('ПИНКМАН, ДЖЕССИ Б.', Wt('досье'), .045), typed('АЛЬБУКЕРКЕ · 2008', Wt('пинкмана', 2) + .3, .03, { silent: true }), { order: 600 });
  typedCard({ x: A3[0] + 800, y: A3[1] + 240, w: 600, h: 220, rot: .04, order: 620, tIn: Wt('почему') - .2, dur: .3, enter: 'slide', dx: 500, dy: 100 },
    [[typed('ПОЧЕМУ ЕГО ИСТОРИЯ', Wt('почему'), .035), -270, -30, `700 34px ${MONO}`], [typed('бьёт сильнее всех?', Wt('бьёт'), .035), -270, 40, `700 34px ${MONO}`, RED]]);
  const st6 = card({ x: A3[0] + 300, y: A3[1] - 300, w: 1, h: 1, shadow: 0, order: 640, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  st6.s = stamp('ВНИМАНИЕ', Wt('дальше') + .05, { size: 110, rot: -.1, shake: 12 });
  TAPES.push({ t0: Wt('спойлеры') - .3, dur: .5, ang: -.2, y: -60, dir: 1, out: T_END - .45 });
  TAPES.push({ t0: Wt('пяти') - .3, dur: .45, ang: .16, y: 170, dir: -1, out: T_END - .4 });
  TAPES.forEach(tp => sfx('tape', tp.t0, { dur: tp.dur }));
  goTo(A3, Wt('него') + .5, Wt('сегодня') + .2, A3[0] - 600, A3[1] - 400);
  hold(Wt('сегодня') + .2, Wt('разбираемся') + .3, A3[0], A3[1] - 40, 1.05, .01, { dz: .08 });
  camKey(Wt('бьёт') + .3, A3[0] + 520, A3[1] + 200, 1.0, .015);
  camKey(Wt('дальше') + .3, A3[0] + 200, A3[1] - 60, 1.02, -.02); camKey(T_END, A3[0] + 260, A3[1] - 20, 1.12, -.04);

  ensureFG([[-1000, 700, 'ashtray', 1.1, 1.9], [3600, 600, 'smoke', 1.6, 1.5, 0, .8], [6200, 900, 'cup', 1.0, 1.9], [1400, 2600, 'pen', 1.2, 1.85, .4]]);
  CAMK.sort((a, b) => a.t - b.t);
}
