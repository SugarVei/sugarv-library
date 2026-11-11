import { Component, Suspense, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { Box, LoaderCircle } from "lucide-react";
import type { Block } from "./catalog";

class PreviewBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (this.state.failed) {
      return <div className="preview-message"><Box size={22} />当前浏览器无法运行此预览。</div>;
    }
    return this.props.children;
  }
}

function FitDemo({ block }: { block: Block }) {
  const frame = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const { Demo } = block;

  useLayoutEffect(() => {
    const stage = frame.current!;
    const demo = content.current!;
    const fit = () => {
      if (!demo.offsetWidth || !demo.offsetHeight) return;
      const widthRatio = (stage.clientWidth - 24) / demo.offsetWidth;
      const heightRatio = (stage.clientHeight - 22) / demo.offsetHeight;
      const zoom = Math.min(1, widthRatio, heightRatio);
      demo.style.zoom = String(Math.max(0.1, zoom));
    };
    const resize = new ResizeObserver(fit);
    resize.observe(stage);
    resize.observe(demo);
    fit();
    return () => resize.disconnect();
  }, []);

  return (
    <div className="demo-fit" ref={frame}>
      <div className="demo-object" ref={content}>
        <Suspense fallback={<LoaderCircle className="spinner" size={20} aria-label="加载预览" />}>
          <Demo />
        </Suspense>
      </div>
    </div>
  );
}

export function Preview({ block, full = false, reset = 0 }: { block: Block; full?: boolean; reset?: number }) {
  const stage = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(full);

  useLayoutEffect(() => {
    if (full) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "320px 0px" },
    );
    observer.observe(stage.current!);
    return () => observer.disconnect();
  }, [full]);

  return (
    <div className={`demo-stage demo-${block.id} ${full ? "dtl-stage" : "bench-card-stage"}`} data-theme="light" ref={stage}>
      {(visible || full) && <PreviewBoundary key={reset}><FitDemo block={block} /></PreviewBoundary>}
    </div>
  );
}
