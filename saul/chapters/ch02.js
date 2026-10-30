// 02 · СКОЛЬЗКИЙ ДЖИММИ
CH_V0 = 123.2;
const [T_START, T_END] = chRange(2);
function buildScenes() {
  const D = [0, 0]; divider(D, 2, 'СКОЛЬЗКИЙ ДЖИММИ', T_START);
  hold(T_START, Wt('юности') + .3, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · Slippin' Jimmy and Marco: bars, the slip on the ice, fake rare coins
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, .95);
  pw('cicero', Wt('марко') - .3, { x: A1[0] - 400, y: A1[1] - 20, w: 760, rot: -.02, order: 100, off: 0, caption: capt('ДЖИММИ И МАРКО · СИСЕРО', Wt('барах')), capSize: 22 });
  const cn = card({ x: A1[0] + 560, y: A1[1] - 60, w: 480, h: 420, rot: .03, order: 110, lined: true, tIn: Wt('падает') - .3, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => { g.fillStyle = INK; g.font = `700 30px ${MONO}`; g.textAlign = 'left'; g.fillText('АФЕРЫ:', -200, -150); drawChecks(g, t, it.cl, `700 30px ${MONO}`); } });
  cn.cl = [checkLine('ПАДЕНИЕ НА ЛЬДУ', Wt('лёд') + .1, 'v', -180, -70), checkLine('ФАЛЬШ-МОНЕТЫ', Wt('монеты') - .1, 'v', -180, 10), checkLine('БАРЫ', Wt('барах') + .1, 'v', -180, 90)];
  pw('coin', Wt('монеты') - .5, { x: A1[0] + 560, y: A1[1] + 340, w: 380, rot: -.05, order: 120, off: 1 });
  goTo(A1, Wt('юности') + .3, Wt('скользкий') + .1, A1[0] - 760, A1[1] - 400);
  hold(Wt('скользкий') + .1, Wt('людей') + .3, A1[0] - 400, A1[1] - 20, 1.05, -.015, { dz: .05 });
  camKey(Wt('падает') + .2, A1[0] + 500, A1[1] - 40, 1.05, .015); camKey(Wt('монеты') + .4, A1[0] + 540, A1[1] + 220, 1.05, .01);

  // S2 · not for the money, for the pleasure: being smarter, being the main one in the room
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  const pl = typedCard({ x: A2[0] - 300, y: A2[1] - 60, w: 820, h: 420, rot: -.02, order: 200, tIn: Wt('делает') - .3, dur: .3, enter: 'slide', dx: 0, dy: -400 },
    [[typed('НЕ РАДИ ДЕНЕГ', Wt('денег') - .3, .04), -370, -130, `800 40px ${SANS}`], [typed('— процесс', Wt('процесс') - .1, .04), -350, -40, `700 34px ${MONO}`],
     [typed('— быть умнее', Wt('умнее') - .2, .04), -350, 30, `700 34px ${MONO}`], [typed('— главный в комнате', Wt('главный') - .1, .035), -350, 100, `700 34px ${MONO}`, RED]]);
  pl.pens = [pen([[-380, -140], [10, -146]], Wt('удовольствия') - .1, .3, { width: 7 })];
  pw('kencon', Wt('сколько') - .3, { x: A2[0] + 620, y: A2[1] - 40, w: 480, rot: .04, order: 210, off: 6 });
  goTo(A2, Wt('монеты') + .9, Wt('делает') + .1, A2[0] - 860, A2[1] - 440);
  hold(Wt('делает') + .1, Wt('процесс') + .4, A2[0] - 300, A2[1] - 60, 1.08, -.015, { dz: .05 });
  camKey(Wt('главный') + .3, A2[0] + 100, A2[1] - 20, .92, .01); camKey(Wt('комнате') + .4, A2[0] + 580, A2[1] - 40, 1.05, .015);

  // S3 · the key: he's an artist, he needs an audience; every con is a show he writes and plays
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2000, 1);
  const ar = card({ x: A3[0] - 120, y: A3[1] - 40, w: 900, h: 480, rot: -.015, order: 300, color: '#2a1f1a', lined: false, tIn: Wt('здесь') + .2, dur: .3, enter: 'slide', dx: 0, dy: 500,
    text: (g, t, it) => { g.fillStyle = '#b8261e'; g.fillRect(-450, -240, 120, 480); g.fillRect(330, -240, 120, 480);
      drawTyped(g, it.a, t, 0, -120, `700 36px ${MONO}`, '#e8dccb', 'center'); drawTyped(g, it.b, t, 0, -20, `800 80px ${SANS}`, '#f2d27a', 'center');
      drawTyped(g, it.c, t, 0, 80, `700 34px ${MONO}`, '#e8dccb', 'center'); drawTyped(g, it.d, t, 0, 140, `700 30px ${MONO}`, '#e8dccb', 'center'); } });
  ar.a = typed('НЕ ПРОСТО МОШЕННИК', Wt('мошенник') - .2, .03); ar.b = typed('АРТИСТ', Wt('артист') - .05, .06);
  ar.c = typed('нужна публика', Wt('публика') - .3, .04); ar.d = typed('сам пишет роль · сам играет', Wt('пишет') - .2, .03);
  goTo(A3, Wt('комнате') + .5, Wt('здесь') + .1, A3[0] - 800, A3[1] - 460);
  hold(Wt('здесь') + .1, Wt('финала') + .3, A3[0] - 400, A3[1] - 260, 1.05, -.015, { dz: .05 });
  camKey(Wt('артист') + .3, A3[0] - 120, A3[1] - 40, 1.05, 0); camKey(Wt('играет') + .4, A3[0] - 120, A3[1] + 20, 1.12, .01);

  // S4 · revenge on his wife's lover goes to court; prison, sex-offender label — the brother flies in
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, .95);
  const ct = typedCard({ x: A4[0] - 360, y: A4[1] - 60, w: 700, h: 360, rot: -.03, order: 400, tIn: Wt('однажды') - .3, dur: .3, enter: 'slide', dx: -500, dy: 0 },
    [[typed('ДЕЛО: «СКОЛЬЗКИЙ ДЖИММИ»', Wt('мстит'), .03), -310, -100, `700 32px ${MONO}`], [typed('месть любовнику жены', Wt('любовнику') - .1, .03), -310, -30, `400 30px ${MONO}`],
     [typed('грозит: реальный срок', Wt('грозит') - .1, .035), -310, 40, `700 30px ${MONO}`], [typed('+ статус на всю жизнь', Wt('статус') - .1, .035), -310, 100, `700 30px ${MONO}`, RED]]);
  const ch = pw('chuckface', Wt('прилетает') - .5, { x: A4[0] + 560, y: A4[1] - 40, w: 560, rot: .04, order: 410, off: 2, caption: capt('СТАРШИЙ БРАТ', Wt('брат') - .2), capSize: 26 });
  goTo(A4, Wt('финала') + .5, Wt('однажды') + .1, A4[0] - 860, A4[1] - 440);
  hold(Wt('однажды') + .1, Wt('жизнь') + .3, A4[0] - 360, A4[1] - 60, 1.1, -.015, { dz: .05 });
  camKey(Wt('прилетает') + .2, A4[0] + 520, A4[1] - 40, 1.08, .015); camKey(T_END, A4[0] + 540, A4[1] - 20, 1.2, .02);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
