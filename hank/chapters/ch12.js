// 12 · КАРЬЕРА  (inserts: Hank to Marie "как только я скажу, моей карьере конец"; Walt's DVD "я убит своим шурином Хэнком Шрейдером")
CH_V0 = 731.8;
const [T_START, T_END] = chRange(12);
function buildScenes() {
  const D = [0, 0]; divider(D, 12, 'КАРЬЕРА', T_START);
  hold(T_START, Wt('тут') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · his main mistake: he doesn't go to his bosses — the moment he says it, his career is over; Heisenberg at his own dinner table (original dub)
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, 1);
  const ms = card({ x: A1[0] - 560, y: A1[1] - 200, w: 500, h: 300, rot: -.03, order: 100, lined: true, tIn: Wt('совершает') - .3, dur: .3, enter: 'slide', dx: -400, dy: -200,
    text: (g, t, it) => { drawTyped(g, it.a, t, -210, -90, `800 34px ${SANS}`, RED); drawChecks(g, t, it.cl, `700 26px ${MONO}`); } });
  ms.a = typed('ГЛАВНАЯ ОШИБКА', Wt('ошибку') - .5, .04);
  ms.cl = [checkLine('К НАЧАЛЬСТВУ', Wt('начальству') + .1, 'x', -190, -10), checkLine('СВОИМ ЛЮДЯМ', Wt('людям') + .1, 'x', -190, 60)];
  pw('dinner', Wt('глава') - .5, { x: A1[0] - 560, y: A1[1] + 240, w: 500, rot: .04, order: 105, off: 10, caption: capt('ХАЙЗЕНБЕРГ — ЗА ЕГО СТОЛОМ', Wt('столом') - .3), capSize: 18 });
  dlgShot('d_career', A1[0] + 200, A1[1] - 20, { w: 880, order: 110 });
  const ov = card({ x: A1[0] + 200, y: A1[1] + 450, w: 1, h: 1, shadow: 0, lit: false, order: 120, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  ov.s = stamp('КАРЬЕРЕ КОНЕЦ', DLGT.d_career + 7.8, { size: 62, rot: -.06, shake: 16 });
  goTo(A1, Wt('тут') + .2, Wt('хэнк') + .1, A1[0] - 860, A1[1] - 600);
  hold(Wt('хэнк') + .1, Wt('хайзенберг') + .3, A1[0] - 560, A1[1] - 200, 1.08, -.015, { dz: .05 });
  camKey(Wt('закончена') + .2, A1[0] - 400, A1[1], .92, -.01); camKey(Wt('глава') + .1, A1[0] - 560, A1[1] + 220, 1.08, .015);
  camKey(DLGT.d_career + .1, A1[0] + 200, A1[1] - 20, 1.08, 0); camKey(DLGT.d_career + 20.7, A1[0] + 200, A1[1] + 40, 1.2, .01);

  // S2 · gather the proof alone — to arrive not in disgrace but in triumph: the same pride as at the first-episode party, the same armour
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  const al = card({ x: A2[0] - 300, y: A2[1] - 60, w: 800, h: 420, rot: -.02, order: 200, lined: false, tIn: Wt('поэтому') - .3, dur: .3, enter: 'slide', dx: 0, dy: -400,
    text: (g, t, it) => { drawTyped(g, it.a, t, -360, -140, `700 30px ${MONO}`); drawTyped(g, it.b, t, -360, -70, `800 40px ${SANS}`); drawTyped(g, it.c, t, -360, 20, `700 28px ${MONO}`, '#888'); drawPen(g, it.p, t); drawTyped(g, it.d, t, -360, 90, `800 40px ${SANS}`, RED); } });
  al.a = typed('план:', Wt('решает') - .1, .05); al.b = typed('ДОКАЗАТЕЛЬСТВА — В ОДИНОЧКУ', Wt('доказательства') - .2, .025);
  al.c = typed('прийти с позором', Wt('позором') - .5, .03); al.p = pen([[-370, 20], [-50, 15]], Wt('победой') - .2, .25, { width: 6 }); al.d = typed('ПРИЙТИ С ПОБЕДОЙ', Wt('победой') - .1, .04);
  const pg = pw('partygun', Wt('вечеринке') - .5, { x: A2[0] + 620, y: A2[1] - 40, w: 440, rot: .04, order: 210, off: 6, caption: capt('КАК В ПЕРВОЙ СЕРИИ', Wt('серии') - .3), capSize: 18 });
  pg.stamps = [stamp('ТА ЖЕ БРОНЯ', Wt('броня') - .1, { x: 0, y: 30, size: 50, rot: -.07, shake: 12 })];
  card({ x: A2[0] - 200, y: A2[1] + 420, w: 1, h: 1, shadow: 0, lit: false, order: 220, tIn: 0, scrawls: [scrawl('не выглядеть дураком — даже когда на кону жизнь', Wt('дураком') - .5, 1.0, { size: 42, rot: -.03 })] });
  goTo(A2, DLGT.d_career + 20.9, Wt('поэтому') + .1, A2[0] - 860, A2[1] - 460);
  hold(Wt('поэтому') + .1, Wt('победой') + .4, A2[0] - 300, A2[1] - 100, 1.08, -.015, { dz: .05 });
  camKey(Wt('гордость') + .2, A2[0] + 200, A2[1] - 40, .9, .01); camKey(Wt('броня') + .3, A2[0] + 600, A2[1] - 20, 1.08, .015);
  camKey(Wt('дураком') + .3, A2[0] - 100, A2[1] + 240, .9, -.01); camKey(Wt('жизнь') + .3, A2[0] - 100, A2[1] + 260, .95, -.01);

  // S3 · Walt strikes first: a video confession casting Hank as the kingpin and himself as the victim (original dub)
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 1900, .9);
  pw('waltdvd', Wt('записывает') - .4, { x: A3[0] - 620, y: A3[1] - 180, w: 480, rot: -.05, order: 300, off: 2, caption: capt('ВИДЕОПРИЗНАНИЕ', Wt('видеопризнание')), capSize: 22 });
  const vk = card({ x: A3[0] - 620, y: A3[1] + 240, w: 480, h: 200, rot: .03, order: 305, lined: false, tIn: Wt('выставляет') - .3, dur: .3, enter: 'slide', dx: -400, dy: 200,
    text: (g, t, it) => { drawTyped(g, it.a, t, -200, -30, `700 26px ${MONO}`); drawTyped(g, it.b, t, -200, 30, `800 30px ${SANS}`, RED); } });
  vk.a = typed('ХЭНК = глава наркоимперии', Wt('главой') - .4, .03); vk.b = typed('УОЛТЕР = жертва', Wt('жертвой') - .4, .04);
  dlgShot('d_dvd', A3[0] + 180, A3[1] - 20, { w: 900, order: 310 });
  goTo(A3, Wt('жизнь') + .6, Wt('бьёт') + .1, A3[0] - 860, A3[1] - 460);
  hold(Wt('бьёт') + .1, Wt('наркоимперии') + .2, A3[0] - 600, A3[1] - 160, 1.08, -.015, { dz: .05 });
  camKey(Wt('жертвой') + .2, A3[0] - 600, A3[1] + 220, 1.1, .015);
  camKey(DLGT.d_dvd + .1, A3[0] + 180, A3[1] - 20, 1.08, 0); camKey(DLGT.d_dvd + 18.4, A3[0] + 180, A3[1] + 40, 1.2, .01);

  // S4 · the treatment money is the proof; Walt outplayed him before the game began; the only way out — Jesse, the boy he once beat
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, .95);
  const dv = pw('hankdvd', Wt('деньги') - .5, { x: A4[0] - 400, y: A4[1] - 40, w: 700, rot: -.02, order: 400, off: 2, caption: capt('ДОКАЗАТЕЛЬСТВО: ДЕНЬГИ НА ЛЕЧЕНИЕ', Wt('доказательство') - .6), capSize: 20 });
  dv.stamps = [stamp('ПЕРЕИГРАЛ', Wt('переиграл') - .1, { x: 0, y: 70, size: 72, rot: -.08, shake: 16 })];
  const jx = card({ x: A4[0] + 580, y: A4[1] - 300, w: 420, h: 150, rot: .04, order: 410, lined: false, tIn: Wt('единственный') - .3, dur: .3, enter: 'slide', dx: 400, dy: -200,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -10, `700 26px ${MONO}`, INK, 'center'); drawTyped(g, it.b, t, 0, 45, `800 40px ${SANS}`, RED, 'center'); } });
  jx.a = typed('единственный выход:', Wt('единственный') - .1, .03); jx.b = typed('ДЖЕССИ', Wt('джесси') - .2, .07);
  pw('jessehosp', Wt('избил') - .5, { x: A4[0] + 580, y: A4[1] + 80, w: 420, rot: -.04, order: 415, off: 1, caption: capt('КОГДА-ТО ИЗБИЛ', Wt('парня') - .3), capSize: 20 });
  pw('jesse', Wt('привозит') - .4, { x: A4[0] + 580, y: A4[1] + 420, w: 380, rot: .05, order: 420, caption: capt('ТЕПЕРЬ — СОЮЗНИК', Wt('сдать') - .3), capSize: 18 });
  goTo(A4, DLGT.d_dvd + 18.6, Wt('деньги') - .2, A4[0] - 860, A4[1] - 460);
  hold(Wt('деньги') - .2, Wt('партии') + .3, A4[0] - 400, A4[1] - 40, 1.05, -.015, { dz: .05 });
  camKey(Wt('единственный') + .2, A4[0] + 560, A4[1] - 120, .95, .015); camKey(Wt('привозит') + .2, A4[0] + 560, A4[1] + 260, 1.0, -.01); camKey(T_END, A4[0] + 560, A4[1] + 300, 1.08, -.01);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
