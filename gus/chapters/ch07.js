// 07 · ЛИЦО
CH_V0 = 446.5;
const [T_START, T_END] = chRange(7);
function buildScenes() {
  const D = [0, 0]; divider(D, 7, 'ЛИЦО', T_START);
  hold(T_START, Wt('финал') + .3, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · Face Off: Walter and Hector, the bomb under the chair, the bell as detonator
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, 1);
  typedCard({ x: A1[0] - 640, y: A1[1] - 360, w: 560, h: 150, rot: -.04, order: 100, lined: false, tIn: Wt('финал') - .1, dur: .3, enter: 'slide', dx: -400, dy: 0 },
    [[typed('S04E13 · «FACE OFF»', Wt('серия'), .03), 0, 14, `700 34px ${MONO}`, INK, 'center']]);
  pw('walthector', Wt('уолтер') - .3, { x: A1[0] - 560, y: A1[1] - 20, w: 560, rot: -.03, order: 110, off: 0, caption: capt('УОЛТЕР И ГЕКТОР', Wt('гектором')), capSize: 22 });
  const bomb = card({ x: A1[0] + 160, y: A1[1] + 20, w: 560, h: 520, rot: .02, order: 120, color: '#dfe6ea', lined: false, tIn: Wt('бомба') - .3, dur: .3, enter: 'slide', dx: 0, dy: 500,
    text: (g, t, it) => {
      g.strokeStyle = '#1d3b5a'; g.lineWidth = 4; g.fillStyle = 'rgba(29,59,90,.08)';
      g.beginPath(); g.arc(-120, 90, 70, 0, 7); g.stroke(); g.beginPath(); g.arc(120, 110, 40, 0, 7); g.stroke();
      g.strokeRect(-150, -120, 260, 30); g.beginPath(); g.moveTo(-150, -90); g.lineTo(-150, 20); g.lineTo(110, 20); g.lineTo(110, -90); g.stroke(); g.beginPath(); g.moveTo(80, -230); g.lineTo(80, -120); g.stroke();
      if (t > Wt('крепится')) { const p = clamp((t - Wt('крепится')) / .3); g.fillStyle = RED; g.fillRect(-90, 30, 140 * p, 40); g.fillStyle = '#fff'; g.font = `800 22px ${SANS}`; g.textAlign = 'center'; if (p > .9) g.fillText('C-4', -20, 58); }
      g.fillStyle = '#1d3b5a'; g.font = `700 26px ${MONO}`; g.textAlign = 'left'; drawTyped(g, it.a, t, -240, -200, `700 28px ${MONO}`, '#1d3b5a'); drawTyped(g, it.b, t, -240, 210, `700 28px ${MONO}`, RED);
      if (t > Wt('звонок')) { g.font = '64px sans-serif'; g.fillText('🔔', 150, -160); } } });
  bomb.a = typed('ИНВАЛИДНОЕ КРЕСЛО', Wt('инвалидное') - .2, .03); bomb.b = typed('ДЕТОНАТОР: ЗВОНОК', Wt('детонатор'), .03);
  pw('hbell', Wt('звонок') - .3, { x: A1[0] + 780, y: A1[1] - 120, w: 440, rot: .05, order: 130, off: 2.5, caption: capt('ДА · НЕТ', Wt('нет') - .3), capSize: 26 });
  goTo(A1, Wt('финал') + .3, Wt('сезона') + .1, A1[0] - 900, A1[1] - 440);
  hold(Wt('сезона') + .1, Wt('гектором') + .3, A1[0] - 560, A1[1] - 160, 1.05, -.02, { dz: .05 });
  camKey(Wt('бомба') + .2, A1[0] + 160, A1[1] + 20, 1.05, .01); camKey(Wt('звонок') + .2, A1[0] + 520, A1[1] - 60, .95, .015);

  // S2 · Gus arrives: car, the walk, the room, sits and looks him in the eye
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, .95);
  pw('gcar', Wt('гус') - .3, { x: A2[0] - 620, y: A2[1] - 200, w: 480, rot: -.04, order: 200, off: 0 });
  pw('gwalk', Wt('приходит') - .2, { x: A2[0] - 620, y: A2[1] + 200, w: 480, rot: .04, order: 210, off: 3, caption: capt('ДОМ ПРЕСТАРЕЛЫХ', Wt('престарелых')), capSize: 22 });
  pw('groom', Wt('убить') - .3, { x: A2[0] + 40, y: A2[1] - 160, w: 520, rot: .03, order: 220, off: 0, caption: capt('ЦЕЛЬ: УБИТЬ ГЕКТОРА', Wt('гектора')), capSize: 22 });
  const gs = pw('gsit', Wt('смотрит') - .3, { x: A2[0] + 400, y: A2[1] + 220, w: 720, rot: -.02, order: 230, off: 8 });
  goTo(A2, Wt('нет') + .4, Wt('гус') + .1, A2[0] - 900, A2[1] - 480);
  camKey(Wt('гус') + .1, A2[0] - 600, A2[1] - 190, 1.12, -.02); camKey(Wt('приходит') + .3, A2[0] - 600, A2[1] + 190, 1.12, .01);
  camKey(Wt('убить') + .1, A2[0] + 40, A2[1] - 160, 1.1, .01); camKey(Wt('смотрит') + .1, A2[0] + 400, A2[1] + 220, 1.1, -.01); camKey(Wt('глаза') + .4, A2[0] + 400, A2[1] + 220, 1.3, -.015);

  // S3 · the bell rings, rings, rings. Boom.
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2100, .9);
  const gb = pw('gusbell', Wt('гектор', 4) - .3, { x: A3[0], y: A3[1] - 20, w: 980, rot: .01, order: 300, off: 0 });
  ['звонит', 'звонит', 'звонит'].forEach((w, k) => { sfx('bell', Wt(w, k + 1) + .05); shake(Wt(w, k + 1) + .05, 4 + k * 3); });
  sfx('boom', Wt('взрыв') - .05); shake(Wt('взрыв') - .05, 30);
  FX.push({ name: 'zoomblur', fn: t => Math.sin(Math.PI * clamp(prog(t, Wt('взрыв') - .1, Wt('взрыв') + .7))) * 1.0 });
  OVERLAYS.push((g, t) => { const f = Math.max(0, 1 - Math.abs(t - Wt('взрыв') + .02) / .35); if (f > 0) { g.save(); g.setTransform(1, 0, 0, 1, 0, 0); g.fillStyle = `rgba(255,240,215,${f * .85})`; g.fillRect(0, 0, W, H); g.restore(); } });
  goTo(A3, Wt('глаза') + .5, Wt('гектор', 4) + .1, A3[0] - 600, A3[1] - 520);
  camKey(Wt('гектор', 4) + .1, A3[0], A3[1] - 20, 1.05, 0); camKey(Wt('звонит', 3) + .4, A3[0], A3[1] - 10, 1.25, .01); camKey(Wt('взрыв') + .3, A3[0], A3[1], 1.4, .02);

  // S4 · he walks out, straightens the tie; half his face is gone; he falls
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  const gf = pw('gusface', Wt('выходит') - .6, { x: A4[0] - 120, y: A4[1] - 20, w: 900, rot: -.01, order: 400, off: 2 });
  const cl = card({ x: A4[0] + 640, y: A4[1] - 140, w: 460, h: 360, rot: .04, order: 410, lined: true, tIn: Wt('спокойно') - .3, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => drawChecks(g, t, it.cl, `700 32px ${MONO}`) });
  cl.cl = [checkLine('СПОКОЙНО', Wt('спокойно') + .1, 'v', -180, -90), checkLine('РОВНО', Wt('походкой') + .05, 'v', -180, -10), checkLine('ГАЛСТУК', Wt('галстук') + .05, 'v', -180, 70)];
  const hf = card({ x: A4[0] - 120, y: A4[1] + 440, w: 1, h: 1, shadow: 0, lit: false, order: 420, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  hf.s = stamp('ПОЛОВИНЫ ЛИЦА НЕТ', Wt('половины') + .3, { size: 64, rot: -.06, shake: 18 });
  sfx('hitlow', Wt('падает') + .05);
  card({ x: A4[0] + 640, y: A4[1] + 290, w: 1, h: 1, shadow: 0, lit: false, order: 430, tIn: 0, scrawls: [scrawl('САМООБЛАДАНИЕ', Wt('самообладание') - .4, .6, { size: 50, rot: -.05 })] });
  goTo(A4, Wt('взрыв') + .6, Wt('из') + .1, A4[0] - 700, A4[1] - 500);
  camKey(Wt('из') + .1, A4[0] - 120, A4[1] - 20, 1.0, 0); camKey(Wt('галстук') + .3, A4[0] - 120, A4[1] - 10, 1.15, .01);
  camKey(Wt('половины') + .3, A4[0] - 60, A4[1] - 30, 1.35, .015); camKey(Wt('падает') + .3, A4[0] - 100, A4[1] + 120, 1.1, 0);
  camKey(Wt('самообладание') + .2, A4[0] + 380, A4[1] + 100, .9, .01);

  // S5 · one of the most recognisable frames on TV; make-up + CGI; left as composed as he lived
  const A5 = [-300, 1900]; lamp(A5[0], A5[1] - 200, 1900, 1);
  const tv = typedCard({ x: A5[0] - 300, y: A5[1] - 160, w: 760, h: 240, rot: -.02, order: 500, lined: false, tIn: Wt('этот') - .3, dur: .3, enter: 'slide', dx: 0, dy: -400 },
    [[typed('ОДИН ИЗ САМЫХ', Wt('одним') - .2, .04), -320, -20, `800 44px ${SANS}`], [typed('УЗНАВАЕМЫХ КАДРОВ ТВ', Wt('узнаваемых') - .2, .035), -320, 50, `800 44px ${SANS}`, RED]]);
  tag({ x: A5[0] - 400, y: A5[1] + 120, w: 420, rot: .04, label: 'ГРИМ + CGI', tIn: Wt('грима') + .05, order: 510, size: 44 });
  pw('gface2', Wt('ушёл') - .6, { x: A5[0] + 480, y: A5[1] + 20, w: 520, rot: .04, order: 520, off: 5 });
  card({ x: A5[0] + 100, y: A5[1] + 400, w: 1, h: 1, shadow: 0, lit: false, order: 530, tIn: 0, scrawls: [scrawl('КАКИМ ЖИЛ', Wt('жил') - .3, .45, { size: 66, rot: -.05 })] });
  goTo(A5, Wt('самообладание') + .5, Wt('этот') + .1, A5[0] - 860, A5[1] - 460);
  hold(Wt('этот') + .1, Wt('телевидения') + .3, A5[0] - 300, A5[1] - 140, 1.08, -.015, { dz: .05 });
  camKey(Wt('грима') + .2, A5[0] - 300, A5[1] + 20, 1.0, -.01); camKey(Wt('ушёл') + .2, A5[0] + 300, A5[1] + 120, .92, .01); camKey(T_END, A5[0] + 300, A5[1] + 150, 1.0, .015);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
