// 00 · cold open + intro
CH_V0 = 0;
const [T_START, T_END] = chRange(0);
FADE_IN = .6;
function buildScenes() {
  // S0 · every crime story has a detective; this one sat at the criminal's table every Sunday
  const A0 = [0, 0]; lamp(A0[0], A0[1] - 200, 2200, 1);
  const vs = card({ x: A0[0] - 460, y: A0[1] - 40, w: 620, h: 420, rot: -.03, order: 100, lined: false, tIn: .2, dur: .3, enter: 'slide', dx: -500, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -120, `800 46px ${SANS}`, INK, 'center'); drawTyped(g, it.b, t, 0, -40, `700 30px ${MONO}`, '#777', 'center');
      drawTyped(g, it.c, t, 0, 40, `800 46px ${SANS}`, RED, 'center'); drawTyped(g, it.d, t, 0, 120, `700 26px ${MONO}`, INK, 'center'); } });
  vs.a = typed('ПРЕСТУПНИК', Wt('преступника') - .1, .05); vs.b = typed('vs', Wt('сыщик') - .4, .1); vs.c = typed('СЫЩИК', Wt('сыщик') - .1, .07); vs.d = typed('…и наручники в конце', Wt('наручники') - .5, .03);
  pw('dinner', Wt('сидел') - .4, { x: A0[0] + 360, y: A0[1] - 160, w: 560, rot: .03, order: 110, off: 2, caption: capt('ЗА ОДНИМ СТОЛОМ', Wt('столом')), capSize: 22 });
  pw('tvbust', Wt('стейки') - .4, { x: A0[0] + 420, y: A0[1] + 260, w: 460, rot: -.04, order: 120, off: 3, caption: capt('«ЛОВЛЮ ХАЙЗЕНБЕРГА»', Wt('хайзенберга') - .3), capSize: 20 });
  card({ x: A0[0] + 360, y: A0[1] - 470, w: 1, h: 1, shadow: 0, lit: false, order: 130, tIn: 0, scrawls: [scrawl('каждое воскресенье', Wt('воскресенье') - .4, .5, { size: 44, rot: -.04 })] });
  camKey(0, A0[0] - 460, A0[1] - 40, 1.08, -.015); camKey(Wt('тяжкие') + .3, A0[0] - 100, A0[1] - 20, .85, 0);
  camKey(Wt('сидел') + .2, A0[0] + 360, A0[1] - 160, 1.05, .015); camKey(Wt('стейки') + .2, A0[0] + 400, A0[1] + 200, 1.05, -.01); camKey(Wt('хайзенберга') + .3, A0[0] + 420, A0[1] + 240, 1.12, -.015);

  // S1 · Hank Schrader: loud, crude DEA agent, the brother-in-law with dirty jokes and homebrew — easy to laugh at
  const A1 = [2600, 0]; lamp(A1[0], A1[1] - 200, 2000, 1);
  pw('partygun', Wt('хайзенберга') + .2, { x: A1[0] - 400, y: A1[1] - 20, w: 720, rot: -.02, order: 200, off: 1, caption: capt('ХЭНК ШРЕЙДЕР', Wt('шрейдер')), capSize: 28 });
  const pr = card({ x: A1[0] + 560, y: A1[1] - 40, w: 500, h: 440, rot: .03, order: 210, lined: true, tIn: Wt('громкий') - .3, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => drawChecks(g, t, it.cl, `700 28px ${MONO}`) });
  pr.cl = [checkLine('ГРОМКИЙ', Wt('громкий') + .1, 'v', -210, -150), checkLine('ГРУБОВАТЫЙ', Wt('грубоватый') + .1, 'v', -210, -80), checkLine('АГЕНТ УБН', Wt('наркоконтроля') + .1, 'v', -210, -10),
    checkLine('ШУРИН ГЕРОЯ', Wt('шурин') + .1, 'v', -210, 60), checkLine('ПОШЛЫЕ ШУТКИ', Wt('шуток') + .1, 'v', -210, 130), checkLine('СВОЁ ПИВО', Wt('разлива') + .1, 'v', -210, 200)];
  const cm = card({ x: A1[0] - 400, y: A1[1] + 400, w: 1, h: 1, shadow: 0, lit: false, order: 220, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  cm.s = stamp('КОМИЧЕСКИЙ?', Wt('комической') - .1, { size: 76, rot: -.07, shake: 14 });
  goTo(A1, Wt('хайзенберга') + .3, Wt('хэнк') - .1, A1[0] - 760, A1[1] - 400);
  hold(Wt('хэнк') - .1, Wt('наркоконтроля') - .3, A1[0] - 400, A1[1] - 20, 1.05, -.015, { dz: .05 });
  camKey(Wt('наркоконтроля') + .2, A1[0] + 520, A1[1] + 20, 1.0, .015); camKey(Wt('разлива') + .3, A1[0] + 540, A1[1] + 80, 1.08, .015);
  camKey(Wt('посмеяться') + .2, A1[0] - 300, A1[1] + 220, .9, -.01); camKey(Wt('посмеяться') + .6, A1[0] - 300, A1[1] + 240, .92, -.01);

  // S2 · then: the only truly honest man in the show; what courage really looks like — panic attacks, crutches, stubbornness
  const A2 = [5200, 0]; lamp(A2[0], A2[1] - 200, 2100, 1);
  const hn = card({ x: A2[0], y: A2[1] - 330, w: 980, h: 170, rot: -.01, order: 300, lined: false, tIn: Wt('=потом') - .2, dur: .3, enter: 'slide', dx: 0, dy: -300,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -15, `700 30px ${MONO}`, INK, 'center'); drawTyped(g, it.b, t, 0, 45, `800 44px ${SANS}`, RED, 'center'); } });
  hn.a = typed('единственный по-настоящему', Wt('единственный') - .1, .03); hn.b = typed('ЧЕСТНЫЙ МУЖЧИНА В СЕРИАЛЕ', Wt('честный') - .1, .035);
  [['elevator', 'ПАНИЧЕСКИЕ АТАКИ', 'панические', -560, -.04, 6], ['rehab', 'КОСТЫЛИ', 'костыли', 0, .03, 3], ['hankmarie', 'УПРЯМСТВО', 'упрямство', 560, -.03, 6]].forEach(([k, c, w, dx, r, off], i) =>
    pw(k, Wt(w) - .4, { x: A2[0] + dx, y: A2[1] + 120, w: 500, rot: r, order: 310 + i, off, caption: capt(c, Wt(w) + .1), capSize: 22 }));
  const hc = card({ x: A2[0], y: A2[1] + 520, w: 1, h: 1, shadow: 0, lit: false, order: 320, tIn: 0, scrawls: [scrawl('храбрость — не как в кино', Wt('храбрость') - .2, .7, { size: 50, rot: -.03 })] });
  goTo(A2, Wt('посмеяться') + .6, Wt('=потом') + .1, A2[0] - 800, A2[1] - 520);
  hold(Wt('=потом') + .1, Wt('сериале') + .4, A2[0], A2[1] - 260, 1.0, -.01, { dz: .04 });
  camKey(Wt('храбрость') + .2, A2[0], A2[1] + 260, .85, 0); camKey(Wt('панические') + .2, A2[0] - 540, A2[1] + 120, 1.05, -.015);
  camKey(Wt('костыли') + .1, A2[0], A2[1] + 120, 1.05, .01); camKey(Wt('упрямство') + .2, A2[0] + 540, A2[1] + 120, 1.05, .015); camKey(Wt('умнее') + .2, A2[0] + 300, A2[1] + 300, .92, .01);

  // S3 · the dossier: Hank Schrader; spoilers for all five seasons
  const A4 = [2600, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  mugBoard(A4, { still: 'hankface' }, typed('ШРЕЙДЕР, ХЭНК', Wt('досье'), .045), typed('агент УБН · Альбукерке', Wt('шрейдера') + .2, .03, { silent: true }), { order: 500 });
  const st6 = card({ x: A4[0] + 300, y: A4[1] - 300, w: 1, h: 1, shadow: 0, order: 540, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  st6.s = stamp('ВНИМАНИЕ', Wt('дальше') + .05, { size: 110, rot: -.1, shake: 12 });
  TAPES.push({ t0: Wt('спойлеры') - .3, dur: .5, ang: -.2, y: -60, dir: 1, out: T_END - .45 });
  TAPES.push({ t0: Wt('пяти') - .3, dur: .45, ang: .16, y: 170, dir: -1, out: T_END - .4 });
  TAPES.forEach(tp => sfx('tape', tp.t0, { dur: tp.dur }));
  goTo(A4, Wt('умнее') + .2, Wt('сегодня') + .1, A4[0] - 600, A4[1] - 420);
  hold(Wt('сегодня') + .1, Wt('дальше') - .2, A4[0], A4[1] - 40, 1.05, .01, { dz: .06 });
  camKey(Wt('дальше') + .3, A4[0] + 200, A4[1] - 60, 1.02, -.02); camKey(T_END, A4[0] + 260, A4[1] - 20, 1.12, -.04);

  ensureFG([[-1000, 700, 'ashtray', 1.1, 1.9], [3600, 600, 'smoke', 1.6, 1.5, 0, .8], [6200, 900, 'cup', 1.0, 1.9], [1400, 2600, 'pen', 1.2, 1.85, .4]]);
  CAMK.sort((a, b) => a.t - b.t);
}
