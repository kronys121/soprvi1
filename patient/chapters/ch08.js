// 08 · МЕЛФИ
CH_V0 = 387.4;
const [T_START, T_END] = chRange(8);
function buildScenes() {
  const D = [0, 0]; divider(D, 8, 'МЕЛФИ', T_START);
  hold(T_START, Wt('доктор') + .3, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · our representative; week after week (A1)
  const A1 = [1900, -200]; lamp(A1[0], A1[1] - 200, 1800, 1);
  photo({ x: A1[0] - 380, y: A1[1], w: 640, rot: -.03, order: 100, tIn: Wt('мелфи') - .15, dur: .3, enter: 'drop', dx: -150, dy: -240, src: { still: 'melfi' }, caption: typed('Д-Р ДЖЕННИФЕР МЕЛФИ', Wt('мелфи') + .1, .03, { silent: true }), capSize: 24 });
  tag({ x: A1[0] - 380, y: A1[1] - 330, w: 560, rot: -.04, label: 'НАШ ПРЕДСТАВИТЕЛЬ', tIn: Wt('представитель') + .1, order: 110, size: 38 });
  const tW0 = Wt('неделя') - .05, tW1 = Wt('исповедь');
  card({ x: A1[0] + 470, y: A1[1] - 20, w: 460, h: 520, rot: .04, order: 120, color: '#f2efe8', lined: false, tIn: tW0 - .2, dur: .3, enter: 'slide', dx: 500, dy: 0,
    text: (g, t) => {
      g.fillStyle = '#8e1610'; g.fillRect(-230, -260, 460, 110); g.fillStyle = '#f2efe8'; g.font = `800 40px ${SANS}`; g.textAlign = 'center'; g.fillText('НЕДЕЛЯ', 0, -190);
      const n = Math.max(1, Math.round(1 + 51 * Math.pow(prog(t, tW0, tW1 + .3), .8)));
      g.fillStyle = INK; g.font = `800 200px ${SANS}`; g.fillText(String(n), 0, 90); g.font = `400 28px ${MONO}`; g.fillText('ЧЕТВЕРГ · 15:00', 0, 190);
      const fp = ((t - tW0) * 12) % 1; if (t > tW0 && t < tW1 + .3) { g.save(); g.globalAlpha = 1 - fp; g.translate(0, -140); g.scale(1, Math.max(.05, 1 - fp)); g.fillStyle = '#e6e1d6'; g.fillRect(-230, 0, 460, 390); g.restore(); }
    } });
  for (let k = 0; k < 18; k++) sfx('roll', tW0 + k / 12 * 1.2);
  link(A1[0] - 650, A1[1] - 280, Wt('доктор') + .3, Wt('мелфи') + .3);
  travel(Wt('доктор') + .3, Wt('мелфи') + .3);
  hold(Wt('мелфи') + .3, Wt('сериала') + .3, A1[0] - 360, A1[1] - 60, 1.2, -.015, { dz: .05 });
  hold(Wt('как') + .2, Wt('тони') + .5, A1[0] + 330, A1[1] + 10, 1.12, .015, { dz: .08 });

  // S2 · drawn to him, afraid, wants to help (A2)
  const A2 = [4300, 0]; lamp(A2[0], A2[1] - 200, 1900, 1);
  photo({ x: A2[0], y: A2[1], w: 800, rot: .015, order: 200, tIn: Wt('ее') - .2, dur: .3, enter: 'drop', dx: 0, dy: -260, src: vid('melfilisten', Wt('ее') - .3, 0) });
  [['ТЯНЕТ', 'тянет', -700, -240, -.06], ['БОИТСЯ', 'боится', 700, -220, .06], ['ХОЧЕТ ПОМОЧЬ', 'хочет', -20, 430, -.03]].forEach(([lab, w, dx, dy, r]) => {
    const t = Wt(w) + .05; tag({ x: A2[0] + dx, y: A2[1] + dy, w: 440, rot: r, label: lab, tIn: t, order: 210 });
    thread([[A2[0] + dx + (dx < -100 ? 190 : dx > 100 ? -190 : 0), A2[1] + dy + (dy > 0 ? -48 : 0)], [A2[0] + (dx < -100 ? -290 : dx > 100 ? 290 : 0), A2[1] + (dy > 0 ? 250 : -230)]], t, t + .22, { silent: true, sag: .3, width: 4 });
  });
  link(A2[0] - 420, A2[1] - 250, Wt('тони') + .5, Wt('ее') + .1);
  travel(Wt('тони') + .5, Wt('ее') + .1);
  camKey(Wt('ее') + .1, A2[0] - 80, A2[1] - 20, 1.05, -.01); camKey(Wt('помочь') + .5, A2[0] + 20, A2[1] + 90, .86, .005);

  // S3 · assault, no punishment (A3)
  const A3 = [4300, 1800]; lamp(A3[0], A3[1] - 200, 1900, 1);
  photo({ x: A3[0] - 420, y: A3[1] - 40, w: 680, rot: -.03, order: 300, tIn: Wt('нападают') - .2, dur: .3, enter: 'drop', dx: -200, dy: -240, src: vid('melficry', Wt('нападают') - .3, 2.0) });
  const pr = typedCard({ x: A3[0] + 480, y: A3[1] + 40, w: 680, h: 520, rot: .03, order: 310, tIn: Wt('третьем') - .1, dur: .3, enter: 'slide', dx: 500, dy: 0 },
    [[typed('ПРОТОКОЛ · СЕЗОН 3', Wt('третьем'), .03), -310, -110, `700 34px ${MONO}`], [typed('ПОТЕРПЕВШАЯ: Д-Р МЕЛФИ', Wt('мелфи', 2), .03), -310, -20, `400 28px ${MONO}`],
     [typed('ПОДОЗРЕВАЕМЫЙ: ОТПУЩЕН', Wt('уходит'), .03), -310, 50, `400 28px ${MONO}`]]);
  pr.stamps = [stamp('БЕЗ НАКАЗАНИЯ', Wt('наказания'), { x: 20, y: 170, size: 54, rot: -.08, shake: 14 })];
  link(A3[0] - 760, A3[1] - 290, Wt('помочь') + .5, Wt('третьем') + .1);
  travel(Wt('помочь') + .5, Wt('третьем') + .1);
  camKey(Wt('третьем') + .1, A3[0] + 400, A3[1] + 20, 1.2, .02); camKey(Wt('нападают') + .3, A3[0] - 300, A3[1] - 20, 1.1, -.01);
  hold(Wt('насильник'), Wt('наказания') + .6, A3[0] + 460, A3[1] + 60, 1.2, .02, { dz: .06 });

  // S4 · one word (A4)
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  const ow = typedCard({ x: A4[0] - 380, y: A4[1], w: 760, h: 420, rot: -.02, order: 400, tIn: Wt('знает') - .2, dur: .3, enter: 'slide', dx: -500, dy: 0,
    extra: (g) => { g.strokeStyle = INK; g.lineWidth = 3; g.beginPath(); g.moveTo(-320, 80); g.lineTo(320, 80); g.stroke(); } },
    [[typed('ОДНО СЛОВО ТОНИ:', Wt('одно', 2), .04), -320, -60, `700 44px ${MONO}`]]);
  ow.stamps = [stamp('МОЛЧАНИЕ', Wt('говорит') - .05, { x: 0, y: 40, size: 90, rot: -.08, shake: 16 })];
  const ty = photo({ x: A4[0] + 520, y: A4[1] - 140, w: 480, rot: .06, order: 410, tIn: Wt('тони', 2) - .1, dur: .28, enter: 'drop', dx: 200, dy: -200, src: { still: 'charm' } });
  thread([[A4[0] - 60, A4[1] - 160], [A4[0] + 520, A4[1] - 300]], Wt('тони', 2) + .1, Wt('тем') + .2, {});
  pin(A4[0] - 60, A4[1] - 160, Wt('знает'), { silent: true }); pin(A4[0] + 520, A4[1] - 300, Wt('тони', 2) + .05, { silent: true });
  card({ x: A4[0] + 520, y: A4[1] + 260, w: 1, h: 1, shadow: 0, lit: false, order: 420, tIn: T_START, scrawls: [scrawl('ПОКОНЧЕНО', Wt('покончено') - .1, .5, { size: 66, rot: -.06 })] });
  link(A4[0] - 760, A4[1] - 210, Wt('наказания') + .6, Wt('знает') + .1);
  travel(Wt('наказания') + .6, Wt('знает') + .1);
  hold(Wt('знает') + .1, Wt('слово') + .4, A4[0] - 340, A4[1] + 20, 1.25, -.015, { dz: .05 });
  camKey(Wt('тони', 2) + .3, A4[0] + 120, A4[1] - 40, .95, .01); camKey(Wt('покончено') + .6, A4[0] + 200, A4[1] + 20, 1.0, .015);
  hold(Wt('этого'), Wt('говорит') + .6, A4[0] - 330, A4[1] + 30, 1.3, -.02, { dz: .06 });

  // S5 · strongest scene: refusal (A5)
  const A5 = [-200, 2000]; lamp(A5[0], A5[1] - 200, 1900, 1);
  const no = photo({ x: A5[0], y: A5[1] - 40, w: 900, rot: -.01, order: 500, tIn: Wt('это', 2) - .1, dur: .3, enter: 'drop', dx: 0, dy: -280, src: t => t < Wt('мелфи', 3) - .3 ? vid('melfino', Wt('это', 2) - .4, 0) : vid('melfino', 1e9, 3.2) });
  tag({ x: A5[0] + 20, y: A5[1] + 430, w: 360, rot: .03, label: 'ОТКАЗ', tIn: Wt('отказывается') + .1, order: 510, size: 46 });
  focus(Wt('мелфи', 3) - .2, Wt('пользоваться') + .4, [no], .9);
  link(A5[0] - 470, A5[1] - 330, Wt('говорит') + .6, Wt('это', 2) + .2);
  travel(Wt('говорит') + .6, Wt('это', 2) + .2);
  camKey(Wt('это', 2) + .2, A5[0], A5[1] - 20, 1.0, .01); camKey(Wt('пациент') + .2, A5[0] + 40, A5[1] - 80, 1.42, -.015);
  camKey(Wt('пользоваться') + .5, A5[0] + 20, A5[1] + 130, 1.1, 0);

  // S6 · the study (A6)
  const A6 = [-200, 3800]; lamp(A6[0], A6[1] - 200, 2000, 1);
  photo({ x: A6[0] - 620, y: A6[1] - 120, w: 560, rot: -.05, order: 600, tIn: Wt('читает') - .2, dur: .3, enter: 'drop', dx: -200, dy: -200, src: vid('yochelson', Wt('читает') - .3, 0) });
  const hl = (t, t0, x, y, w) => ({ t0, x, y, w });
  const st = card({ x: A6[0] + 380, y: A6[1] + 40, w: 820, h: 680, rot: .02, order: 610, color: '#f1eee6', lined: false, tIn: Wt('исследование') - .2, dur: .3, enter: 'slide', dx: 600, dy: 0,
    text: (g, t, it) => {
      for (const h of it.hls) { const p = eout(prog(t, h.t0, h.t0 + .35)); if (p > 0) { g.fillStyle = 'rgba(245,215,60,.65)'; g.fillRect(h.x, h.y - 30, h.w * p, 40); } }
      drawTyped(g, it.a, t, -370, -250, `700 30px ${MONO}`); drawTyped(g, it.b, t, -370, -200, `400 26px ${MONO}`, '#4a3a2a');
      g.fillStyle = 'rgba(0,0,0,.25)'; g.fillRect(-370, -170, 740, 3);
      drawTyped(g, it.c, t, -370, -100, `400 32px ${MONO}`); drawTyped(g, it.d, t, -370, -40, `400 32px ${MONO}`);
      drawTyped(g, it.e, t, -370, 60, `700 40px ${MONO}`); drawTyped(g, it.f, t, -370, 130, `700 40px ${MONO}`);
    } });
  st.a = typed('YOCHELSON & SAMENOW', Wt('исследование'), .03); st.b = typed('«Криминальная личность»', Wt('исследование') + .6, .025, { silent: true });
  st.c = typed('Разговорная терапия', Wt('разговорная'), .03); st.d = typed('помогает социопатам:', Wt('помогать'), .03);
  st.e = typed('— оправдываться', Wt('оправдываться') - .1, .03); st.f = typed('— манипулировать', Wt('манипулировать') - .1, .03);
  st.hls = [hl(0, Wt('оправдываться') + .35, -380, 60, 420), hl(0, Wt('манипулировать') + .4, -380, 130, 450)];
  sfx('marker', Wt('оправдываться') + .35, { dur: .35 }); sfx('marker', Wt('манипулировать') + .4, { dur: .35 });
  link(A6[0] - 880, A6[1] - 360, Wt('пользоваться') + .5, Wt('шестом') + .2);
  travel(Wt('пользоваться') + .5, Wt('шестом') + .2);
  camKey(Wt('шестом') + .2, A6[0] - 560, A6[1] - 100, 1.15, -.02); camKey(Wt('исследование') + .3, A6[0] + 300, A6[1] - 120, 1.2, .015);
  hold(Wt('терапия'), Wt('манипулировать') + .9, A6[0] + 330, A6[1] + 40, 1.12, .015, { dz: .1 });

  // S7 · she ends it; a slap for the viewer (A7)
  const A7 = [2200, 3800]; lamp(A7[0], A7[1] - 200, 2200, 1);
  const tm = photo({ x: A7[0] - 300, y: A7[1] - 60, w: 760, rot: -.02, order: 700, tIn: Wt('мелфи', 5) - .2, dur: .3, enter: 'drop', dx: -150, dy: -260, src: vid('terminate', Wt('мелфи', 5) - .3, 1.0) });
  tm.stamps = [stamp('ЛЕЧЕНИЕ ПРЕКРАЩЕНО', Wt('лечение'), { x: 0, y: 70, size: 50, rot: -.07, shake: 14 })];
  shake(Wt('пощечина'), 34); sfx('slap', Wt('пощечина')); fast(Wt('пощечина') - .02, Wt('пощечина') + .12, 6);
  FX.push({ name: 'zoomblur', fn: t => Math.sin(Math.PI * clamp(prog(t, Wt('пощечина') - .05, Wt('пощечина') + .3))) * .8 });
  photo({ x: A7[0] + 560, y: A7[1] - 260, w: 380, rot: .06, order: 710, tIn: Wt('возможно') - .1, dur: .28, enter: 'drop', dx: 200, dy: -200, src: { still: 'tonyclose' }, caption: typed('ТОНИ', Wt('возможно'), .001, { silent: true }), capSize: 24 });
  tag({ x: A7[0] + 120, y: A7[1] + 420, w: 340, rot: -.04, label: 'МЕЛФИ', tIn: Wt('она', 6) + .05, order: 720, size: 40 });
  tag({ x: A7[0] + 620, y: A7[1] + 300, w: 360, rot: .05, label: 'ЗРИТЕЛЬ', tIn: Wt('мы', 2) + .05, order: 721, size: 44 });
  thread([[A7[0] + 560, A7[1] - 400], [A7[0] + 120, A7[1] + 400]], Wt('пользовался') - .2, Wt('пользовался') + .2, {});
  thread([[A7[0] + 560, A7[1] - 400], [A7[0] + 620, A7[1] + 280]], Wt('пользовался'), Wt('пользовался') + .4, { silent: true });
  link(A7[0] - 680, A7[1] - 330, Wt('манипулировать') + .9, Wt('мелфи', 5) + .1);
  travel(Wt('манипулировать') + .9, Wt('мелфи', 5) + .1);
  hold(Wt('мелфи', 5) + .1, Wt('пощечина') + .8, A7[0] - 280, A7[1] - 40, 1.2, -.015, { dz: .08 });
  camKey(Wt('годы'), A7[0] + 200, A7[1] + 60, .9, .01); camKey(Wt('пользовался') + .5, A7[0] + 250, A7[1] + 40, .82, 0); camKey(T_END, A7[0] + 240, A7[1] + 40, .86, -.01);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8], [3600, 4700, 'ashtray', 1.0, 1.9]]);
  CAMK.sort((a, b) => a.t - b.t);
}
