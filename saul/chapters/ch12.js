// 12 · МАШИНА ВРЕМЕНИ  (inserts: Walter — "ты говоришь о раскаянии"; Chuck — "вернуться и сменить тропу")
CH_V0 = 842.7;
const [T_START, T_END] = chRange(12);
function buildScenes() {
  const D = [0, 0]; divider(D, 12, 'МАШИНА ВРЕМЕНИ', T_START);
  hold(T_START, Wt('серии') + .3, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · the finale: three flashbacks, one question — "if you had a time machine, what would you change?"
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, 1);
  const q = card({ x: A1[0] - 120, y: A1[1] - 40, w: 900, h: 460, rot: -.015, order: 100, color: '#1f2a44', lined: false, tIn: Wt('три') - .3, dur: .3, enter: 'slide', dx: 0, dy: -400,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -150, `700 32px ${MONO}`, '#e8dccb', 'center'); drawTyped(g, it.b, t, 0, -60, `800 40px ${SANS}`, '#f2d27a', 'center');
      drawTyped(g, it.c, t, 0, 30, `400 italic 38px "DejaVu Serif"`, '#ffffff', 'center'); drawTyped(g, it.d, t, 0, 100, `400 italic 38px "DejaVu Serif"`, '#ffffff', 'center'); } });
  q.a = typed('ФИНАЛ · 3 ФЛЕШБЭКА', Wt('три') - .1, .04); q.b = typed('ОДИН ВОПРОС:', Wt('вопрос') - .3, .05);
  q.c = typed('«Будь у тебя машина времени,', Wt('машина') - .4, .03); q.d = typed('что бы ты изменил?»', Wt('изменил') - .5, .035);
  goTo(A1, Wt('серии') + .3, Wt('три') + .1, A1[0] - 760, A1[1] - 460);
  hold(Wt('три') + .1, Wt('вопрос') + .3, A1[0] - 120, A1[1] - 80, 1.02, -.01, { dz: .05 });
  camKey(Wt('машина') + .2, A1[0] - 120, A1[1] - 20, 1.1, 0); camKey(Wt('изменил') + .4, A1[0] - 120, A1[1] + 10, 1.18, .01);

  // S2 · Mike: the day he first took a bribe; Walter, contemptuous — it's about regret (original dub)
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2100, 1.05);
  const mk = pw('mikewell', Wt('майк') - .4, { x: A2[0] - 620, y: A2[1] - 200, w: 480, rot: -.05, order: 200, off: 3, caption: capt('МАЙК: ПЕРВАЯ ВЗЯТКА', Wt('взятку') - .2), capSize: 20 });
  pw('walterbunker', Wt('уолтер') - .4, { x: A2[0] - 620, y: A2[1] + 220, w: 480, rot: .04, order: 205, off: 4, caption: capt('УОЛТЕР · С ПРЕЗРЕНИЕМ', Wt('презрением')), capSize: 20 });
  dlgShot('d_regret', A2[0] + 180, A2[1] - 20, { w: 900, order: 210 });
  goTo(A2, Wt('изменил') + .9, Wt('майк') + .1, A2[0] - 860, A2[1] - 460);
  hold(Wt('майк') + .1, Wt('взятку') + .5, A2[0] - 600, A2[1] - 200, 1.08, -.015, { dz: .05 });
  camKey(Wt('уолтер') + .2, A2[0] - 600, A2[1] + 200, 1.08, .015);
  camKey(DLGT.d_regret + .1, A2[0] + 180, A2[1] - 20, 1.08, 0); camKey(DLGT.d_regret + 18.7, A2[0] + 180, A2[1] + 40, 1.2, .01);

  // S3 · Jimmy talks about money, some petty con — even here he can't tell the truth
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2000, 1);
  const an = card({ x: A3[0] - 160, y: A3[1] - 60, w: 900, h: 460, rot: -.015, order: 300, lined: true, tIn: Wt('джимми', 2) - .3, dur: .3, enter: 'slide', dx: 0, dy: 500,
    text: (g, t, it) => { g.fillStyle = INK; g.font = `700 30px ${MONO}`; g.textAlign = 'left'; g.fillText('ОТВЕТЫ:', -400, -170);
      drawTyped(g, it.a, t, -380, -100, `700 30px ${MONO}`); drawTyped(g, it.b, t, -380, -30, `700 30px ${MONO}`); drawTyped(g, it.c, t, -380, 40, `700 30px ${MONO}`); drawPen(g, it.p, t);
      drawTyped(g, it.d, t, -380, 150, `800 42px ${SANS}`, RED); } });
  an.a = typed('МАЙК — взятка (правда)', Wt('джимми', 2) - .1, .025, { silent: true }); an.b = typed('УОЛТЕР — «о сожалениях»', Wt('джимми', 2) + .4, .025, { silent: true });
  an.c = typed('ДЖИММИ — деньги, мелкая афера', Wt('деньги') - .2, .03); an.p = pen([[-390, 40], [180, 34]], Wt('аферу') + .2, .3, { width: 7 });
  an.d = typed('ДАЖЕ ТУТ — НЕ ПРАВДА', Wt('правду') - .6, .035);
  goTo(A3, DLGT.d_regret + 18.9, Wt('сам') - .1, A3[0] - 860, A3[1] - 460);
  camKey(Wt('джимми', 2) + .3, A3[0] - 160, A3[1] - 60, 1.05, -.01); camKey(Wt('правду') + .3, A3[0] - 160, A3[1] + 40, 1.15, .01);

  // S4 · the third scene, with Chuck, before everything: groceries, Wells' "The Time Machine" (original dub)
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 1800, .85);
  pw('chucklast', Wt('третья') - .4, { x: A4[0] - 620, y: A4[1] - 200, w: 480, rot: -.05, order: 400, off: 2, caption: capt('ЕЩЁ ДО ВСЕГО', Wt('всего')), capSize: 22 });
  pw('wells', Wt('книгу') - .4, { x: A4[0] - 620, y: A4[1] + 220, w: 480, rot: .04, order: 405, off: 1, caption: capt('Г. УЭЛЛС · «МАШИНА ВРЕМЕНИ»', Wt('уэллса')), capSize: 18 });
  dlgShot('d_chucktrail', A4[0] + 180, A4[1] - 20, { w: 900, order: 410 });
  goTo(A4, Wt('правду') + .9, Wt('третья') + .1, A4[0] - 860, A4[1] - 460);
  hold(Wt('третья') + .1, Wt('продукты') + .3, A4[0] - 600, A4[1] - 200, 1.08, -.015, { dz: .05 });
  camKey(Wt('книгу') + .1, A4[0] - 600, A4[1] + 200, 1.08, .015);
  camKey(DLGT.d_chucktrail + .1, A4[0] + 180, A4[1] - 20, 1.08, 0); camKey(DLGT.d_chucktrail + 10.6, A4[0] + 180, A4[1] + 40, 1.2, .01);

  // S5 · Jimmy jokes it off and leaves; Chuck stays alone at the window
  const A5 = [-300, 1900]; lamp(A5[0], A5[1] - 200, 1900, .85);
  const ch = pw('chucklast', Wt('отшучивается') - .5, { x: A5[0] - 60, y: A5[1] - 40, w: 860, rot: -.01, order: 500, off: 9 });
  card({ x: A5[0] - 60, y: A5[1] + 430, w: 1, h: 1, shadow: 0, lit: false, order: 510, tIn: 0, scrawls: [scrawl('Чак остаётся один', Wt('остаётся') - .2, .6, { size: 56, rot: -.04 })] });
  goTo(A5, DLGT.d_chucktrail + 10.8, Wt('отшучивается') - .1, A5[0] - 860, A5[1] - 460);
  camKey(Wt('отшучивается') + .2, A5[0] - 60, A5[1] - 40, 1.05, 0); camKey(T_END, A5[0] - 60, A5[1] + 120, 1.0, -.01);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
