import { motion } from "motion/react";
import { cn } from "../lib/utils";

interface NeonCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "primary" | "accent";
  onClick?: () => void;
}

export function NeonCard({
  children,
  className,
  glowColor = "primary",
  onClick,
}: NeonCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -2 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onClick={onClick}
      className={cn(
        "group relative rounded-md border bg-card p-6 transition-smooth",
        "cursor-default",
        glowColor === "primary"
          ? "border-primary/20 hover:glow-border-primary hover:border-primary/50"
          : "border-accent/20 hover:glow-border-accent hover:border-accent/50",
        className,
      )}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-md opacity-0 transition-smooth pointer-events-none",
          glowColor === "primary"
            ? "bg-primary/5 group-hover:opacity-100"
            : "bg-accent/5 group-hover:opacity-100",
        )}
        aria-hidden="true"
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
