import { useEffect, useRef, useState } from "react";
import { AudioLines, Download, Play } from "lucide-react";
import { play, SOUND_NAMES, type SoundName } from "../sounds/sounds";
import { CopyButton } from "./CopyButton";
import { downloadSounds } from "./source";

export default function SoundsPage() {
  const [playing, setPlaying] = useState<SoundName>();
  const [error, setError] = useState(false);
  const timeout = useRef<number>(undefined);

  useEffect(() => () => window.clearTimeout(timeout.current), []);

  function preview(name: SoundName) {
    play(name);
    setPlaying(name);
    window.clearTimeout(timeout.current);
    timeout.current = window.setTimeout(() => setPlaying(undefined), 760);
  }

  return (
    <main className="container sounds-page">
      <div className="collection-header">
        <div><div className="heading-count"><h1>界面音效</h1><span>{SOUND_NAMES.length}</span></div><p>试听音效，复制调用代码或下载完整音效包。</p></div>
        <button className="button primary" onClick={() => { setError(false); downloadSounds().catch(() => setError(true)); }}><Download size={18} />下载音效包</button>
      </div>
      {error && <p className="inline-error" role="status">下载失败，请重试。</p>}
      <div className="sounds-grid">
        {SOUND_NAMES.map(name => (
          <article className="sound-card" key={name}>
            <button className="sound-play" aria-label={"试听 " + name} onClick={() => preview(name)} data-playing={playing === name}>
              {playing === name ? <AudioLines size={19} /> : <Play size={17} />}
            </button>
            <div className="sound-name"><h2>{name}</h2><code>play("{name}")</code></div>
            <CopyButton value={`play("${name}");`} />
          </article>
        ))}
      </div>
    </main>
  );
}
