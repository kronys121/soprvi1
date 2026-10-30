// 11 · ДЖИН
CH_V0 = 785.5;
const [T_START, T_END] = chRange(11);
function buildScenes() {
  const D = [0, 0]; divider(D, 11, 'ДЖИН', T_START);
  hold(T_START, Wt('уайта') + .3, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · after Walter White falls, Saul vanishes: new name, new papers — Gene Takavic, Cinnabon, Omaha
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, .95);
  const ww = pw('walthat', Wt('уолтера') - .3, { x: A1[0] - 620, y: A1[1] - 200, w: 420, rot: -.05, order: 100 });
  ww.stamps = [stamp('КРАХ', Wt('уайта') + .1, { x: 0, y: 40, size: 66, rot: -.08, shake: 16 })];
  const id = card({ x: A1[0] - 560, y: A1[1] + 240, w: 520, h: 300, rot: .03, order: 105, color: '#e6e6e6', lined: false, tIn: Wt('новое') - .3, dur: .3, enter: 'slide', dx: -400, dy: 200,
    text: (g, t, it) => { g.fillStyle = '#bbb'; g.fillRect(-230, -110, 150, 190); g.fillStyle = INK; g.font = `700 22px ${MONO}`; g.textAlign = 'left'; g.fillText('NEBRASKA · DRIVER LICENSE', -230, -125);
      drawTyped(g, it.a, t, -60, -60, `800 34px ${SANS}`); drawTyped(g, it.b, t, -60, -10, `800 34px ${SANS}`); drawTyped(g, it.c, t, -60, 50, `700 22px ${MONO}`, '#555'); } });
  id.a = typed('GENE', Wt('джин') - .1, .06); id.b = typed('TAKAVIC', Wt('такавик') - .1, .05); id.c = typed('новые документы', Wt('документы') - .3, .03);
  pw('cinnabon', Wt('менеджер') - .4, { x: A1[0] + 420, y: A1[1] - 20, w: 720, rot: .02, order: 110, off: 2, caption: capt('«СИННАБОН» · ОМАХА', Wt('омахи') - .2), capSize: 24 });
  goTo(A1, Wt('уайта') + .3, Wt('исчезает') - .2, A1[0] - 860, A1[1] - 460);
  hold(Wt('исчезает') - .2, Wt('документы') + .4, A1[0] - 580, A1[1] + 20, 1.0, -.015, { dz: .05 });
  camKey(Wt('такавик') + .4, A1[0] - 560, A1[1] + 200, 1.1, .01); camKey(Wt('менеджер') + .2, A1[0] + 420, A1[1] - 20, 1.02, .015); camKey(Wt('омахи') + .4, A1[0] + 420, A1[1], 1.12, .01);

  // S2 · shot in black and white: a life without colour; eats alone; old ad tapes, drinks and cries
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 1900, .85);
  const bw = card({ x: A2[0] - 560, y: A2[1] - 260, w: 480, h: 150, rot: -.04, order: 200, lined: false, tIn: Wt('чёрно-белом') - .4, dur: .3, enter: 'slide', dx: -400, dy: -200,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -10, `800 40px ${SANS}`, INK, 'center'); drawTyped(g, it.b, t, 0, 45, `700 26px ${MONO}`, '#777', 'center'); } });
  bw.a = typed('ЧЁРНО-БЕЛОЕ', Wt('чёрно-белом') - .2, .04); bw.b = typed('жизнь без красок', Wt('лишена') - .2, .03);
  pw('geneomaha', Wt('жизнь') - .4, { x: A2[0] - 560, y: A2[1] + 140, w: 480, rot: .04, order: 205, off: 2, caption: capt('В ОДИНОЧЕСТВЕ', Wt('одиночестве')), capSize: 22 });
  const tp = pw('genetape', Wt('достаёт') - .4, { x: A2[0] + 300, y: A2[1] - 20, w: 780, rot: .015, order: 210, off: 3, caption: capt('СТАРЫЕ КАССЕТЫ · РЕКЛАМА', Wt('рекламой')), capSize: 24 });
  tp.stamps = [stamp('ПЛАЧЕТ', Wt('плачет') - .1, { x: 160, y: 120, size: 60, rot: -.07, shake: 12 })];
  goTo(A2, Wt('омахи') + .8, Wt('эти') + .1, A2[0] - 860, A2[1] - 460);
  hold(Wt('эти') + .1, Wt('красок') + .3, A2[0] - 560, A2[1] - 160, 1.05, -.015, { dz: .05 });
  camKey(Wt('одиночестве') - .2, A2[0] - 540, A2[1] + 120, 1.05, .01); camKey(Wt('достаёт') + .2, A2[0] + 300, A2[1] - 20, 1.0, .015); camKey(Wt('плачет') + .4, A2[0] + 320, A2[1] + 20, 1.15, .015);

  // S3 · he escaped the law but lives in a prison he built himself
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 1800, .8);
  const pr = card({ x: A3[0] - 120, y: A3[1] - 40, w: 900, h: 460, rot: -.015, order: 300, color: '#e3e3e3', lined: false, tIn: Wt('сбежал') - .3, dur: .3, enter: 'slide', dx: 0, dy: 500,
    text: (g, t, it) => { const p = Math.min(1, Math.max(0, (t - it.t0) / .8)); g.strokeStyle = '#333'; g.lineWidth = 14;
      for (let i = 0; i < 7; i++) { const x = -390 + i * 130; g.beginPath(); g.moveTo(x, -220); g.lineTo(x, -220 + 440 * p); g.stroke(); }
      g.fillStyle = 'rgba(227,227,227,.92)'; g.fillRect(-230, -145, 460, 60); if (t > it.t0) g.fillRect(-180, -30, 360, 90); if (t > it.c.t0) g.fillRect(-170, 80, 340, 56);
      drawTyped(g, it.a, t, 0, -110, `700 34px ${MONO}`, INK, 'center'); drawPen(g, it.p, t); drawTyped(g, it.b, t, 0, 20, `800 60px ${SANS}`, RED, 'center'); drawTyped(g, it.c, t, 0, 110, `700 34px ${MONO}`, INK, 'center'); } });
  pr.a = typed('сбежал от закона', Wt('сбежал') - .1, .04); pr.p = pen([[-180, -110], [180, -116]], Wt('живёт') - .1, .25, { width: 7 });
  pr.t0 = Wt('тюрьме') - .2; pr.b = typed('ТЮРЬМА', Wt('тюрьме') - .1, .06); pr.c = typed('построил сам', Wt('построил') - .1, .04);
  goTo(A3, Wt('плачет') + .9, Wt('сбежал') + .1, A3[0] - 800, A3[1] - 460);
  camKey(Wt('сбежал') + .2, A3[0] - 120, A3[1] - 40, 1.05, 0); camKey(Wt('сам') + .5, A3[0] - 120, A3[1], 1.18, .01);

  // S4 · danger appears and Gene becomes Saul again: money, work, a new face — yet new cons, robbing lonely people
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 1900, .9);
  const hv = card({ x: A4[0] - 560, y: A4[1] - 60, w: 480, h: 360, rot: -.03, order: 400, lined: true, tIn: Wt('опасность') - .2, dur: .3, enter: 'slide', dx: -400, dy: 0,
    text: (g, t, it) => { g.fillStyle = INK; g.font = `700 28px ${MONO}`; g.textAlign = 'left'; g.fillText('У НЕГО ЕСТЬ:', -200, -130); drawChecks(g, t, it.cl, `700 30px ${MONO}`); } });
  hv.cl = [checkLine('ДЕНЬГИ', Wt('деньги') + .1, 'v', -180, -50), checkLine('РАБОТА', Wt('работа') + .1, 'v', -180, 30), checkLine('НОВОЕ ЛИЦО', Wt('лицо') + .1, 'v', -180, 110)];
  pw('genecon', Wt('затевает') - .4, { x: A4[0] + 280, y: A4[1] - 160, w: 620, rot: .02, order: 410, off: 3, caption: capt('НОВЫЕ АФЕРЫ', Wt('аферы')), capSize: 24 });
  const gb = pw('genebar', Wt('грабит') - .4, { x: A4[0] + 380, y: A4[1] + 290, w: 480, rot: -.04, order: 420, off: 2, caption: capt('ОДИНОКИЕ ЛЮДИ', Wt('одиноких')), capSize: 22 });
  card({ x: A4[0] - 560, y: A4[1] - 400, w: 1, h: 1, shadow: 0, lit: false, order: 430, tIn: 0, scrawls: [scrawl('Джин → снова Сол', Wt('становится') - .2, .6, { size: 50, rot: -.04 })] });
  goTo(A4, Wt('сам') + .9, Wt('опасность') - .4, A4[0] - 860, A4[1] - 560);
  hold(Wt('опасность') - .4, Wt('солом') + .3, A4[0] - 560, A4[1] - 300, 1.1, -.015, { dz: .05 });
  camKey(Wt('мог') + .1, A4[0] - 560, A4[1] - 60, 1.05, -.01); camKey(Wt('затевает') + .2, A4[0] + 280, A4[1] - 160, 1.05, .015); camKey(Wt('одиноких') + .3, A4[0] + 360, A4[1] + 260, 1.1, -.01);

  // S5 · not for the money — that Cicero feeling: smartest in the room. Caught hiding in a dumpster, clutching a phone.
  const A5 = [-300, 1900]; lamp(A5[0], A5[1] - 200, 2000, .95);
  const cf = typedCard({ x: A5[0] - 300, y: A5[1] - 140, w: 760, h: 340, rot: -.02, order: 500, tIn: Wt('денег') - .5, dur: .3, enter: 'slide', dx: 0, dy: -400 },
    [[typed('НЕ РАДИ ДЕНЕГ', Wt('денег') - .3, .04), -340, -100, `800 40px ${SANS}`], [typed('то самое чувство из Сисеро:', Wt('чувства') - .2, .03), -340, -20, `700 28px ${MONO}`],
     [typed('— я умнее всех', Wt('умнее') - .2, .04), -320, 40, `700 32px ${MONO}`], [typed('— я главный в комнате', Wt('главный') - .1, .035), -320, 100, `700 32px ${MONO}`, RED]]);
  pw('cicero', Wt('бара') - .4, { x: A5[0] + 560, y: A5[1] - 200, w: 400, rot: .05, order: 505, off: 5 });
  const dp = pw('dumpster', Wt('ловят') - .4, { x: A5[0] + 160, y: A5[1] + 320, w: 640, rot: -.02, order: 510, off: 2, caption: capt('МУСОРНЫЙ КОНТЕЙНЕР', Wt('мусорном')), capSize: 22 });
  dp.stamps = [stamp('ПОЙМАН', Wt('ловят') + .1, { x: 0, y: -40, size: 70, rot: -.07, shake: 18 })];
  goTo(A5, Wt('одиноких') + .9, Wt('денег') - .2, A5[0] - 860, A5[1] - 460);
  hold(Wt('денег') - .2, Wt('комнате') + .2, A5[0] - 200, A5[1] - 140, 1.0, -.01, { dz: .05 });
  camKey(Wt('ловят') + .2, A5[0] + 160, A5[1] + 300, 1.05, .01); camKey(T_END, A5[0] + 160, A5[1] + 320, 1.18, .015);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
