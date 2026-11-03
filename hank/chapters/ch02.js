// 02 · ТУКО
CH_V0 = 138.3;
const [T_START, T_END] = chRange(2);
function buildScenes() {
  const D = [0, 0]; divider(D, 2, 'ТУКО', T_START);
  hold(T_START, Wt('удар') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · on the trail of the missing Jesse: a shack in the desert, Tuco holds Walt and Jesse; Hank doesn't know
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2100, 1.05);
  const ms = card({ x: A1[0] - 560, y: A1[1] - 220, w: 480, h: 220, rot: -.04, order: 100, color: '#f3efe2', lined: false, tIn: Wt('судьбы') - .2, dur: .3, enter: 'slide', dx: -400, dy: -200,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -40, `800 40px ${SANS}`, RED, 'center'); drawTyped(g, it.b, t, 0, 30, `700 28px ${MONO}`, INK, 'center'); } });
  ms.a = typed('ПРОПАЛ', Wt('пропавшего') - .1, .06); ms.b = typed('Джесси Пинкман', Wt('джесси') - .1, .04);
  pw('hankarrive', Wt('домик') - .4, { x: A1[0] - 560, y: A1[1] + 220, w: 480, rot: .04, order: 105, off: 1, caption: capt('ДОМИК В ПУСТЫНЕ', Wt('пустыне')), capSize: 22 });
  const tk = pw('tucorifle', Wt('туко') - .4, { x: A1[0] + 300, y: A1[1] - 40, w: 760, rot: .015, order: 110, off: 0, caption: capt('ТУКО САЛАМАНКА', Wt('саламанка')), capSize: 26 });
  tk.stamps = [stamp('ЗАЛОЖНИКИ', Wt('заложниках') - .1, { x: 0, y: 60, size: 64, rot: -.07, shake: 14 })];
  card({ x: A1[0] + 300, y: A1[1] + 400, w: 1, h: 1, shadow: 0, lit: false, order: 120, tIn: 0, scrawls: [scrawl('Хэнк этого не знает', Wt('знает') - .5, .5, { size: 50, rot: -.04 })] });
  goTo(A1, Wt('удар') + .2, Wt('судьбы') + .1, A1[0] - 860, A1[1] - 460);
  hold(Wt('судьбы') + .1, Wt('пустыне') + .3, A1[0] - 560, A1[1], 1.0, -.015, { dz: .05 });
  camKey(Wt('туко') + .2, A1[0] + 300, A1[1] - 40, 1.02, .015); camKey(Wt('знает') + .4, A1[0] + 300, A1[1] + 120, .95, 0); camKey(Wt('оружием') + .3, A1[0] + 300, A1[1] + 140, 1.0, .01);

  // S2 · the shootout is short; Tuco falls dead; Hank is a hero
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2100, 1.05);
  const sh = pw('hankaim', Wt('перестрелка') - .4, { x: A2[0] - 300, y: A2[1] - 40, w: 820, rot: -.015, order: 200, off: 3 });
  sh.stamps = [stamp('ПЕРЕСТРЕЛКА', Wt('короткая') - .1, { x: 0, y: 100, size: 70, rot: -.07, shake: 22 })];
  const td = pw('tucodead', Wt('падает') - .4, { x: A2[0] + 640, y: A2[1] - 180, w: 440, rot: .05, order: 210, off: 2, caption: capt('ТУКО — МЁРТВ', Wt('мёртвым')), capSize: 22 });
  const hr = card({ x: A2[0] + 640, y: A2[1] + 260, w: 1, h: 1, shadow: 0, lit: false, order: 220, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  hr.s = stamp('ГЕРОЙ', Wt('герой') - .1, { size: 96, rot: -.08, shake: 16 });
  sfx('shot', Wt('стреляет') - .1); sfx('shot', Wt('отвечает') - .1);
  goTo(A2, Wt('оружием') + .5, Wt('перестрелка') + .1, A2[0] - 860, A2[1] - 440);
  camKey(Wt('перестрелка') + .1, A2[0] - 300, A2[1] - 40, 1.05, -.01); camKey(Wt('отвечает') + .1, A2[0] - 300, A2[1] - 40, 1.25, .02);
  camKey(Wt('падает') + .2, A2[0] + 600, A2[1] - 160, 1.08, .015); camKey(Wt('герой') + .3, A2[0] + 600, A2[1] + 100, .95, .01); camKey(Wt('городе') + .3, A2[0] + 300, A2[1] + 60, .85, 0);

  // S3 · colleagues congratulate, the bosses notice: promotion, El Paso task force on the border — dream career
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2000, 1);
  const pm = card({ x: A3[0] - 300, y: A3[1] - 60, w: 800, h: 460, rot: -.02, order: 300, lined: true, tIn: Wt('коллеги') - .3, dur: .3, enter: 'slide', dx: 0, dy: -400,
    text: (g, t, it) => { drawChecks(g, t, it.cl, `700 30px ${MONO}`); drawTyped(g, it.a, t, -350, 140, `800 44px ${SANS}`, RED); } });
  pm.cl = [checkLine('ПОЗДРАВЛЕНИЯ', Wt('поздравляют') + .1, 'v', -350, -170), checkLine('НАЧАЛЬСТВО ЗАМЕТИЛО', Wt('замечает') + .1, 'v', -350, -100), checkLine('ПОВЫШЕНИЕ', Wt('повышают') + .1, 'v', -350, -30), checkLine('ЭЛЬ-ПАСО · ГРАНИЦА', Wt('эль-пасо') + .1, 'v', -350, 40)];
  pm.a = typed('КАРЬЕРА МЕЧТЫ', Wt('карьера') - .1, .05);
  pw('elpaso', Wt('картелей') - .6, { x: A3[0] + 640, y: A3[1] - 40, w: 440, rot: .04, order: 310, off: 2, caption: capt('ВОЙНА КАРТЕЛЕЙ', Wt('картелей')), capSize: 20 });
  goTo(A3, Wt('городе') + .5, Wt('коллеги') + .1, A3[0] - 800, A3[1] - 460);
  hold(Wt('коллеги') + .1, Wt('эль-пасо') + .4, A3[0] - 300, A3[1] - 120, 1.05, -.015, { dz: .05 });
  camKey(Wt('картелей') + .2, A3[0] + 300, A3[1] - 40, .9, .01); camKey(Wt('мечты') + .3, A3[0] - 200, A3[1] + 120, 1.08, -.01);

  // S4 · the souvenir: Tuco's gold teeth in a frame; everyone laughs, Hank too — but something inside is off
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 1900, .9);
  const gr = pw('grillthrow', Wt('сувенира') - .4, { x: A4[0] - 120, y: A4[1] - 40, w: 860, rot: -.01, order: 400, off: 1, caption: capt('ЗОЛОТЫЕ ЗУБЫ ТУКО · В РАМОЧКЕ', Wt('рамочке')), capSize: 26 });
  tag({ x: A4[0] + 520, y: A4[1] - 330, w: 360, rot: .06, label: 'СУВЕНИР', tIn: Wt('сувенира') - .05, order: 410, size: 40 });
  card({ x: A4[0] - 520, y: A4[1] + 420, w: 1, h: 1, shadow: 0, lit: false, order: 420, tIn: 0, scrawls: [scrawl('все смеются', Wt('смеются') - .3, .4, { size: 46, rot: -.05 })] });
  card({ x: A4[0] + 300, y: A4[1] + 430, w: 1, h: 1, shadow: 0, lit: false, order: 430, tIn: 0, scrawls: [scrawl('внутри — что-то не так', Wt('внутри') - .3, .6, { size: 50, rot: -.03 })] });
  goTo(A4, Wt('мечты') + .5, Wt('качестве') + .1, A4[0] - 860, A4[1] - 460);
  camKey(Wt('сувенира') + .2, A4[0] - 120, A4[1] - 40, 1.05, 0); camKey(Wt('рамочке') + .4, A4[0] - 120, A4[1] - 20, 1.18, .01);
  camKey(Wt('смеются') + .2, A4[0] - 200, A4[1] + 200, .9, -.01); camKey(T_END, A4[0] + 100, A4[1] + 240, .98, .01);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
