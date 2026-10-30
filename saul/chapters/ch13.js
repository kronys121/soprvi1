// 13 · 86 ЛЕТ  (insert: "Меня зовут Макгилл. Джеймс Макгилл.")
CH_V0 = 894.5;
const [T_START, T_END] = chRange(13);
function buildScenes() {
  const D = [0, 0]; divider(D, 13, '86 ЛЕТ', T_START);
  hold(T_START, Wt('последний') + .3, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · one last time doing what he does best: the deal — seven years instead of life
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, 1);
  pw('deal', Wt('торгуется') - .4, { x: A1[0] - 400, y: A1[1] - 20, w: 720, rot: -.02, order: 100, off: 2, caption: capt('ТОРГ С ПРОКУРОРАМИ', Wt('прокурорами')), capSize: 24 });
  const dl = card({ x: A1[0] + 560, y: A1[1] - 60, w: 500, h: 420, rot: .03, order: 110, lined: false, tIn: Wt('выбивает') - .3, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -110, `700 32px ${MONO}`, INK, 'center'); drawPen(g, it.p, t); drawTyped(g, it.b, t, 0, 20, `800 110px ${SANS}`, RED, 'center'); drawTyped(g, it.c, t, 0, 120, `700 32px ${MONO}`, INK, 'center'); } });
  dl.a = typed('ПОЖИЗНЕННОЕ', Wt('выбивает') - .1, .04); dl.p = pen([[-130, -110], [130, -116]], Wt('пожизненного') - .1, .3, { width: 8 }); dl.b = typed('7', Wt('семь') - .1, .1); dl.c = typed('ЛЕТ', Wt('семь') + .2, .06);
  const bw = pw('dealwin', Wt('блестящая') - .4, { x: A1[0] + 560, y: A1[1] + 360, w: 440, rot: -.04, order: 120, off: 2 });
  bw.stamps = [stamp('ЛУЧШАЯ РАБОТА', Wt('лучшая') - .1, { x: 0, y: 30, size: 44, rot: -.07, shake: 12 })];
  goTo(A1, Wt('последний') + .3, Wt('торгуется') - .3, A1[0] - 760, A1[1] - 460);
  hold(Wt('торгуется') - .3, Wt('прокурорами') + .4, A1[0] - 400, A1[1] - 20, 1.05, -.015, { dz: .05 });
  camKey(Wt('выбивает') + .2, A1[0] + 520, A1[1] - 60, 1.05, .015); camKey(Wt('блестящая') + .2, A1[0] + 540, A1[1] + 200, .95, -.01); camKey(Wt('карьере') + .4, A1[0] + 540, A1[1] + 320, 1.12, .01);

  // S2 · then he learns Kim went to the authorities and told the truth about Howard; she's looking at him again
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  pw('kimtells2', Wt('узнаёт') - .4, { x: A2[0] - 400, y: A2[1] - 20, w: 720, rot: -.02, order: 200, off: 2, caption: capt('КИМ РАССКАЗАЛА ПРАВДУ', Wt('правду') - .2), capSize: 24 });
  const kc = card({ x: A2[0] + 560, y: A2[1] - 60, w: 500, h: 400, rot: .03, order: 210, lined: true, tIn: Wt('могла') - .3, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => { g.fillStyle = INK; g.font = `700 28px ${MONO}`; g.textAlign = 'left'; g.fillText('КИМ МОГЛА:', -210, -140); drawChecks(g, t, it.cl, `700 30px ${MONO}`); drawTyped(g, it.a, t, 0, 140, `800 38px ${SANS}`, RED, 'center'); } });
  kc.cl = [checkLine('МОЛЧАТЬ', Wt('молчать') + .1, 'x', -190, -60), checkLine('ЖИТЬ СПОКОЙНО', Wt('спокойно') + .1, 'x', -190, 20)];
  kc.a = typed('ВЫБРАЛА ПРИЗНАТЬСЯ', Wt('выбрала') - .1, .03);
  goTo(A2, Wt('карьере') + .8, Wt('узнаёт') + .1, A2[0] - 860, A2[1] - 460);
  hold(Wt('узнаёт') + .1, Wt('ховарда') + .4, A2[0] - 400, A2[1] - 20, 1.05, -.015, { dz: .05 });
  camKey(Wt('могла') + .2, A2[0] + 520, A2[1] - 60, 1.05, .015); camKey(Wt('понимает') + .3, A2[0] + 100, A2[1] + 20, .88, 0); camKey(Wt('него') + .4, A2[0] - 300, A2[1] + 20, 1.05, -.01);

  // S3 · in court he does what nobody expected: the truth — accomplice, not victim; money and ego; Chuck
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2000, 1);
  pw('courtroom', Wt('суде') - .4, { x: A3[0] - 620, y: A3[1] - 200, w: 480, rot: -.05, order: 300, off: 2, caption: capt('СУД', Wt('суде')), capSize: 26 });
  pw('saultalk', Wt('рассказывает') - .4, { x: A3[0] + 120, y: A3[1] - 120, w: 760, rot: .015, order: 305, off: 3 });
  const tr = card({ x: A3[0] - 560, y: A3[1] + 260, w: 600, h: 320, rot: .02, order: 310, lined: true, tIn: Wt('жертвой') - .3, dur: .3, enter: 'slide', dx: -400, dy: 200,
    text: (g, t, it) => drawChecks(g, t, it.cl, `700 30px ${MONO}`) });
  tr.cl = [checkLine('ЖЕРТВА УОЛТЕРА', Wt('жертвой') + .1, 'x', -260, -90), checkLine('СОУЧАСТНИК', Wt('соучастником') + .1, 'v', -260, -20), checkLine('РАДИ ДЕНЕГ И СЕБЯ', Wt('себя') + .1, 'v', -260, 50)];
  pw('saulname', Wt('чаке') - .5, { x: A3[0] + 260, y: A3[1] + 400, w: 520, rot: -.03, order: 320, off: 2, caption: capt('«МОГ ОСТАНОВИТЬ — НЕ СДЕЛАЛ»', Wt('остановить')), capSize: 18 });
  goTo(A3, Wt('него') + 1.0, Wt('суде') - .1, A3[0] - 860, A3[1] - 460);
  hold(Wt('суде') - .1, Wt('ожидал') + .4, A3[0] - 600, A3[1] - 200, 1.08, -.015, { dz: .05 });
  camKey(Wt('рассказывает') + .2, A3[0] + 120, A3[1] - 120, 1.02, .015); camKey(Wt('жертвой') + .2, A3[0] - 500, A3[1] + 240, 1.08, -.01);
  camKey(Wt('чаке') + .2, A3[0] + 260, A3[1] + 380, 1.08, .015); camKey(Wt('сделал') + .4, A3[0] + 260, A3[1] + 400, 1.18, .015);

  // S4 · for the first time he says aloud what he hid behind Saul's mask; "My name is James McGill" (original dub)
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, .95);
  pw('kimcourt', Wt('впервые') - .4, { x: A4[0] - 620, y: A4[1] - 200, w: 480, rot: -.05, order: 400, off: 1, caption: capt('КИМ В ЗАЛЕ', Wt('вслух')), capSize: 22 });
  card({ x: A4[0] - 620, y: A4[1] + 160, w: 1, h: 1, shadow: 0, lit: false, order: 405, tIn: 0, scrawls: [scrawl('без маски Сола', Wt('маской') - .2, .5, { size: 46, rot: -.05 })] });
  dlgShot('d_name', A4[0] + 180, A4[1] - 20, { w: 900, order: 410 });
  const nm = card({ x: A4[0] + 180, y: A4[1] + 450, w: 1, h: 1, shadow: 0, lit: false, order: 420, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  nm.s = stamp('ДЖЕЙМС МАКГИЛЛ', DLGT.d_name + 3, { size: 62, rot: -.06, shake: 18 });
  goTo(A4, Wt('сделал') + .9, Wt('впервые') + .1, A4[0] - 860, A4[1] - 460);
  hold(Wt('впервые') + .1, Wt('судье') + .3, A4[0] - 600, A4[1] - 120, 1.08, -.015, { dz: .05 });
  camKey(DLGT.d_name + .1, A4[0] + 180, A4[1] - 20, 1.1, 0); camKey(DLGT.d_name + 4.7, A4[0] + 180, A4[1] + 80, 1.15, .01);

  // S5 · 86 years: traded 7 years of freedom for 86 of prison — to get his name back; "Better Call Saul" chants, a smile
  const A5 = [-300, 1900]; lamp(A5[0], A5[1] - 200, 2000, 1);
  const sn = card({ x: A5[0] - 120, y: A5[1] - 80, w: 900, h: 440, rot: -.015, order: 500, lined: false, tIn: Wt('дают') - .3, dur: .3, enter: 'slide', dx: 0, dy: -400,
    text: (g, t, it) => { drawTyped(g, it.a, t, -220, -40, `800 140px ${SANS}`, '#888', 'center'); drawTyped(g, it.c, t, 0, -40, `800 80px ${SANS}`, INK, 'center'); drawTyped(g, it.b, t, 220, -40, `800 140px ${SANS}`, RED, 'center');
      drawTyped(g, it.d, t, -220, 60, `700 26px ${MONO}`, INK, 'center'); drawTyped(g, it.e, t, 220, 60, `700 26px ${MONO}`, INK, 'center'); drawTyped(g, it.f, t, 0, 160, `800 40px ${SANS}`, RED, 'center'); } });
  sn.b = typed('86', Wt('восемьдесят') - .1, .15); sn.e = typed('лет тюрьмы', Wt('тюрьмы') - .3, .03);
  sn.a = typed('7', Wt('семь', 2) - .1, .1); sn.d = typed('лет свободы', Wt('свободы') - .2, .03); sn.c = typed('→', Wt('восемьдесят', 2) - .2, .1);
  sn.f = typed('= СВОЁ ИМЯ', Wt('имя') - .4, .05);
  const bs = pw('bus', Wt('тюрьме') - .4, { x: A5[0] + 520, y: A5[1] + 380, w: 480, rot: .04, order: 510, off: 3, caption: capt('«ЛУЧШЕ ЗВОНИТЕ СОЛУ!»', Wt('лучше')), capSize: 20 });
  goTo(A5, DLGT.d_name + 4.8, Wt('дают') + .1, A5[0] - 860, A5[1] - 460);
  hold(Wt('дают') + .1, Wt('имя') + .4, A5[0] - 120, A5[1] - 80, 1.05, -.01, { dz: .05 });
  camKey(Wt('тюрьме') + .2, A5[0] + 500, A5[1] + 360, 1.05, .015); camKey(Wt('улыбается') + .3, A5[0] + 520, A5[1] + 380, 1.15, .015);

  // S6 · Kim comes; one cigarette by the wall, like the parking garage when they were young; finger guns as she leaves
  const A6 = [6800, 950]; lamp(A6[0], A6[1] - 200, 2000, .95);
  pw('cigarette', Wt('приходит') - .4, { x: A6[0] - 300, y: A6[1] - 40, w: 820, rot: -.015, order: 600, off: 3, caption: capt('ОДНА СИГАРЕТА НА ДВОИХ', Wt('сигарету')), capSize: 26 });
  tag({ x: A6[0] + 560, y: A6[1] - 330, w: 440, rot: .06, label: 'КАК НА ПАРКОВКЕ', tIn: Wt('парковке') - .2, order: 605, size: 34 });
  const fg = pw('finger', Wt('уходит') - .4, { x: A6[0] + 560, y: A6[1] + 300, w: 480, rot: -.04, order: 610, off: 2 });
  fg.stamps = [stamp('КАК КОГДА-ТО', Wt('когда-то') - .3, { x: 0, y: 40, size: 50, rot: -.07, shake: 12 })];
  goTo(A6, Wt('улыбается') + .9, Wt('приходит') + .1, A6[0] - 860, A6[1] - 460);
  hold(Wt('приходит') + .1, Wt('стены') + .3, A6[0] - 300, A6[1] - 40, 1.05, -.015, { dz: .05 });
  camKey(Wt('парковке') + .2, A6[0] + 400, A6[1] - 240, 1.0, .015); camKey(Wt('уходит') + .2, A6[0] + 540, A6[1] + 280, 1.08, -.01); camKey(T_END, A6[0] + 540, A6[1] + 300, 1.22, .01);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
