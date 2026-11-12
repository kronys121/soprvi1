import { AbsoluteFill, Audio, Sequence, staticFile } from 'remotion';
import { Chapter } from './Chapter';
import CH from './chapters.json';

// Full film: 13 chapters back to back + the finished mix (voice, dub inserts, score, foley; -14 LUFS).
export const Film = () => (
  <AbsoluteFill style={{ backgroundColor: '#000' }}>
    {CH.map((c) => (
      <Sequence key={c.ch} from={c.from} durationInFrames={c.frames} name={`${String(c.ch).padStart(2, '0')} ${c.title}`}>
        <Chapter ch={c.ch} t0={c.t0} />
      </Sequence>
    ))}
    <Audio src={staticFile('audio.m4a')} />
  </AbsoluteFill>
);

// A single chapter with its piece of the soundtrack (for partial renders / previews).
export const OneChapter = ({ ch }) => {
  const c = CH[ch];
  return (
    <AbsoluteFill style={{ backgroundColor: '#000' }}>
      <Chapter ch={c.ch} t0={c.t0} />
      <Audio src={staticFile('audio.m4a')} startFrom={c.from} />
    </AbsoluteFill>
  );
};
