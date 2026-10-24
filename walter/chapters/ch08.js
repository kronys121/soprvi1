// 08 · ПРИЗНАНИЕ  (inserts: the son's call, "I did it for me")
CH_V0 = 510.4;
const [T_START, T_END] = chRange(8);
function buildScenes() {
  const D = [0, 0]; divider(D, 8, 'ПРИЗНАНИЕ', T_START);
  hold(T_START, Wt('последние') + .3, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · the snowed-in cabin; $100k to his son; the son's answer (original dub)
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, .95);
  pw('cabinsnow', Wt('последние') + .1, { x: A1[0] - 600, y: A1[1] - 120, w: 560, rot: -.05, order: 100, off: 0, caption: capt('НЬЮ-ГЭМПШИР · ОДИН', Wt('хижине')), capSize: 24 });
  const mon = typedCard({ x: A1[0] - 600, y: A1[1] + 290, w: 500, h: 200, rot: .04, order: 110, tIn: Wt('переслать') - .2, dur: .3, enter: 'slide', dx: -400, dy: 200 },
    [[typed('СЫНУ:', Wt('сыну'), .05), -210, -30, `700 34px ${MONO}`], [typed('$ 100 000', Wt('сто'), .05, { heavy: true }), -210, 40, `800 46px ${MONO}`, RED]]);
  dlgShot('d_son1', A1[0] + 300, A1[1] - 20, { w: 880, order: 120 });
  dlgShot('d_son2', A1[0] + 360, A1[1] + 20, { w: 880, order: 130, rot: .02 });
  const no = card({ x: A1[0] + 360, y: A1[1] + 440, w: 1, h: 1, shadow: 0, lit: false, order: 140, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  no.s = stamp('ОТКАЗ', DLGT.d_son2 + 1.4, { size: 80, rot: -.07, shake: 18 });
  goTo(A1, Wt('последние') + .3, Wt('месяцы') + .2, A1[0] - 900, A1[1] - 420);
  hold(Wt('месяцы') + .2, Wt('пытается') + .1, A1[0] - 560, A1[1] - 60, 1.15, -.02, { dz: .05 });
  camKey(Wt('сто') + .3, A1[0] - 560, A1[1] + 200, 1.1, -.01);
  camKey(DLGT.d_son1 - .1, A1[0] + 300, A1[1] - 20, 1.15, 0); camKey(DLGT.d_son2 + 2.0, A1[0] + 360, A1[1] + 60, 1.3, .01);

  // S2 · the finale: back to Albuquerque, money for the kids, last visit to Skyler
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  tag({ x: A2[0] - 640, y: A2[1] - 360, w: 460, rot: -.05, label: 'АЛЬБУКЕРКЕ', tIn: Wt('альбукерке') - .1, order: 200, size: 40 });
  pw('gretchen', Wt('заставляет') - .2, { x: A2[0] - 560, y: A2[1] - 40, w: 560, rot: -.04, order: 210, off: 1, caption: capt('ЭЛЛИОТТ И ГРЕТХЕН', Wt('эллиотта')), capSize: 24 });
  tag({ x: A2[0] - 560, y: A2[1] + 300, w: 440, rot: .04, label: 'СЧЁТ ДЕТЕЙ', tIn: Wt('счёт') + .05, order: 220, size: 40 });
  pw('holly', Wt('приходит') - .2, { x: A2[0] + 300, y: A2[1] + 20, w: 760, rot: .02, order: 230, off: 0, caption: capt('ПОСЛЕДНИЙ ВИЗИТ', Wt('последний')), capSize: 24 });
  goTo(A2, DLGT.d_son2 + 2.0, Wt('финальной') + .2, A2[0] - 860, A2[1] - 420);
  hold(Wt('финальной') + .2, Wt('положить') + .2, A2[0] - 600, A2[1] - 160, 1.1, -.02, { dz: .05 });
  camKey(Wt('приходит') + .3, A2[0] + 280, A2[1] + 20, 1.05, .01); camKey(Wt('сезонов') + .4, A2[0] + 300, A2[1] + 30, 1.2, .015);

  // S3 · "I did it for me" (original dub) -> the family excuse falls
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2200, 1);
  dlgShot('d_forme', A3[0] - 200, A3[1] - 40, { w: 1000, order: 300 });
  const me = card({ x: A3[0] - 200, y: A3[1] + 380, w: 1, h: 1, shadow: 0, lit: false, order: 310, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  me.s = stamp('РАДИ СЕБЯ', DLGT.d_forme + 4.0, { size: 86, rot: -.06, shake: 20 });
  const q = typedCard({ x: A3[0] + 660, y: A3[1] - 160, w: 560, h: 300, rot: .04, order: 320, lined: false, tIn: (Wt('ради') - .3) - .2, dur: .3, enter: 'slide', dx: 500, dy: 0 },
    [[typed('«РАДИ', (Wt('ради') - .3), .05), 0, -20, `800 54px ${SANS}`, INK, 'center'], [typed('СЕМЬИ»', Wt('семьи'), .05), 0, 50, `800 54px ${SANS}`, INK, 'center']]);
  q.pens = [pen([[-220, 20], [220, 10]], Wt('ради', 2) - .1, .3, { width: 9 })];
  q.stamps = [stamp('ОПРАВДАНИЕ', Wt('оправданием'), { x: 0, y: 120, size: 50, rot: -.08, shake: 14 })];
  goTo(A3, Wt('сезонов') + .4, DLGT.d_forme - .3, A3[0] - 900, A3[1] - 440);
  camKey(DLGT.d_forme + .2, A3[0] - 200, A3[1] - 40, 1.1, 0); camKey(DLGT.d_forme + 3.6, A3[0] - 200, A3[1] + 60, 1.12, .005); camKey(DLGT.d_forme + 16.0, A3[0] - 200, A3[1] + 90, 1.22, .01);
  camKey((Wt('ради') - .3) + .3, A3[0] + 620, A3[1] - 120, 1.15, .015); camKey(Wt('придумал') + .1, A3[0] + 640, A3[1] - 100, 1.25, .02);

  // S4 · frees Jesse, the machine gun, dies in the lab — "a beautiful death"
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2100, 1);
  pw('machinegun', Wt('придумал'), { x: A4[0] - 560, y: A4[1] - 140, w: 560, rot: -.05, order: 400, off: 0, caption: capt('БАНДА ДЯДИ ДЖЕКА', Wt('банду')), capSize: 22 });
  sfx('shot', Wt('убивает') + .05); shake(Wt('убивает') + .05, 14);
  const dt = pw('deathtop', Wt('умирает') - .2, { x: A4[0] + 300, y: A4[1] + 20, w: 820, rot: .015, order: 410, off: 0 });
  dt.greyAt = t => eio(prog(t, Wt('свете'), Wt('свете') + 1.2)) * .7;
  pw('death', Wt('любил') - .2, { x: A4[0] - 560, y: A4[1] + 300, w: 500, rot: .04, order: 420, off: 2 });
  tag({ x: A4[0] + 640, y: A4[1] - 380, w: 400, rot: .06, label: 'ТРИУМФ?', tIn: Wt('триумф') + .05, order: 430, size: 44 });
  card({ x: A4[0] + 260, y: A4[1] + 470, w: 1, h: 1, shadow: 0, lit: false, order: 440, tIn: 0, scrawls: [scrawl('ПОЧЕМУ МЫ РАДЫ?', (Wt('рады') - .8) - .1, .55, { size: 64, rot: -.05 })] });
  goTo(A4, Wt('придумал') + .2, Wt('освобождает') + .1, A4[0] - 860, A4[1] - 440);
  camKey(Wt('освобождает') + .1, A4[0] - 540, A4[1] - 120, 1.15, -.02); camKey(Wt('умирает') + .3, A4[0] + 280, A4[1] + 20, 1.05, .01);
  camKey(Wt('свете') + .5, A4[0] + 300, A4[1] + 20, 1.3, .015); camKey(Wt('триумф') + .4, A4[0] + 380, A4[1] - 120, 1.0, .01);
  camKey((Wt('рады') - .8) + .2, A4[0] + 100, A4[1] + 260, .85, 0); camKey(T_END, A4[0] + 120, A4[1] + 320, .92, -.01);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
