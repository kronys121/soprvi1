// 07 · ФОНАРЬ  (inserts: "ты не так уж много для меня значишь"; "это будет твой крест")
CH_V0 = 499.4;
const [T_START, T_END] = chRange(7);
function buildScenes() {
  const D = [0, 0]; divider(D, 7, 'ФОНАРЬ', T_START);
  hold(T_START, Wt('последний') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · the last conversation: Jimmy comes to make peace; Chuck, calm, almost tender (original dub)
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 1900, .85);
  pw('lastvisit', Wt('разговор') - .2, { x: A1[0] - 620, y: A1[1] - 200, w: 480, rot: -.05, order: 100, off: 1, caption: capt('ПОСЛЕДНИЙ РАЗГОВОР', Wt('братьев')), capSize: 20 });
  const ap = card({ x: A1[0] - 620, y: A1[1] + 220, w: 480, h: 200, rot: .03, order: 105, lined: true, tIn: Wt('приходит') - .3, dur: .3, enter: 'slide', dx: -400, dy: 200,
    text: (g, t, it) => drawChecks(g, t, it.cl, `700 30px ${MONO}`) });
  ap.cl = [checkLine('МИРИТЬСЯ', Wt('мириться') + .1, 'v', -200, -40), checkLine('ЛАСКОВО', Wt('ласково') + .1, 'v', -200, 40)];
  dlgShot('d_meant', A1[0] + 180, A1[1] - 20, { w: 900, order: 110 });
  goTo(A1, Wt('последний') + .2, Wt('жестоких') + .1, A1[0] - 860, A1[1] - 460);
  hold(Wt('жестоких') + .1, Wt('ласково') + .3, A1[0] - 600, A1[1] - 20, 1.0, -.015, { dz: .05 });
  camKey(DLGT.d_meant + .1, A1[0] + 180, A1[1] - 20, 1.08, 0); camKey(DLGT.d_meant + 12.8, A1[0] + 180, A1[1] + 40, 1.22, .01);

  // S2 · the cruelest line for this man: he lived to be recognised; Chuck takes even the hate away
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  const cr = card({ x: A2[0] - 200, y: A2[1] - 60, w: 880, h: 480, rot: -.015, order: 200, lined: false, tIn: Wt('самая') - .3, dur: .3, enter: 'slide', dx: 0, dy: -400,
    text: (g, t, it) => { drawTyped(g, it.f, t, -400, -185, `800 36px ${SANS}`, RED); drawTyped(g, it.a, t, -400, -120, `700 30px ${MONO}`); drawTyped(g, it.b, t, -400, -60, `800 40px ${SANS}`);
      drawTyped(g, it.c, t, -400, 20, `700 30px ${MONO}`); drawTyped(g, it.d, t, -400, 75, `700 30px ${MONO}`); drawPen(g, it.p, t); drawTyped(g, it.e, t, -400, 165, `800 48px ${SANS}`, RED); } });
  cr.f = typed('САМАЯ СТРАШНАЯ ФРАЗА', Wt('страшная') - .3, .04); cr.a = typed('всю жизнь ждал одного:', Wt('всю') - .2, .03); cr.b = typed('ЧТОБЫ БРАТ ПРИЗНАЛ', Wt('=брат') - .2, .04);
  cr.c = typed('«я тебя не ненавижу»', Wt('ненавижу') - .7, .03); cr.d = typed('ненависть', Wt('ненависть') - .2, .04); cr.p = pen([[-410, 75], [-170, 69]], Wt('ненавижу') + .2, .3, { width: 7 });
  cr.e = typed('ТЫ — НИЧТО', Wt('ничто') - .3, .06);
  pw('chuckcold', Wt('отнимает') - .4, { x: A2[0] + 640, y: A2[1] + 200, w: 420, rot: .05, order: 210, off: 2 });
  goTo(A2, DLGT.d_meant + 13, Wt('самая') + .1, A2[0] - 860, A2[1] - 440);
  hold(Wt('самая') + .1, Wt('признал') + .3, A2[0] - 300, A2[1] - 140, 1.05, -.015, { dz: .05 });
  camKey(Wt('отнимает') + .2, A2[0] + 200, A2[1] + 40, .92, .01); camKey(Wt('ничто') + .4, A2[0] - 200, A2[1] + 100, 1.1, -.01);

  // S3 · pushed out of his own firm (Jimmy's hand in it too); the illness returns; wires, the house, the lantern
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 1800, .8);
  pw('hhm', Wt('выдавливают') - .4, { x: A3[0] - 620, y: A3[1] - 220, w: 460, rot: -.05, order: 300, off: 9, caption: capt('ВЫДАВИЛИ ИЗ HHM', Wt('фирмы')), capSize: 20 });
  card({ x: A3[0] - 620, y: A3[1] + 120, w: 1, h: 1, shadow: 0, lit: false, order: 305, tIn: 0, scrawls: [scrawl('рука Джимми', Wt('рука') - .2, .5, { size: 46, rot: -.05 })] });
  pw('lantern', Wt('возвращается') - .5, { x: A3[0] + 120, y: A3[1] - 60, w: 820, rot: .01, order: 310, off: 0 });
  const ln = pw('fire', Wt('горящий') - .4, { x: A3[0] + 380, y: A3[1] + 360, w: 480, rot: -.04, order: 320, off: 3 });
  ln.stamps = [stamp('ФОНАРЬ', Wt('фонарь') + .1, { x: 0, y: 40, size: 70, rot: -.07, shake: 18 })];
  goTo(A3, Wt('ничто') + .9, Wt('вскоре') + .1, A3[0] - 800, A3[1] - 460);
  hold(Wt('вскоре') + .1, Wt('джимми', 3) + .3, A3[0] - 600, A3[1] - 120, 1.05, -.015, { dz: .05 });
  camKey(Wt('возвращается') + .2, A3[0] + 120, A3[1] - 60, 1.0, .01); camKey(Wt('разносит') + .3, A3[0] + 120, A3[1] - 40, 1.15, .015);
  camKey(Wt('горящий') + .2, A3[0] + 360, A3[1] + 320, 1.15, -.015);

  // S4 · the funeral; Howard blames himself; "well, that's your cross" (original dub); he walks away whistling
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 1900, .9);
  pw('funeral4', Wt('держится') - .4, { x: A4[0] - 600, y: A4[1] - 200, w: 500, rot: -.05, order: 400, off: 2, caption: capt('ПОХОРОНЫ ЧАКА', Wt('похоронах')), capSize: 22 });
  pw('howardconf', Wt('ховард') - .4, { x: A4[0] - 600, y: A4[1] + 220, w: 500, rot: .04, order: 405, off: 4, caption: capt('ХОВАРД: «ЭТО Я»', Wt('себя') - .2), capSize: 22 });
  dlgShot('d_cross', A4[0] + 180, A4[1] - 20, { w: 900, order: 410 });
  const wh = card({ x: A4[0] + 180, y: A4[1] + 450, w: 1, h: 1, shadow: 0, lit: false, order: 420, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  wh.s = stamp('УХОДИТ, НАСВИСТЫВАЯ', Wt('насвистывая') - .5, { size: 54, rot: -.06, shake: 14 });
  goTo(A4, Wt('фонарь') + .6, Wt('держится') + .1, A4[0] - 860, A4[1] - 460);
  hold(Wt('держится') + .1, Wt('признаётся') + .2, A4[0] - 600, A4[1] - 200, 1.08, -.015, { dz: .05 });
  camKey(Wt('винит') + .2, A4[0] - 600, A4[1] + 200, 1.1, .015);
  camKey(DLGT.d_cross + .05, A4[0] + 180, A4[1] - 20, 1.08, 0); camKey(Wt('насвистывая') + .4, A4[0] + 180, A4[1] + 200, .98, .01);

  // S5 · he moved his guilt onto someone else — and from now on won't let himself feel it
  const A5 = [-300, 1900]; lamp(A5[0], A5[1] - 200, 2000, 1);
  pw('jimmyfish', Wt('переложил') - .5, { x: A5[0] - 60, y: A5[1] - 40, w: 820, rot: -.01, order: 500, off: 2 });
  const gl = card({ x: A5[0] - 60, y: A5[1] + 420, w: 760, h: 150, rot: -.02, order: 510, lined: false, tIn: Wt('вину') - .3, dur: .3, enter: 'slide', dx: 0, dy: 300,
    text: (g, t, it) => { drawTyped(g, it.a, t, -340, -20, `700 30px ${MONO}`); drawTyped(g, it.b, t, -340, 40, `800 36px ${SANS}`, RED); } });
  gl.a = typed('вина → на другого', Wt('вину') - .1, .04); gl.b = typed('ЧУВСТВОВАТЬ: ЗАПРЕЩЕНО', Wt('позволит') - .2, .035);
  goTo(A5, Wt('насвистывая') + .8, Wt('переложил') + .1, A5[0] - 860, A5[1] - 460);
  camKey(Wt('переложил') + .3, A5[0] - 60, A5[1] - 40, 1.05, 0); camKey(Wt('момента') + .2, A5[0] - 60, A5[1] + 200, .95, -.01); camKey(T_END, A5[0] - 60, A5[1] + 220, 1.02, 0);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
