// 10 · ПОЛУМЕРЫ  (insert: "Я пошёл на полумеры там, где надо было идти до конца... Больше никаких полумер, Уолтер.")
CH_V0 = 554.1;
const [T_START, T_END] = chRange(10);
function buildScenes() {
  const D = [0, 0]; divider(D, 10, 'ПОЛУМЕРЫ', T_START);
  hold(T_START, Wt('встречаем') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · in Breaking Bad, a different Mike: Gus's cleaner — arrives when things go wrong and makes it as if nothing happened
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, 1);
  pw('cleaner', Wt('другого') - .4, { x: A1[0] - 400, y: A1[1] - 20, w: 480, rot: -.05, order: 100, off: 2, caption: capt('ЧИСТИЛЬЩИК ГУСА', Wt('гуса')), capSize: 22 });
  pw('cleanup', Wt('приезжает') - .4, { x: A1[0] + 520, y: A1[1] - 40, w: 480, rot: .04, order: 105, off: 2, caption: capt('БУДТО НИЧЕГО НЕ БЫЛО', Wt('было') - .3), capSize: 20 });
  goTo(A1, Wt('встречаем') + .2, Wt('другого') - .1, A1[0] - 860, A1[1] - 460);
  hold(Wt('другого') - .1, Wt('приезжает') - .1, A1[0] - 400, A1[1] - 20, 1.05, -.015, { dz: .05 });
  camKey(Wt('приезжает') + .1, A1[0] + 500, A1[1] - 40, 1.08, .015); camKey(Wt('было') + .3, A1[0] + 520, A1[1] - 20, 1.15, .015);

  // S2 · the most famous monologue: a story from his cop youth — a man who beat his wife; Mike could have gone all the way but pitied him
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 1800, .8);
  pw('mikespeech', Wt('монолог') - .5, { x: A2[0] - 340, y: A2[1] - 20, w: 760, rot: -.015, order: 200, off: 2, caption: capt('САМЫЙ ЗНАМЕНИТЫЙ МОНОЛОГ', Wt('монолог')), capSize: 24 });
  const st = typedCard({ x: A2[0] + 620, y: A2[1] - 60, w: 460, h: 420, rot: .03, order: 210, tIn: Wt('мужчина') - .3, dur: .3, enter: 'slide', dx: 400, dy: 0 },
    [[typed('избивал жену', Wt('избивал') - .1, .04), -200, -140, `700 28px ${MONO}`], [typed('мог — до конца', Wt('конца') - .5, .04), -200, -70, `700 28px ${MONO}`],
     [typed('пожалел', Wt('пожалел') - .2, .05), -200, 0, `700 28px ${MONO}`], [typed('припугнул, отпустил', Wt('припугнул') - .1, .03), -200, 70, `700 28px ${MONO}`],
     [typed('«этого хватит»', Wt('хватит') - .5, .04), -200, 140, `400 italic 30px "DejaVu Serif"`, RED]]);
  goTo(A2, Wt('было') + .5, Wt('здесь') - .1, A2[0] - 860, A2[1] - 440);
  hold(Wt('здесь') - .1, Wt('молодости') + .3, A2[0] - 340, A2[1] - 20, 1.05, -.015, { dz: .05 });
  camKey(Wt('мужчина') + .2, A2[0] + 600, A2[1] - 40, 1.05, .015); camKey(Wt('хватит') + .3, A2[0] + 600, A2[1] + 40, 1.12, .015);

  // S3 · two weeks later he beat her to death (original dub: the moral)
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 1800, .8);
  const dd = card({ x: A3[0] - 620, y: A3[1] - 160, w: 480, h: 260, rot: -.04, order: 300, color: '#f3efe2', lined: false, tIn: Wt('через') - .3, dur: .3, enter: 'slide', dx: -400, dy: -200,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -40, `700 26px ${MONO}`, INK, 'center'); drawTyped(g, it.b, t, 0, 30, `800 46px ${SANS}`, RED, 'center'); } });
  dd.a = typed('через две недели', Wt('через') - .1, .04); dd.b = typed('УБИЛ ЕЁ', Wt('забил') - .1, .06);
  pw('mikeclose12', Wt('забил') + .4, { x: A3[0] - 620, y: A3[1] + 240, w: 480, rot: .04, order: 305, off: 4 });
  dlgShot('d_halfm', A3[0] + 180, A3[1] - 20, { w: 900, order: 310 });
  const hm = card({ x: A3[0] + 180, y: A3[1] + 450, w: 1, h: 1, shadow: 0, lit: false, order: 320, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  hm.s = stamp('НИКАКИХ ПОЛУМЕР', DLGT.d_halfm + 27.6, { size: 66, rot: -.06, shake: 18 });
  goTo(A3, Wt('хватит') + .6, Wt('через') - .1, A3[0] - 860, A3[1] - 460);
  hold(Wt('через') - .1, Wt('смерти') + .3, A3[0] - 600, A3[1] - 140, 1.1, -.015, { dz: .05 });
  camKey(DLGT.d_halfm + .1, A3[0] + 180, A3[1] - 20, 1.08, 0); camKey(DLGT.d_halfm + 29.2, A3[0] + 180, A3[1] + 40, 1.22, .01);

  // S4 · his whole philosophy: twice he paid for half measures — a son not saved, a woman not saved; now — all the way, because he knows the price of indecision
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  const ph = card({ x: A4[0] - 100, y: A4[1] - 40, w: 900, h: 460, rot: -.015, order: 400, lined: true, tIn: Wt('вот') - .3, dur: .3, enter: 'slide', dx: 0, dy: -400,
    text: (g, t, it) => { drawTyped(g, it.a, t, -400, -170, `800 34px ${SANS}`); drawChecks(g, t, it.cl, `700 28px ${MONO}`); drawTyped(g, it.b, t, -400, 120, `800 40px ${SANS}`, RED); drawTyped(g, it.c, t, -400, 180, `700 26px ${MONO}`); } });
  ph.a = typed('ДВАЖДЫ ПЛАТИЛ ЗА ПОЛУМЕРЫ', Wt('дважды') - .2, .03);
  ph.cl = [checkLine('СЫН — НЕ УБЕРЁГ', Wt('уберёг') + .1, 'x', -380, -90), checkLine('ЖЕНЩИНА — НЕ СПАС', Wt('спас') + .1, 'x', -380, -20)];
  ph.b = typed('ТЕПЕРЬ — ДО КОНЦА', Wt('теперь') - .1, .04); ph.c = typed('не из жестокости — знает цену', Wt('цену') - .6, .03);
  goTo(A4, DLGT.d_halfm + 29.4, Wt('вот') - .1, A4[0] - 860, A4[1] - 460);
  hold(Wt('вот') - .1, Wt('спас') + .3, A4[0] - 100, A4[1] - 100, 1.05, -.01, { dz: .05 });
  camKey(Wt('теперь') + .3, A4[0] - 100, A4[1] + 60, 1.08, -.01); camKey(T_END, A4[0] - 100, A4[1] + 100, 1.14, -.01);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
