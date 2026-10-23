// 10 · ВЕРДИКТ
CH_V0 = 462.5;
const [T_START, T_END] = chRange(10);
function buildScenes() {
  const D = [0, 0]; divider(D, 10, 'ВЕРДИКТ', T_START);
  hold(T_START, Wt('так') - .05, D[0], D[1] + 10, .95, .01, { dz: .08 });

  // the original case folder, four reasons around it (A)
  const A = [2600, 600]; lamp(A[0], A[1] - 300, 2800, 1);
  const fold = item({ x: A[0], y: A[1], w: 1200, h: 780, rot: -.01, order: 100, tIn: T_START,
    draw: (g, t, it) => { g.drawImage(paper(1200, 780, MANILA, false, 41), -600, -390); g.fillStyle = '#c2a064'; g.fillRect(-600, -450, 380, 70);
      g.fillStyle = PAPER; g.fillRect(-460, -80, 920, 250); g.strokeStyle = 'rgba(0,0,0,.3)'; g.lineWidth = 2; g.strokeRect(-460, -80, 920, 250);
      g.fillStyle = INK; g.font = `700 56px ${MONO}`; g.textAlign = 'center'; g.fillText('ДЕЛО № 1999', 0, -150);
      drawTyped(g, it.q1, t, 0, 20, `800 54px ${SANS}`, INK, 'center'); drawTyped(g, it.q2, t, 0, 100, `800 54px ${SANS}`, INK, 'center');
      drawStamp(g, { text: 'СЕКРЕТНО', t: 0, size: 70, rot: -.08, x: 360, y: -280 }, 99); drawStamp(g, it.st, t); } });
  fold.q1 = typed('ПОЧЕМУ МЫ ЖАЛЕЕМ', Wt('почему') - .1, .03); fold.q2 = typed('ТОНИ СОПРАНО?', Wt('тони') - .1, .035);
  fold.st = stamp('ДЕЛО ОТКРЫТО', Wt('деле') - .05, { x: 0, y: 290, size: 76, rot: -.06, shake: 20 });
  const R = [['1', 'cry', 'БОЛЬ — РАНЬШЕ', 'ПРЕСТУПЛЕНИЙ', 1, -1180, -360, 'показали', 'преступления'], ['2', 'ralphface', 'РЯДОМ ВСЕГДА', 'КТО-ТО ХУЖЕ', 2, 1180, -360, 'рядом', 'хуже'],
    ['3', 'melfi', 'ИСПОВЕДЬ', 'ВМЕСТЕ С МЕЛФИ', 3, -1180, 560, 'слушали', 'мелфи'], ['4', 'ducks', 'ХОТЕЛИ, ЧТОБЫ', 'ОН БЫЛ ЛУЧШЕ', 4, 1180, 560, 'хотелось', 'лучше']];
  R.forEach(([n, still, l1, l2, k, dx, dy, w1, w2]) => {
    const t = Wt('потому', k), x = A[0] + dx, y = A[1] + dy;
    const src = still === 'cry' ? vid('cry', t - .1, 0) : { still };
    photo({ x: x - 50, y: y - 60, w: 520, rot: (dx < 0 ? -.05 : .05), order: 200 + k, tIn: t + .05, dur: .28, enter: 'drop', dx: dx * .2, dy: -220, src });
    typedCard({ x: x + (dx < 0 ? 120 : -120), y: y + 250, w: 640, h: 190, rot: (dx < 0 ? .03 : -.03), order: 210 + k, lined: false, tIn: Wt(w1) - .2, dur: .28, enter: 'slide', dx: 0, dy: 300,
      extra: (g, tt) => { const p = prog(tt, t, t + .25); if (p <= 0) return; g.save(); g.translate(-270, -50); g.scale(back(p, 2), back(p, 2)); g.fillStyle = RED; g.beginPath(); g.arc(0, 0, 44, 0, 7); g.fill(); g.fillStyle = '#f2ede4'; g.font = `800 52px ${SANS}`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(n, 0, 3); g.restore(); } },
      [[typed(l1, Wt(w1), .04), -190, -20, `800 40px ${SANS}`], [typed(l2, Wt(w2) - .3, .04), -190, 40, `800 40px ${SANS}`]]);
    thread([[x + (dx < 0 ? 250 : -250), y - 200], [A[0] + (dx < 0 ? -560 : 560), A[1] + (dy < 0 ? -370 : 370)]], t + .2, t + .6, { silent: true, width: 5 });
    pin(x + (dx < 0 ? 250 : -250), y - 200, t + .2, { silent: true }); pin(A[0] + (dx < 0 ? -560 : 560), A[1] + (dy < 0 ? -370 : 370), t + .6, { silent: true });
  });
  sfx('pen', Wt('потому', 1), { dur: .2 });
  link(A[0] - 600, A[1] - 450, Wt('так') - .05, Wt('почему') + .15);
  travel(Wt('так') - .05, Wt('почему') + .15);
  hold(Wt('почему') + .15, Wt('сопрано') + .6, A[0], A[1] + 20, 1.15, .01, { dz: .06 });
  hold(Wt('потому', 1) + .2, Wt('преступления') + .7, A[0] - 1150, A[1] - 230, 1.15, -.02, { dz: .05 });
  hold(Wt('потому', 2) + .2, Wt('хуже') + .5, A[0] + 1150, A[1] - 230, 1.15, .02, { dz: .05 });
  hold(Wt('потому', 3) + .2, Wt('мелфи') + .6, A[0] - 1150, A[1] + 690, 1.15, -.015, { dz: .05 });
  hold(Wt('потому', 4) + .2, Wt('оказался') + .2, A[0] + 1150, A[1] + 690, 1.15, .015, { dz: .05 });
  camKey(Wt('лучше') + .5, A[0], A[1] + 180, .5, 0); camKey(Wt('деле') + .4, A[0], A[1] + 200, .58, 0); camKey(T_END, A[0], A[1] + 200, .6, -.005);
  ensureFG([[-200, 1500, 'ashtray', 1.1, 1.9], [4800, -300, 'smoke', 1.6, 1.5, 0, .8], [600, -500, 'pen', 1.2, 1.85, .4], [4600, 1800, 'cup', 1.0, 1.9]]);
  CAMK.sort((a, b) => a.t - b.t);
}
