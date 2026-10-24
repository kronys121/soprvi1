// 00 · cold open + intro
CH_V0 = 0;
const [T_START, T_END] = chRange(0);
FADE_IN = .6;
function buildScenes() {
  // S0 · closed case folder, title question typed on the label
  const A0 = [0, 0]; lamp(A0[0] - 100, A0[1] - 200, 1800, 1);
  const tOpen = Wt('он') - .1;
  item({ x: A0[0], y: A0[1], w: 1500, h: 1000, order: 100, tIn: 0, shadow: 1,
    draw: (g, t, it) => {
      const p = eio(prog(t, tOpen, tOpen + .6)), c = Math.cos(p * Math.PI);
      g.save(); g.translate(-750, 0); g.scale(c, 1 + .06 * Math.sin(p * Math.PI)); g.translate(750, 0);
      if (c > 0) {
        g.drawImage(paper(1500, 1000, MANILA, false, 41), -750, -500);
        g.fillStyle = PAPER; g.fillRect(-460, -40, 920, 240); g.strokeStyle = 'rgba(0,0,0,.3)'; g.lineWidth = 2; g.strokeRect(-460, -40, 920, 240);
        g.fillStyle = INK; g.font = `700 50px ${MONO}`; g.textAlign = 'center'; g.fillText('ДЕЛО № 0508', 0, 30);
        drawTyped(g, it.q1, t, 0, 105, `800 46px ${SANS}`, INK, 'center'); drawTyped(g, it.q2, t, 0, 165, `800 46px ${SANS}`, INK, 'center');
        drawStamp(g, it.s, t);
      } else g.drawImage(paper(1500, 1000, '#bf9c60', false, 42), -750, -500);
      g.fillStyle = `rgba(0,0,0,${Math.sin(p * Math.PI) * .45})`; g.fillRect(-750, -500, 1500, 1000); g.restore();
    } }).q1 = typed('ПОЧЕМУ МЫ БОЛЕЛИ', Wt('почему'), .045);
  const fold = ITEMS[ITEMS.length - 1]; fold.q2 = typed('ЗА УОЛТЕРА УАЙТА?', Wt('уолтера'), .045);
  fold.s = stamp('СЕКРЕТНО', .9, { x: 0, y: -260, size: 96, rot: -.08, shake: 12 });
  sfx('flip', tOpen, { big: true }); fast(tOpen, tOpen + .6, 5);
  camKey(0, A0[0], A0[1] + 40, .78, -.01); camKey(Wt('уайта') + .3, A0[0], A0[1] + 60, .9, 0);

  // S1 · accusations: four prints, four stamps (inside the opened folder)
  lamp(A0[0], A0[1] + 40, 1600, .8);
  const acc = [['firstcook', 'варит', 'МЕТАМФЕТАМИН', 'метамфетамин', -520, -200, -.06, 1.0], ['gunwalt', 'убивает', 'УБИЙСТВО', 'конкурентов', 520, -210, .05, 1.0],
    ['lily', 'травит', 'РЕБЁНОК', 'ребёнка', -520, 250, .04, 5.5], ['janedie', 'смотрит', 'БЕЗДЕЙСТВИЕ', 'ничего', 520, 240, -.05, 2.0]];
  acc.forEach(([k, w, st, ws, dx, dy, r, off]) => {
    const p = pw(k, Wt(w) + .05, { x: A0[0] + dx, y: A0[1] + dy, w: 600, rot: r, order: 200, off });
    p.stamps = [stamp(st, Wt(ws) + .1, { x: 0, y: 40, size: st.length > 9 ? 50 : 62, rot: -r * 1.5, shake: 10 })];
  });
  camKey(Wt('варит') + .2, A0[0] - 380, A0[1] - 120, 1.15, -.02); camKey(Wt('убивает') + .3, A0[0] + 380, A0[1] - 130, 1.15, .02);
  camKey(Wt('травит') + .3, A0[0] - 380, A0[1] + 170, 1.15, -.015); camKey(Wt('смотрит') + .3, A0[0] + 380, A0[1] + 170, 1.12, .015);
  camKey(Wt('ничего') + .5, A0[0], A0[1] + 30, .8, 0);

  // S2 · five seasons: millions waited
  const A2 = [2600, -200]; lamp(A2[0], A2[1] - 200, 1900, 1);
  const seasons = ['teacher', 'walthat', 'gus', 'heisenberg5', 'cranston'];
  ['firstcook', 'hat', 'gale', 'saymyname', 'death'].forEach((k, i) => {
    const t = Wt('пять') + i * .2, u = i - 2;
    item({ draw: drawFolder, x: A2[0] + u * 330, y: A2[1] + 40 + Math.abs(u) * 40, rot: u * .06, w: 500, h: 380, tIn: t, dur: .3, enter: 'slide', dx: u * 60, dy: 700, drot: u * .1, tab: `СЕЗОН ${i + 1}`, order: 300 + i,
      srcs: tt => [vid(k, t, 2)], text: (g, tt) => { const im = got(srcUrl(vid(k, t, 2), tt)); g.save(); g.rotate(-.03 + i * .015); g.fillStyle = '#eee9de'; g.fillRect(-180, -150, 360, 240); if (im) g.drawImage(im, -166, -136, 332, 187); g.fillStyle = INK; g.font = `700 22px ${MONO}`; g.textAlign = 'center'; g.fillText(String(2008 + i), 0, 80); g.restore(); drawClip(g, -60, -162); } });
  });
  typedCard({ x: A2[0], y: A2[1] - 420, w: 760, h: 150, rot: -.015, order: 320, lined: false, tIn: Wt('миллионы') - .1, dur: .3, enter: 'slide', dx: 0, dy: -300 },
    [[typed('МИЛЛИОНЫ ЗРИТЕЛЕЙ', Wt('миллионы'), .035), 0, 18, `800 54px ${SANS}`, INK, 'center']]);
  goTo(A2, Wt('ничего') + .5, Wt('миллионы') - .7, A2[0] - 800, A2[1] - 500);
  hold(Wt('миллионы') - .7, Wt('получится') + .7, A2[0], A2[1] - 60, .82, .01, { dz: .12 });

  // S3 · Tony was a monster from minute one; Walter became one before our eyes
  const A3 = [5000, -100]; lamp(A3[0], A3[1] - 200, 1900, 1);
  pw('tony', Wt('тони') - .1, { x: A3[0] - 420, y: A3[1], w: 640, rot: -.04, order: 400, caption: capt('ТОНИ СОПРАНО', Wt('тони') + .1), capSize: 28 });
  const wt = photo({ x: A3[0] + 420, y: A3[1], w: 640, rot: .04, order: 401, tIn: Wt('уолтер', 2) - .1, dur: .3, enter: 'drop', dx: 0, dy: -240,
    src: t => t < Wt('глазах') - .2 ? { still: 'waltface' } : { still: 'walthat' }, caption: capt('УОЛТЕР УАЙТ', Wt('уолтер', 2) + .1), capSize: 28 });
  card({ x: A3[0] - 420, y: A3[1] + 330, w: 1, h: 1, shadow: 0, lit: false, order: 410, tIn: 0, scrawls: [scrawl('С ПЕРВОЙ МИНУТЫ', Wt('первой') - .1, .5, { size: 46, rot: -.05 })] });
  card({ x: A3[0] + 420, y: A3[1] + 330, w: 1, h: 1, shadow: 0, lit: false, order: 411, tIn: 0, scrawls: [scrawl('СТАЛ', Wt('стал') - .05, .3, { size: 56, rot: .04 })] });
  sfx('flip', Wt('глазах') - .2);
  goTo(A3, Wt('получится') + .7, Wt('тони') + .2, A3[0] - 700, A3[1] - 330);
  hold(Wt('тони') + .2, Wt('глазах') + .7, A3[0], A3[1] + 60, .92, .01, { dz: .1 });

  // S4 · Gilligan: Mr. Chips -> Scarface
  const A4 = [5000, 1700]; lamp(A4[0], A4[1] - 200, 1900, 1);
  const gc = typedCard({ x: A4[0], y: A4[1] - 360, w: 900, h: 150, rot: -.015, order: 500, lined: false, tIn: Wt('создатель') - .1, dur: .3, enter: 'slide', dx: 0, dy: -300 },
    [[typed('ВИНС ГИЛЛИГАН: ЗАДАЧА', Wt('гиллиган'), .035), 0, 18, `800 46px ${SANS}`, INK, 'center']]);
  pw('class', Wt('мистера') - .05, { x: A4[0] - 480, y: A4[1] + 40, w: 600, rot: -.05, order: 510, caption: capt('МИСТЕР ЧИПС', Wt('чипса')), capSize: 28 });
  pw('walthat', Wt('лицо') - .05, { x: A4[0] + 480, y: A4[1] + 40, w: 600, rot: .05, order: 511, caption: capt('ЛИЦО СО ШРАМОМ', Wt('шрамом')), capSize: 28 });
  card({ x: A4[0], y: A4[1] + 40, w: 1, h: 1, shadow: 0, lit: false, order: 520, tIn: 0, pens: [pen([[-150, 0], [150, 0], [110, -36], [150, 0], [110, 36]], Wt('гангстера') - .5, .45, { width: 12 })] });
  goTo(A4, Wt('глазах') + .7, Wt('создатель') + .2, A4[0] - 450, A4[1] - 470);
  hold(Wt('создатель') + .2, Wt('гангстера') + .7, A4[0], A4[1] - 40, .92, -.01, { dz: .12 });

  // S5 · we open the dossier; where did the teacher disappear?
  const A5 = [2600, 1800]; lamp(A5[0], A5[1] - 200, 2000, 1);
  const mb = mugBoard(A5, { still: 'waltface' }, typed('УАЙТ, УОЛТЕР Х.', Wt('досье'), .045), typed('АЛЬБУКЕРКЕ · 2008', Wt('уайта', 2) + .4, .03, { silent: true }), { order: 600 });
  const gone = card({ x: A5[0], y: A5[1] - 60, w: 1, h: 1, shadow: 0, lit: false, order: 610, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  gone.s = stamp('ИСЧЕЗ', Wt('исчез') + .05, { size: 110, rot: -.12, shake: 14 });
  typedCard({ x: A5[0] + 780, y: A5[1] + 260, w: 600, h: 220, rot: .04, order: 620, tIn: Wt('главный') - .1, dur: .3, enter: 'slide', dx: 500, dy: 100 },
    [[typed('ГЛАВНЫЙ ВОПРОС:', Wt('главный'), .04), -270, -40, `700 36px ${MONO}`], [typed('когда перестали болеть?', Wt('=перестали'), .03), -270, 30, `400 30px ${MONO}`]]);
  goTo(A5, Wt('гангстера') + .7, Wt('сегодня') + .2, A5[0] - 450, A5[1] - 360);
  hold(Wt('сегодня') + .2, Wt('исчез') + .8, A5[0], A5[1] - 40, 1.05, .01, { dz: .1 });
  camKey(Wt('главный') + .3, A5[0] + 380, A5[1] + 120, .92, .01); camKey(Wt('=перестали', 2) + .4, A5[0] + 500, A5[1] + 200, 1.0, .015);

  // S6 · spoilers tape
  const st6 = card({ x: A5[0] + 300, y: A5[1] - 300, w: 1, h: 1, shadow: 0, order: 640, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  st6.s = stamp('ВНИМАНИЕ', Wt('дальше') + .05, { size: 110, rot: -.1, shake: 12 });
  TAPES.push({ t0: Wt('спойлеры') - .3, dur: .5, ang: -.2, y: -60, dir: 1, out: T_END - .45 });
  TAPES.push({ t0: Wt('эль') - .3, dur: .45, ang: .16, y: 170, dir: -1, out: T_END - .4 });
  TAPES.forEach(tp => sfx('tape', tp.t0, { dur: tp.dur }));
  camKey(Wt('дальше') + .3, A5[0] + 200, A5[1] - 60, 1.02, -.02); camKey(T_END, A5[0] + 260, A5[1] - 20, 1.12, -.04);

  ensureFG([[-1000, 700, 'ashtray', 1.1, 1.9], [3600, 600, 'smoke', 1.6, 1.5, 0, .8], [6200, 900, 'cup', 1.0, 1.9], [1400, 2600, 'pen', 1.2, 1.85, .4]]);
  CAMK.sort((a, b) => a.t - b.t);
}
