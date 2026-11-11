import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyButton({ value, label = "复制", className = "" }: { value: string; label?: string; className?: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");

  useEffect(() => {
    if (status === "idle") return;
    const timer = window.setTimeout(() => setStatus("idle"), 2200);
    return () => window.clearTimeout(timer);
  }, [status]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  }

  return (
    <button className={`button small-button ${className}`} onClick={copy}>
      {status === "copied" ? <Check size={16} /> : <Copy size={16} />}
      <span aria-live="polite">{status === "copied" ? "已复制" : status === "failed" ? "复制失败" : label}</span>
    </button>
  );
}
