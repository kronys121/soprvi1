// 03 · СЕМЬЯ
CH_V0 = 185.8;
const [T_START, T_END] = chRange(3);
function buildScenes() {
  const D = [0, 0]; divider(D, 3, 'СЕМЬЯ', T_START);
  hold(T_START, Wt('всё') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · "everything I did, I did for my family" — the quote card, tested
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 1800, 1);
  const q = typedCard({ x: A1[0], y: A1[1] - 40, w: 1000, h: 300, rot: -.015, order: 100, lined: false, tIn: Wt('всё') - .1, dur: .3, enter: 'slide', dx: 0, dy: -300 },
    [[typed('«ВСЁ, ЧТО Я ДЕЛАЛ,', Wt('всё'), .045), 0, -20, `800 54px ${SANS}`, INK, 'center'], [typed('Я ДЕЛАЛ РАДИ СЕМЬИ»', Wt('=я', 2), .045), 0, 60, `800 54px ${SANS}`, INK, 'center']]);
  const tst = card({ x: A1[0] + 340, y: A1[1] + 200, w: 1, h: 1, shadow: 0, lit: false, order: 110, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  tst.s = stamp('ПРОВЕРКА', Wt('прочность') - .05, { size: 80, rot: .08, shake: 10 });
  goTo(A1, Wt('всё') + .2, Wt('всё') + .7, A1[0] - 520, A1[1] - 220);
  hold(Wt('всё') + .7, Wt('прочность') + .6, A1[0], A1[1] + 20, 1.05, .01, { dz: .1 });

  // S2 · the lies: second job, "fugue", Skyler becomes accomplice
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  const lies = card({ x: A2[0] - 560, y: A2[1] - 40, w: 620, h: 560, rot: -.03, order: 200, lined: true, tIn: Wt('ради', 2) - .2, dur: .3, enter: 'slide', dx: -500, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.hd, t, -270, -170, `700 34px ${MONO}`); it.l.forEach(([ty, y]) => drawTyped(g, ty, t, -230, y, `400 32px ${MONO}`)); drawPen(g, it.p, t); } });
  lies.hd = typed('ЛОЖЬ СКАЙЛЕР:', Wt('врёт'), .04);
  lies.l = [[typed('— вторая работа', Wt('вторую'), .03), -80], [typed('— пропажи', Wt('пропажи'), .04), -20], [typed('— деньги', Wt('деньги'), .05), 40], [typed('— «фуга»', Wt('фугу'), .05), 100]];
  lies.p = pen([[-250, 140], [240, 130]], Wt('провал') + .1, .3, { width: 7 });
  pw('naked', Wt('придумывает') - .1, { x: A2[0] + 160, y: A2[1] - 220, w: 560, rot: .04, order: 210 });
  const acc = pw('walthome', Wt('скайлер', 2) - .1, { x: A2[0] + 600, y: A2[1] + 220, w: 560, rot: -.04, order: 220 });
  acc.stamps = [stamp('СОУЧАСТНИЦА', Wt('соучастницей'), { x: 0, y: 40, size: 50, rot: -.08, shake: 12 })];
  tag({ x: A2[0] + 160, y: A2[1] + 480, w: 380, rot: .04, label: 'АВТОМОЙКА', tIn: Wt('автомойку') + .05, order: 230, size: 38 });
  goTo(A2, Wt('прочность') + .6, Wt('ради', 2) + .2, A2[0] - 850, A2[1] - 330);
  hold(Wt('ради', 2) + .2, Wt('пропажи') + .4, A2[0] - 520, A2[1] - 20, 1.15, -.02, { dz: .05 });
  camKey(Wt('придумывает') + .3, A2[0] + 100, A2[1] - 160, 1.1, .01); camKey(Wt('дней') + .3, A2[0] - 200, A2[1] - 40, .95, 0);
  camKey(Wt('становится') + .2, A2[0] + 520, A2[1] + 200, 1.15, .015); camKey(Wt('легенду') + .4, A2[0] + 360, A2[1] + 320, 1.0, .01);

  // S3 · fans hated Skyler, not Walter; Anna Gunn op-ed
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2000, 1);
  pw('waltface', Wt('уолтера') - .1, { x: A3[0] - 520, y: A3[1] - 100, w: 520, rot: -.05, order: 300, caption: capt('УОЛТЕР', Wt('уолтера')), capSize: 26 });
  const sk = pw('skyler2', Wt('скайлер', 3) - .1, { x: A3[0] + 120, y: A3[1] - 120, w: 560, rot: .04, order: 301, caption: capt('СКАЙЛЕР', Wt('скайлер', 3)), capSize: 26 });
  sk.stamps = [stamp('НЕНАВИСТЬ', Wt('скайлер', 3) + .2, { x: 0, y: 30, size: 60, rot: -.1, shake: 14 })];
  const nyt = card({ x: A3[0] + 680, y: A3[1] + 280, w: 560, h: 440, rot: .04, order: 310, color: '#ecebe6', lined: false, tIn: Wt('актрисе') - .2, dur: .3, enter: 'slide', dx: 500, dy: 200,
    text: (g, t, it) => { g.fillStyle = INK; g.font = `700 36px "DejaVu Serif"`; g.textAlign = 'center'; g.fillText('The New York Times', 0, -160); g.fillRect(-250, -140, 500, 3);
      drawTyped(g, it.a, t, -240, -80, `700 28px "DejaVu Serif"`); drawTyped(g, it.b, t, -240, -40, `400 24px "DejaVu Serif"`); drawTyped(g, it.c, t, -240, 30, `400 22px "DejaVu Serif"`, '#555'); } });
  nyt.a = typed('«Я — та самая Скайлер»', Wt('колонку') - .4, .03); nyt.b = typed('Анна Ганн, 2013', Wt('колонку'), .03, { silent: true }); nyt.c = typed('угрозы от зрителей…', Wt('угрозы'), .03, { silent: true });
  card({ x: A3[0] - 200, y: A3[1] + 420, w: 1, h: 1, shadow: 0, lit: false, order: 320, tIn: 0, scrawls: [scrawl('ЗЛИМСЯ НА ЖЕРТВ', Wt('злимся') - .1, .55, { size: 60, rot: -.05 })] });
  goTo(A3, Wt('легенду') + .4, Wt('самое') + .2, A3[0] - 800, A3[1] - 340);
  hold(Wt('самое') + .2, Wt('мешает') + .5, A3[0] - 160, A3[1] - 80, .98, .01, { dz: .1 });
  camKey(Wt('актрисе') + .3, A3[0] + 600, A3[1] + 250, 1.15, .015); camKey(Wt('колонку') + .6, A3[0] + 620, A3[1] + 260, 1.2, .02);
  camKey(Wt('показатель'), A3[0] + 100, A3[1] + 200, .85, 0); camKey(Wt('жертв') + .5, A3[0] - 120, A3[1] + 330, 1.05, -.01);

  // S4 · Hank hunts Heisenberg across the dinner table
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  pw('hank2', Wt('хэнк') - .2, { x: A4[0] - 560, y: A4[1] - 60, w: 520, rot: -.04, order: 400, caption: capt('ХЭНК ШРЕЙДЕР · DEA', Wt('агент')), capSize: 22 });
  const wanted = card({ x: A4[0] + 40, y: A4[1] - 120, w: 460, h: 600, rot: .03, order: 410, color: '#ede4cc', lined: false, tIn: Wt('хайзенберга') - .25, dur: .3, enter: 'slide', dx: 0, dy: -500,
    text: (g, t) => { g.fillStyle = INK; g.font = `800 64px ${SANS}`; g.textAlign = 'center'; g.fillText('РОЗЫСК', 0, -220);
      g.fillStyle = '#1a1a1a'; g.beginPath(); g.arc(0, -40, 110, 0, 7); g.fill(); g.fillRect(-150, -90, 300, 26); g.beginPath(); g.ellipse(0, -100, 100, 60, 0, Math.PI, 0); g.fill();
      g.fillStyle = INK; g.font = `800 40px ${SANS}`; g.fillText('«ХАЙЗЕНБЕРГ»', 0, 150); g.font = `400 26px ${MONO}`; g.fillText('личность неизвестна', 0, 200); } });
  pw('party', Wt('сидит') - .2, { x: A4[0] + 620, y: A4[1] + 160, w: 560, rot: -.05, order: 420, off: 2, caption: capt('СЕМЕЙНЫЙ УЖИН', Wt('ужином')), capSize: 24 });
  thread([[A4[0] + 40, A4[1] - 400], [A4[0] + 620, A4[1] - 30]], Wt('напротив'), Wt('ужином'), {});
  pin(A4[0] + 40, A4[1] - 400, Wt('хайзенберга'), { silent: true }); pin(A4[0] + 620, A4[1] - 30, Wt('сидит'), { silent: true });
  goTo(A4, Wt('жертв') + .5, Wt('хэнк') + .1, A4[0] - 820, A4[1] - 330);
  hold(Wt('хэнк') + .1, Wt('хайзенберга') + .5, A4[0] - 360, A4[1] - 60, 1.0, -.015, { dz: .06 });
  camKey(Wt('подозревая'), A4[0] + 200, A4[1] - 20, .9, .01); camKey(Wt('ужином') + .5, A4[0] + 300, A4[1] + 40, .95, .015);
  camKey(Wt('полицейского') + .3, A4[0] + 120, A4[1] + 20, .82, 0); camKey(T_END, A4[0] + 120, A4[1] + 20, .86, -.005);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
