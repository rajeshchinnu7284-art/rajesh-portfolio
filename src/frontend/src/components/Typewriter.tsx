import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
  showCursor?: boolean;
  delay?: number;
}

export function Typewriter({
  text,
  speed = 80,
  className,
  onComplete,
  showCursor = true,
  delay = 0,
}: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const [started, setStarted] = useState(delay === 0);

  useEffect(() => {
    if (delay === 0) return;
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    setDisplayed("");
    setDone(false);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
        onComplete?.();
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, started, onComplete]);

  return (
    <span className={cn("inline", className)}>
      {displayed}
      {showCursor && (
        <span
          className={cn(
            "inline-block w-[2px] h-[1em] ml-[2px] align-middle",
            done ? "cursor-blink" : "opacity-100",
          )}
          style={{ background: "var(--primary)", verticalAlign: "middle" }}
          aria-hidden="true"
        />
      )}
    </span>
  );
}
