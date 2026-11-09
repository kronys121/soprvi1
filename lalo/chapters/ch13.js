// 13 · ВЕРДИКТ — psychopath; mind; irony; why we love him; Saul's line in the desert (insert "Да он никто")
CH_V0 = 696.6;
const [T_START, T_END] = chRange(13);
function buildScenes() {
  const D = [0, 0]; divider(D, 13, 'ВЕРДИКТ', T_START);
  hold(T_START, Wt('так') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · psychopath? villain? of course: kills the innocent — clerk, Howard, the lookalike; a life is a move in a game
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, 1);
  mugBoard(A1, { still: 'laloface' }, typed('САЛАМАНКА, ЭДУАРДО', Wt('саламанка') - .3, .045), typed('психопат? злодей?', Wt('психопат') - .1, .04, { silent: true }), { order: 100 });
  const vk = card({ x: A1[0] + 820, y: A1[1] - 40, w: 520, h: 380, rot: .03, order: 110, lined: true, tIn: Wt('невиновных') - .4, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.a, t, -230, -130, `800 28px ${SANS}`, RED); drawChecks(g, t, it.cl, `700 24px ${MONO}`); } });
  vk.a = typed('НЕВИНОВНЫЕ ЖЕРТВЫ:', Wt('невиновных') - .2, .03);
  vk.cl = [checkLine('СЛУЖАЩИЙ ПУНКТА', Wt('переводов') + .1, 'x', -220, -50), checkLine('ХОВАРД', Wt('ховарда') + .1, 'x', -220, 20), checkLine('ДВОЙНИК', Wt('себя') + .1, 'x', -220, 90)];
  card({ x: A1[0] + 820, y: A1[1] + 260, w: 1, h: 1, shadow: 0, lit: false, order: 120, tIn: 0, scrawls: [scrawl('жизнь — ход в игре', Wt('ход') - .3, .7, { size: 46, rot: -.04 })] });
  goTo(A1, Wt('так') + .2, Wt('кто') + .1, A1[0] - 760, A1[1] - 500);
  hold(Wt('кто') + .1, Wt('конечно') + .3, A1[0], A1[1] - 20, 1.0, .01, { dz: .05 });
  camKey(Wt('невиновных') + .1, A1[0] + 800, A1[1] - 20, 1.05, .015); camKey(Wt('игре') + .3, A1[0] + 800, A1[1] + 60, 1.1, .015);

  // S2 · but he has what other Salamancas lack: a mind. Tuco smashes, Hector intimidates, the twins kill silently — Lalo thinks; saw through Gus first, patiently, step by step
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2100, 1);
  [['hectorface', 'ГЕКТОР', 'запугивает', Wt('запугивает'), -700, -.04], ['twins', 'БЛИЗНЕЦЫ', 'молча убивают', Wt('молча'), -230, .03], ['lalogrin', 'ЛАЛО', 'ДУМАЕТ', Wt('думает'), 260, -.02]].forEach(([st, nm, sub, tm, dx, r], i) => {
    pw(st, tm - .5, { x: A2[0] + dx, y: A2[1] - 120, w: 420, rot: r, order: 200 + i * 2, off: 1, caption: capt(nm, tm - .2), capSize: 22 });
    typedCard({ x: A2[0] + dx, y: A2[1] + 200, w: 420, h: 100, rot: -r * .5, order: 201 + i * 2, tIn: tm - .3, dur: .3, enter: 'slide', dx: 0, dy: 200 },
      [[typed(sub, tm, .04), 0, 10, `800 28px ${SANS}`, i === 2 ? RED : INK, 'center']]);
  });
  const um = card({ x: A2[0] + 760, y: A2[1] - 60, w: 360, h: 220, rot: .04, order: 210, color: '#f3efe2', lined: false, tIn: Wt('ум') - .3, dur: .3, enter: 'slide', dx: 300, dy: 0,
    text: (g, t, it) => drawTyped(g, it.a, t, 0, 30, `800 90px ${SANS}`, RED, 'center') });
  um.a = typed('УМ', Wt('ум') - .1, .1);
  const ps = typedCard({ x: A2[0] - 200, y: A2[1] + 420, w: 900, h: 120, rot: -.015, order: 220, tIn: Wt('раньше') - .3, dur: .3, enter: 'slide', dx: 0, dy: 300 },
    [[typed('первым понял, кто такой Гус — без единого доказательства', Wt('раньше') - .1, .025), 0, 0, `700 24px ${MONO}`, INK, 'center'], [typed('ТЕРПЕЛИВО, ШАГ ЗА ШАГОМ', Wt('терпеливо') - .2, .04), 0, 40, `800 28px ${SANS}`, RED, 'center']]);
  goTo(A2, Wt('игре') + .6, Wt('нём') - .1, A2[0] - 860, A2[1] - 460);
  camKey(Wt('ум') + .1, A2[0] + 740, A2[1] - 40, 1.05, .015); camKey(Wt('туко') - .1, A2[0] - 400, A2[1] - 20, .95, -.01);
  camKey(Wt('думает') + .1, A2[0] + 200, A2[1] + 20, .92, .01); camKey(Wt('раньше') + .2, A2[0] - 100, A2[1] + 300, .88, 0); camKey(Wt('шагом') + .3, A2[0] - 100, A2[1] + 320, .95, 0);

  // S3 · the irony: Gus won not by being smarter — Lalo wanted to prove he was right, not just kill; had he shot at once, Breaking Bad might never have happened; love of the game killed him
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2000, 1);
  const ir = card({ x: A3[0] - 120, y: A3[1] - 40, w: 900, h: 440, rot: -.015, order: 300, lined: false, tIn: Wt('ирония') - .3, dur: .3, enter: 'slide', dx: 0, dy: 500,
    text: (g, t, it) => { g.strokeStyle = INK; g.lineWidth = 3; g.beginPath(); g.moveTo(0, -150); g.lineTo(0, 160); g.stroke(); drawTyped(g, it.hd, t, 0, -180, `700 28px ${MONO}`, '#666', 'center');
      drawTyped(g, it.a, t, -225, -80, `800 34px ${SANS}`, INK, 'center'); drawTyped(g, it.b, t, -225, 0, `700 26px ${MONO}`, '#888', 'center');
      drawTyped(g, it.c, t, 225, -80, `800 34px ${SANS}`, INK, 'center'); drawTyped(g, it.d, t, 225, 0, `800 34px ${SANS}`, RED, 'center'); } });
  ir.hd = typed('ирония', Wt('ирония') - .1, .05); ir.a = typed('ГУС УМНЕЕ?', Wt('умнее') - .3, .04); ir.b = typed('нет', Wt('умнее') + .2, .08);
  ir.c = typed('ЛАЛО ХОТЕЛ', Wt('доказать') - .5, .04); ir.d = typed('ДОКАЗАТЬ', Wt('доказать') - .1, .05);
  pw('saulgrave', Wt('выстрелил') - .4, { x: A3[0] + 760, y: A3[1] - 120, w: 380, rot: .05, order: 310, off: 2, caption: capt('…И «ВО ВСЕ ТЯЖКИЕ» НЕ БЫЛО БЫ?', Wt('случилась') - .3), capSize: 14 });
  const lg = card({ x: A3[0] - 120, y: A3[1] + 340, w: 1, h: 1, shadow: 0, lit: false, order: 320, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  lg.s = stamp('ПОГУБИЛА ЛЮБОВЬ К ИГРЕ', Wt('игре', 2) - .1, { size: 56, rot: -.05, shake: 16 });
  goTo(A3, Wt('шагом') + .6, Wt('ирония') - .2, A3[0] - 860, A3[1] - 460);
  hold(Wt('ирония') - .2, Wt('правоту') + .3, A3[0] - 120, A3[1] - 40, 1.0, -.01, { dz: .05 });
  camKey(Wt('выстрелил'), A3[0] + 740, A3[1] - 100, 1.05, .015); camKey(Wt('погубила') - .1, A3[0] - 120, A3[1] + 200, .92, 0);

  // S4 · fans adore him: the only villain having fun; Walter — pride, Gus — revenge, Mike — guilt; Lalo enjoys life; alive among the dead inside; unpredictable because fearless
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2200, 1.05);
  [['walthat', 'УОЛТЕР', 'гордость', Wt('гордостью'), -660, -.04], ['gusface', 'ГУС', 'месть', Wt('местью'), -220, .03], ['mikeface', 'МАЙК', 'вина', Wt('вину'), 220, -.02], ['lalosun', 'ЛАЛО', 'ВЕСЕЛЬЕ', Wt('наслаждается'), 660, .04]].forEach(([st, nm, sub, tm, dx, r], i) => {
    pw(st, tm - .6, { x: A4[0] + dx, y: A4[1] - 120, w: 380, rot: r, order: 400 + i * 2, off: 1, caption: capt(nm, tm - .3), capSize: 20 });
    typedCard({ x: A4[0] + dx, y: A4[1] + 190, w: 380, h: 100, rot: -r * .5, order: 401 + i * 2, tIn: tm - .3, dur: .3, enter: 'slide', dx: 0, dy: 200 },
      [[typed(sub, tm, .05), 0, 10, `800 28px ${SANS}`, i === 3 ? RED : INK, 'center']]);
  });
  const fun = typedCard({ x: A4[0], y: A4[1] + 420, w: 900, h: 140, rot: .01, order: 420, tIn: Wt('живой') - .3, dur: .3, enter: 'slide', dx: 0, dy: 300 },
    [[typed('живой — среди мёртвых внутри', Wt('живой') - .1, .03), 0, -6, `800 30px ${SANS}`, INK, 'center'], [typed('невозможно предсказать того, кто ничего не боится', Wt('предсказать') - .5, .025), 0, 40, `700 22px ${MONO}`, RED, 'center']]);
  const lv = card({ x: A4[0] - 700, y: A4[1] - 420, w: 1, h: 1, shadow: 0, lit: false, order: 395, tIn: 0, scrawls: [scrawl('единственный злодей, которому весело', Wt('весело') - .8, 1.0, { size: 42, rot: -.03 })] });
  goTo(A4, Wt('игре', 2) + .6, Wt('всё-таки') - .1, A4[0] - 860, A4[1] - 560);
  camKey(Wt('весело') + .2, A4[0] - 300, A4[1] - 200, .82, -.01); camKey(Wt('гордостью'), A4[0] - 440, A4[1] - 20, .95, -.01);
  camKey(Wt('вину'), A4[0] + 220, A4[1] - 20, .95, .01); camKey(Wt('наслаждается') + .2, A4[0] + 640, A4[1] - 20, 1.05, .015);
  camKey(Wt('живой') + .2, A4[0], A4[1] + 260, .85, 0); camKey(Wt('боится') + .3, A4[0], A4[1] + 300, .92, 0);

  // S5 · remember Saul's line in the desert? now we know why: he saw Lalo in his apartment, saw Howard die; years later only one name; Jesse asks — (insert) — "Да он никто"; Lalo said the same to Howard: "Я? Да никто"
  const A5 = [-300, 1900]; lamp(A5[0], A5[1] - 200, 1900, .9);
  pw('saulgrave', Wt('помните') - .4, { x: A5[0] - 620, y: A5[1] - 160, w: 440, rot: -.05, order: 500, off: 4, caption: capt('«ВАС ЛАЛО ПРИСЛАЛ?»', Wt('прислал') - .3), capSize: 18 });
  const sw = card({ x: A5[0] - 620, y: A5[1] + 230, w: 460, h: 220, rot: .03, order: 505, lined: true, tIn: Wt('видел') - .4, dur: .3, enter: 'slide', dx: -300, dy: 200,
    text: (g, t, it) => drawChecks(g, t, it.cl, `700 22px ${MONO}`) });
  sw.cl = [checkLine('ЛАЛО В КВАРТИРЕ', Wt('квартире') + .1, 'v', -200, -40), checkLine('СМЕРТЬ ХОВАРДА', Wt('=ховард') + .1, 'v', -200, 30)];
  dlgShot('d_never', A5[0] + 220, A5[1] - 20, { w: 880, order: 510 });
  const nb = card({ x: A5[0] + 220, y: A5[1] + 420, w: 760, h: 150, rot: -.015, order: 520, color: '#f3efe2', lined: false, tIn: Wt('почти') - .3, dur: .3, enter: 'slide', dx: 0, dy: 300,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -10, `700 24px ${MONO}`, '#777', 'center'); drawTyped(g, it.b, t, 0, 45, `800 40px ${SANS}`, RED, 'center'); } });
  nb.a = typed('Лало — Ховарду, в его последний вечер:', Wt('почти') - .1, .025); nb.b = typed('«Я? ДА НИКТО»', Wt('вечер') + .4, .06);
  goTo(A5, Wt('боится') + .7, Wt('помните') - .2, A5[0] - 860, A5[1] - 460);
  camKey(Wt('помните') + .1, A5[0] - 600, A5[1] - 140, 1.08, -.015); camKey(Wt('видел') + .1, A5[0] - 600, A5[1] + 160, 1.02, -.01);
  camKey(Wt('годы'), A5[0] - 300, A5[1] + 40, .9, 0);
  camKey(DLGT.d_never - .5, A5[0] + 220, A5[1] - 20, 1.02, 0); camKey(DLGT.d_never + 19, A5[0] + 220, A5[1], 1.1, 0);
  camKey(Wt('почти') + .3, A5[0] + 220, A5[1] + 200, .9, 0); camKey(T_END, A5[0] + 220, A5[1] + 240, .98, 0);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
