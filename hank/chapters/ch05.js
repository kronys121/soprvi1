// 05 · ФУРГОН  (inserts: fake call "ваша жена попала в катастрофу"; Gus to the cousins "агента зовут Хэнк Шрейдер")
CH_V0 = 301.8;
const [T_START, T_END] = chRange(5);
function buildScenes() {
  const D = [0, 0]; divider(D, 5, 'ФУРГОН', T_START);
  hold(T_START, Wt('вернувшись') + .3, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · back home he grabs the blue meth case to prove he's still in the game — and he is good: step by step to the RV
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, 1);
  const cs = typedCard({ x: A1[0] - 360, y: A1[1] - 60, w: 720, h: 420, rot: -.02, order: 100, tIn: Wt('вцепляется') - .3, dur: .3, enter: 'slide', dx: -500, dy: 0 },
    [[typed('ДЕЛО: СИНИЙ МЕТ', Wt('синем') - .2, .04), -320, -130, `800 40px ${SANS}`, '#1f5fa8'], [typed('— доказать себе: ещё в строю', Wt('доказать') - .1, .03), -300, -50, `700 28px ${MONO}`],
     [typed('— шаг за шагом', Wt('шаг') - .1, .04), -300, 20, `700 28px ${MONO}`], [typed('→ старый фургон', Wt('старый') - .1, .04), -300, 90, `700 30px ${MONO}`, RED]]);
  cs.stamps = [stamp('ХОРОШ', Wt('хорош') - .05, { x: 170, y: 160, size: 64, rot: -.08, shake: 12 })];
  pw('rvjunk', Wt('варят') - .4, { x: A1[0] + 560, y: A1[1] - 40, w: 480, rot: .04, order: 110, off: 3, caption: capt('ФУРГОН НА СВАЛКЕ', Wt('свалке')), capSize: 22 });
  goTo(A1, Wt('вернувшись') + .3, Wt('вцепляется') + .1, A1[0] - 760, A1[1] - 400);
  hold(Wt('вцепляется') + .1, Wt('строю') + .4, A1[0] - 360, A1[1] - 60, 1.05, -.015, { dz: .05 });
  camKey(Wt('шагом') + .3, A1[0] - 300, A1[1] + 20, 1.08, -.01); camKey(Wt('варят') + .2, A1[0] + 520, A1[1] - 40, 1.08, .015); camKey(Wt('свалке') + .4, A1[0] + 540, A1[1] - 20, 1.15, .015);

  // S2 · Walt and Jesse inside; Hank at the door, a couple of metres from the answer — the phone rings (original dub)
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, .95);
  const rv = pw('rvknock', Wt('внутри') - .4, { x: A2[0] - 620, y: A2[1] - 180, w: 480, rot: -.05, order: 200, off: 2, caption: capt('ВНУТРИ: УОЛТЕР И ДЖЕССИ', Wt('джесси', 2) - .2), capSize: 18 });
  const dr = card({ x: A2[0] - 620, y: A2[1] + 240, w: 480, h: 180, rot: .03, order: 205, lined: false, tIn: Wt('двери') - .3, dur: .3, enter: 'slide', dx: -400, dy: 200,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -10, `800 60px ${SANS}`, RED, 'center'); drawTyped(g, it.b, t, 0, 50, `700 24px ${MONO}`, INK, 'center'); } });
  dr.a = typed('2 МЕТРА', Wt('пара') - .1, .07); dr.b = typed('до разгадки', Wt('разгадки') - .1, .04);
  dlgShot('d_fakecall', A2[0] + 180, A2[1] - 20, { w: 900, order: 210 });
  goTo(A2, Wt('свалке') + .7, Wt('внутри') + .1, A2[0] - 860, A2[1] - 460);
  hold(Wt('внутри') + .1, Wt('двери') + .2, A2[0] - 600, A2[1] - 160, 1.08, -.015, { dz: .05 });
  camKey(Wt('метров') + .3, A2[0] - 600, A2[1] + 220, 1.1, .015);
  camKey(DLGT.d_fakecall + .1, A2[0] + 180, A2[1] - 20, 1.08, 0); camKey(DLGT.d_fakecall + 14.1, A2[0] + 180, A2[1] + 40, 1.2, .01);

  // S3 · he races to the hospital; Marie is alive; the call was fake — set up by Walt and Jesse; the RV is gone
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2000, 1);
  const hp = pw('hospital', Wt('бросает') - .4, { x: A3[0] - 340, y: A3[1] - 40, w: 760, rot: -.015, order: 300, off: 2, caption: capt('БОЛЬНИЦА · МАРИ ЖИВА', Wt('живую')), capSize: 24 });
  hp.stamps = [stamp('ФАЛЬШИВЫЙ ЗВОНОК', Wt('фальшивый') - .1, { x: 0, y: 90, size: 52, rot: -.07, shake: 16 })];
  const wh = card({ x: A3[0] + 600, y: A3[1] - 60, w: 460, h: 360, rot: .03, order: 310, lined: true, tIn: Wt('устроили') - .3, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => { g.fillStyle = INK; g.font = `700 28px ${MONO}`; g.textAlign = 'left'; g.fillText('УСТРОИЛИ:', -190, -120); drawChecks(g, t, it.cl, `700 28px ${MONO}`); } });
  wh.cl = [checkLine('УОЛТЕР', Wt('уолтер', 3) + .1, 'v', -170, -40), checkLine('ДЖЕССИ', Wt('джесси', 3) + .1, 'v', -170, 30), checkLine('ФУРГОН: УНИЧТОЖЕН', Wt('уничтожен') - .1, 'x', -170, 100)];
  goTo(A3, DLGT.d_fakecall + 14.3, Wt('бросает') + .1, A3[0] - 800, A3[1] - 460);
  hold(Wt('бросает') + .1, Wt('фальшивый') + .3, A3[0] - 340, A3[1] - 40, 1.05, -.01, { dz: .05 });
  camKey(Wt('устроили') + .2, A3[0] + 560, A3[1] - 40, 1.08, .015); camKey(Wt('пальца') + .3, A3[0] + 100, A3[1] + 40, .88, 0); camKey(Wt('уничтожен') + .4, A3[0] + 560, A3[1] + 60, 1.1, .015);

  // S4 · the armour cracks: he beats Jesse half to death; suspended, gun taken away
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 1900, .9);
  const bt = pw('beating', Wt('трескается') - .5, { x: A4[0] - 360, y: A4[1] - 40, w: 760, rot: -.02, order: 400, off: 2 });
  bt.stamps = [stamp('БРОНЯ ТРЕСКАЕТСЯ', Wt('трескается') - .1, { x: 0, y: -110, size: 54, rot: -.06, shake: 18 })];
  pw('jessehosp', Wt('полусмерти') - .5, { x: A4[0] + 580, y: A4[1] - 200, w: 440, rot: .05, order: 410, off: 2, caption: capt('ДО ПОЛУСМЕРТИ', Wt('полусмерти')), capSize: 22 });
  pw('badge', Wt('отстраняют') - .4, { x: A4[0] + 580, y: A4[1] + 220, w: 440, rot: -.04, order: 420, off: 1, caption: capt('ОТСТРАНЁН · БЕЗ ПИСТОЛЕТА', Wt('пистолет')), capSize: 18 });
  shake(Wt('избивает'), 10); shake(Wt('голыми'), 8);
  goTo(A4, Wt('уничтожен') + .7, Wt('трескается') - .3, A4[0] - 860, A4[1] - 460);
  hold(Wt('трескается') - .3, Wt('остановки') + .3, A4[0] - 360, A4[1] - 40, 1.08, -.015, { dz: .06 });
  camKey(Wt('полусмерти') + .1, A4[0] + 540, A4[1] - 180, 1.05, .015); camKey(Wt('отстраняют') + .2, A4[0] + 540, A4[1] + 200, 1.05, -.01);

  // S5 · for the first time he admits to Marie he's not the man he thought he was; then: Gus gives the cousins his name (original dub)
  const A5 = [-300, 1900]; lamp(A5[0], A5[1] - 200, 1900, .9);
  const cf = card({ x: A5[0] - 560, y: A5[1] - 60, w: 520, h: 420, rot: -.03, order: 500, color: '#f6f1e3', lined: true, tIn: Wt('впервые') - .3, dur: .3, enter: 'slide', dx: -400, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.a, t, -230, -140, `400 italic 28px "DejaVu Serif"`); drawTyped(g, it.b, t, -230, -70, `700 italic 32px "DejaVu Serif"`, RED);
      drawTyped(g, it.c, t, -230, 10, `400 italic 28px "DejaVu Serif"`); drawTyped(g, it.d, t, -230, 120, `800 34px ${SANS}`); } });
  cf.a = typed('«Я не тот человек,', Wt('впервые') + .4, .04, { silent: true }); cf.b = typed('каким себя считал»', Wt('каким') - .1, .04, { silent: true });
  cf.c = typed('— не усталость, не злость', Wt('усталости') - .3, .03); cf.d = typed('КТО Я?', Wt('такой') - .4, .08);
  dlgShot('d_gusname', A5[0] + 200, A5[1] - 20, { w: 880, order: 510 });
  const gn = card({ x: A5[0] + 200, y: A5[1] + 440, w: 1, h: 1, shadow: 0, lit: false, order: 520, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  gn.s = stamp('ЦЕЛЬ: ХЭНК ШРЕЙДЕР', DLGT.d_gusname + 4.8, { size: 56, rot: -.06, shake: 16 });
  goTo(A5, Wt('пистолет') + .6, Wt('впервые') + .1, A5[0] - 860, A5[1] - 460);
  hold(Wt('впервые') + .1, Wt('такой') + .4, A5[0] - 560, A5[1] - 40, 1.1, -.015, { dz: .05 });
  camKey(DLGT.d_gusname + .1, A5[0] + 200, A5[1] - 20, 1.08, 0); camKey(T_END, A5[0] + 200, A5[1] + 60, 1.2, .01);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
