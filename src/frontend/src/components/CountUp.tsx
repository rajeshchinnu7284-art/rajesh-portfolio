import { useCountUp } from "../hooks/useCountUp";
import { useInView } from "../hooks/useInView";
import { cn } from "../lib/utils";

interface CountUpProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}

export function CountUp({
  target,
  duration = 2000,
  suffix = "",
  prefix = "",
  decimals = 0,
  className,
}: CountUpProps) {
  const [ref, isInView] = useInView(0.3);
  const value = useCountUp(target, duration, decimals, isInView);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
