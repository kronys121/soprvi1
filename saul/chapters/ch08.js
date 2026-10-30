// 08 · ВСЁ ХОРОШО  (inserts: "я как джаз импровизирую... они на крючке"; "...Сол Гудман")
CH_V0 = 563.5;
const [T_START, T_END] = chRange(8);
function buildScenes() {
  const D = [0, 0]; divider(D, 8, 'ВСЁ ХОРОШО', T_START);
  hold(T_START, Wt('оставил') + .3, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · Chuck's letter: short, warm, "proud of you"; Kim cries reading it; Jimmy, stone-faced: "well, okay"
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, .95);
  const lt = card({ x: A1[0] - 360, y: A1[1] - 40, w: 640, h: 560, rot: -.025, order: 100, color: '#f6f1e3', lined: true, tIn: Wt('письмо') - .3, dur: .3, enter: 'slide', dx: -400, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.a, t, -270, -200, `400 italic 34px "DejaVu Serif"`); drawTyped(g, it.b, t, -270, -110, `400 italic 28px "DejaVu Serif"`);
      drawTyped(g, it.c, t, -270, -50, `400 italic 28px "DejaVu Serif"`); drawTyped(g, it.d, t, -270, 40, `700 italic 34px "DejaVu Serif"`, RED); drawTyped(g, it.e, t, 60, 190, `400 italic 30px "DejaVu Serif"`); } });
  lt.a = typed('Дорогой Джимми,', Wt('письмо') - .1, .04, { silent: true }); lt.b = typed('коротко и тепло —', Wt('короткое') - .1, .04, { silent: true });
  lt.c = typed('как брат брату.', Wt('тёплое') - .2, .04, { silent: true }); lt.d = typed('Я горжусь тобой.', Wt('гордится') - .2, .05, { silent: true }); lt.e = typed('— Чак', Wt('гордится') + .8, .06, { silent: true });
  pw('kimhear', Wt('читая') - .4, { x: A1[0] + 520, y: A1[1] - 200, w: 460, rot: .04, order: 110, off: 1, caption: capt('КИМ ПЛАЧЕТ', Wt('плачет')), capSize: 22 });
  const lj = pw('letterread', Wt('слушает') - .4, { x: A1[0] + 520, y: A1[1] + 230, w: 460, rot: -.04, order: 120, off: 1, caption: capt('КАМЕННОЕ ЛИЦО', Wt('каменным')), capSize: 22 });
  lj.stamps = [stamp('«НУ И ЛАДНО»', Wt('ладно') - .1, { x: 0, y: 20, size: 52, rot: -.07, shake: 14 })];
  goTo(A1, Wt('оставил') + .3, Wt('письмо') + .1, A1[0] - 760, A1[1] - 400);
  hold(Wt('письмо') + .1, Wt('гордится') + 1.2, A1[0] - 360, A1[1] - 40, 1.05, -.015, { dz: .05 });
  camKey(Wt('читая') + .2, A1[0] + 500, A1[1] - 200, 1.08, .015); camKey(Wt('слушает') + .2, A1[0] + 500, A1[1] + 220, 1.08, -.01); camKey(Wt('ладно') + .6, A1[0] + 500, A1[1] + 230, 1.2, .01);

  // S2 · a year later: reinstatement hearing, a moving speech about his brother, tears — accepted
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  const sp = pw('speech4', Wt('восстанавливают') - .4, { x: A2[0] - 160, y: A2[1] - 20, w: 900, rot: -.01, order: 200, off: 3, caption: capt('КОМИССИЯ · РЕЧЬ О БРАТЕ', Wt('комиссией')), capSize: 24 });
  sp.stamps = [stamp('ВОССТАНОВЛЕН', Wt('принимают') - .1, { x: 160, y: 120, size: 48, rot: -.08, shake: 16 })];
  tag({ x: A2[0] + 520, y: A2[1] - 330, w: 360, rot: .06, label: 'СО СЛЕЗАМИ', tIn: Wt('слезами') - .1, order: 210, size: 34 });
  card({ x: A2[0] - 560, y: A2[1] - 330, w: 1, h: 1, shadow: 0, lit: false, order: 215, tIn: 0, scrawls: [scrawl('через год', Wt('через') - .1, .4, { size: 46, rot: -.05 })] });
  goTo(A2, Wt('ладно') + .9, Wt('через') + .1, A2[0] - 860, A2[1] - 440);
  hold(Wt('через') + .1, Wt('произносит') + .2, A2[0] - 400, A2[1] - 200, 1.0, -.015, { dz: .05 });
  camKey(Wt('трогательную') + .2, A2[0] - 160, A2[1] - 20, 1.05, 0); camKey(Wt('слезами') + .2, A2[0] + 100, A2[1] - 120, 1.1, .015); camKey(Wt('принимают') + .4, A2[0] - 60, A2[1] + 40, 1.12, .01);

  // S3 · the hallway: he laughs, tells Kim it was all a game (original dub)
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2000, 1);
  pw('hallway', Wt('коридоре') - .4, { x: A3[0] - 620, y: A3[1] - 200, w: 480, rot: -.05, order: 300, off: 3, caption: capt('КОРИДОР · СМЕЁТСЯ', Wt('смеётся')), capSize: 20 });
  const gm = card({ x: A3[0] - 620, y: A3[1] + 230, w: 480, h: 170, rot: .03, order: 305, lined: false, tIn: Wt('игрой') - .7, dur: .3, enter: 'slide', dx: -400, dy: 200,
    text: (g, t, it) => drawTyped(g, it.a, t, 0, 10, `800 44px ${SANS}`, RED, 'center') });
  gm.a = typed('ЭТО БЫЛА ИГРА', Wt('игрой') - .4, .05);
  dlgShot('d_jazz', A3[0] + 180, A3[1] - 20, { w: 900, order: 310 });
  goTo(A3, Wt('принимают') + .7, Wt('коридоре') + .1, A3[0] - 860, A3[1] - 460);
  hold(Wt('коридоре') + .1, Wt('игрой') + .4, A3[0] - 600, A3[1] - 20, 1.0, -.015, { dz: .05 });
  camKey(DLGT.d_jazz + .1, A3[0] + 180, A3[1] - 20, 1.08, 0); camKey(DLGT.d_jazz + 12, A3[0] + 180, A3[1] + 40, 1.2, .01);

  // S4 · Kim's horror: he no longer tells truth from performance; then the new name (original dub)
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 1900, .9);
  pw('kimhorror', Wt('смотрит') - .4, { x: A4[0] - 600, y: A4[1] - 200, w: 500, rot: -.05, order: 400, off: 1, caption: capt('КИМ · УЖАС', Wt('ужасом')), capSize: 22 });
  const tf = card({ x: A4[0] - 600, y: A4[1] + 230, w: 500, h: 200, rot: .03, order: 405, lined: false, tIn: Wt('видит') - .3, dur: .3, enter: 'slide', dx: -400, dy: 200,
    text: (g, t, it) => { drawTyped(g, it.a, t, -60, 0, `800 40px ${SANS}`, INK, 'right'); drawTyped(g, it.c, t, 0, 0, `800 44px ${SANS}`, RED, 'center'); drawTyped(g, it.b, t, 60, 0, `800 40px ${SANS}`, INK, 'left'); } });
  tf.a = typed('ПРАВДА', Wt('правду') - .1, .05); tf.c = typed('=', Wt('спектакля') - .1, .1); tf.b = typed('ИГРА', Wt('спектакля') + .2, .06);
  dlgShot('d_sall', A4[0] + 180, A4[1] - 20, { w: 900, order: 410 });
  goTo(A4, DLGT.d_jazz + 12.2, Wt('смотрит') + .1, A4[0] - 860, A4[1] - 460);
  hold(Wt('смотрит') + .1, Wt('спектакля') + .6, A4[0] - 600, A4[1] - 20, 1.0, -.015, { dz: .05 });
  camKey(Wt('объявляет') + .2, A4[0] - 100, A4[1] - 20, .9, .01);
  camKey(DLGT.d_sall + .1, A4[0] + 180, A4[1] - 20, 1.08, 0); camKey(DLGT.d_sall + 15.6, A4[0] + 180, A4[1] + 40, 1.2, .01);

  // S5 · S'all good, man; the birth of Saul — not when he started conning, but when he stopped feeling
  const A5 = [-300, 1900]; lamp(A5[0], A5[1] - 200, 2000, 1);
  const nm = card({ x: A5[0] - 60, y: A5[1] - 120, w: 920, h: 420, rot: -.015, order: 500, color: '#1f2a44', lined: false, tIn: Wt('по-английски') - .3, dur: .3, enter: 'slide', dx: 0, dy: -400,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -110, `800 64px ${SANS}`, '#f2d27a', 'center'); drawTyped(g, it.b, t, 0, -10, `800 84px ${SANS}`, '#ffffff', 'center');
      drawTyped(g, it.c, t, 0, 100, `700 italic 40px "DejaVu Serif"`, '#e8dccb', 'center'); } });
  nm.a = typed('SAUL GOODMAN', Wt('по-английски') - .1, .05); nm.b = typed("S'ALL GOOD, MAN", Wt("s'all") - .1, .05); nm.c = typed('«всё хорошо, мужик»', Wt('хорошо') - .4, .04);
  const bt = card({ x: A5[0] - 60, y: A5[1] + 330, w: 860, h: 230, rot: .015, order: 510, lined: true, tIn: Wt('момент') - .3, dur: .3, enter: 'slide', dx: 0, dy: 400,
    text: (g, t, it) => { g.fillStyle = INK; g.font = `700 28px ${MONO}`; g.textAlign = 'left'; g.fillText('СОЛ РОДИЛСЯ, КОГДА:', -390, -70); drawChecks(g, t, it.cl, `700 30px ${MONO}`); } });
  bt.cl = [checkLine('НАЧАЛ ХИТРИТЬ', Wt('хитрить') + .1, 'x', -380, 0), checkLine('ПЕРЕСТАЛ ЧУВСТВОВАТЬ', Wt('чувствовать') + .1, 'v', -380, 70)];
  goTo(A5, DLGT.d_sall + 15.8, Wt('по-английски') + .1, A5[0] - 860, A5[1] - 460);
  hold(Wt('по-английски') + .1, Wt('мужик') + .5, A5[0] - 60, A5[1] - 120, 1.08, -.01, { dz: .05 });
  camKey(Wt('момент') + .3, A5[0] - 60, A5[1] + 110, .9, .01); camKey(Wt('чувствовать') + .5, A5[0] - 60, A5[1] + 200, 1.0, .01);

  // S6 · a defence mechanism: Jimmy hurts (his brother's death), Saul doesn't; suits, voice, jokes = a wall around grief
  const A6 = [6800, 950]; lamp(A6[0], A6[1] - 200, 2000, 1);
  const dm = card({ x: A6[0] - 160, y: A6[1] - 60, w: 920, h: 440, rot: -.015, order: 600, lined: false, tIn: Wt('защитный') - .3, dur: .3, enter: 'slide', dx: 0, dy: 500,
    text: (g, t, it) => { g.strokeStyle = INK; g.lineWidth = 3; g.beginPath(); g.moveTo(0, -130); g.lineTo(0, 180); g.stroke();
      drawTyped(g, it.t, t, 0, -160, `700 28px ${MONO}`, INK, 'center');
      drawTyped(g, it.a, t, -230, -90, `800 34px ${SANS}`, INK, 'center'); drawTyped(g, it.b, t, -230, 0, `800 52px ${SANS}`, RED, 'center'); drawTyped(g, it.c, t, -230, 70, `700 26px ${MONO}`, INK, 'center');
      drawTyped(g, it.d, t, 230, -90, `800 34px ${SANS}`, INK, 'center'); drawTyped(g, it.e, t, 230, 0, `800 52px ${SANS}`, '#888', 'center'); drawTyped(g, it.f, t, 230, 70, `700 26px ${MONO}`, INK, 'center'); } });
  dm.t = typed('ЗАЩИТНЫЙ МЕХАНИЗМ', Wt('защитный') - .1, .03);
  dm.a = typed('ДЖИММИ МАКГИЛЛ', Wt('макгиллу') - .5, .03); dm.b = typed('БОЛЬНО', Wt('больно') - .1, .06); dm.c = typed('вина за смерть брата', Wt('виноват') - .2, .03);
  dm.d = typed('СОЛ ГУДМАН', Wt('солу') - .2, .04); dm.e = typed('НЕ БОЛЬНО', Wt('больно', 2) - .3, .05); dm.f = typed('у Сола всё хорошо', Wt('сола', 2) - .1, .03);
  pw('suits', Wt('яркие') - .4, { x: A6[0] + 600, y: A6[1] + 330, w: 440, rot: .05, order: 610, off: 3, caption: capt('КОСТЮМЫ · ГОЛОС · ШУТКИ', Wt('шутка')), capSize: 18 });
  card({ x: A6[0] - 260, y: A6[1] + 370, w: 1, h: 1, shadow: 0, lit: false, order: 620, tIn: 0, scrawls: [scrawl('СТЕНА ВОКРУГ ГОРЯ', Wt('стена') - .1, .6, { size: 56, rot: -.04 })] });
  goTo(A6, Wt('чувствовать') + .9, Wt('гудман', 2) - .3, A6[0] - 860, A6[1] - 460);
  hold(Wt('гудман', 2) - .3, Wt('механизм') + .5, A6[0] - 160, A6[1] - 140, 1.05, -.01, { dz: .05 });
  camKey(Wt('макгиллу') + .2, A6[0] - 330, A6[1] - 60, 1.12, -.015); camKey(Wt('солу') + .3, A6[0] + 70, A6[1] - 60, 1.12, .015);
  camKey(Wt('яркие') + .2, A6[0] + 300, A6[1] + 200, .9, .01); camKey(Wt('стена') + .3, A6[0] + 100, A6[1] + 260, 1.0, -.01); camKey(T_END, A6[0] + 60, A6[1] + 260, 1.1, -.015);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
