// 10 · ГЕРМАНИЯ — Margarethe; the slide rule; Casper; the phone trick
CH_V0 = 540.96;
const [T_START, T_END] = chRange(10);
function buildScenes() {
  const D = [0, 0]; divider(D, 10, 'ГЕРМАНИЯ', T_START);
  hold(T_START, Wt('летит') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · flies to Germany; under a false name befriends Werner's widow Margarethe; slips into her house; finds the slide rule from Werner's crew; tracks Casper; gets everything about the lab
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2100, 1);
  pw('margarethe', Wt('чужим') - .5, { x: A1[0] - 640, y: A1[1] - 160, w: 440, rot: -.05, order: 100, off: 1, caption: capt('«БЕН» И ВДОВА ВЕРНЕРА', Wt('маргарете') - .2), capSize: 18 });
  pw('housebreak', Wt('пробирается') - .5, { x: A1[0] - 640, y: A1[1] + 220, w: 440, rot: .04, order: 105, off: 1 });
  const sr = pw('sliderule', Wt('сувенир') - .5, { x: A1[0] + 60, y: A1[1] - 60, w: 560, rot: .02, order: 110, off: 0, caption: capt('ЛОГАРИФМИЧЕСКАЯ ЛИНЕЙКА', Wt('линейку') - .2), capSize: 20 });
  pw('lalocasper', Wt('каспера') - .6, { x: A1[0] + 720, y: A1[1] - 140, w: 420, rot: .05, order: 120, off: 1, caption: capt('КАСПЕР', Wt('каспера')), capSize: 22 });
  const lb = typedCard({ x: A1[0] + 720, y: A1[1] + 230, w: 440, h: 130, rot: -.03, order: 125, tIn: Wt('вытягивает') - .3, dur: .3, enter: 'slide', dx: 300, dy: 200 },
    [[typed('всё о лаборатории', Wt('подземной') - .3, .03), 0, 14, `800 28px ${SANS}`, RED, 'center']]);
  goTo(A1, Wt('летит') + .2, Wt('германию') - .1, A1[0] - 860, A1[1] - 460);
  camKey(Wt('чужим'), A1[0] - 620, A1[1] - 140, 1.08, -.015); camKey(Wt('пробирается'), A1[0] - 620, A1[1] + 200, 1.08, .01);
  camKey(Wt('сувенир') + .1, A1[0] + 60, A1[1] - 40, 1.02, .01); camKey(Wt('каспера') + .1, A1[0] + 700, A1[1] - 120, 1.08, .015); camKey(Wt('лаборатории') + .3, A1[0] + 700, A1[1] + 200, 1.05, -.01);

  // S2 · think about it: Gus, the most careful man — cameras, guards, double, triple protection; Lalo just flew across the ocean and found his secret through a dead engineer's widow
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2100, 1);
  const pr = card({ x: A2[0] - 420, y: A2[1] - 60, w: 560, h: 420, rot: -.02, order: 200, lined: true, tIn: Wt('осторожный') - .4, dur: .3, enter: 'slide', dx: -400, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.a, t, -240, -150, `800 30px ${SANS}`); drawChecks(g, t, it.cl, `700 26px ${MONO}`); } });
  pr.a = typed('ЗАЩИТА ГУСА:', Wt('осторожный') - .2, .04);
  pr.cl = [checkLine('КАМЕРЫ', Wt('камеры') + .1, 'v', -230, -70), checkLine('ОХРАНА', Wt('охрана') + .1, 'v', -230, 0), checkLine('ДВОЙНАЯ, ТРОЙНАЯ', Wt('тройная') + .1, 'v', -230, 70)];
  const bk = card({ x: A2[0] + 400, y: A2[1] - 40, w: 560, h: 300, rot: .025, order: 210, color: '#f3efe2', lined: false, tIn: Wt('полетел') - .4, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -60, `700 26px ${MONO}`, INK, 'center'); drawTyped(g, it.b, t, 0, 10, `800 34px ${SANS}`, INK, 'center'); drawTyped(g, it.c, t, 0, 80, `800 34px ${SANS}`, RED, 'center'); } });
  bk.a = typed('а Лало просто', Wt('просто') - .1, .04); bk.b = typed('полетел за океан', Wt('полетел') - .1, .04); bk.c = typed('НАШЁЛ ЕГО ТАЙНУ', Wt('тайну') - .3, .04);
  pw('margface', Wt('вдову') - .5, { x: A2[0] + 400, y: A2[1] + 340, w: 360, rot: -.04, order: 220 });
  goTo(A2, Wt('лаборатории') + .8, Wt('подумайте') - .1, A2[0] - 860, A2[1] - 460);
  hold(Wt('подумайте') - .1, Wt('защита') + .3, A2[0] - 420, A2[1] - 40, 1.05, -.015, { dz: .05 });
  camKey(Wt('полетел'), A2[0] + 400, A2[1] - 20, 1.05, .015); camKey(Wt('вдову') + .2, A2[0] + 400, A2[1] + 180, .98, .01);

  // S3 · back home outplays Gus again: knows Gus's people listen to Hector's calls; calls on purpose: "a surprise tonight"; Gus pulls guards to the house; Lalo goes elsewhere
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2000, 1);
  pw('sewer', Wt('вернувшись') - .4, { x: A3[0] - 620, y: A3[1] - 140, w: 440, rot: -.05, order: 300, off: 1 });
  pw('hectorphone', Wt('слушают') - .6, { x: A3[0] - 620, y: A3[1] + 230, w: 440, rot: .03, order: 305, off: 1, caption: capt('ЗВОНКИ ГЕКТОРА СЛУШАЮТ', Wt('звонки') + .1), capSize: 18 });
  const sp = card({ x: A3[0] + 120, y: A3[1] - 60, w: 520, h: 220, rot: .02, order: 310, color: '#f3efe2', lined: false, tIn: Wt('нарочно') - .3, dur: .3, enter: 'slide', dx: 0, dy: -300,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -30, `700 24px ${MONO}`, '#777', 'center'); drawTyped(g, it.b, t, 0, 40, `800 34px ${SANS}`, RED, 'center'); } });
  sp.a = typed('«сегодня ночью Гуса ждёт…»', Wt('говорит') - .1, .03); sp.b = typed('«СЮРПРИЗ»', Wt('сюрприз') - .2, .06);
  pw('gusguard', Wt('стягивает') - .6, { x: A3[0] + 120, y: A3[1] + 300, w: 520, rot: -.02, order: 315, off: 1, caption: capt('ОХРАНА — К ДОМУ', Wt('туда') - .2), capSize: 20 });
  const lw = pw('laundry', Wt('другое') - .6, { x: A3[0] + 760, y: A3[1] + 40, w: 420, rot: .05, order: 320, off: 1 });
  lw.stamps = [stamp('ДРУГОЕ МЕСТО', Wt('место') + .1, { x: 0, y: 50, size: 40, rot: -.08, shake: 12 })];
  sfx('ring', Wt('звонит') + .1);
  goTo(A3, Wt('инженера') + .6, Wt('вернувшись') - .2, A3[0] - 860, A3[1] - 460);
  camKey(Wt('вернувшись') + .1, A3[0] - 600, A3[1] - 120, 1.05, -.015); camKey(Wt('слушают'), A3[0] - 600, A3[1] + 210, 1.05, .01);
  camKey(Wt('нарочно') + .2, A3[0] + 120, A3[1] - 40, 1.05, .01); camKey(Wt('стягивает'), A3[0] + 120, A3[1] + 280, 1.02, -.01);
  camKey(Wt('другое'), A3[0] + 740, A3[1] + 60, 1.08, .015); camKey(T_END, A3[0] + 740, A3[1] + 80, 1.16, .015);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
