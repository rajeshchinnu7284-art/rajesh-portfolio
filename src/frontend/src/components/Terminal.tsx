import { motion } from "motion/react";
import type { KeyboardEvent } from "react";
import { useEffect, useRef } from "react";
import { useTerminal } from "../hooks/useTerminal";
import type { TerminalLine } from "../hooks/useTerminal";
import { cn } from "../lib/utils";

interface TerminalProps {
  className?: string;
  compact?: boolean;
}

function LineText({ line }: { line: TerminalLine }) {
  const colorMap: Record<string, string> = {
    primary: "text-primary-neon",
    accent: "text-accent-neon",
    error: "text-destructive",
    dim: "text-muted-foreground",
    success: "text-accent-neon",
    default: "text-foreground/90",
    prompt: "text-foreground",
  };

  if (line.type === "prompt") {
    return (
      <div className="flex items-start gap-2 font-jetbrains text-sm">
        <span className="text-accent-neon flex-shrink-0">{line.prompt}</span>
        <span className="text-foreground">{line.text}</span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "font-jetbrains text-sm leading-relaxed",
        colorMap[line.type] ?? "text-foreground/90",
      )}
    >
      {line.text === "" ? <span>&nbsp;</span> : line.text}
    </div>
  );
}

export function Terminal({ className, compact = false }: TerminalProps) {
  const { lines, input, setInput, handleCommand, navigateHistory, bottomRef } =
    useTerminal();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const focusInput = () => inputRef.current?.focus();

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      navigateHistory("up");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      navigateHistory("down");
    }
  };

  return (
    <section
      className={cn(
        "terminal-bg rounded-md overflow-hidden scanline font-jetbrains",
        className,
      )}
      aria-label="Interactive terminal"
      data-ocid="terminal.panel"
    >
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-primary/20 bg-card">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-destructive/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
          <div className="w-3 h-3 rounded-full bg-accent/70" />
        </div>
        <span className="text-xs text-muted-foreground ml-2 font-jetbrains">
          guest@portfolio
        </span>
        <div className="ml-auto flex gap-1 items-center">
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-xs text-accent font-jetbrains">ONLINE</span>
        </div>
      </div>

      <div
        className={cn(
          "overflow-y-auto p-4 space-y-0.5 cursor-text",
          compact ? "h-48" : "h-72 md:h-80",
        )}
        onClick={focusInput}
        onKeyDown={focusInput}
      >
        {lines.map((line, i) => (
          <motion.div
            key={line.id}
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.15, delay: Math.min(i * 0.02, 0.3) }}
          >
            <LineText line={line} />
          </motion.div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="flex items-center gap-2 px-4 py-3 border-t border-primary/20 bg-card/50">
        <span className="text-accent-neon font-jetbrains text-sm flex-shrink-0">
          guest@portfolio:~$
        </span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          className="flex-1 bg-transparent text-foreground font-jetbrains text-sm outline-none caret-primary placeholder:text-muted-foreground/50"
          placeholder="type a command..."
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          data-ocid="terminal.input"
          aria-label="Terminal input"
        />
        <span
          className="cursor-blink text-primary font-jetbrains"
          aria-hidden="true"
        >
          ▋
        </span>
      </div>
    </section>
  );
}
