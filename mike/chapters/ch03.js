// 03 · ДВОЕ
CH_V0 = 188.1;
const [T_START, T_END] = chRange(3);
function buildScenes() {
  const D = [0, 0]; divider(D, 3, 'ДВОЕ', T_START);
  hold(T_START, Wt('нашли') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · Hoffman and Fenske found dead, officially unsolved; we know who did it: Mike, playing drunk (gun hidden in their car) — killed both
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 1800, .8);
  const cs = card({ x: A1[0] - 520, y: A1[1] - 120, w: 560, h: 360, rot: -.03, order: 100, color: '#f3efe2', lined: false, tIn: Wt('хоффмана') - .2, dur: .3, enter: 'slide', dx: -400, dy: 0,
    text: (g, t, it) => { g.fillStyle = INK; g.font = `700 24px ${MONO}`; g.textAlign = 'left'; g.fillText('ПОЛИЦИЯ ФИЛАДЕЛЬФИИ', -250, -130);
      drawTyped(g, it.a, t, -250, -60, `800 34px ${SANS}`); drawTyped(g, it.b, t, -250, -10, `800 34px ${SANS}`); drawStamp(g, it.s, t); } });
  cs.a = typed('ХОФФМАН — мёртв', Wt('мёртвыми') - .4, .04); cs.b = typed('ФЕНСКЕ — мёртв', Wt('мёртвыми') + .2, .04);
  cs.s = { text: 'НЕ РАСКРЫТО', t: Wt('раскрыли') - .2, size: 52, rot: -.1, x: 0, y: 100 };
  const dk = pw('drunk', Wt('пришёл') - .3, { x: A1[0] + 360, y: A1[1] - 160, w: 620, rot: .02, order: 110, off: 1, caption: capt('ПРИТВОРИЛСЯ ПЬЯНЫМ', Wt('пьяным')), capSize: 22 });
  dk.stamps = [stamp('ПИСТОЛЕТ — В ИХ МАШИНЕ', Wt('сам') + .4, { x: 0, y: -20, size: 32, rot: -.06, shake: 10 })];
  const tw = pw('twodead', Wt('убить') - .4, { x: A1[0] + 400, y: A1[1] + 300, w: 520, rot: -.03, order: 120, off: 2 });
  tw.stamps = [stamp('ОБОИХ', Wt('обоих') - .1, { x: 0, y: 30, size: 80, rot: -.08, shake: 20 })];
  sfx('shot', Wt('убил') + .1); sfx('shot', Wt('обоих') + .1);
  goTo(A1, Wt('нашли') + .2, Wt('мёртвыми') - .6, A1[0] - 860, A1[1] - 400);
  hold(Wt('мёртвыми') - .6, Wt('сделал') + .3, A1[0] - 520, A1[1] - 120, 1.08, -.015, { dz: .05 });
  camKey(Wt('пришёл') + .1, A1[0] + 360, A1[1] - 160, 1.02, .015); camKey(Wt('убить') + .1, A1[0] + 400, A1[1] + 260, 1.08, -.01); camKey(Wt('обоих') + .5, A1[0] + 400, A1[1] + 290, 1.2, -.015);

  // S2 · he leaves Philadelphia for Albuquerque: Stacey and his granddaughter Kaylee; one goal — Kaylee
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2100, 1.05);
  pw('philstation', Wt('уезжает') - .4, { x: A2[0] - 600, y: A2[1] - 160, w: 460, rot: -.05, order: 200, off: 1, caption: capt('ПРОЧЬ ИЗ ФИЛАДЕЛЬФИИ', Wt('филадельфии') + .1), capSize: 18 });
  const ky = pw('kaylee', Wt('кейли') - .5, { x: A2[0] + 200, y: A2[1] - 20, w: 820, rot: .01, order: 210, off: 1, caption: capt('ВНУЧКА КЕЙЛИ', Wt('кейли') + .3), capSize: 28 });
  const gl = card({ x: A2[0] - 560, y: A2[1] + 260, w: 520, h: 300, rot: .03, order: 220, lined: true, tIn: Wt('цель') - .3, dur: .3, enter: 'slide', dx: -400, dy: 200,
    text: (g, t, it) => { drawTyped(g, it.a, t, -230, -100, `800 34px ${SANS}`, RED); drawChecks(g, t, it.cl, `700 26px ${MONO}`); } });
  gl.a = typed('ЕДИНСТВЕННАЯ ЦЕЛЬ', Wt('цель') - .1, .04);
  gl.cl = [checkLine('ОБЕСПЕЧИТЬ', Wt('обеспечить') + .1, 'v', -210, -30), checkLine('ЗАЩИТИТЬ', Wt('защитить') + .1, 'v', -210, 30), checkLine('ДАТЬ БУДУЩЕЕ', Wt('будущее') + .1, 'v', -210, 90)];
  goTo(A2, Wt('обоих') + .9, Wt('этого') - .1, A2[0] - 860, A2[1] - 460);
  hold(Wt('этого') - .1, Wt('альбукерке') + .2, A2[0] - 600, A2[1] - 140, 1.05, -.015, { dz: .05 });
  camKey(Wt('кейли') + .1, A2[0] + 200, A2[1] - 20, 1.0, .01); camKey(Wt('цель') + .2, A2[0] - 500, A2[1] + 220, 1.05, -.01); camKey(Wt('отца') + .4, A2[0] - 100, A2[1] + 100, .85, 0);

  // S3 · remember: everything he does from here — thefts, killings, cartel work — is for a little girl on a playground
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2100, 1.05);
  const al = card({ x: A3[0] - 560, y: A3[1] - 60, w: 500, h: 420, rot: -.03, order: 300, lined: true, tIn: Wt('запомните') - .3, dur: .3, enter: 'slide', dx: -400, dy: 0,
    text: (g, t, it) => { g.fillStyle = INK; g.font = `700 28px ${MONO}`; g.textAlign = 'left'; g.fillText('ВСЁ, ЧТО ДАЛЬШЕ:', -220, -150); drawChecks(g, t, it.cl, `700 28px ${MONO}`); drawTyped(g, it.a, t, 0, 160, `800 36px ${SANS}`, RED, 'center'); } });
  al.cl = [checkLine('КРАЖИ', Wt('кражи') + .1, 'v', -200, -70), checkLine('УБИЙСТВА', Wt('убийства') + .1, 'v', -200, 0), checkLine('НАРКОКАРТЕЛЬ', Wt('наркокартель') + .1, 'v', -200, 70)];
  al.a = typed('= РАДИ НЕЁ', Wt('ради') - .1, .05);
  pw('park', Wt('девочки') - .5, { x: A3[0] + 320, y: A3[1] - 40, w: 760, rot: .015, order: 310, off: 2, caption: capt('ДЕДУШКА В ПАРКЕ', Wt('парке')), capSize: 26 });
  goTo(A3, Wt('отца') + .8, Wt('запомните') + .1, A3[0] - 860, A3[1] - 460);
  hold(Wt('запомните') + .1, Wt('наркокартель') + .4, A3[0] - 560, A3[1] - 60, 1.08, -.015, { dz: .05 });
  camKey(Wt('девочки') + .2, A3[0] + 320, A3[1] - 40, 1.02, .015); camKey(T_END, A3[0] + 320, A3[1], 1.15, .02);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
