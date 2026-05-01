import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { cn } from "../lib/utils";

export interface AccordionItem {
  title: string;
  content: React.ReactNode;
  badge?: string;
  meta?: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  glowColor?: "primary" | "accent";
  allowMultiple?: boolean;
}

export function Accordion({
  items,
  className,
  glowColor = "primary",
  allowMultiple = false,
}: AccordionProps) {
  const [openSet, setOpenSet] = useState<Set<number>>(new Set([0]));

  const toggle = (idx: number) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        if (!allowMultiple) next.clear();
        next.add(idx);
      }
      return next;
    });
  };

  return (
    <div className={cn("space-y-2", className)}>
      {items.map((item, idx) => {
        const isOpen = openSet.has(idx);
        const key = `${item.title}-${idx}`;
        return (
          <div
            key={key}
            className={cn(
              "border rounded-md overflow-hidden transition-smooth",
              isOpen
                ? glowColor === "primary"
                  ? "border-primary/50 glow-border-primary"
                  : "border-accent/50 glow-border-accent"
                : "border-border hover:border-primary/30",
            )}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className={cn(
                "w-full flex items-center justify-between px-5 py-4 text-left",
                "bg-card hover:bg-card/80 transition-smooth",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
              )}
              aria-expanded={isOpen}
              data-ocid={`accordion.item.${idx + 1}`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span
                  className={cn(
                    "font-jetbrains text-sm font-semibold transition-smooth",
                    isOpen
                      ? glowColor === "primary"
                        ? "text-primary-neon"
                        : "text-accent-neon"
                      : "text-foreground",
                  )}
                >
                  {item.title}
                </span>
                {item.badge && (
                  <span className="text-xs px-2 py-0.5 rounded border border-primary/30 text-primary font-jetbrains">
                    {item.badge}
                  </span>
                )}
                {item.meta && (
                  <span className="text-xs text-muted-foreground font-inter hidden sm:inline">
                    {item.meta}
                  </span>
                )}
              </div>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={cn(
                  "text-lg font-light flex-shrink-0 ml-2 font-jetbrains",
                  isOpen
                    ? glowColor === "primary"
                      ? "text-primary"
                      : "text-accent"
                    : "text-muted-foreground",
                )}
              >
                +
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="px-5 py-4 border-t border-border/50 bg-background/50 text-sm text-muted-foreground font-inter leading-relaxed">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
