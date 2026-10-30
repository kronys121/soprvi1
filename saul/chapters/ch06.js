// 06 · 1261  (insert: Chuck at the hearing — "С девяти лет... и он стал юристом")
CH_V0 = 411.0;
const [T_START, T_END] = chRange(6);
function buildScenes() {
  const D = [0, 0]; divider(D, 6, '1261', T_START);
  hold(T_START, Wt('сезоне') + .3, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · Kim brings Mesa Verde, Chuck's firm takes it; at night Jimmy doctors the papers: 1216 -> 1261
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, .95);
  pw('mesahear', Wt('меса') - .4, { x: A1[0] - 420, y: A1[1] - 200, w: 560, rot: -.03, order: 100, off: 2, caption: capt('БАНК «МЕСА ВЕРДЕ»', Wt('верде')), capSize: 22 });
  const tk = card({ x: A1[0] - 420, y: A1[1] + 230, w: 1, h: 1, shadow: 0, lit: false, order: 105, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  tk.s = stamp('ЗАБРАЛИ', Wt('забирает') + .1, { size: 70, rot: -.07, shake: 14 });
  pw('copyshop', Wt('ночью') - .4, { x: A1[0] + 420, y: A1[1] - 160, w: 620, rot: .025, order: 110, off: 3, caption: capt('КОПИРОВАЛЬНЫЙ ЦЕНТР · НОЧЬ', Wt('копировальный')), capSize: 22 });
  const ad = card({ x: A1[0] + 420, y: A1[1] + 260, w: 620, h: 260, rot: -.02, order: 120, color: '#f3efe2', lined: false, tIn: Wt('адрес') - .3, dur: .3, enter: 'slide', dx: 0, dy: 400,
    text: (g, t, it) => { g.fillStyle = INK; g.font = `700 26px ${MONO}`; g.textAlign = 'left'; g.fillText('ADDRESS:', -280, -70);
      drawTyped(g, it.a, t, -150, 30, `800 84px ${MONO}`, INK, 'center'); drawPen(g, it.p, t); drawTyped(g, it.b, t, 160, 30, `800 84px ${MONO}`, RED, 'center'); } });
  ad.a = typed('1216', Wt('1216') - .1, .08); ad.p = pen([[-260, 0], [-40, 6]], Wt('превращается') + .2, .3, { width: 8 }); ad.b = typed('1261', Wt('1261') - .1, .1);
  goTo(A1, Wt('сезоне') + .3, Wt('приводит') + .1, A1[0] - 760, A1[1] - 400);
  hold(Wt('приводит') + .1, Wt('себе') + .3, A1[0] - 420, A1[1] - 60, 1.05, -.015, { dz: .05 });
  camKey(Wt('ночью') + .2, A1[0] + 420, A1[1] - 120, 1.05, .015); camKey(Wt('адрес') + .2, A1[0] + 420, A1[1] + 200, 1.1, -.01); camKey(Wt('1261') + .8, A1[0] + 440, A1[1] + 230, 1.25, .01);

  // S2 · Chuck looks senile, the bank goes to Kim; not for money, not for himself — for her. Love or hurt, never greed.
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  pw('mesahear', Wt('выглядит') - .4, { x: A2[0] - 560, y: A2[1] - 120, w: 560, rot: -.04, order: 200, off: 8, caption: capt('«РАССЕЯННЫЙ СТАРИК»', Wt('рассеянным')), capSize: 22 });
  const mv = card({ x: A2[0] + 300, y: A2[1] - 60, w: 760, h: 460, rot: .02, order: 210, lined: false, tIn: Wt('обратите') - .3, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => { g.fillStyle = INK; g.font = `700 32px ${MONO}`; g.textAlign = 'left'; g.fillText('МОТИВ:', -330, -160); drawChecks(g, t, it.cl, `700 32px ${MONO}`); drawTyped(g, it.a, t, 0, 170, `800 46px ${SANS}`, RED, 'center'); } });
  mv.cl = [checkLine('ДЕНЬГИ', Wt('денег') + .1, 'x', -300, -80), checkLine('ДЛЯ СЕБЯ', Wt('себя') + .1, 'x', -300, -10), checkLine('ЛЮБОВЬ', Wt('любви') + .1, 'v', 40, -80), checkLine('ОБИДА', Wt('обиды') + .1, 'v', 40, -10),
    checkLine('ЖАДНОСТЬ', Wt('жадности') + .1, 'x', -300, 60)];
  mv.a = typed('РАДИ НЕЁ', Wt('неё') - .3, .05);
  goTo(A2, Wt('1261') + 1.6, Wt('выглядит') + .1, A2[0] - 860, A2[1] - 440);
  hold(Wt('выглядит') + .1, Wt('ким', 3) + .4, A2[0] - 560, A2[1] - 120, 1.08, -.015, { dz: .05 });
  camKey(Wt('обратите') + .2, A2[0] + 300, A2[1] - 60, 1.0, .01); camKey(Wt('худшие') + .2, A2[0] + 300, A2[1] - 20, 1.05, .01); camKey(Wt('жадности') + .5, A2[0] + 300, A2[1] + 40, 1.12, .015);

  // S3 · Chuck's trap: fake breakdown, Jimmy confesses, the recorder in the desk drawer
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 1900, .85);
  pw('chuckfall', Wt('понимает') - .6, { x: A3[0] - 600, y: A3[1] - 180, w: 500, rot: -.05, order: 300, off: 2, caption: capt('«СЛОМЛЕН»', Wt('сломала')), capSize: 22 });
  pw('confess', Wt('приходит') - .4, { x: A3[0] + 60, y: A3[1] - 60, w: 720, rot: .015, order: 310, off: 3, caption: capt('ПРИЗНАНИЕ', Wt('признаётся')), capSize: 26 });
  const rc = pw('recorder', Wt('ящике') - .4, { x: A3[0] + 560, y: A3[1] + 360, w: 440, rot: -.04, order: 320, off: 2 });
  rc.stamps = [stamp('REC', Wt('диктофон') + .1, { x: 0, y: 0, size: 90, rot: -.06, shake: 18 })];
  const ls = card({ x: A3[0] - 420, y: A3[1] + 380, w: 620, h: 200, rot: -.02, order: 330, lined: false, tIn: Wt('единственную') - .3, dur: .3, enter: 'slide', dx: -400, dy: 200,
    text: (g, t, it) => { drawTyped(g, it.a, t, -280, -30, `700 30px ${MONO}`); drawTyped(g, it.b, t, -280, 40, `800 40px ${SANS}`, RED); } });
  ls.a = typed('слабость брата:', Wt('слабость') - .2, .04); ls.b = typed('ЛЮБОВЬ К НЕМУ', Wt('любовь') - .1, .04);
  goTo(A3, Wt('жадности') + .9, Wt('понимает') - .4, A3[0] - 800, A3[1] - 460);
  hold(Wt('понимает') - .4, Wt('ловушку') + .3, A3[0] - 400, A3[1] - 160, 1.0, -.01, { dz: .05 });
  camKey(Wt('приходит') + .2, A3[0] + 60, A3[1] - 60, 1.05, .01); camKey(Wt('диктофон') + .2, A3[0] + 480, A3[1] + 300, 1.15, .015);
  camKey(Wt('единственную') + .2, A3[0] - 300, A3[1] + 360, 1.1, -.015); camKey(Wt('уничтожить') + .3, A3[0] - 100, A3[1] + 200, .9, 0);

  // S4 · the hearing: the battery in his pocket; Chuck breaks and screams it all (original dub)
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 1900, .9);
  pw('hearing', Wt('слушании') - .4, { x: A4[0] - 620, y: A4[1] - 220, w: 480, rot: -.05, order: 400, off: 2, caption: capt('СЛУШАНИЕ · ЛИЦЕНЗИЯ', Wt('лицензии')), capSize: 20 });
  const pk = pw('pocket', Wt('карман') - .4, { x: A4[0] - 620, y: A4[1] + 220, w: 480, rot: .04, order: 405, off: 3, caption: capt('БАТАРЕЙКА', Wt('батарейку')), capSize: 22 });
  dlgShot('d_battery', A4[0] + 180, A4[1] - 20, { w: 900, order: 410 });
  const bc = card({ x: A4[0] + 180, y: A4[1] + 450, w: 1, h: 1, shadow: 0, lit: false, order: 420, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  bc.s = stamp('СОРВАЛСЯ', DLGT.d_battery + 2, { size: 70, rot: -.06, shake: 16 });
  goTo(A4, Wt('уничтожить') + .6, Wt('слушании') + .1, A4[0] - 860, A4[1] - 460);
  hold(Wt('слушании') + .1, Wt('батарейку') - .2, A4[0] - 600, A4[1] - 200, 1.08, -.02, { dz: .05 });
  camKey(Wt('батарейку') + .1, A4[0] - 600, A4[1] + 200, 1.1, .015); camKey(Wt('голове') + .3, A4[0] - 560, A4[1] + 220, 1.2, .015);
  camKey(DLGT.d_battery + .1, A4[0] + 180, A4[1] - 20, 1.08, 0); camKey(DLGT.d_battery + 26, A4[0] + 180, A4[1] + 40, 1.22, .01);

  // S5 · Jimmy wins — a victory after which he has no brother
  const A5 = [-300, 1900]; lamp(A5[0], A5[1] - 200, 2000, 1);
  const vt = pw('chuckbreak', Wt('выигрывает') - .5, { x: A5[0] - 60, y: A5[1] - 40, w: 860, rot: -.01, order: 500, off: 4 });
  vt.stamps = [stamp('ПОБЕДА', Wt('выигрывает') + .1, { x: -180, y: -100, size: 80, rot: -.08, shake: 16 })];
  card({ x: A5[0] - 60, y: A5[1] + 430, w: 1, h: 1, shadow: 0, lit: false, order: 510, tIn: 0, scrawls: [scrawl('БОЛЬШЕ НЕТ БРАТА', Wt('нет') - .2, .6, { size: 64, rot: -.04 })] });
  goTo(A5, DLGT.d_battery + 26.2, Wt('выигрывает') - .3, A5[0] - 860, A5[1] - 460);
  camKey(Wt('выигрывает') + .2, A5[0] - 60, A5[1] - 40, 1.05, 0); camKey(Wt('победа') + .3, A5[0] - 60, A5[1] + 60, 1.12, -.01); camKey(T_END, A5[0] - 60, A5[1] + 200, .95, 0);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
