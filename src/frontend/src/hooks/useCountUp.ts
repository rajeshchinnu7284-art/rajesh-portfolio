import { useEffect, useRef, useState } from "react";

export function useCountUp(
  target: number,
  duration = 2000,
  decimals = 0,
  trigger = true,
): string {
  const [current, setCurrent] = useState(0);
  const frameRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!trigger) return;

    const start = () => {
      startRef.current = null;
      const animate = (timestamp: number) => {
        if (!startRef.current) startRef.current = timestamp;
        const elapsed = timestamp - startRef.current;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - (1 - progress) ** 3;
        setCurrent(eased * target);
        if (progress < 1) {
          frameRef.current = requestAnimationFrame(animate);
        } else {
          setCurrent(target);
        }
      };
      frameRef.current = requestAnimationFrame(animate);
    };

    start();
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [target, duration, trigger]);

  return current.toFixed(decimals);
}
