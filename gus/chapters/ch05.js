// 05 · МЕСТЬ
CH_V0 = 315.7;
const [T_START, T_END] = chRange(5);
function buildScenes() {
  const D = [0, 0]; divider(D, 5, 'МЕСТЬ', T_START);
  hold(T_START, Wt('ждал') + .3, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · twenty years: the counter, smile and pay
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 1900, 1);
  const yr = card({ x: A1[0] - 380, y: A1[1] - 40, w: 640, h: 360, rot: -.02, order: 100, lined: false, tIn: Wt('ждал') - .2, dur: .3, enter: 'slide', dx: -500, dy: 0,
    text: (g, t) => { const p = eio(prog(t, Wt('двадцать'), Wt('лет') + .6)), y = Math.round(1989 + 22 * p);
      g.fillStyle = INK; g.font = `800 140px ${SANS}`; g.textAlign = 'center'; g.fillText(String(y), 0, 40); g.font = `700 32px ${MONO}`; g.fillText('ОЖИДАНИЕ', 0, -100);
      if (p >= 1) { g.fillStyle = RED; g.font = `800 48px ${SANS}`; g.fillText('22 ГОДА', 0, 120); } } });
  for (let k = 0; k < 8; k++) sfx('tick', Wt('двадцать') + k * .18);
  const pl = card({ x: A1[0] + 520, y: A1[1] - 20, w: 500, h: 400, rot: .03, order: 110, lined: true, tIn: Wt('время') - .3, dur: .3, enter: 'slide', dx: 500, dy: 0,
    text: (g, t, it) => drawChecks(g, t, it.cl, `700 34px ${MONO}`) });
  pl.cl = [checkLine('РАБОТАЛ', Wt('работал') + .1, 'v', -200, -100), checkLine('УЛЫБАЛСЯ', Wt('улыбался') + .1, 'v', -200, -10), checkLine('ПЛАТИЛ', Wt('платил') + .1, 'v', -200, 80)];
  goTo(A1, Wt('ждал') + .3, Wt('двадцать') - .1, A1[0] - 760, A1[1] - 380);
  hold(Wt('двадцать') - .1, Wt('лет') + .6, A1[0] - 380, A1[1] - 40, 1.12, -.015, { dz: .04 });
  camKey(Wt('платил') + .4, A1[0] + 420, A1[1] - 20, 1.05, .01);

  // S2 · back to the same villa with a gift: tequila; he drinks first
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  pw('gvilla4', Wt('четвёртом') - .2, { x: A2[0] - 600, y: A2[1] - 200, w: 520, rot: -.05, order: 200, off: 0, caption: capt('ТА САМАЯ ВИЛЛА', Wt('виллу')), capSize: 22 });
  pw('gbox', Wt('подарком') - .3, { x: A2[0] - 560, y: A2[1] + 220, w: 520, rot: .04, order: 210, off: 1, caption: capt('ПОДАРОК: ТЕКИЛА', Wt('текилы')), capSize: 22 });
  const ts = pw('gtoast', Wt('пьёт') - .4, { x: A2[0] + 300, y: A2[1] + 20, w: 760, rot: .02, order: 220, off: 0 });
  tag({ x: A2[0] + 600, y: A2[1] - 300, w: 420, rot: .06, label: 'ПЬЁТ ПЕРВЫМ', tIn: Wt('первым') + .05, order: 230, size: 40 });
  goTo(A2, Wt('платил') + .4, Wt('четвёртом') + .1, A2[0] - 900, A2[1] - 480);
  hold(Wt('четвёртом') + .1, Wt('виллу') + .4, A2[0] - 560, A2[1] - 160, 1.1, -.02, { dz: .04 });
  camKey(Wt('текилы') + .2, A2[0] - 520, A2[1] + 200, 1.08, .01); camKey(Wt('пьёт') + .2, A2[0] + 300, A2[1] + 20, 1.08, .01);
  camKey(Wt('заподозрил') + .4, A2[0] + 300, A2[1] + 30, 1.2, .015);

  // S3 · the cartel dies by the pool; Gus vomits the poison and fixes his collar
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2100, 1);
  const cl = pw('collapse4', Wt('через') - .2, { x: A3[0] - 520, y: A3[1] - 160, w: 560, rot: -.04, order: 300, off: 0 });
  const ep = pw('eladiopool', Wt('эладио') - .3, { x: A3[0] - 480, y: A3[1] + 260, w: 560, rot: .03, order: 310, off: 0, caption: capt('ДОН ЭЛАДИО', Wt('эладио')), capSize: 24 });
  ep.stamps = [stamp('КАРТЕЛЬ', Wt('умирают') + .1, { x: 0, y: 30, size: 70, rot: -.1, shake: 18 })];
  const gb = pw('gbath', Wt('уходит') - .3, { x: A3[0] + 320, y: A3[1] - 40, w: 700, rot: .02, order: 320, off: 1.5, caption: capt('ТУАЛЕТ · РВОТА · ВОРОТНИК', Wt('воротник') - .3), capSize: 22 });
  const yd = card({ x: A3[0] + 360, y: A3[1] + 400, w: 620, h: 150, rot: -.02, order: 330, lined: false, tIn: Wt('яд') - .2, dur: .25, enter: 'slide', dx: 0, dy: 300,
    text: (g, t, it) => { drawTyped(g, it.a, t, -280, 14, `700 34px ${MONO}`, RED); } });
  yd.a = typed('ЯД БЫЛ И В ЕГО СТАКАНЕ', Wt('яд'), .03);
  goTo(A3, Wt('заподозрил') + .4, Wt('через') + .1, A3[0] - 860, A3[1] - 440);
  camKey(Wt('через') + .1, A3[0] - 500, A3[1] - 150, 1.1, -.02); camKey(Wt('эладио') + .2, A3[0] - 470, A3[1] + 240, 1.1, .01);
  camKey(Wt('бассейна') + .4, A3[0] - 460, A3[1] + 250, 1.2, .015); camKey(Wt('уходит') + .2, A3[0] + 300, A3[1] - 40, 1.08, .01);
  camKey(Wt('воротник') + .4, A3[0] + 320, A3[1] - 30, 1.18, .015); camKey(Wt('яд') + .3, A3[0] + 340, A3[1] + 280, 1.05, -.01);
  camKey(Wt('лет', 2) + .1, A3[0] + 100, A3[1] + 120, .85, 0);

  // S4 · the nursing home: Hector's bell (one ring yes, two no); the mask cracks
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2100, .95);
  pw('ghector8', Wt('престарелых') - .4, { x: A4[0] - 520, y: A4[1] - 60, w: 640, rot: -.03, order: 400, off: 3, caption: capt('ГЕКТОР САЛАМАНКА', Wt('гектору')), capSize: 24 });
  const bl = card({ x: A4[0] - 520, y: A4[1] + 380, w: 560, h: 200, rot: .03, order: 410, lined: false, tIn: Wt('звонком') - .3, dur: .25, enter: 'slide', dx: -400, dy: 200,
    text: (g, t, it) => { drawTyped(g, it.a, t, -240, -20, `700 34px ${MONO}`); drawTyped(g, it.b, t, -240, 50, `700 34px ${MONO}`, RED); } });
  bl.a = typed('🔔 = ДА', Wt('один') - .1, .06); bl.b = typed('🔔🔔 = НЕТ', Wt('=два') - .1, .06);
  sfx('bell', Wt('один') + .1); sfx('bell', Wt('=два') + .1); sfx('bell', Wt('=два') + .45);
  const gs = pw('gsit', Wt('садится') - .3, { x: A4[0] + 320, y: A4[1] - 20, w: 760, rot: .02, order: 420, off: 1 });
  const ct = typedCard({ x: A4[0] + 640, y: A4[1] - 400, w: 480, h: 180, rot: .05, order: 430, tIn: Wt('картеля', 2) - .3, dur: .3, enter: 'slide', dx: 400, dy: -200 },
    [[typed('КАРТЕЛЬ: —', Wt('картеля', 2), .04), -200, -20, `700 34px ${MONO}`], [typed('ВНУК: —', Wt('внук'), .05), -200, 40, `700 34px ${MONO}`, RED]]);
  const mk = card({ x: A4[0] + 320, y: A4[1] + 430, w: 1, h: 1, shadow: 0, lit: false, order: 440, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  mk.s = stamp('МАСКА ТРЕСНУЛА', Wt('трескается'), { size: 60, rot: -.07, shake: 16 });
  goTo(A4, Wt('лет', 2) + .1, Wt('потом') + .1, A4[0] - 860, A4[1] - 420);
  hold(Wt('потом') + .1, Wt('говорить') + .2, A4[0] - 480, A4[1] - 40, 1.08, -.015, { dz: .05 });
  camKey(Wt('звонком') + .2, A4[0] - 500, A4[1] + 260, 1.05, -.01); camKey(Wt('садится') + .2, A4[0] + 320, A4[1] - 20, 1.05, .01);
  camKey(Wt('картеля', 2) + .2, A4[0] + 460, A4[1] - 160, 1.0, .015); camKey(Wt('трескается') + .3, A4[0] + 320, A4[1] + 140, 1.0, .01);
  camKey(T_END, A4[0] + 320, A4[1] + 60, 1.2, .015);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
