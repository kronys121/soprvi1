// 15 · ВЕРДИКТ
CH_V0 = 795.8;
const [T_START, T_END] = chRange(15);
function buildScenes() {
  const D = [0, 0]; divider(D, 15, 'ВЕРДИКТ', T_START);
  hold(T_START, Wt('кто') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · so who is Mike Ehrmantraut? good man or bad?
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, 1);
  mugBoard(A1, { still: 'mikeface' }, typed('ЭРМАНТРАУТ, МАЙК', Wt('эрмантраут') - .3, .045), typed('хороший? плохой?', Wt('хороший') - .1, .04, { silent: true }), { order: 100 });
  goTo(A1, Wt('кто') + .2, Wt('такой') + .1, A1[0] - 760, A1[1] - 500);
  hold(Wt('такой') + .1, Wt('плохой') + .3, A1[0], A1[1] - 20, 1.0, .01, { dz: .05 });

  // S2 · killed people, worked for a cartel, helped hide bodies — by any measure a criminal
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  const cr = card({ x: A2[0] - 300, y: A2[1] - 40, w: 620, h: 420, rot: -.02, order: 200, lined: true, tIn: Wt('убивал') - .4, dur: .3, enter: 'slide', dx: -400, dy: 0,
    text: (g, t, it) => drawChecks(g, t, it.cl, `700 28px ${MONO}`) });
  cr.cl = [checkLine('УБИВАЛ ЛЮДЕЙ', Wt('людей') + .1, 'v', -260, -120), checkLine('РАБОТАЛ НА КАРТЕЛЬ', Wt('наркокартель') + .1, 'v', -260, -40), checkLine('ПРЯТАЛ ТРУПЫ', Wt('трупы') + .1, 'v', -260, 40)];
  pw('cleanup', Wt('прятать') - .4, { x: A2[0] + 560, y: A2[1] - 80, w: 440, rot: .04, order: 210, off: 2 });
  const pc = card({ x: A2[0] - 300, y: A2[1] + 300, w: 1, h: 1, shadow: 0, lit: false, order: 220, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  pc.s = stamp('ПРЕСТУПНИК', Wt('преступник') - .1, { size: 80, rot: -.07, shake: 18 });
  goTo(A2, Wt('плохой') + .5, Wt('убивал') - .2, A2[0] - 860, A2[1] - 440);
  hold(Wt('убивал') - .2, Wt('трупы') + .2, A2[0] - 100, A2[1] - 40, 1.0, -.01, { dz: .05 });
  camKey(Wt('меркам'), A2[0] - 200, A2[1] + 160, .95, 0);

  // S3 · but he has what almost no one in this story has: a code
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2000, 1);
  const cd = card({ x: A3[0] - 100, y: A3[1] - 40, w: 820, h: 520, rot: -.015, order: 300, lined: true, tIn: Wt('кодекс') - .4, dur: .3, enter: 'slide', dx: 0, dy: -400,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -190, `800 60px ${SANS}`, RED, 'center'); drawChecks(g, t, it.cl, `700 30px ${MONO}`); } });
  cd.a = typed('КОДЕКС', Wt('кодекс') - .1, .07);
  cd.cl = [checkLine('НЕ ВРЁТ СЕБЕ', Wt('врёт') + .1, 'v', -330, -90), checkLine('НЕ УБИВАЕТ БЕЗ ПРИЧИНЫ', Wt('причины') - .1, 'v', -330, -10),
           checkLine('ДЕРЖИТ СЛОВО', Wt('слово') + .1, 'v', -330, 70), checkLine('ЗАЩИЩАЕТ СЛАБЫХ', Wt('слабее') + .1, 'v', -330, 150)];
  goTo(A3, Wt('преступник') + .7, Wt('истории') - .6, A3[0] - 860, A3[1] - 460);
  hold(Wt('истории') - .6, Wt('слабее') + .4, A3[0] - 100, A3[1] - 40, 1.0, -.01, { dz: .06 });

  // S4 · Walter becomes Heisenberg to feel strong; Saul becomes Saul to feel nothing; Mike pretends nothing — knows who he is: a man who broke his own son
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2200, 1.05);
  [['walthat', Wt('уолтер') - .3, 'УОЛТЕР → ХАЙЗЕНБЕРГ', 'чтобы чувствовать себя сильным', Wt('сильным') - .8, -600, -.04],
   ['saulface', Wt('=сол') - .3, 'ДЖИММИ → СОЛ', 'чтобы ничего не чувствовать', Wt('чувствовать') - .8, 0, .03],
   ['mikeface', Wt('=майк', 3) - .3, 'МАЙК', 'знает, кто он такой', Wt('знает') - .3, 600, -.02]].forEach(([st, t0, cap, sub, t1, dx, r], i) => {
    pw(st, t0, { x: A4[0] + dx, y: A4[1] - 120, w: 420, rot: r, order: 400 + i * 2, caption: capt(cap, t0 + .3), capSize: 20 });
    typedCard({ x: A4[0] + dx, y: A4[1] + 230, w: 460, h: 110, rot: -r * .5, order: 401 + i * 2, tIn: t1 - .2, dur: .3, enter: 'slide', dx: 0, dy: 200 },
      [[typed(sub, t1, .03), 0, 8, `700 22px ${MONO}`, i === 2 ? RED : INK, 'center']]);
  });
  const sn = card({ x: A4[0], y: A4[1] + 470, w: 900, h: 140, rot: .01, order: 420, lined: false, tIn: Wt('сломал') - .4, dur: .3, enter: 'slide', dx: 0, dy: 300,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -10, `800 34px ${SANS}`, INK, 'center'); drawTyped(g, it.b, t, 0, 40, `700 24px ${MONO}`, RED, 'center'); } });
  sn.a = typed('СЛОМАЛ СВОЕГО СЫНА', Wt('сломал') - .1, .04); sn.b = typed('всё остальное — попытка расплатиться', Wt('попытка') - .3, .03);
  goTo(A4, Wt('слабее') + .7, Wt('уолтер') - .2, A4[0] - 860, A4[1] - 460);
  camKey(Wt('уолтер'), A4[0] - 560, A4[1] - 20, 1.05, -.015); camKey(Wt('=сол') + .1, A4[0], A4[1] - 20, 1.05, .01);
  camKey(Wt('=майк', 3) + .1, A4[0] + 560, A4[1] - 20, 1.05, .015); camKey(Wt('человек', 2) + .1, A4[0], A4[1] + 200, .82, 0); camKey(Wt('расплатиться') + .3, A4[0], A4[1] + 300, .9, 0);

  // S5 · no redemption: Kaylee's money confiscated, Jesse not saved, died by the river at the hand of a man he despised; maybe redemption wasn't the goal — he did what he had to, to the very end. No half measures.
  const A5 = [-300, 1900]; lamp(A5[0], A5[1] - 200, 1900, .9);
  const nr = card({ x: A5[0] - 300, y: A5[1] - 60, w: 640, h: 420, rot: -.02, order: 500, lined: true, tIn: Wt('искупления') - .5, dur: .3, enter: 'slide', dx: -400, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.a, t, -280, -150, `800 34px ${SANS}`); drawChecks(g, t, it.cl, `700 26px ${MONO}`); } });
  nr.a = typed('ИСКУПЛЕНИЕ НЕ НАЙДЕНО', Wt('искупления') - .3, .03);
  nr.cl = [checkLine('ДЕНЬГИ КЕЙЛИ — КОНФИСКОВАНЫ', Wt('конфисковали') + .1, 'x', -270, -70), checkLine('ДЖЕССИ — НЕ СПАС', Wt('спас') + .1, 'x', -270, 0), checkLine('ПОГИБ ОТ РУКИ УОЛТЕРА', Wt('презирал') + .1, 'x', -270, 70)];
  pw('riverbank', Wt('погиб') - .4, { x: A5[0] + 560, y: A5[1] - 100, w: 480, rot: .04, order: 510, off: 3 });
  const fn = card({ x: A5[0] + 100, y: A5[1] + 360, w: 1, h: 1, shadow: 0, lit: false, order: 520, tIn: 0, scrawls: [scrawl('делал то, что должен — до самого конца', Wt('делал') - .2, 1.6, { size: 44, rot: -.03 })] });
  const bp = card({ x: A5[0] + 100, y: A5[1] + 500, w: 1, h: 1, shadow: 0, lit: false, order: 530, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  bp.s = stamp('БЕЗ ПОЛУМЕР', Wt('полумер') - .2, { size: 88, rot: -.06, shake: 20 });
  goTo(A5, Wt('расплатиться') + .7, Wt('искупления') - .5, A5[0] - 860, A5[1] - 460);
  hold(Wt('искупления') - .5, Wt('спас') + .3, A5[0] - 300, A5[1] - 60, 1.05, -.01, { dz: .05 });
  camKey(Wt('погиб'), A5[0] + 540, A5[1] - 80, 1.05, .015); camKey(Wt('искупление') - .2, A5[0] + 100, A5[1] + 160, .9, 0);
  camKey(Wt('полумер') + .2, A5[0] + 100, A5[1] + 380, 1.0, 0); camKey(T_END, A5[0] + 100, A5[1] + 400, 1.06, 0);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
