// 09 · ЦЫПЛЁНОК
CH_V0 = 565.9;
const [T_START, T_END] = chRange(9);
function buildScenes() {
  const D = [0, 0]; divider(D, 9, 'ЦЫПЛЁНОК', T_START);
  hold(T_START, Wt('вещах') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · in Gale's things: a Los Pollos Hermanos napkin; then Gus Fring's fingerprint in the dead man's flat — a respected businessman, police sponsor
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, 1);
  pw('napkin', Wt('вещах') - .1, { x: A1[0] - 420, y: A1[1] - 20, w: 680, rot: -.02, order: 100, off: 4, caption: capt('САЛФЕТКА «ЛОС ПОЛЛОС ЭРМАНОС»', Wt('эрманос') - .4), capSize: 22 });
  const fp = card({ x: A1[0] + 520, y: A1[1] - 200, w: 460, h: 240, rot: .03, order: 110, color: '#f3efe2', lined: false, tIn: Wt('отпечаток') - .3, dur: .3, enter: 'slide', dx: 400, dy: -200,
    text: (g, t, it) => { g.fillStyle = 'rgba(40,40,40,.25)'; for (let r = 20; r < 90; r += 9) { g.beginPath(); g.ellipse(-130, 0, r * .7, r, 0, 0, Math.PI * 2); g.lineWidth = 3; g.strokeStyle = 'rgba(40,40,40,.35)'; g.stroke(); }
      drawTyped(g, it.a, t, 60, -30, `700 24px ${MONO}`, INK, 'center'); drawTyped(g, it.b, t, 60, 30, `800 34px ${SANS}`, RED, 'center'); } });
  fp.a = typed('ОТПЕЧАТОК:', Wt('отпечаток') - .1, .05); fp.b = typed('ГУС ФРИНГ', Wt('гуса') - .1, .06);
  pw('gusdea', Wt('уважаемый') - .4, { x: A1[0] + 520, y: A1[1] + 240, w: 460, rot: -.04, order: 120, off: 2, caption: capt('БИЗНЕСМЕН · СПОНСОР ПОЛИЦИИ', Wt('спонсор') + .2), capSize: 18 });
  goTo(A1, Wt('вещах') + .2, Wt('гейла') + .1, A1[0] - 760, A1[1] - 400);
  hold(Wt('гейла') + .1, Wt('эрманос') + .3, A1[0] - 420, A1[1] - 20, 1.05, -.015, { dz: .05 });
  camKey(Wt('отпечаток') + .2, A1[0] + 500, A1[1] - 200, 1.1, .015); camKey(Wt('уважаемый') + .2, A1[0] + 500, A1[1] + 220, 1.08, -.01); camKey(Wt('все') + .4, A1[0] + 500, A1[1] + 240, 1.15, -.01);

  // S2 · and Hank, in a wheelchair, claims this man is the main meth supplier of the whole Southwest
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  pw('hankgus', Wt('передвигается') - .5, { x: A2[0] - 400, y: A2[1] - 20, w: 720, rot: -.02, order: 200, off: 2, caption: capt('В ИНВАЛИДНОМ КРЕСЛЕ', Wt('кресле')), capSize: 24 });
  const cl = card({ x: A2[0] + 580, y: A2[1] - 40, w: 480, h: 360, rot: .03, order: 210, lined: false, tIn: Wt('заявляет') - .3, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -110, `700 28px ${MONO}`, INK, 'center'); drawTyped(g, it.b, t, 0, -30, `800 40px ${SANS}`, RED, 'center'); drawTyped(g, it.c, t, 0, 30, `800 40px ${SANS}`, RED, 'center'); drawTyped(g, it.d, t, 0, 100, `700 28px ${MONO}`, INK, 'center'); } });
  cl.a = typed('ГУС ФРИНГ =', Wt('этот') - .1, .04); cl.b = typed('ГЛАВНЫЙ', Wt('главный') - .1, .06); cl.c = typed('ПОСТАВЩИК', Wt('поставщик') - .1, .05); cl.d = typed('всего юго-запада', Wt('юго-западе') - .3, .03);
  goTo(A2, Wt('все') + .6, Wt('=хэнк', 2) - .1, A2[0] - 860, A2[1] - 440);
  hold(Wt('=хэнк', 2) - .1, Wt('кресле') + .3, A2[0] - 400, A2[1] - 20, 1.05, -.015, { dz: .05 });
  camKey(Wt('заявляет') + .2, A2[0] + 540, A2[1] - 40, 1.05, .015); camKey(Wt('юго-западе') + .3, A2[0] + 560, A2[1], 1.15, .015);

  // S3 · they laugh at him; colleagues nod politely: after the shooting he sees enemies where there are none
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2000, 1);
  const hb = pw('hankboard', Wt('смеются') - .5, { x: A3[0] - 300, y: A3[1] - 40, w: 820, rot: -.015, order: 300, off: 3, caption: capt('КОЛЛЕГИ ВЕЖЛИВО КИВАЮТ', Wt('кивают')), capSize: 24 });
  hb.stamps = [stamp('ПАРАНОЙЯ?', Wt('ранения') - .1, { x: 0, y: 70, size: 76, rot: -.08, shake: 16 })];
  card({ x: A3[0] + 560, y: A3[1] + 380, w: 1, h: 1, shadow: 0, lit: false, order: 310, tIn: 0, scrawls: [scrawl('ищет врагов там, где их нет', Wt('врагов') - .3, .6, { size: 48, rot: -.04 })] });
  goTo(A3, Wt('юго-западе') + .7, Wt('над') + .1, A3[0] - 800, A3[1] - 460);
  camKey(Wt('над') + .2, A3[0] - 300, A3[1] - 40, 1.05, -.01); camKey(Wt('ранения') + .3, A3[0] - 300, A3[1] + 20, 1.15, .01); camKey(Wt('нет') + .3, A3[0] + 200, A3[1] + 200, .9, .01);

  // S4 · he doesn't give up: asks Walt to drive him around (he can't drive); together they put a tracker on Gus's car
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  const ct = pw('cartracker', Wt('просит') - .4, { x: A4[0] - 360, y: A4[1] - 40, w: 760, rot: -.02, order: 400, off: 2, caption: capt('УОЛТЕР ЗА РУЛЁМ', Wt('водить')), capSize: 24 });
  const tr = card({ x: A4[0] + 580, y: A4[1] - 40, w: 440, h: 300, rot: .03, order: 410, lined: false, tIn: Wt('ставят') - .4, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => { g.fillStyle = '#222'; g.fillRect(-110, -110, 220, 120); g.fillStyle = '#c33'; g.beginPath(); g.arc(70, -80, 10 + 4 * Math.sin(t * 8), 0, Math.PI * 2); g.fill();
      drawTyped(g, it.a, t, 0, 70, `800 40px ${SANS}`, INK, 'center'); drawTyped(g, it.b, t, 0, 115, `700 24px ${MONO}`, '#666', 'center'); } });
  tr.a = typed('GPS-МАЯЧОК', Wt('маячок') - .2, .05); tr.b = typed('на машину Гуса', Wt('маячок') + .3, .03);
  goTo(A4, Wt('нет') + .6, Wt('сдаётся') + .1, A4[0] - 860, A4[1] - 460);
  hold(Wt('сдаётся') + .1, Wt('городу') + .3, A4[0] - 360, A4[1] - 40, 1.05, -.015, { dz: .05 });
  camKey(Wt('ставят') + .1, A4[0] + 540, A4[1] - 40, 1.05, .015); camKey(Wt('маячок') + .6, A4[0] + 540, A4[1] - 20, 1.15, .015);

  // S5 · the irony: Hank is absolutely right, his instincts flawless — he just can't see who's at the wheel next to him
  const A5 = [-300, 1900]; lamp(A5[0], A5[1] - 200, 2000, 1);
  const rt = card({ x: A5[0] - 100, y: A5[1] - 330, w: 880, h: 170, rot: -.01, order: 500, lined: false, tIn: Wt('ирония') - .3, dur: .3, enter: 'slide', dx: 0, dy: -300,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -15, `800 40px ${SANS}`, INK, 'center'); drawTyped(g, it.b, t, 0, 45, `700 26px ${MONO}`, '#666', 'center'); } });
  rt.a = typed('ХЭНК АБСОЛЮТНО ПРАВ', Wt('абсолютно') - .3, .035); rt.b = typed('чутьё безупречно · видит то, чего не видит отдел', Wt('чутьё') - .1, .025);
  const gf = pw('gusface', Wt('рулём') - .6, { x: A5[0] - 500, y: A5[1] + 140, w: 480, rot: -.04, order: 510, off: 3, caption: capt('НЕ ГУС ФРИНГ', Wt('=фринг') - .3), capSize: 22 });
  const ww = pw('cartracker', Wt('рулём') - .2, { x: A5[0] + 340, y: A5[1] + 140, w: 560, rot: .03, order: 520, off: 9, caption: capt('ВЕЗЁТ ХЭНКА', Wt('везёт') - .2), capSize: 24 });
  ww.stamps = [stamp('САМЫЙ ОПАСНЫЙ', Wt('опасный', 2) - .1, { x: 0, y: 60, size: 56, rot: -.07, shake: 16 })];
  goTo(A5, Wt('маячок') + 1.0, Wt('ирония') + .1, A5[0] - 860, A5[1] - 560);
  hold(Wt('ирония') + .1, Wt('отделе') + .3, A5[0] - 100, A5[1] - 260, 1.02, -.01, { dz: .04 });
  camKey(Wt('рулём') + .2, A5[0] - 80, A5[1] + 100, .82, 0); camKey(Wt('=фринг') + .1, A5[0] - 480, A5[1] + 140, 1.08, -.015);
  camKey(Wt('опасный', 2) + .2, A5[0] + 320, A5[1] + 140, 1.08, .015); camKey(T_END, A5[0] + 330, A5[1] + 160, 1.2, .02);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
