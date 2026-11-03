// 08 · W.W.  (inserts: "Уолтер Уайт? — Я попался."; drunk Walt "этот твой гений... возможно, он ещё жив")
CH_V0 = 500.2;
const [T_START, T_END] = chRange(8);
function buildScenes() {
  const D = [0, 0]; divider(D, 8, 'W.W.', T_START);
  hold(T_START, Wt('тут') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · work comes back: chemist Gale murdered; a lab notebook in his flat; a colleague brings it to Hank out of friendship
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, 1);
  const gl = typedCard({ x: A1[0] - 400, y: A1[1] - 60, w: 720, h: 380, rot: -.02, order: 100, tIn: Wt('хэнку') - .1, dur: .3, enter: 'slide', dx: -500, dy: 0 },
    [[typed('УБИТ: ХИМИК ГЕЙЛ', Wt('убит') - .1, .04), -320, -110, `800 40px ${SANS}`, RED], [typed('в квартире — тетрадь', Wt('квартире') - .1, .035), -300, -30, `700 30px ${MONO}`],
     [typed('записи о варке', Wt('записями') - .1, .04), -300, 30, `700 30px ${MONO}`], [typed('→ Хэнку «по старой дружбе»', Wt('дружбе') - .7, .03), -300, 110, `700 28px ${MONO}`]]);
  pw('notebook', Wt('тетрадь') - .4, { x: A1[0] + 560, y: A1[1] - 40, w: 480, rot: .04, order: 110, off: 1, caption: capt('ТЕТРАДЬ ГЕЙЛА', Wt('варке')), capSize: 22 });
  card({ x: A1[0] + 560, y: A1[1] + 300, w: 1, h: 1, shadow: 0, lit: false, order: 120, tIn: 0, scrawls: [scrawl('официально — не работает', Wt('официально') - .2, .5, { size: 42, rot: -.05 })] });
  goTo(A1, Wt('тут') + .2, Wt('хэнку') + .1, A1[0] - 760, A1[1] - 400);
  hold(Wt('хэнку') + .1, Wt('варке') - .2, A1[0] - 400, A1[1] - 60, 1.05, -.015, { dz: .05 });
  camKey(Wt('варке') + .2, A1[0] + 520, A1[1] - 40, 1.08, .015); camKey(Wt('работает') + .3, A1[0] + 520, A1[1] + 120, 1.0, .01);

  // S2 · at home he finds a dedication to some "W.W." — and asks Walt (original dub)
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 1900, .9);
  pw('wwscene', Wt('листает') - .4, { x: A2[0] - 620, y: A2[1] - 180, w: 480, rot: -.05, order: 200, off: 2, caption: capt('ТЕТРАДЬ · ДОМА', Wt('дома')), capSize: 22 });
  const ww = card({ x: A2[0] - 620, y: A2[1] + 240, w: 480, h: 200, rot: .03, order: 205, color: '#f6f1e3', lined: false, tIn: Wt('посвящение') - .3, dur: .3, enter: 'slide', dx: -400, dy: 200,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -20, `400 italic 28px "DejaVu Serif"`, INK, 'center'); drawTyped(g, it.b, t, 0, 50, `800 64px "DejaVu Serif"`, RED, 'center'); } });
  ww.a = typed('посвящается…', Wt('посвящение') - .1, .05, { silent: true }); ww.b = typed('W.W.', Wt('какому-то') + .2, .12);
  dlgShot('d_ww', A2[0] + 180, A2[1] - 20, { w: 900, order: 210 });
  const gt = card({ x: A2[0] + 180, y: A2[1] + 450, w: 1, h: 1, shadow: 0, lit: false, order: 220, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  gt.s = stamp('«Я ПОПАЛСЯ»', DLGT.d_ww + 17.9, { size: 64, rot: -.06, shake: 14 });
  goTo(A2, Wt('работает') + .6, Wt('листает') + .1, A2[0] - 860, A2[1] - 460);
  hold(Wt('листает') + .1, Wt('посвящение') + .2, A2[0] - 600, A2[1] - 160, 1.08, -.015, { dz: .05 });
  camKey(Wt('какому-то') + .4, A2[0] - 600, A2[1] + 220, 1.1, .015);
  camKey(DLGT.d_ww + .1, A2[0] + 180, A2[1] - 20, 1.08, 0); camKey(DLGT.d_ww + 19, A2[0] + 180, A2[1] + 40, 1.2, .01);

  // S3 · everyone laughs, he closes the notebook: the answer in his hands, said out loud — too absurd: teacher, loser, cancer
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2000, 1);
  const an = card({ x: A3[0] - 120, y: A3[1] - 60, w: 880, h: 460, rot: -.015, order: 300, lined: false, tIn: Wt('смеются') - .3, dur: .3, enter: 'slide', dx: 0, dy: -400,
    text: (g, t, it) => { drawTyped(g, it.a, t, -390, -160, `700 30px ${MONO}`); drawTyped(g, it.b, t, -390, -100, `800 40px ${SANS}`, RED); drawChecks(g, t, it.cl, `700 28px ${MONO}`); drawTyped(g, it.c, t, 120, 150, `800 54px ${SANS}`, INK, 'center'); } });
  an.a = typed('ответ — у него в руках', Wt('ответ') - .1, .03); an.b = typed('И ОН ПРОИЗНЁС ЕГО ВСЛУХ', Wt('произносит') - .3, .03);
  an.cl = [checkLine('ЗЯТЬ-УЧИТЕЛЬ', Wt('зять-учитель') + .2, 'v', -370, -20), checkLine('НЕУДАЧНИК', Wt('неудачник') + .1, 'v', -370, 50), checkLine('БОЛЕН РАКОМ', Wt('раком') + .1, 'v', -370, 120)];
  an.c = typed('ХАЙЗЕНБЕРГ?', Wt('хайзенберг') - .3, .05);
  card({ x: A3[0] + 560, y: A3[1] - 370, w: 1, h: 1, shadow: 0, lit: false, order: 310, tIn: 0, scrawls: [scrawl('самая жуткая шутка', Wt('жутких') - .3, .5, { size: 46, rot: -.05 })] });
  goTo(A3, DLGT.d_ww + 19.3, Wt('смеются') + .1, A3[0] - 800, A3[1] - 460);
  hold(Wt('смеются') + .1, Wt('сериалов') + .3, A3[0] + 100, A3[1] - 160, .95, .01, { dz: .04 });
  camKey(Wt('ответ') + .2, A3[0] - 200, A3[1] - 140, 1.1, -.015); camKey(Wt('абсурдна') + .2, A3[0] - 200, A3[1], 1.05, -.01); camKey(Wt('хайзенберг') + .4, A3[0] + 60, A3[1] + 60, 1.1, .015);

  // S4 · he decides Gale was Heisenberg and almost relaxes; at dinner the drunk Walt, jealous of the credit (original dub)
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 1900, .9);
  const cl = pw('hanknotes', Wt('решает') - .4, { x: A4[0] - 620, y: A4[1] - 180, w: 480, rot: -.05, order: 400, off: 1, caption: capt('ГЕЙЛ = ХАЙЗЕНБЕРГ?', Wt('хайзенбергом') - .2), capSize: 20 });
  cl.stamps = [stamp('ДЕЛО ЗАКРЫТО', Wt('успокаивается') - .2, { x: 0, y: 30, size: 52, rot: -.07, shake: 12 })];
  pw('dinner', Wt('ужином') - .4, { x: A4[0] - 620, y: A4[1] + 240, w: 480, rot: .04, order: 405, off: 8, caption: capt('ПЬЯНЫЙ УОЛТЕР', Wt('пьяный')), capSize: 22 });
  dlgShot('d_genius', A4[0] + 180, A4[1] - 20, { w: 900, order: 410 });
  goTo(A4, Wt('хайзенберг') + .9, Wt('решает') + .1, A4[0] - 860, A4[1] - 460);
  hold(Wt('решает') + .1, Wt('успокаивается') + .4, A4[0] - 600, A4[1] - 160, 1.08, -.015, { dz: .05 });
  camKey(Wt('ужином') + .1, A4[0] - 600, A4[1] + 220, 1.08, .015);
  camKey(DLGT.d_genius + .1, A4[0] + 180, A4[1] - 20, 1.08, 0); camKey(DLGT.d_genius + 10, A4[0] + 180, A4[1] + 40, 1.2, .01);

  // S5 · Hank is back on the case: Walt put the detective back on his own trail — out of pure pride
  const A5 = [-300, 1900]; lamp(A5[0], A5[1] - 200, 2000, 1);
  const bk = pw('napkin', Wt('берётся') - .5, { x: A5[0] - 60, y: A5[1] - 60, w: 820, rot: -.01, order: 500, off: 2, caption: capt('СНОВА ЗА ДЕЛОМ', Wt('дело')), capSize: 26 });
  const pr = card({ x: A5[0] - 60, y: A5[1] + 430, w: 1, h: 1, shadow: 0, lit: false, order: 510, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  pr.s = stamp('ГОРДЫНЯ', Wt('гордыни') - .2, { size: 96, rot: -.08, shake: 18 });
  card({ x: A5[0] - 60, y: A5[1] - 420, w: 1, h: 1, shadow: 0, lit: false, order: 520, tIn: 0, scrawls: [scrawl('сам вернул сыщика на свой след', Wt('вернул') - .3, .7, { size: 48, rot: -.03 })] });
  goTo(A5, DLGT.d_genius + 10.2, Wt('снова', 2) + .1, A5[0] - 860, A5[1] - 460);
  camKey(Wt('снова', 2) + .2, A5[0] - 60, A5[1] - 60, 1.05, 0); camKey(Wt('вернул') + .3, A5[0] - 60, A5[1] - 160, .95, -.01); camKey(T_END, A5[0] - 60, A5[1] + 220, .95, .01);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
