// 02 · ХАЙЗЕНБЕРГ
CH_V0 = 116.2;
const [T_START, T_END] = chRange(2);
function buildScenes() {
  const D = [0, 0]; divider(D, 2, 'ХАЙЗЕНБЕРГ', T_START);
  hold(T_START, Wt('партнёра') + .3, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · partner Jesse, RV in the desert, first kills
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, 1);
  pw('jesse', Wt('джесси') - .2, { x: A1[0] - 520, y: A1[1] - 60, w: 560, rot: -.04, order: 100, caption: capt('ДЖЕССИ ПИНКМАН', Wt('пинкман')), capSize: 26 });
  tag({ x: A1[0] - 560, y: A1[1] + 300, w: 420, rot: .05, label: 'БЫВШИЙ УЧЕНИК', tIn: Wt('ученик') + .05, order: 110, size: 34 });
  pw('rvdust', Wt('фургоне') - .2, { x: A1[0] + 300, y: A1[1] - 200, w: 600, rot: .04, order: 120 });
  const kc = pw('krazygun', Wt('травит') - .1, { x: A1[0] + 380, y: A1[1] + 250, w: 600, rot: -.04, order: 130 });
  kc.stamps = [stamp('1 УБИТ', Wt('погибает') + .05, { x: -110, y: 30, size: 52, rot: -.08, shake: 10 }), stamp('1 ЖИВ', Wt('выживает') + .05, { x: 120, y: 60, size: 52, rot: .08, color: '#2b2b2b', shake: 6 })];
  goTo(A1, Wt('партнёра') + .3, Wt('уолтер') + .2, A1[0] - 800, A1[1] - 380);
  hold(Wt('уолтер') + .2, Wt('торговец') + .5, A1[0] - 480, A1[1] + 20, 1.12, -.02, { dz: .06 });
  camKey(Wt('они') + .3, A1[0] + 300, A1[1] - 160, 1.15, .01); camKey(Wt('травит') + .3, A1[0] + 360, A1[1] + 220, 1.15, -.01); camKey(Wt('выживает') + .6, A1[0] + 360, A1[1] + 250, 1.25, -.015);

  // S2 · the basement: pros & cons list, bike lock
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, .9);
  pw('basement', Wt('подвале') - .2, { x: A2[0] - 380, y: A2[1] - 40, w: 680, rot: -.02, order: 200 });
  const ls = card({ x: A2[0] + 500, y: A2[1] + 40, w: 600, h: 620, rot: .03, order: 210, lined: true, tIn: Wt('список') - .2, dur: .3, enter: 'slide', dx: 500, dy: 0,
    text: (g, t, it) => { g.strokeStyle = 'rgba(30,30,30,.5)'; g.lineWidth = 2; g.beginPath(); g.moveTo(0, 90); g.lineTo(0, 300); g.stroke();
      drawTyped(g, it.a, t, -150, 70, `800 40px ${SANS}`, INK, 'center'); drawTyped(g, it.b, t, 150, 70, `800 40px ${SANS}`, INK, 'center');
      it.lines.forEach(([ty, x, y]) => drawTyped(g, ty, t, x, y, `400 28px ${MONO}`, '#2b2b4a')); } });
  ls.a = typed('ЗА', Wt('=за') + .05, .08, { heavy: true }); ls.b = typed('ПРОТИВ', Wt('против') + .05, .06, { heavy: true });
  ls.lines = [[typed('аморально', Wt('против') + .5, .04, { silent: true }), -280, 150], [typed('он убьёт', Wt('против') + .9, .04, { silent: true }), 20, 150], [typed('семью', Wt('против') + 1.3, .04, { silent: true }), 20, 200]];
  const lk = pw('strangle', Wt('душит') - .1, { x: A2[0] + 60, y: A2[1] + 400, w: 520, rot: -.06, order: 220, off: 2 });
  lk.stamps = [stamp('УБИЙСТВО №2', Wt('замком'), { x: 0, y: 40, size: 50, rot: -.08, shake: 14 })];
  card({ x: A2[0] - 380, y: A2[1] + 360, w: 1, h: 1, shadow: 0, lit: false, order: 230, tIn: 0, scrawls: [scrawl('ПРОЩАЕМ', Wt('прощаем') - .1, .4, { size: 70, rot: -.06 })] });
  goTo(A2, Wt('выживает') + .6, Wt('=во') + .2, A2[0] - 700, A2[1] - 320);
  hold(Wt('=во') + .2, Wt('решиться') + .4, A2[0] - 360, A2[1] - 20, 1.1, -.015, { dz: .1 });
  camKey(Wt('список') + .2, A2[0] + 480, A2[1] + 40, 1.15, .015); camKey(Wt('итоге'), A2[0] + 300, A2[1] + 220, .95, 0);
  camKey(Wt('видим') + .2, A2[0] - 150, A2[1] + 420, .95, -.01);

  // S3 · Heisenberg is born: shave, hat, Tuco, fulminate
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2200, 1);
  pw('shave', Wt('бреет') - .2, { x: A3[0] - 620, y: A3[1] - 120, w: 520, rot: -.05, order: 300 });
  pw('walthat', Wt('шляпу') - .2, { x: A3[0] - 60, y: A3[1] - 200, w: 520, rot: .04, order: 301 });
  pw('tuco', Wt('туко') - .2, { x: A3[0] + 520, y: A3[1] - 120, w: 460, rot: .06, order: 302, caption: capt('ТУКО САЛАМАНКА', Wt('туко')), capSize: 22 });
  const boom = pw('tucoboom', Wt('кристалл') - .1, { x: A3[0] + 60, y: A3[1] + 300, w: 680, rot: -.02, order: 310, off: 0 });
  boom.stamps = [stamp('ГРЕМУЧАЯ РТУТЬ', Wt('ртутью'), { x: 0, y: 60, size: 46, rot: -.08, shake: 8 })];
  sfx('boom', Wt('воздух') - .2); shake(Wt('воздух') - .2, 26); FX.push({ name: 'zoomblur', fn: t => Math.sin(Math.PI * clamp(prog(t, Wt('воздух') - .25, Wt('воздух') + .35))) });
  card({ x: A3[0] + 60, y: A3[1] + 650, w: 1, h: 1, shadow: 0, lit: false, order: 320, tIn: 0, scrawls: [scrawl('ЕМУ НРАВИТСЯ', Wt('нравится') - .1, .45, { size: 56 }), scrawl('И НАМ ТОЖЕ', Wt('нравится', 2) - .1, .45, { size: 56, y: 80, rot: .04 })] });
  goTo(A3, Wt('прощаем') + .5, Wt('затем') + .2, A3[0] - 900, A3[1] - 400);
  camKey(Wt('затем') + .2, A3[0] - 280, A3[1] - 100, .9, -.01); camKey(Wt('бреет'), A3[0] - 560, A3[1] - 100, 1.2, -.02);
  camKey(Wt('шляпу'), A3[0] - 60, A3[1] - 170, 1.2, .01); camKey(Wt('туко') + .2, A3[0] + 500, A3[1] - 100, 1.2, .02);
  camKey(Wt('кристалл') + .2, A3[0] + 60, A3[1] + 280, 1.15, 0); camKey(Wt('воздух') + .6, A3[0] + 70, A3[1] + 300, 1.25, .01);
  camKey(Wt('=это', 2) + .1, A3[0] + 60, A3[1] + 450, 1.0, 0); camKey(Wt('ним') + .4, A3[0] + 60, A3[1] + 500, 1.05, -.01);

  // S4 · the name: uncertainty principle
  const A4 = [2100, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  const hz = typedCard({ x: A4[0] - 300, y: A4[1], w: 760, h: 480, rot: -.02, order: 400, tIn: Wt('имя') - .2, dur: .3, enter: 'slide', dx: -500, dy: 0,
    extra: (g, t) => { const p = prog(t, Wt('неопределённости'), Wt('неопределённости') + .8); if (p > 0) { g.globalAlpha *= p; g.fillStyle = '#2b3a5a'; g.font = `400 italic 56px "DejaVu Serif"`; g.textAlign = 'center'; g.fillText('Δx · Δp ≥ ħ/2', 0, 170); g.globalAlpha = 1; } } },
    [[typed('ВЕРНЕР ГЕЙЗЕНБЕРГ', Wt('физика'), .035), -330, -110, `700 38px ${MONO}`], [typed('принцип', Wt('принципа'), .05), -330, -30, `400 32px ${MONO}`], [typed('неопределённости', Wt('неопределённости'), .035), -330, 20, `400 32px ${MONO}`]]);
  const mask = item({ x: A4[0] + 560, y: A4[1] - 40, w: 620, h: photoH(620), rot: .04, order: 410, tIn: Wt('очень') - .2, dur: .3, enter: 'drop', dx: 200, dy: -200,
    srcs: () => [{ still: 'waltface' }, { still: 'walthat' }],
    draw: (g, t) => { const m = eio(prog(t, Wt('маска') - .9, Wt('маска') + .2)), w = 620, h = photoH(620);
      g.save(); drawPhoto(g, t, { w, h, src: { still: 'waltface' }, order: 411 }); g.globalAlpha = m; drawPhoto(g, t, { w, h, src: { still: 'walthat' }, order: 412 }); g.restore();
      g.fillStyle = INK; g.font = `800 34px ${SANS}`; g.textAlign = 'center'; g.fillText(m < .5 ? 'УОЛТЕР' : 'ХАЙЗЕНБЕРГ', 0, h / 2 - 26); } });
  goTo(A4, Wt('ним') + .4, Wt('имя') + .2, A4[0] - 700, A4[1] - 300);
  hold(Wt('имя') + .2, Wt('неопределённости') + .9, A4[0] - 260, A4[1] + 20, 1.1, -.015, { dz: .06 });
  camKey(Wt('очень') + .3, A4[0] + 300, A4[1] - 20, .95, .01); camKey(T_END, A4[0] + 520, A4[1] - 20, 1.3, .03);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
