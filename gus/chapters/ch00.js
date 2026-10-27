// 00 · cold open + intro
CH_V0 = 0;
const [T_START, T_END] = chRange(0);
FADE_IN = .6;
function buildScenes() {
  // S0 · closed case folder: three "never" lines checked off, then it opens
  const A0 = [0, 0]; lamp(A0[0] - 100, A0[1] - 200, 1800, 1);
  const tOpen = Wt('он') - .1;
  const fold = item({ x: A0[0], y: A0[1], w: 1500, h: 1000, order: 100, tIn: 0, shadow: 1,
    draw: (g, t, it) => {
      const p = eio(prog(t, tOpen, tOpen + .6)), c = Math.cos(p * Math.PI);
      g.save(); g.translate(-750, 0); g.scale(c, 1 + .06 * Math.sin(p * Math.PI)); g.translate(750, 0);
      if (c > 0) {
        g.drawImage(paper(1500, 1000, MANILA, false, 41), -750, -500);
        g.fillStyle = PAPER; g.fillRect(-460, -150, 920, 470); g.strokeStyle = 'rgba(0,0,0,.3)'; g.lineWidth = 2; g.strokeRect(-460, -150, 920, 470);
        g.fillStyle = INK; g.font = `700 50px ${MONO}`; g.textAlign = 'center'; g.fillText('ДЕЛО № 1989', 0, -80);
        drawTyped(g, it.q1, t, 0, -10, `800 46px ${SANS}`, INK, 'center');
        drawChecks(g, t, it.cl, `700 40px ${MONO}`);
        drawStamp(g, it.s, t);
      } else g.drawImage(paper(1500, 1000, '#bf9c60', false, 42), -750, -500);
      g.fillStyle = `rgba(0,0,0,${Math.sin(p * Math.PI) * .45})`; g.fillRect(-750, -500, 1500, 1000); g.restore();
    } });
  fold.q1 = typed('ГУСТАВО ФРИНГ', Wt('гус'), .05);
  fold.cl = [checkLine('НЕ ПОВЫШАЕТ ГОЛОС', Wt('голос') + .05, 'v', -300, 80), checkLine('НЕ РУГАЕТСЯ', Wt('ругается') + .05, 'v', -300, 160), checkLine('НЕ УГРОЖАЕТ', Wt('пистолетом') + .05, 'v', -300, 240)];
  fold.s = stamp('СЕКРЕТНО', .9, { x: 0, y: -330, size: 96, rot: -.08, shake: 12 });
  sfx('flip', tOpen, { big: true }); fast(tOpen, tOpen + .6, 5);
  camKey(0, A0[0], A0[1] + 40, .78, -.01); camKey(Wt('голос') + .2, A0[0], A0[1] + 60, .9, 0); camKey(Wt('пистолетом') + .6, A0[0], A0[1] + 100, .98, .01);

  // S1 · the clean front: four prints inside the opened folder
  lamp(A0[0], A0[1] + 40, 1600, .8);
  const acc = [['gpollos', 'ресторанов', 'ЛОС ПОЛЛОС', 'курицы', -520, -200, -.06, 1.0], ['ginterview', 'жертвует', 'ДРУГ DEA', 'наркотиками', 520, -210, .05, 2],
    ['gpollos2', 'лично', 'ЛИЧНО', 'столики', -520, 250, .04, 3.0], ['glab', 'крупнейший', 'КРУПНЕЙШИЙ', 'метамфетамина', 520, 240, -.05, 4.0]];
  acc.forEach(([k, w, st, ws, dx, dy, r, off]) => {
    const p = pw(k, Wt(w) - .1, { x: A0[0] + dx, y: A0[1] + dy, w: 600, rot: r, order: 200, off });
    p.stamps = [stamp(st, Wt(ws) + .1, { x: 0, y: 40, size: st.length > 9 ? 50 : 62, rot: -r * 1.5, shake: 10 })];
  });
  camKey(Wt('ресторанов') + .1, A0[0] - 330, A0[1] - 110, 1.0, -.02); camKey(Wt('жертвует') + .2, A0[0] + 330, A0[1] - 120, 1.0, .02);
  camKey(Wt('лично') + .2, A0[0] - 330, A0[1] + 160, 1.0, -.015); camKey(Wt('крупнейший') + .2, A0[0] + 330, A0[1] + 160, 1.0, .015);
  camKey(Wt('америки') + .4, A0[0], A0[1] + 30, .8, 0);

  // S2 · Walter became a monster over five seasons; Gus arrived finished
  const A2 = [2700, -100]; lamp(A2[0], A2[1] - 200, 1900, 1);
  const wt = photo({ x: A2[0] - 430, y: A2[1], w: 620, rot: -.04, order: 300, tIn: Wt('уолтер') - .1, dur: .3, enter: 'drop', dx: 0, dy: -240,
    src: t => t < Wt('чудовище') - .1 ? { still: 'waltface' } : { still: 'walthat' }, caption: capt('УОЛТЕР УАЙТ', Wt('уолтер') + .1), capSize: 28 });
  sfx('flip', Wt('чудовище') - .1);
  pw('gus', Wt('гус', 2) - .1, { x: A2[0] + 430, y: A2[1], w: 620, rot: .04, order: 301, caption: capt('ГУС ФРИНГ', Wt('гус', 2) + .1), capSize: 28 });
  card({ x: A2[0] - 430, y: A2[1] + 330, w: 1, h: 1, shadow: 0, lit: false, order: 310, tIn: 0, scrawls: [scrawl('5 СЕЗОНОВ', Wt('пять') - .05, .45, { size: 54, rot: -.05 })] });
  card({ x: A2[0] + 430, y: A2[1] + 330, w: 1, h: 1, shadow: 0, lit: false, order: 311, tIn: 0, scrawls: [scrawl('УЖЕ ГОТОВ', Wt('готовым') - .2, .45, { size: 54, rot: .04 })] });
  goTo(A2, Wt('америки') + .4, Wt('уолтер') + .2, A2[0] - 700, A2[1] - 330);
  hold(Wt('уолтер') + .2, Wt('готовым') + .6, A2[0], A2[1] + 60, .92, .01, { dz: .1 });

  // S3 · we open the dossier: two questions
  const A5 = [2700, 1800]; lamp(A5[0], A5[1] - 200, 2000, 1);
  mugBoard(A5, { still: 'gus' }, typed('ФРИНГ, ГУСТАВО', Wt('досье'), .045), typed('АЛЬБУКЕРКЕ · ЧИЛИ', Wt('фринга') + .3, .03, { silent: true }), { order: 600 });
  typedCard({ x: A5[0] + 800, y: A5[1] + 240, w: 640, h: 260, rot: .04, order: 620, tIn: Wt('почему') - .2, dur: .3, enter: 'slide', dx: 500, dy: 100 },
    [[typed('1. почему боялись', Wt('почему'), .035), -290, -50, `700 34px ${MONO}`], [typed('   больше картеля?', Wt('картель') - .4, .03, { silent: true }), -290, 0, `400 30px ${MONO}`],
     [typed('2. почему уважали', Wt('почему', 2), .035), -290, 70, `700 34px ${MONO}`], [typed('   больше Уолтера?', Wt('уолтера') - .4, .03, { silent: true }), -290, 120, `400 30px ${MONO}`, RED]]);
  goTo(A5, Wt('готовым') + .6, Wt('сегодня') + .2, A5[0] - 450, A5[1] - 360);
  hold(Wt('сегодня') + .2, Wt('ответ') + .4, A5[0], A5[1] - 40, 1.05, .01, { dz: .1 });
  camKey(Wt('боялись') + .2, A5[0] + 420, A5[1] + 140, .92, .01); camKey(Wt('уолтера') + .5, A5[0] + 520, A5[1] + 200, 1.0, .015);

  // S4 · spoilers tape
  const st6 = card({ x: A5[0] + 300, y: A5[1] - 300, w: 1, h: 1, shadow: 0, order: 640, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  st6.s = stamp('ВНИМАНИЕ', Wt('дальше') + .05, { size: 110, rot: -.1, shake: 12 });
  TAPES.push({ t0: Wt('спойлеры') - .3, dur: .5, ang: -.2, y: -60, dir: 1, out: T_END - .45 });
  TAPES.push({ t0: Wt('четвёртому') - .3, dur: .45, ang: .16, y: 170, dir: -1, out: T_END - .4 });
  TAPES.forEach(tp => sfx('tape', tp.t0, { dur: tp.dur }));
  camKey(Wt('дальше') + .3, A5[0] + 200, A5[1] - 60, 1.02, -.02); camKey(T_END, A5[0] + 260, A5[1] - 20, 1.12, -.04);

  ensureFG([[-1000, 700, 'ashtray', 1.1, 1.9], [3600, 600, 'smoke', 1.6, 1.5, 0, .8], [6200, 900, 'cup', 1.0, 1.9], [1400, 2600, 'pen', 1.2, 1.85, .4]]);
  CAMK.sort((a, b) => a.t - b.t);
}
