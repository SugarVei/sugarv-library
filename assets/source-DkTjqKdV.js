import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{t as r}from"./check-BkZ2_Ug7.js";import{t as i}from"./copy-ByUc2O2C.js";import{d as a,i as o,n as s}from"./index-BzSDSNTK.js";var c={name:`download`,size:24,node:[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]};c.node;var l=a(c),u=e(t(),1),d=n();function f({value:e,label:t=`复制`,className:n=``}){let[a,o]=(0,u.useState)(`idle`);(0,u.useEffect)(()=>{if(a===`idle`)return;let e=window.setTimeout(()=>o(`idle`),2200);return()=>window.clearTimeout(e)},[a]);async function s(){try{await navigator.clipboard.writeText(e),o(`copied`)}catch{o(`failed`)}}return(0,d.jsxs)(`button`,{className:`button small-button ${n}`,onClick:s,children:[a===`copied`?(0,d.jsx)(r,{size:16}):(0,d.jsx)(i,{size:16}),(0,d.jsx)(`span`,{"aria-live":`polite`,children:a===`copied`?`已复制`:a===`failed`?`复制失败`:t})]})}var p=`data:image/webp;base64,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`,m=new URL(`card-2-DjpX2Z5o.webp`,import.meta.url).href,h=new URL(`card-3-BdicEZob.webp`,import.meta.url).href,g=new URL(`card-4-CKlAVqYb.webp`,import.meta.url).href,_=new URL(`card-5-B7dw9XN1.webp`,import.meta.url).href,v=new URL(`bloom-BG7YVex_.webp`,import.meta.url).href,y=new URL(`mountain-BCSScqvs.webp`,import.meta.url).href,b=new URL(`peak-CzZM51UB.webp`,import.meta.url).href,x=new URL(`wings-CNTX5XBL.webp`,import.meta.url).href,S=new URL(`mountain-BCSScqvs.webp`,import.meta.url).href,C=new URL(`yak-radiograph-Doaysrfw.webp`,import.meta.url).href,w=new URL(`yak-DXjftyfI.webp`,import.meta.url).href,T=new URL(`mountain-BCSScqvs.webp`,import.meta.url).href,E=`/* ── Bencho tokens ─────────────────────────────────────────
   The custom properties the free blocks read, at the values
   bencho.dev draws them with. Light by default; dark under
   [data-theme="dark"] on any ancestor, or automatically with
   the system setting unless [data-theme="light"] says otherwise.

   Map these to your own theme rather than keeping two: a block
   only ever reads the names, never the values. */
:root {
  --font-ui: "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --bg: #ffffff;
  --board: #ffffff;
  --card: #f7f7f6;
  --surface: #f7f7f6;
  --surface-2: #f1f1f0;
  --surface-3: #ecebe7;
  --ink: #17181a;
  --ink-rgb: 23, 24, 26;
  --ink-2: #3c3b37;
  --ink-3: #5c5b56;
  --ink-4: #6f6e68;
  --ink-5: #85847e;
  --on-ink: #ffffff;
  --on-ink-rgb: 255, 255, 255;
  --slab: #17181a;
  --on-slab: #ffffff;
  --slab-dark: #0e0f11;
  --fill-slab: #ffffff;
  --fill-on: #17181a;
  --fill-on-rgb: 23, 24, 26;
  --pane: var(--fill-slab);
  --pane-edge: rgba(23, 24, 26, 0.08);
  --pane-thumb: rgba(23, 24, 26, 0.07);
  --inlay: rgba(255, 255, 255, 0.55);
  --inlay-hi: rgba(23, 24, 26, 0.09);
  --elev-rgb: 255, 255, 255;
  --glass-rgb: 255, 255, 255;
  --shadow-rgb: 23, 24, 26;
  --wash: 0.06;
  --pick: #0d99ff;
  --signal: #2231dd;
  --focus: #2231dd;
  --ok: #15803d;
  --ember: #b8431c;
  color-scheme: light;
}

[data-theme="dark"] {
  --bg: #000000;
  --board: #1a1a1a;
  --card: #0a0a0a;
  --surface: #0f0f0f;
  --surface-2: #181818;
  --surface-3: #202020;
  --ink: #ffffff;
  --ink-rgb: 255, 255, 255;
  --ink-2: #b4b4b4;
  --ink-3: #9a9a9a;
  --ink-4: #828282;
  --ink-5: #6b6b6b;
  --on-ink: #000000;
  --on-ink-rgb: 0, 0, 0;
  --slab: #1a1a1a;
  --on-slab: #ffffff;
  --slab-dark: #262626;
  --fill-slab: #262626;
  --fill-on: #ffffff;
  --fill-on-rgb: 255, 255, 255;
  --pane-edge: rgba(255, 255, 255, 0.08);
  --pane-thumb: rgba(255, 255, 255, 0.07);
  --inlay: rgba(255, 255, 255, 0.1);
  --inlay-hi: rgba(255, 255, 255, 0.09);
  --elev-rgb: 32, 32, 32;
  --shadow-rgb: 0, 0, 0;
  --wash: 0.09;
  --pick: #3aa9ff;
  --ok: #34d17a;
  color-scheme: dark;
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg: #000000;
    --board: #1a1a1a;
    --card: #0a0a0a;
    --surface: #0f0f0f;
    --surface-2: #181818;
    --surface-3: #202020;
    --ink: #ffffff;
    --ink-rgb: 255, 255, 255;
    --ink-2: #b4b4b4;
    --ink-3: #9a9a9a;
    --ink-4: #828282;
    --ink-5: #6b6b6b;
    --on-ink: #000000;
    --on-ink-rgb: 0, 0, 0;
    --slab: #1a1a1a;
    --on-slab: #ffffff;
    --slab-dark: #262626;
    --fill-slab: #262626;
    --fill-on: #ffffff;
    --fill-on-rgb: 255, 255, 255;
    --pane-edge: rgba(255, 255, 255, 0.08);
    --pane-thumb: rgba(255, 255, 255, 0.07);
    --inlay: rgba(255, 255, 255, 0.1);
    --inlay-hi: rgba(255, 255, 255, 0.09);
    --elev-rgb: 32, 32, 32;
    --shadow-rgb: 0, 0, 0;
    --wash: 0.09;
    --pick: #3aa9ff;
    --ok: #34d17a;
    color-scheme: dark;
  }
}
`,D=`MIT License

Copyright (c) 2026 Lorenzo Cabra

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

Not covered by this licence: the Bencho name and the goat mark, and the
photographs shown on bencho.dev (none are included here). Third-party
material keeps its own licence; see THIRD_PARTY.md.
`,O=`# Third-party notices

## cuelume

The sounds **Beacon** (\`beacon\`) and **Plop** (\`plop\`) in \`sounds/sounds.ts\` are rebuilt from the recipes of [cuelume](https://cuelume.dev) by Daniel Belyi.

\`\`\`
MIT License

Copyright (c) 2026 Daniel Belyi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
\`\`\`

## Packages

The blocks use [framer-motion](https://github.com/motiondivision/motion), [lucide-react](https://github.com/lucide-icons/lucide) and [liquid-gooey](https://www.npmjs.com/package/liquid-gooey), each under its own licence.
`,k=`/* ── Bencho sounds ─────────────────────────────────────────
   24 interface sounds from https://bencho.dev/sounds, synthesised with the
   Web Audio API: no files, no dependencies, a few hundred bytes
   each. Every sound is a list of notes — an oscillator or a burst
   of filtered noise, a lowpass, and an envelope.

     import { play } from "./sounds";
     button.onclick = () => play("tick");

   Browsers only allow audio after a user gesture, so call play()
   from a click, a key press or a pointer event.

   MIT licensed. Beacon and Plop are rebuilt from cuelume by
   Daniel Belyi (MIT, © 2026 Daniel Belyi) — see THIRD_PARTY.md. */

export type Note = {
  hz: number;        // pitch, or the filter's corner for noise
  to?: number;       // glide to this
  glide?: number;    // ms the glide takes, if not the whole note
  ms: number;        // length
  gain?: number;
  wave?: OscillatorType;
  cut?: number;      // lowpass
  at?: number;       // start, ms after play()
  atk?: number;      // attack, ms
  noise?: "bandpass" | "lowpass";
  q?: number;
  lin?: true;        // linear swell instead of exponential
};

export const SOUNDS = {
  /* Paid · Feedback */
  paid: [
    { hz: 587, ms: 170, gain: 0.05, wave: "sine", cut: 2600, atk: 5 },
    { hz: 880, ms: 460, gain: 0.046, wave: "sine", cut: 2800, atk: 6, at: 95 },
    { hz: 1760, ms: 300, gain: 0.009, wave: "sine", atk: 8, at: 100 },
  ],
  /* Landed · Feedback */
  landed: [
    { hz: 330, to: 620, ms: 120, gain: 0.018, wave: "triangle", cut: 1400, atk: 30 },
    { hz: 784, ms: 120, gain: 0.04, wave: "sine", cut: 2600, atk: 4, at: 70 },
    { hz: 1047, ms: 130, gain: 0.04, wave: "sine", cut: 2800, atk: 4, at: 140 },
    { hz: 1319, ms: 520, gain: 0.044, wave: "sine", cut: 3000, atk: 5, at: 210 },
    { hz: 2638, ms: 320, gain: 0.007, wave: "sine", atk: 8, at: 215 },
  ],
  /* Plop · Actions */
  plop: [
    { hz: 480, to: 300, glide: 18, ms: 23, gain: 0.064, atk: 1 },
    { hz: 600, to: 900, glide: 40, ms: 61, gain: 0.015, atk: 12 },
    { hz: 960, to: 600, glide: 18, ms: 18, gain: 0.016, atk: 1 },
  ],
  /* Beacon · Notifications */
  beacon: [
    { hz: 2500, ms: 5, gain: 0.029, noise: "lowpass", q: -3, atk: 1 },
    { hz: 880, ms: 602, gain: 0.026, atk: 3 },
    { hz: 2428.8, ms: 283, gain: 0.0077, atk: 3 },
    { hz: 4752, ms: 172, gain: 0.0026, atk: 3 },
    { hz: 882, ms: 573, gain: 0.014, atk: 3 },
    { hz: 1318.51, ms: 562, gain: 0.02, atk: 3 },
    { hz: 3639.1, ms: 264, gain: 0.0059, atk: 3 },
  ],
  /* Drift · Movement */
  drift: [
    { hz: 174, to: 155, ms: 250, gain: 0.034, wave: "sine", cut: 640, atk: 28 },
  ],
  /* Hush · System */
  hush: [
    { hz: 330, to: 247, ms: 88, gain: 0.03, wave: "sine", cut: 720, atk: 8 },
  ],
  /* Wisp · Movement */
  wisp: [
    { hz: 660, to: 720, ms: 38, gain: 0.028, wave: "sine" },
  ],
  /* Sigh · Feedback */
  sigh: [
    { hz: 262, to: 131, ms: 28, gain: 0.065, wave: "triangle", cut: 1700, atk: 8 },
  ],
  /* Perk · Notifications */
  perk: [
    { hz: 330, ms: 360, gain: 0.053, wave: "sine", cut: 560, atk: 90 },
  ],
  /* Purr · System */
  purr: [
    { hz: 92, ms: 350, gain: 0.046, wave: "triangle", cut: 1100, atk: 32 },
  ],
  /* Lull · Movement */
  lull: [
    { hz: 234, ms: 214, gain: 0.054, wave: "sine", cut: 820, atk: 8 },
  ],
  /* Whisk · Navigation */
  whisk: [
    { hz: 124, to: 65, ms: 130, gain: 0.067, wave: "sine", cut: 560, atk: 50 },
  ],
  /* Buzz · Feedback */
  buzz: [
    { hz: 344, to: 239, ms: 24, gain: 0.048, wave: "triangle", cut: 1100, atk: 7 },
  ],
  /* Bump · Feedback */
  bump: [
    { hz: 208, to: 165, ms: 120, gain: 0.03, wave: "sine", cut: 520, atk: 10 },
  ],
  /* Float · Movement */
  float: [
    { hz: 262, ms: 322, gain: 0.052, wave: "sine", cut: 820, atk: 16 },
  ],
  /* Glide · Navigation */
  glide: [
    { hz: 397, to: 276, ms: 205, gain: 0.065, wave: "sine", cut: 820, atk: 90 },
  ],
  /* Step · Navigation */
  step: [
    { hz: 227, to: 114, ms: 311, gain: 0.051, wave: "sine", cut: 820, atk: 90 },
  ],
  /* Wander · Movement */
  wander: [
    { hz: 315, ms: 326, gain: 0.061, wave: "sine", cut: 820, atk: 7 },
  ],
  /* Tick · Selection */
  tick: [
    { hz: 196, to: 130, ms: 150, gain: 0.07, wave: "sine", cut: 900 },
  ],
  /* Latch · Selection */
  latch: [
    { hz: 256, ms: 90, gain: 0.058, wave: "square", cut: 2400, atk: 10 },
  ],
  /* Hail · Notifications */
  hail: [
    { hz: 392, ms: 360, gain: 0.051, wave: "sine", cut: 560, atk: 90 },
  ],
  /* Drape · Movement */
  drape: [
    { hz: 220, ms: 215, gain: 0.059, wave: "sine", cut: 560, atk: 8 },
  ],
  /* Boot · System */
  boot: [
    { hz: 291, ms: 360, gain: 0.043, wave: "sine", cut: 560, atk: 90 },
  ],
  /* Drone · System */
  drone: [
    { hz: 115, ms: 294, gain: 0.068, wave: "sine", cut: 560, atk: 72 },
  ],
} satisfies Record<string, Note[]>;

export type SoundName = keyof typeof SOUNDS;
export const SOUND_NAMES = Object.keys(SOUNDS) as SoundName[];

let ctx: AudioContext | null = null;
const NOISE = new WeakMap<BaseAudioContext, AudioBuffer>();
function noiseFor(c: BaseAudioContext) {
  let b = NOISE.get(c);
  if (!b) {
    b = c.createBuffer(1, Math.floor(c.sampleRate * 2), c.sampleRate);
    const d = b.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    NOISE.set(c, b);
  }
  return b;
}

/* write a sound's notes into any context, at a time — the same
   code plays it live and can render it into an OfflineAudioContext */
export function schedule(c: BaseAudioContext, notes: readonly Note[], when: number, volume = 1, bend = 1) {
  for (const n of notes) {
    const t0 = when + (n.at ?? 0) / 1000;
    const t1 = t0 + n.ms / 1000;
    const tg = n.glide ? t0 + n.glide / 1000 : t1;
    let src: AudioScheduledSourceNode;
    let head: AudioNode;
    if (n.noise) {
      const s = c.createBufferSource();
      s.buffer = noiseFor(c);
      s.loop = true;
      const f = c.createBiquadFilter();
      f.type = n.noise;
      f.frequency.setValueAtTime(n.hz * bend, t0);
      if (n.to) f.frequency.exponentialRampToValueAtTime(n.to * bend, tg);
      if (n.q !== undefined) f.Q.value = n.q;
      s.connect(f);
      src = s;
      head = f;
    } else {
      const o = c.createOscillator();
      o.type = n.wave ?? "sine";
      o.frequency.setValueAtTime(n.hz * bend, t0);
      if (n.to) o.frequency.exponentialRampToValueAtTime(n.to * bend, tg);
      src = o;
      head = o;
    }
    /* nothing starts at full gain: that is a click on the front */
    const g = c.createGain();
    const atk = Math.min((n.atk ?? 4) / 1000, (n.ms / 1000) * 0.6);
    const peak = (n.gain ?? 0.05) * volume;
    g.gain.setValueAtTime(0.0001, t0);
    if (n.lin) g.gain.linearRampToValueAtTime(peak, t0 + atk);
    else g.gain.exponentialRampToValueAtTime(peak, t0 + atk);
    g.gain.exponentialRampToValueAtTime(0.0001, t1);
    let tail: AudioNode = head;
    if (n.cut) {
      const f = c.createBiquadFilter();
      f.type = "lowpass";
      f.frequency.value = n.cut;
      head.connect(f);
      tail = f;
    }
    tail.connect(g).connect(c.destination);
    if (n.noise) (src as AudioBufferSourceNode).start(t0, Math.random() * 1.5);
    else src.start(t0);
    src.stop(t1 + 0.02);
  }
}

/* play a sound now. \`volume\` scales it (1 is as designed);
   \`pitch\` bends it, 1 being as written — 1.12 is about two
   semitones up, handy for a row of items that should rise */
export function play(name: SoundName, o: { volume?: number; pitch?: number } = {}) {
  if (typeof window === "undefined") return;
  ctx ??= new AudioContext();
  if (ctx.state === "suspended") void ctx.resume();
  schedule(ctx, SOUNDS[name], ctx.currentTime + 0.005, o.volume ?? 1, o.pitch ?? 1);
}
`,A='# Sounds\n\n24 interface sounds, synthesised in the browser with the Web Audio API. No audio files and no dependencies: [`sounds.ts`](sounds.ts) is the whole thing.\n\n**[Hear them on bencho.dev →](https://bencho.dev/sounds)**\n\n```ts\nimport { play } from "./sounds";\n\nbutton.addEventListener("click", () => play("tick"));\nplay("paid", { volume: 0.8 });\nplay("step", { pitch: 1.12 }); // a little higher\n```\n\nBrowsers only start audio after a user gesture, so call `play()` from a click, a key press or a pointer event.\n\n| Name | Call | Family |\n| --- | --- | --- |\n| Paid | `play("paid")` | Feedback |\n| Landed | `play("landed")` | Feedback |\n| Plop | `play("plop")` | Actions |\n| Beacon | `play("beacon")` | Notifications |\n| Drift | `play("drift")` | Movement |\n| Hush | `play("hush")` | System |\n| Wisp | `play("wisp")` | Movement |\n| Sigh | `play("sigh")` | Feedback |\n| Perk | `play("perk")` | Notifications |\n| Purr | `play("purr")` | System |\n| Lull | `play("lull")` | Movement |\n| Whisk | `play("whisk")` | Navigation |\n| Buzz | `play("buzz")` | Feedback |\n| Bump | `play("bump")` | Feedback |\n| Float | `play("float")` | Movement |\n| Glide | `play("glide")` | Navigation |\n| Step | `play("step")` | Navigation |\n| Wander | `play("wander")` | Movement |\n| Tick | `play("tick")` | Selection |\n| Latch | `play("latch")` | Selection |\n| Hail | `play("hail")` | Notifications |\n| Drape | `play("drape")` | Movement |\n| Boot | `play("boot")` | System |\n| Drone | `play("drone")` | System |\n\nEach sound is a short list of notes in `SOUNDS`. Change a number and you have a new sound; `schedule()` also renders into an `OfflineAudioContext` if you want a file.\n\n[Bencho Pro](https://bencho.dev/pricing) has 140+ more, layering and WAV downloads.\n',j=Object.assign({"../blocks/action-node/ActionNode.css":()=>o(()=>import(`./ActionNode-Bt2I9II9.js`).then(e=>e.default),[],import.meta.url),"../blocks/action-node/ActionNode.tsx":()=>o(()=>import(`./ActionNode-BNjEWRi_.js`).then(e=>e.default),[],import.meta.url),"../blocks/action-node/README.md":()=>o(()=>import(`./README-CoCJ1dXm.js`).then(e=>e.default),[],import.meta.url),"../blocks/ascii-wake/AsciiWake.css":()=>o(()=>import(`./AsciiWake-BmY7fFJL.js`).then(e=>e.default),[],import.meta.url),"../blocks/ascii-wake/AsciiWake.tsx":()=>o(()=>import(`./AsciiWake-B8JcEUAO.js`).then(e=>e.default),[],import.meta.url),"../blocks/ascii-wake/README.md":()=>o(()=>import(`./README-ZIM-9tEz.js`).then(e=>e.default),[],import.meta.url),"../blocks/aspect/Aspect.css":()=>o(()=>import(`./Aspect-DHXgxNb2.js`).then(e=>e.default),[],import.meta.url),"../blocks/aspect/Aspect.tsx":()=>o(()=>import(`./Aspect-BMBLAo39.js`).then(e=>e.default),[],import.meta.url),"../blocks/aspect/README.md":()=>o(()=>import(`./README-BTdy3qBq.js`).then(e=>e.default),[],import.meta.url),"../blocks/asset-swap/README.md":()=>o(()=>import(`./README-YXwjcYzZ.js`).then(e=>e.default),[],import.meta.url),"../blocks/asset-swap/Swap.css":()=>o(()=>import(`./Swap-Ckwrz-Rf.js`).then(e=>e.default),[],import.meta.url),"../blocks/asset-swap/Swap.tsx":()=>o(()=>import(`./Swap-tw95SR8V.js`).then(e=>e.default),[],import.meta.url),"../blocks/card-stack/README.md":()=>o(()=>import(`./README-C4fYii4G.js`).then(e=>e.default),[],import.meta.url),"../blocks/card-stack/Stack.css":()=>o(()=>import(`./Stack-BnAetwum.js`).then(e=>e.default),[],import.meta.url),"../blocks/card-stack/Stack.tsx":()=>o(()=>import(`./Stack-ywxsqm5m.js`).then(e=>e.default),[],import.meta.url),"../blocks/card-swap/CardSwap.css":()=>o(()=>import(`./CardSwap-CNpBw8ek.js`).then(e=>e.default),[],import.meta.url),"../blocks/card-swap/CardSwap.tsx":()=>o(()=>import(`./CardSwap-ClEPLjtR.js`).then(e=>e.default),[],import.meta.url),"../blocks/card-swap/README.md":()=>o(()=>import(`./README-SaR4sBqt.js`).then(e=>e.default),[],import.meta.url),"../blocks/carousel/Carousel.css":()=>o(()=>import(`./Carousel-BeVR5MhC.js`).then(e=>e.default),[],import.meta.url),"../blocks/carousel/Carousel.tsx":()=>o(()=>import(`./Carousel-DmJ4d9on.js`).then(e=>e.default),[],import.meta.url),"../blocks/carousel/README.md":()=>o(()=>import(`./README-B2pXwiBw.js`).then(e=>e.default),[],import.meta.url),"../blocks/checklist/Checklist.css":()=>o(()=>import(`./Checklist-DQ7rzJGJ.js`).then(e=>e.default),[],import.meta.url),"../blocks/checklist/Checklist.tsx":()=>o(()=>import(`./Checklist-fTOxq0zC.js`).then(e=>e.default),[],import.meta.url),"../blocks/checklist/README.md":()=>o(()=>import(`./README-B-x8LAc-.js`).then(e=>e.default),[],import.meta.url),"../blocks/context-meter/ContextMeter.css":()=>o(()=>import(`./ContextMeter-BUNbz-4S.js`).then(e=>e.default),[],import.meta.url),"../blocks/context-meter/ContextMeter.tsx":()=>o(()=>import(`./ContextMeter-C17rbgau.js`).then(e=>e.default),[],import.meta.url),"../blocks/context-meter/README.md":()=>o(()=>import(`./README-DxDKhfBh.js`).then(e=>e.default),[],import.meta.url),"../blocks/dock/GlassDock.css":()=>o(()=>import(`./GlassDock-C02334bF.js`).then(e=>e.default),[],import.meta.url),"../blocks/dock/GlassDock.tsx":()=>o(()=>import(`./GlassDock-sFqjjq2R.js`).then(e=>e.default),[],import.meta.url),"../blocks/dock/README.md":()=>o(()=>import(`./README-Dykp0Mq8.js`).then(e=>e.default),[],import.meta.url),"../blocks/drag-ball/Ball.css":()=>o(()=>import(`./Ball-D5hNTcTD.js`).then(e=>e.default),[],import.meta.url),"../blocks/drag-ball/Ball.tsx":()=>o(()=>import(`./Ball-DCvdj23H.js`).then(e=>e.default),[],import.meta.url),"../blocks/drag-ball/README.md":()=>o(()=>import(`./README-DttYFR93.js`).then(e=>e.default),[],import.meta.url),"../blocks/dynamic-island/Island.css":()=>o(()=>import(`./Island-C1r6uUFT.js`).then(e=>e.default),[],import.meta.url),"../blocks/dynamic-island/Island.tsx":()=>o(()=>import(`./Island-DlrrjWCx.js`).then(e=>e.default),[],import.meta.url),"../blocks/dynamic-island/README.md":()=>o(()=>import(`./README-Dz7y7ds1.js`).then(e=>e.default),[],import.meta.url),"../blocks/emoji-reactions/README.md":()=>o(()=>import(`./README-BEpTIyVz.js`).then(e=>e.default),[],import.meta.url),"../blocks/emoji-reactions/Reactions.css":()=>o(()=>import(`./Reactions-BDNqYoSm.js`).then(e=>e.default),[],import.meta.url),"../blocks/emoji-reactions/Reactions.tsx":()=>o(()=>import(`./Reactions-BjU7pXeo.js`).then(e=>e.default),[],import.meta.url),"../blocks/escape/Escape.css":()=>o(()=>import(`./Escape-CcSsqUHG.js`).then(e=>e.default),[],import.meta.url),"../blocks/escape/Escape.tsx":()=>o(()=>import(`./Escape-l6hts8_5.js`).then(e=>e.default),[],import.meta.url),"../blocks/escape/README.md":()=>o(()=>import(`./README-DRkCBTRi.js`).then(e=>e.default),[],import.meta.url),"../blocks/eye-tracker/README.md":()=>o(()=>import(`./README-CvEVkbj3.js`).then(e=>e.default),[],import.meta.url),"../blocks/eye-tracker/Watcher.css":()=>o(()=>import(`./Watcher-CQ2lnRy4.js`).then(e=>e.default),[],import.meta.url),"../blocks/eye-tracker/Watcher.tsx":()=>o(()=>import(`./Watcher-C-s0vwFM.js`).then(e=>e.default),[],import.meta.url),"../blocks/folding-bill/FoldingBill.css":()=>o(()=>import(`./FoldingBill-Cfbms9GZ.js`).then(e=>e.default),[],import.meta.url),"../blocks/folding-bill/FoldingBill.tsx":()=>o(()=>import(`./FoldingBill-CQqd8prI.js`).then(e=>e.default),[],import.meta.url),"../blocks/folding-bill/README.md":()=>o(()=>import(`./README-B8VD1KQO.js`).then(e=>e.default),[],import.meta.url),"../blocks/generate/Generate.css":()=>o(()=>import(`./Generate-DfP4wziQ.js`).then(e=>e.default),[],import.meta.url),"../blocks/generate/Generate.tsx":()=>o(()=>import(`./Generate-KVpjvR5_.js`).then(e=>e.default),[],import.meta.url),"../blocks/generate/README.md":()=>o(()=>import(`./README-n8Bo0VlX.js`).then(e=>e.default),[],import.meta.url),"../blocks/glass-bubble/LiquidGlass.css":()=>o(()=>import(`./LiquidGlass-CRA6j9Il.js`).then(e=>e.default),[],import.meta.url),"../blocks/glass-bubble/LiquidGlass.tsx":()=>o(()=>import(`./LiquidGlass-B_tO0xx1.js`).then(e=>e.default),[],import.meta.url),"../blocks/glass-bubble/README.md":()=>o(()=>import(`./README-BMMKrGKR.js`).then(e=>e.default),[],import.meta.url),"../blocks/heat-word/HeatWord.css":()=>o(()=>import(`./HeatWord-DGRjdGUp.js`).then(e=>e.default),[],import.meta.url),"../blocks/heat-word/HeatWord.tsx":()=>o(()=>import(`./HeatWord-BWKRtHE3.js`).then(e=>e.default),[],import.meta.url),"../blocks/heat-word/README.md":()=>o(()=>import(`./README-CFanZGr9.js`).then(e=>e.default),[],import.meta.url),"../blocks/image-accordion/Accordion.css":()=>o(()=>import(`./Accordion-BEfAvX9O.js`).then(e=>e.default),[],import.meta.url),"../blocks/image-accordion/Accordion.tsx":()=>o(()=>import(`./Accordion-ByppLqCU.js`).then(e=>e.default),[],import.meta.url),"../blocks/image-accordion/README.md":()=>o(()=>import(`./README-CVxmb3JE.js`).then(e=>e.default),[],import.meta.url),"../blocks/image-compare/Compare.css":()=>o(()=>import(`./Compare-B0soPAKP.js`).then(e=>e.default),[],import.meta.url),"../blocks/image-compare/Compare.tsx":()=>o(()=>import(`./Compare-CO82f5oQ.js`).then(e=>e.default),[],import.meta.url),"../blocks/image-compare/README.md":()=>o(()=>import(`./README-mqURsbmI.js`).then(e=>e.default),[],import.meta.url),"../blocks/label-input/LabelInput.css":()=>o(()=>import(`./LabelInput-Dr37sf4w.js`).then(e=>e.default),[],import.meta.url),"../blocks/label-input/LabelInput.tsx":()=>o(()=>import(`./LabelInput-D75u4CA0.js`).then(e=>e.default),[],import.meta.url),"../blocks/label-input/README.md":()=>o(()=>import(`./README-BLJ-NoKB.js`).then(e=>e.default),[],import.meta.url),"../blocks/like/Like.css":()=>o(()=>import(`./Like-D02ZVz4z.js`).then(e=>e.default),[],import.meta.url),"../blocks/like/Like.tsx":()=>o(()=>import(`./Like-DdSOaxmO.js`).then(e=>e.default),[],import.meta.url),"../blocks/like/README.md":()=>o(()=>import(`./README-CGeU05rd.js`).then(e=>e.default),[],import.meta.url),"../blocks/liq-create/Create.css":()=>o(()=>import(`./Create-BCi1xsac.js`).then(e=>e.default),[],import.meta.url),"../blocks/liq-create/Create.tsx":()=>o(()=>import(`./Create-CcQseeFM.js`).then(e=>e.default),[],import.meta.url),"../blocks/liq-create/README.md":()=>o(()=>import(`./README-DO9XJPoS.js`).then(e=>e.default),[],import.meta.url),"../blocks/liq-toggle/README.md":()=>o(()=>import(`./README-GiR7Izym.js`).then(e=>e.default),[],import.meta.url),"../blocks/liq-toggle/Toggle.css":()=>o(()=>import(`./Toggle-BcOR-_XC.js`).then(e=>e.default),[],import.meta.url),"../blocks/liq-toggle/Toggle.tsx":()=>o(()=>import(`./Toggle-BF86RpKQ.js`).then(e=>e.default),[],import.meta.url),"../blocks/magnet-select/MagneticSelect.css":()=>o(()=>import(`./MagneticSelect-DXclOfNs.js`).then(e=>e.default),[],import.meta.url),"../blocks/magnet-select/MagneticSelect.tsx":()=>o(()=>import(`./MagneticSelect-YFLKndFD.js`).then(e=>e.default),[],import.meta.url),"../blocks/magnet-select/README.md":()=>o(()=>import(`./README-Ba83Mz3K.js`).then(e=>e.default),[],import.meta.url),"../blocks/one-time-code/Otp.css":()=>o(()=>import(`./Otp-Cwgnj8vH.js`).then(e=>e.default),[],import.meta.url),"../blocks/one-time-code/Otp.tsx":()=>o(()=>import(`./Otp-FmjzNZCi.js`).then(e=>e.default),[],import.meta.url),"../blocks/one-time-code/README.md":()=>o(()=>import(`./README-DLuRYZbM.js`).then(e=>e.default),[],import.meta.url),"../blocks/palette/Palette.css":()=>o(()=>import(`./Palette-yyTDeq7M.js`).then(e=>e.default),[],import.meta.url),"../blocks/palette/Palette.tsx":()=>o(()=>import(`./Palette-BOhxPprW.js`).then(e=>e.default),[],import.meta.url),"../blocks/palette/README.md":()=>o(()=>import(`./README-Bpjogr2X.js`).then(e=>e.default),[],import.meta.url),"../blocks/particles/Particles.css":()=>o(()=>import(`./Particles-BZAMTjKA.js`).then(e=>e.default),[],import.meta.url),"../blocks/particles/Particles.tsx":()=>o(()=>import(`./Particles-DVv5fVyv.js`).then(e=>e.default),[],import.meta.url),"../blocks/particles/README.md":()=>o(()=>import(`./README-tAIoG6wI.js`).then(e=>e.default),[],import.meta.url),"../blocks/picker/Picker.css":()=>o(()=>import(`./Picker-C3dedOiT.js`).then(e=>e.default),[],import.meta.url),"../blocks/picker/Picker.tsx":()=>o(()=>import(`./Picker-AslWY1uE.js`).then(e=>e.default),[],import.meta.url),"../blocks/picker/README.md":()=>o(()=>import(`./README-Pts-oI-a.js`).then(e=>e.default),[],import.meta.url),"../blocks/pull/Balance.css":()=>o(()=>import(`./Balance-CqFROwvX.js`).then(e=>e.default),[],import.meta.url),"../blocks/pull/Balance.tsx":()=>o(()=>import(`./Balance-BqOyJRst.js`).then(e=>e.default),[],import.meta.url),"../blocks/pull/README.md":()=>o(()=>import(`./README-BQecF0Tw.js`).then(e=>e.default),[],import.meta.url),"../blocks/rolling-counter/Counter.css":()=>o(()=>import(`./Counter-C7wIEYLC.js`).then(e=>e.default),[],import.meta.url),"../blocks/rolling-counter/Counter.tsx":()=>o(()=>import(`./Counter-Cuxw5g8j.js`).then(e=>e.default),[],import.meta.url),"../blocks/rolling-counter/README.md":()=>o(()=>import(`./README-CtEASzyb.js`).then(e=>e.default),[],import.meta.url),"../blocks/seek/README.md":()=>o(()=>import(`./README-zfSQYNJG.js`).then(e=>e.default),[],import.meta.url),"../blocks/seek/Seek.css":()=>o(()=>import(`./Seek-sS9-lrl7.js`).then(e=>e.default),[],import.meta.url),"../blocks/seek/Seek.tsx":()=>o(()=>import(`./Seek-r8v-wIKN.js`).then(e=>e.default),[],import.meta.url),"../blocks/signature/README.md":()=>o(()=>import(`./README-BRb83iZ4.js`).then(e=>e.default),[],import.meta.url),"../blocks/signature/Signature.css":()=>o(()=>import(`./Signature-NUQnMf1C.js`).then(e=>e.default),[],import.meta.url),"../blocks/signature/Signature.tsx":()=>o(()=>import(`./Signature-D3YEY_WD.js`).then(e=>e.default),[],import.meta.url),"../blocks/slide-confirm/README.md":()=>o(()=>import(`./README-DhgHxwZI.js`).then(e=>e.default),[],import.meta.url),"../blocks/slide-confirm/SlideConfirm.css":()=>o(()=>import(`./SlideConfirm-CcEDv6pT.js`).then(e=>e.default),[],import.meta.url),"../blocks/slide-confirm/SlideConfirm.tsx":()=>o(()=>import(`./SlideConfirm-CrIMqzRp.js`).then(e=>e.default),[],import.meta.url),"../blocks/slingshot/README.md":()=>o(()=>import(`./README-CRAFfFc4.js`).then(e=>e.default),[],import.meta.url),"../blocks/slingshot/Slingshot.css":()=>o(()=>import(`./Slingshot-BPa73YwC.js`).then(e=>e.default),[],import.meta.url),"../blocks/slingshot/Slingshot.tsx":()=>o(()=>import(`./Slingshot-Bi7XAMPr.js`).then(e=>e.default),[],import.meta.url),"../blocks/slosh/README.md":()=>o(()=>import(`./README-CTO2S47c.js`).then(e=>e.default),[],import.meta.url),"../blocks/slosh/Slosh.css":()=>o(()=>import(`./Slosh-BVFNXyST.js`).then(e=>e.default),[],import.meta.url),"../blocks/slosh/Slosh.tsx":()=>o(()=>import(`./Slosh-V_ONLxqq.js`).then(e=>e.default),[],import.meta.url),"../blocks/sound/README.md":()=>o(()=>import(`./README-DsdVFCa9.js`).then(e=>e.default),[],import.meta.url),"../blocks/sound/Sound.css":()=>o(()=>import(`./Sound-BACqd4BG.js`).then(e=>e.default),[],import.meta.url),"../blocks/sound/Sound.tsx":()=>o(()=>import(`./Sound-B1cQdX_G.js`).then(e=>e.default),[],import.meta.url),"../blocks/stacked-bars/README.md":()=>o(()=>import(`./README-CL7jfR-l.js`).then(e=>e.default),[],import.meta.url),"../blocks/stacked-bars/StackedBars.css":()=>o(()=>import(`./StackedBars-F6SsJK_M.js`).then(e=>e.default),[],import.meta.url),"../blocks/stacked-bars/StackedBars.tsx":()=>o(()=>import(`./StackedBars-dkjb1NUI.js`).then(e=>e.default),[],import.meta.url),"../blocks/step-player/README.md":()=>o(()=>import(`./README-BvzfKTIy.js`).then(e=>e.default),[],import.meta.url),"../blocks/step-player/StepPlayer.css":()=>o(()=>import(`./StepPlayer-BWGwaH3m.js`).then(e=>e.default),[],import.meta.url),"../blocks/step-player/StepPlayer.tsx":()=>o(()=>import(`./StepPlayer-CbBaYHfg.js`).then(e=>e.default),[],import.meta.url),"../blocks/tilt/README.md":()=>o(()=>import(`./README-CIrJDCZm.js`).then(e=>e.default),[],import.meta.url),"../blocks/tilt/Tilt.css":()=>o(()=>import(`./Tilt-CKl6SXSS.js`).then(e=>e.default),[],import.meta.url),"../blocks/tilt/Tilt.tsx":()=>o(()=>import(`./Tilt-CVWyZsm9.js`).then(e=>e.default),[],import.meta.url),"../blocks/time-scrubber/README.md":()=>o(()=>import(`./README-C6q5W6lj.js`).then(e=>e.default),[],import.meta.url),"../blocks/time-scrubber/Scrub.css":()=>o(()=>import(`./Scrub-B-FpzhAC.js`).then(e=>e.default),[],import.meta.url),"../blocks/time-scrubber/Scrub.tsx":()=>o(()=>import(`./Scrub-DTa2wgeY.js`).then(e=>e.default),[],import.meta.url),"../blocks/toast-stack/README.md":()=>o(()=>import(`./README-CNHNquzM.js`).then(e=>e.default),[],import.meta.url),"../blocks/toast-stack/ToastStack.css":()=>o(()=>import(`./ToastStack-DlbHxm0w.js`).then(e=>e.default),[],import.meta.url),"../blocks/toast-stack/ToastStack.tsx":()=>o(()=>import(`./ToastStack-lwG17T1j.js`).then(e=>e.default),[],import.meta.url),"../blocks/todo-tower/README.md":()=>o(()=>import(`./README-DvcVfQf1.js`).then(e=>e.default),[],import.meta.url),"../blocks/todo-tower/Tower.css":()=>o(()=>import(`./Tower-BsqbBJ9b.js`).then(e=>e.default),[],import.meta.url),"../blocks/todo-tower/Tower.tsx":()=>o(()=>import(`./Tower-CT045IqO.js`).then(e=>e.default),[],import.meta.url),"../blocks/upload-dropzone/README.md":()=>o(()=>import(`./README-hM9jMOpZ.js`).then(e=>e.default),[],import.meta.url),"../blocks/upload-dropzone/Upload.css":()=>o(()=>import(`./Upload-RTsGwKUF.js`).then(e=>e.default),[],import.meta.url),"../blocks/upload-dropzone/Upload.tsx":()=>o(()=>import(`./Upload-Bj3gITbm.js`).then(e=>e.default),[],import.meta.url),"../blocks/voice-note/README.md":()=>o(()=>import(`./README-D1Bi_8dA.js`).then(e=>e.default),[],import.meta.url),"../blocks/voice-note/VoiceNote.css":()=>o(()=>import(`./VoiceNote-MEUWJByq.js`).then(e=>e.default),[],import.meta.url),"../blocks/voice-note/VoiceNote.tsx":()=>o(()=>import(`./VoiceNote-BOumfaNe.js`).then(e=>e.default),[],import.meta.url),"../blocks/wake-slider/README.md":()=>o(()=>import(`./README-D8hCyHqM.js`).then(e=>e.default),[],import.meta.url),"../blocks/wake-slider/WakeSlider.css":()=>o(()=>import(`./WakeSlider-BePZzL43.js`).then(e=>e.default),[],import.meta.url),"../blocks/wake-slider/WakeSlider.tsx":()=>o(()=>import(`./WakeSlider-CqvKYfZ7.js`).then(e=>e.default),[],import.meta.url)}),M=Object.assign({"../blocks/card-stack/media/card-1.webp":p,"../blocks/card-stack/media/card-2.webp":m,"../blocks/card-stack/media/card-3.webp":h,"../blocks/card-stack/media/card-4.webp":g,"../blocks/card-stack/media/card-5.webp":_,"../blocks/card-swap/media/bloom.webp":v,"../blocks/card-swap/media/mountain.webp":y,"../blocks/card-swap/media/peak.webp":b,"../blocks/card-swap/media/wings.webp":x,"../blocks/dynamic-island/media/mountain.webp":S,"../blocks/image-compare/media/yak-radiograph.webp":C,"../blocks/image-compare/media/yak.webp":w,"../blocks/sound/media/mountain.webp":T});function N(e){return Object.entries(M).filter(([t])=>t.startsWith(`../blocks/`+e+`/media/`))}async function P({id:e,file:t}){let n=`../blocks/`+e+`/`,[r,i,a]=await Promise.all([j[n+t+`.tsx`](),j[n+t+`.css`](),j[n+`README.md`]()]);return[{name:t+`.tsx`,label:t+`.tsx`,text:r,language:`typescript`},{name:t+`.css`,label:t+`.css`,text:i,language:`css`},{name:`README.md`,label:`使用说明`,text:a,language:`markdown`},{name:`tokens.css`,label:`tokens.css`,text:E,language:`css`}]}var F=new Map;function I(e){let t=F.get(e.id);if(t)return t;let n=P(e);return F.set(e.id,n),n}function L(e){let t=Array.from(e.matchAll(/\b(?:from\s+|import\(\s*)["']([^"']+)["']/g),([,e])=>e);return[...new Set(t)].filter(e=>!e.startsWith(`.`)&&e!==`react`&&e!==`react-dom`)}function R({id:e,file:t}){let n=`./blocks/`+e+`/`+t;return`import "./tokens.css";
import { ${t} } from "${n}";
import "${n}.css";

export default function Example() {
  return <${t} />;
}`}async function z(e,t){let{zipSync:n,strToU8:r}=await o(async()=>{let{zipSync:e,strToU8:t}=await import(`./browser-dCISOrnY.js`);return{zipSync:e,strToU8:t}},[],import.meta.url),i=n(Object.fromEntries(Object.entries(t).map(([e,t])=>[e,typeof t==`string`?r(t):t]))),a=new Uint8Array(i).buffer,s=URL.createObjectURL(new Blob([a],{type:`application/zip`})),c=document.createElement(`a`);c.href=s,c.download=e+`.zip`,c.click(),window.setTimeout(()=>URL.revokeObjectURL(s),1e4)}async function B(e){let[t,n,r]=await I(e),i=L(t.text),a=i.length?`npm install `+i.join(` `):`无需额外的 npm 依赖。`,o=`blocks/`+e.id+`/`,c=await Promise.all(N(e.id).map(async([e,t])=>{let n=await fetch(t);if(!n.ok)throw Error(`Could not load `+e);return[e.slice(3),new Uint8Array(await n.arrayBuffer())]}));return z(`sugarv-`+e.id,{...Object.fromEntries(c),[o+t.name]:t.text,[o+n.name]:n.text,[o+r.name]:r.text,"tokens.css":E,"Example.tsx":R(e),"README.md":`# ${e.name} · ${e.label}

将解压后的 blocks 文件夹、tokens.css 和 Example.tsx 放到 React 项目的同一目录。

${a}

Example.tsx 展示了完整的导入方式。组件参数见 ${o}README.md。
${c.length?`
media/ 中的图片为 SugarV 提供的示例，复用时可替换为你自己的图片。
`:``}

来源：${s} · MIT License
`,LICENSE:D,"THIRD_PARTY.md":O})}function V(){return z(`sugarv-sounds`,{"sounds.ts":k,"README.md":A,LICENSE:D,"THIRD_PARTY.md":O})}export{R as a,l as c,V as i,L as n,N as o,B as r,f as s,I as t};