// 11 · ГАРАЖ  (inserts: "Я не знаю, кто ты... с кем я говорю"; "тебе надо быть осторожней")
CH_V0 = 682.3;
const [T_START, T_END] = chRange(11);
function buildScenes() {
  const D = [0, 0]; divider(D, 11, 'ГАРАЖ', T_START);
  hold(T_START, Wt('уезжает') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · he leaves the party "feeling unwell"; at home he can't sleep; old files — Walt everywhere
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 1900, .85);
  const nt = typedCard({ x: A1[0] - 420, y: A1[1] - 60, w: 680, h: 380, rot: -.02, order: 100, tIn: Wt('уезжает') - .1, dur: .3, enter: 'slide', dx: -500, dy: 0 },
    [[typed('«плохое самочувствие»', Wt('самочувствие') - .6, .03), -300, -110, `400 italic 30px "DejaVu Serif"`], [typed('ночь · не спит', Wt('спит') - .4, .04), -300, -30, `700 30px ${MONO}`],
     [typed('старые дела:', Wt('старые') - .1, .04), -300, 40, `700 30px ${MONO}`], [typed('УОЛТЕР — ПОВСЮДУ', Wt('повсюду') - .5, .04), -300, 120, `800 40px ${SANS}`, RED]]);
  for (let i = 0; i < 4; i++) pw(['waltface', 'tracker', 'dinner', 'walthat'][i], Wt('уолтера') + i * .18, { x: A1[0] + 360 + (i % 2) * 300, y: A1[1] - 180 + Math.floor(i / 2) * 340, w: 300, rot: [-.06, .05, .04, -.05][i], order: 110 + i, off: 4 });
  goTo(A1, Wt('уезжает') + .2, Wt('праздника') + .1, A1[0] - 760, A1[1] - 400);
  hold(Wt('праздника') + .1, Wt('дела') + .3, A1[0] - 420, A1[1] - 60, 1.05, -.015, { dz: .05 });
  camKey(Wt('уолтера') + .5, A1[0] + 480, A1[1], .9, .015); camKey(Wt('повсюду') + .5, A1[0] + 500, A1[1] + 20, .98, .015);

  // S2 · then Walt comes to him; Hank shuts the garage door — and punches him in the face
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, .95);
  pw('garagedoor', Wt('приходит') - .5, { x: A2[0] - 560, y: A2[1] - 40, w: 520, rot: -.04, order: 200, off: 2, caption: capt('УОЛТЕР ПРИХОДИТ САМ', Wt('нему') - .2), capSize: 20 });
  const pn = pw('punch', Wt('закрывает') - .4, { x: A2[0] + 300, y: A2[1] - 40, w: 760, rot: .015, order: 210, off: 1 });
  pn.stamps = [stamp('УДАР', Wt('бьёт') - .05, { x: 0, y: 60, size: 110, rot: -.08, shake: 30 })];
  sfx('slap', Wt('бьёт')); shake(Wt('бьёт'), 18);
  sfx('slide', Wt('гаража') - .3);
  goTo(A2, Wt('повсюду') + .8, Wt('потом') + .1, A2[0] - 860, A2[1] - 440);
  hold(Wt('потом') + .1, Wt('нему') + .3, A2[0] - 560, A2[1] - 40, 1.08, -.015, { dz: .05 });
  camKey(Wt('закрывает') + .1, A2[0] + 300, A2[1] - 40, 1.02, .015); camKey(Wt('лицу') + .3, A2[0] + 300, A2[1], 1.2, .02);

  // S3 · two men who were family for years, face to face, neither pretending any more (original dub)
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 1900, .9);
  pw('garagehank', Wt('сильнейших') - .5, { x: A3[0] - 620, y: A3[1] - 180, w: 480, rot: -.05, order: 300, off: 1, caption: capt('СТОЛЬКО ЛЕТ — СЕМЬЯ', Wt('семьёй')), capSize: 20 });
  const np = card({ x: A3[0] - 620, y: A3[1] + 240, w: 480, h: 170, rot: .03, order: 305, lined: false, tIn: Wt('напротив') - .3, dur: .3, enter: 'slide', dx: -400, dy: 200,
    text: (g, t, it) => drawTyped(g, it.a, t, 0, 10, `800 34px ${SANS}`, RED, 'center') });
  np.a = typed('НИКТО НЕ ПРИТВОРЯЕТСЯ', Wt('притворяется') - .6, .03);
  dlgShot('d_garage1', A3[0] + 180, A3[1] - 20, { w: 900, order: 310 });
  goTo(A3, Wt('лицу') + .5, Wt('одна') + .1, A3[0] - 860, A3[1] - 460);
  hold(Wt('одна') + .1, Wt('семьёй') + .3, A3[0] - 600, A3[1] - 160, 1.08, -.015, { dz: .05 });
  camKey(Wt('напротив') + .1, A3[0] - 600, A3[1] + 220, 1.1, .015);
  camKey(DLGT.d_garage1 + .1, A3[0] + 180, A3[1] - 20, 1.1, 0); camKey(DLGT.d_garage1 + 6.6, A3[0] + 180, A3[1] + 20, 1.2, .01);

  // S4 · Walt, calm and cold: sick, the cancer is back, not long to live — Hank won't have time to jail him; "tread lightly" (original dub)
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 1900, .9);
  pw('garagewalt', Wt('отвечает') - .5, { x: A4[0] - 620, y: A4[1] - 180, w: 480, rot: -.05, order: 400, off: 1, caption: capt('СПОКОЙНО И ХОЛОДНО', Wt('холодно')), capSize: 20 });
  const wc = card({ x: A4[0] - 620, y: A4[1] + 260, w: 480, h: 300, rot: .03, order: 405, lined: true, tIn: Wt('болен') - .3, dur: .3, enter: 'slide', dx: -400, dy: 200,
    text: (g, t, it) => drawChecks(g, t, it.cl, `700 26px ${MONO}`) });
  wc.cl = [checkLine('БОЛЕН', Wt('болен') + .1, 'v', -200, -90), checkLine('РАК ВЕРНУЛСЯ', Wt('вернулся') + .1, 'v', -200, -20), checkLine('ЖИТЬ НЕДОЛГО', Wt('недолго') + .1, 'v', -200, 50), checkLine('НЕ УСПЕЕШЬ ПОСАДИТЬ', Wt('успеет') + .1, 'v', -200, 120)];
  dlgShot('d_garage2', A4[0] + 180, A4[1] - 20, { w: 900, order: 410 });
  goTo(A4, DLGT.d_garage1 + 6.7, Wt('отвечает') - .2, A4[0] - 860, A4[1] - 460);
  hold(Wt('отвечает') - .2, Wt('холодно') + .3, A4[0] - 600, A4[1] - 160, 1.08, -.015, { dz: .05 });
  camKey(Wt('болен') + .1, A4[0] - 600, A4[1] + 240, 1.08, .015); camKey(Wt('успеет') + .3, A4[0] - 600, A4[1] + 260, 1.15, .015);
  camKey(DLGT.d_garage2 + .1, A4[0] + 180, A4[1] - 20, 1.08, 0); camKey(DLGT.d_garage2 + 16, A4[0] + 180, A4[1] + 40, 1.25, .01);

  // S5 · both masks fall: Hank no longer jokes, Walt no longer a teacher — only the detective and Heisenberg remain
  const A5 = [-300, 1900]; lamp(A5[0], A5[1] - 200, 2000, 1);
  const mk = card({ x: A5[0] - 100, y: A5[1] - 40, w: 900, h: 460, rot: -.015, order: 500, lined: false, tIn: Wt('сцене') - .3, dur: .3, enter: 'slide', dx: 0, dy: 500,
    text: (g, t, it) => { g.strokeStyle = INK; g.lineWidth = 3; g.beginPath(); g.moveTo(0, -150); g.lineTo(0, 190); g.stroke(); drawTyped(g, it.hd, t, 0, -185, `700 28px ${MONO}`, '#666', 'center');
      drawTyped(g, it.a, t, -225, -100, `800 36px ${SANS}`, INK, 'center'); drawTyped(g, it.b, t, -225, -30, `700 28px ${MONO}`, '#888', 'center'); drawPen(g, it.p, t); drawTyped(g, it.c, t, -225, 80, `800 48px ${SANS}`, INK, 'center');
      drawTyped(g, it.d, t, 225, -100, `800 36px ${SANS}`, INK, 'center'); drawTyped(g, it.e, t, 225, -30, `700 28px ${MONO}`, '#888', 'center'); drawPen(g, it.q, t); drawTyped(g, it.f, t, 225, 80, `800 44px ${SANS}`, RED, 'center'); } });
  mk.hd = typed('маски сброшены', Wt('маски') - .3, .04);
  mk.a = typed('ХЭНК', Wt('шутит') - .8, .06); mk.b = typed('шутник', Wt('шутит') - .3, .05); mk.p = pen([[-320, -32], [-130, -36]], Wt('шутит') + .2, .25, { width: 6 }); mk.c = typed('СЫЩИК', Wt('сыщик') - .1, .06);
  mk.d = typed('УОЛТЕР', Wt('уолтер', 5) - .1, .06); mk.e = typed('учитель', Wt('учитель') - .3, .05); mk.q = pen([[130, -32], [320, -36]], Wt('учитель') + .2, .25, { width: 6 }); mk.f = typed('ХАЙЗЕНБЕРГ', Wt('хайзенберг') - .1, .05);
  goTo(A5, DLGT.d_garage2 + 16.2, Wt('сцене') + .1, A5[0] - 860, A5[1] - 460);
  hold(Wt('сцене') + .1, Wt('шутит') + .4, A5[0] - 260, A5[1] - 60, 1.08, -.015, { dz: .05 });
  camKey(Wt('учитель') + .3, A5[0] + 60, A5[1] - 60, 1.08, .015); camKey(T_END, A5[0] - 100, A5[1] + 40, 1.12, 0);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
