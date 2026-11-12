import { Composition } from 'remotion';
import { Film, OneChapter } from './Film';
import CH from './chapters.json';

const total = CH.reduce((s, c) => s + c.frames, 0);

export const RemotionRoot = () => (
  <>
    <Composition id="Nacho" component={Film} durationInFrames={total} fps={60} width={1920} height={1080} />
    {CH.map((c) => (
      <Composition
        key={c.ch}
        id={`Chapter${String(c.ch).padStart(2, '0')}`}
        component={OneChapter}
        defaultProps={{ ch: c.ch }}
        durationInFrames={c.frames}
        fps={60}
        width={1920}
        height={1080}
      />
    ))}
  </>
);
