// 01 · ПИВО И ПИСТОЛЕТ  (insert: "Как-то тяжеловат. — Поэтому на службу берут мужиков.")
CH_V0 = 59.2;
const [T_START, T_END] = chRange(1);
function buildScenes() {
  const D = [0, 0]; divider(D, 1, 'ПИВО И ПИСТОЛЕТ', T_START);
  hold(T_START, Wt('видим') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · Walt's birthday — Hank's party: stories, loudest laugh, the gun; Walt Jr. adores him
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, 1);
  pw('toast', Wt('рождения') - .4, { x: A1[0] - 400, y: A1[1] - 20, w: 720, rot: -.02, order: 100, off: 2, caption: capt('ДЕНЬ РОЖДЕНИЯ УОЛТЕРА', Wt('уолтера')), capSize: 24 });
  const pt = card({ x: A1[0] - 400, y: A1[1] + 400, w: 1, h: 1, shadow: 0, lit: false, order: 105, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  pt.s = stamp('ЕГО ВЕЧЕРИНКА', Wt('вечеринка') + .1, { size: 64, rot: -.07, shake: 14 });
  const cn = card({ x: A1[0] + 560, y: A1[1] - 40, w: 480, h: 380, rot: .03, order: 110, lined: true, tIn: Wt('центре') - .3, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => { g.fillStyle = INK; g.font = `700 28px ${MONO}`; g.textAlign = 'left'; g.fillText('В ЦЕНТРЕ ВНИМАНИЯ:', -200, -130); drawChecks(g, t, it.cl, `700 28px ${MONO}`); } });
  cn.cl = [checkLine('ИСТОРИИ', Wt('истории') + .1, 'v', -180, -50), checkLine('ХОХОЧЕТ ГРОМЧЕ ВСЕХ', Wt('громче') + .1, 'v', -180, 20), checkLine('ПИСТОЛЕТ', Wt('пистолет') + .1, 'v', -180, 90)];
  pw('partygun', Wt('сын') - .4, { x: A1[0] + 560, y: A1[1] + 360, w: 440, rot: -.04, order: 120, off: 5, caption: capt('СЫН — С ВОСТОРГОМ', Wt('восторгом') - .3), capSize: 18 });
  goTo(A1, Wt('видим') + .2, Wt('хэнка') + .1, A1[0] - 760, A1[1] - 400);
  hold(Wt('хэнка') + .1, Wt('вечеринка') + .6, A1[0] - 400, A1[1] - 20, 1.05, -.015, { dz: .05 });
  camKey(Wt('центре') + .2, A1[0] + 520, A1[1] - 40, 1.05, .015); camKey(Wt('сын') + .2, A1[0] + 540, A1[1] + 300, 1.08, -.01); camKey(Wt('восторгом') + .6, A1[0] + 540, A1[1] + 320, 1.15, -.01);

  // S2 · "it's heavy" — "that's why they hire men" (original dub)
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  pw('partygun', DLGT.d_men - 2.2, { x: A2[0] - 620, y: A2[1] - 160, w: 480, rot: -.05, order: 200, off: 2, caption: capt('ГЛОК 22', DLGT.d_men - 1.6), capSize: 22 });
  dlgShot('d_men', A2[0] + 180, A2[1] - 20, { w: 900, order: 210 });
  const mn = card({ x: A2[0] + 180, y: A2[1] + 450, w: 1, h: 1, shadow: 0, lit: false, order: 220, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  mn.s = stamp('«БЕРУТ МУЖИКОВ»', DLGT.d_men + 6.6, { size: 60, rot: -.06, shake: 14 });
  goTo(A2, Wt('восторгом') + .7, DLGT.d_men - 1.8, A2[0] - 860, A2[1] - 460);
  camKey(DLGT.d_men - 1.6, A2[0] - 600, A2[1] - 140, 1.08, -.02); camKey(DLGT.d_men + .1, A2[0] + 180, A2[1] - 20, 1.08, 0); camKey(DLGT.d_men + 8.1, A2[0] + 180, A2[1] + 40, 1.2, .01);

  // S3 · Hank is everything Walt isn't; on TV his bust, the guests watch him like a hero
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2000, 1);
  const cp = card({ x: A3[0] - 200, y: A3[1] - 60, w: 880, h: 420, rot: -.015, order: 300, lined: false, tIn: Wt('знакомит') - .3, dur: .3, enter: 'slide', dx: 0, dy: -400,
    text: (g, t, it) => { g.strokeStyle = INK; g.lineWidth = 3; g.beginPath(); g.moveTo(0, -170); g.lineTo(0, 170); g.stroke();
      drawTyped(g, it.a, t, -220, -120, `800 40px ${SANS}`, RED, 'center'); drawTyped(g, it.b, t, -220, -40, `700 28px ${MONO}`, INK, 'center'); drawTyped(g, it.c, t, -220, 20, `700 28px ${MONO}`, INK, 'center'); drawTyped(g, it.d, t, -220, 80, `700 28px ${MONO}`, INK, 'center');
      drawTyped(g, it.e, t, 220, -120, `800 40px ${SANS}`, '#888', 'center'); drawTyped(g, it.f, t, 220, -10, `700 28px ${MONO}`, '#888', 'center'); } });
  cp.a = typed('ХЭНК', Wt('=хэнк', 3) - .1, .06); cp.b = typed('уверенный', Wt('уверенный') - .1, .04); cp.c = typed('сильный', Wt('сильный') - .1, .04); cp.d = typed('уважаемый', Wt('уважаемый') - .1, .04);
  cp.e = typed('УОЛТЕР', Wt('=уолтер', 2) - .1, .05); cp.f = typed('— ничего из этого', Wt('является') - .2, .03);
  const tv = pw('tvbust', Wt('телевизору') - .4, { x: A3[0] + 560, y: A3[1] + 340, w: 480, rot: .04, order: 310, off: 4, caption: capt('ОПЕРАЦИЯ ПО ТВ', Wt('операцию')), capSize: 20 });
  tv.stamps = [stamp('ГЕРОЙ', Wt('героя') - .1, { x: 0, y: 30, size: 70, rot: -.08, shake: 14 })];
  goTo(A3, DLGT.d_men + 8.2, Wt('вот') + .1, A3[0] - 800, A3[1] - 460);
  hold(Wt('вот') + .1, Wt('является') + .4, A3[0] - 200, A3[1] - 60, 1.05, -.01, { dz: .05 });
  camKey(Wt('уважаемый') + .4, A3[0] - 300, A3[1] - 20, 1.1, -.01); camKey(Wt('телевизору') + .2, A3[0] + 520, A3[1] + 300, 1.05, .015); camKey(Wt('героя') + .5, A3[0] + 540, A3[1] + 320, 1.15, .015);

  // S4 · his drama is already there: trying hard to be a man — jokes, "Schraderbräu", digs at the teacher: armour
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  const ar = card({ x: A4[0] - 300, y: A4[1] - 60, w: 760, h: 440, rot: -.02, order: 400, lined: true, tIn: Wt('присмотреться') - .1, dur: .3, enter: 'slide', dx: -500, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.a, t, -330, -150, `800 34px ${SANS}`); drawChecks(g, t, it.cl, `700 28px ${MONO}`); drawPen(g, it.p, t); drawTyped(g, it.b, t, -310, 170, `800 36px ${SANS}`, RED); } });
  ar.a = typed('СТАРАЕТСЯ БЫТЬ МУЖЧИНОЙ', Wt('старается') - .1, .03);
  ar.cl = [checkLine('ГРОМКИЕ ШУТКИ', Wt('шутки') + .1, 'v', -310, -70), checkLine('ПИВО «ШРЕЙДЕРБРАУ»', Wt('шрейдербрау') + .3, 'v', -310, 0), checkLine('ПОДКОЛКИ ЗЯТЮ', Wt('подколки') + .1, 'v', -310, 70)];
  ar.p = pen([[-320, 125], [80, 120]], Wt('самоуверенность') + .2, .3, { width: 7 }); ar.b = typed('= БРОНЯ', Wt('броня') - .1, .06);
  pw('mineralbox', Wt('гараже') - .4, { x: A4[0] + 560, y: A4[1] - 60, w: 440, rot: .04, order: 410, off: 2 });
  card({ x: A4[0] - 300, y: A4[1] - 360, w: 1, h: 1, shadow: 0, lit: false, order: 415, tIn: 0, scrawls: [scrawl('вся его драма', Wt('драма') - .3, .4, { size: 46, rot: -.04 })] });
  card({ x: A4[0] + 560, y: A4[1] + 300, w: 1, h: 1, shadow: 0, lit: false, order: 420, tIn: 0, scrawls: [scrawl('сериал снимет её', Wt('снимать') - .5, .5, { size: 46, rot: -.05 })] });
  goTo(A4, Wt('героя') + .7, Wt('присмотреться') + .1, A4[0] - 860, A4[1] - 460);
  hold(Wt('присмотреться') + .1, Wt('мужчиной') + .3, A4[0] - 300, A4[1] - 120, 1.05, -.015, { dz: .05 });
  camKey(Wt('подколки') + .3, A4[0] - 200, A4[1] + 20, 1.05, -.01); camKey(Wt('броня') + .3, A4[0] - 200, A4[1] + 120, 1.12, -.01); camKey(Wt('снимать') + .4, A4[0] + 400, A4[1] + 160, .92, .01);

  // S5 · the ride-along: Walt sees his former student Jesse escaping — Hank opens the door himself
  const A5 = [-300, 1900]; lamp(A5[0], A5[1] - 200, 2000, 1);
  pw('ridealong', Wt('снимать') + .9, { x: A5[0] - 420, y: A5[1] - 140, w: 640, rot: -.02, order: 500, off: 2, caption: capt('РЕЙД', Wt('рейде')), capSize: 26 });
  pw('raid', Wt('едет') - .4, { x: A5[0] + 520, y: A5[1] - 220, w: 420, rot: .04, order: 505, off: 2 });
  const js = pw('waltsees', Wt('видит') - .4, { x: A5[0] + 480, y: A5[1] + 240, w: 520, rot: -.03, order: 510, off: 3, caption: capt('ДЖЕССИ', Wt('джесси')), capSize: 24 });
  card({ x: A5[0] - 420, y: A5[1] + 330, w: 1, h: 1, shadow: 0, lit: false, order: 520, tIn: 0, scrawls: [scrawl('сам открыл ему дверь', Wt('открывает') - .3, .6, { size: 52, rot: -.04 })] });
  goTo(A5, Wt('снимать') + .6, Wt('=вечер') + .1, A5[0] - 860, A5[1] - 460);
  hold(Wt('=вечер') + .1, Wt('жизнь') + .3, A5[0] - 420, A5[1] - 140, 1.05, -.015, { dz: .05 });
  camKey(Wt('едет') + .2, A5[0] + 400, A5[1] - 180, 1.0, .015); camKey(Wt('видит') + .2, A5[0] + 460, A5[1] + 220, 1.08, -.01);
  camKey(Wt('открывает') + .2, A5[0], A5[1] + 120, .88, 0); camKey(T_END, A5[0], A5[1] + 160, .96, -.01);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
