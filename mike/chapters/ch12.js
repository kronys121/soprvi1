// 12 · УОЛТЕР  (insert: Mike's answer to "I'm the boss now" — "ноутбук... увезли на Луну")
CH_V0 = 642.6;
const [T_START, T_END] = chRange(12);
function buildScenes() {
  const D = [0, 0]; divider(D, 12, 'УОЛТЕР', T_START);
  hold(T_START, Wt('выносит') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · Mike can't stand Walter from minute one; the only one who sees who he really is
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 1900, .9);
  pw('mikewalt12', Wt('выносит') - .3, { x: A1[0] - 360, y: A1[1] - 20, w: 760, rot: -.015, order: 100, off: 2, caption: capt('С ПЕРВОЙ МИНУТЫ', Wt('минуты') - .3), capSize: 24 });
  const wp = card({ x: A1[0] + 600, y: A1[1] - 40, w: 480, h: 440, rot: .03, order: 110, lined: true, tIn: Wt('гениальный') - .4, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => { drawChecks(g, t, it.cl, `700 26px ${MONO}`); drawTyped(g, it.a, t, -200, 60, `800 34px ${SANS}`, RED); drawTyped(g, it.b, t, -200, 110, `800 34px ${SANS}`, RED); drawTyped(g, it.c, t, -200, 160, `800 34px ${SANS}`, RED); } });
  wp.cl = [checkLine('ГЕНИАЛЬНЫЙ ХИМИК', Wt('химик') + .1, 'x', -200, -140), checkLine('ЗАБОТЛИВЫЙ ОТЕЦ', Wt('отец') + .1, 'x', -200, -70)];
  wp.a = typed('ГОРДЫЙ', Wt('гордый') - .1, .05); wp.b = typed('ОПАСНЫЙ', Wt('опасный') - .1, .05); wp.c = typed('НЕУПРАВЛЯЕМЫЙ', Wt('неуправляемый') - .1, .04);
  goTo(A1, Wt('выносит') + .2, Wt('первой') - .1, A1[0] - 760, A1[1] - 400);
  hold(Wt('первой') - .1, Wt('гениальный') - .4, A1[0] - 360, A1[1] - 20, 1.05, -.015, { dz: .05 });
  camKey(Wt('гениальный') - .1, A1[0] + 580, A1[1] - 20, 1.05, .015); camKey(Wt('неуправляемый') + .5, A1[0] + 580, A1[1] + 40, 1.12, .015);

  // S2 · after Gus's death Walter declares he's the boss now
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  pw('gus', Wt('смерти') - .4, { x: A2[0] - 600, y: A2[1] - 120, w: 400, rot: -.05, order: 200, caption: capt('ГУС МЁРТВ', Wt('гуса')), capSize: 22 });
  const bs = pw('walthat', Wt('заявляет') - .4, { x: A2[0] + 160, y: A2[1] - 40, w: 620, rot: .02, order: 210 });
  bs.stamps = [stamp('«ТЕПЕРЬ Я ГЛАВНЫЙ»', Wt('главный') - .1, { x: 0, y: 140, size: 56, rot: -.06, shake: 14 })];
  goTo(A2, Wt('человек') + .3, Wt('смерти') - .2, A2[0] - 860, A2[1] - 440);
  camKey(Wt('смерти'), A2[0] - 560, A2[1] - 100, 1.08, -.015); camKey(Wt('заявляет'), A2[0] + 160, A2[1] - 20, 1.02, .015); camKey(Wt('главный') + .4, A2[0] + 160, A2[1] + 40, 1.1, .015);

  // S3 · Mike's answer — one of the best lines of the show (original dub)
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 1900, .9);
  card({ x: A3[0] - 600, y: A3[1] - 300, w: 1, h: 1, shadow: 0, lit: false, order: 290, tIn: 0, scrawls: [scrawl('ответ Майка', Wt('отвечает') - .2, .5, { size: 48, rot: -.05 })] });
  dlgShot('d_moon', A3[0] + 100, A3[1] - 20, { w: 940, order: 300 });
  goTo(A3, Wt('главный') + .7, Wt('отвечает') - .1, A3[0] - 860, A3[1] - 460);
  camKey(Wt('отвечает') + .2, A3[0] - 300, A3[1] - 160, 1.0, -.01);
  camKey(DLGT.d_moon + .1, A3[0] + 100, A3[1] - 20, 1.08, 0); camKey(DLGT.d_moon + 20.8, A3[0] + 100, A3[1] + 40, 1.2, .01);

  // S4 · and still he agrees to work with Walter: money, Kaylee; his last half measure
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  pw('desert1', Wt('соглашается') - .4, { x: A4[0] - 380, y: A4[1] - 60, w: 720, rot: -.015, order: 400, off: 2, caption: capt('РАБОТАЕТ С УОЛТЕРОМ', Wt('уолтером')), capSize: 24 });
  const wh = typedCard({ x: A4[0] + 600, y: A4[1] - 100, w: 420, h: 260, rot: .03, order: 410, tIn: Wt('денег') - .4, dur: .3, enter: 'slide', dx: 400, dy: 0 },
    [[typed('ЗАЧЕМ:', Wt('денег') - .3, .05), -170, -70, `700 26px ${MONO}`, '#888'], [typed('— деньги', Wt('денег') - .1, .05), -170, -10, `800 34px ${SANS}`], [typed('— Кейли', Wt('кейли') - .1, .05), -170, 50, `800 34px ${SANS}`]]);
  pw('kaylee', Wt('кейли') - .3, { x: A4[0] + 620, y: A4[1] + 260, w: 420, rot: -.04, order: 415, off: 2 });
  const lm = card({ x: A4[0] - 380, y: A4[1] + 380, w: 1, h: 1, shadow: 0, lit: false, order: 420, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  lm.s = stamp('ПОСЛЕДНЯЯ ПОЛУМЕРА', Wt('полумера') - .1, { size: 64, rot: -.05, shake: 16 });
  goTo(A4, DLGT.d_moon + 21.0, Wt('соглашается') - .1, A4[0] - 860, A4[1] - 460);
  camKey(Wt('соглашается'), A4[0] - 380, A4[1] - 60, 1.02, -.01); camKey(Wt('денег') - .2, A4[0] + 560, A4[1] + 60, .98, .015);
  camKey(Wt('полумера') - .4, A4[0] - 380, A4[1] + 300, 1.0, -.01);

  // S5 · Walter is a time bomb, and he stays; he taught others no half measures — and a half measure will kill him
  const A5 = [-300, 1900]; lamp(A5[0], A5[1] - 200, 2000, 1);
  pw('mikewalt1', Wt('бомба') - .5, { x: A5[0] - 360, y: A5[1] - 80, w: 720, rot: -.015, order: 500, off: 2, caption: capt('БОМБА С ЧАСОВЫМ МЕХАНИЗМОМ', Wt('механизмом') - .3), capSize: 22 });
  const fn = card({ x: A5[0] + 600, y: A5[1] - 20, w: 480, h: 360, rot: .03, order: 510, color: '#f3efe2', lined: false, tIn: Wt('учил') - .3, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -80, `700 26px ${MONO}`, INK, 'center'); drawTyped(g, it.b, t, 0, -30, `700 26px ${MONO}`, INK, 'center'); drawTyped(g, it.c, t, 0, 70, `800 46px ${SANS}`, RED, 'center'); } });
  fn.a = typed('всю жизнь учил других:', Wt('учил') - .1, .03); fn.b = typed('«никаких полумер»', Wt('=полумер') - .4, .04); fn.c = typed('ПОЛУМЕРА ЕГО УБЬЁТ', Wt('убьёт') - .6, .04);
  goTo(A5, Wt('полумера') + .8, Wt('бомба') - .3, A5[0] - 860, A5[1] - 460);
  hold(Wt('бомба') - .3, Wt('рядом') + .2, A5[0] - 360, A5[1] - 80, 1.05, -.015, { dz: .05 });
  camKey(Wt('учил') + .1, A5[0] + 580, A5[1] - 20, 1.05, .015); camKey(T_END, A5[0] + 580, A5[1] + 20, 1.16, .015);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
