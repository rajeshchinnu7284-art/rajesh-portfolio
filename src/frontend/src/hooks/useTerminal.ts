import { useCallback, useRef, useState } from "react";
import { type CommandOutput, executeCommand } from "../lib/commands";
import { scrollToSection } from "../lib/utils";

export interface TerminalLine {
  id: number;
  prompt?: string;
  text: string;
  type: CommandOutput["type"] | "prompt";
}

const WELCOME: TerminalLine[] = [
  { id: 0, text: "** SYSTEM BOOT SEQUENCE **", type: "primary" },
  { id: 1, text: "Initializing portfolio environment...", type: "dim" },
  {
    id: 2,
    text: "Loading modules: [skills] [projects] [contact] ✓",
    type: "accent",
  },
  {
    id: 3,
    text: "System ready. Type 'help' to see available commands.",
    type: "default",
  },
  { id: 4, text: "", type: "default" },
];

let lineCounter = 100;

function scrollToBottom(el: HTMLDivElement | null) {
  if (!el) return;
  setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
}

export function useTerminal() {
  const [lines, setLines] = useState<TerminalLine[]>(WELCOME);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleCommand = useCallback((raw: string) => {
    const trimmed = raw.trim();
    const id = lineCounter++;

    const promptLine: TerminalLine = {
      id,
      text: trimmed,
      type: "prompt",
      prompt: "guest@portfolio:~$",
    };

    if (!trimmed) {
      setLines((prev) => [...prev, promptLine]);
      setInput("");
      return;
    }

    const { outputs, clear } = executeCommand(trimmed, scrollToSection);

    if (clear) {
      setLines(WELCOME);
      setInput("");
      setHistoryIndex(-1);
      return;
    }

    const newLines: TerminalLine[] = outputs.map((o, i) => ({
      id: lineCounter + i,
      text: o.text,
      type: o.type,
    }));
    lineCounter += outputs.length;

    setLines((prev) => {
      const next = [...prev, promptLine, ...newLines];
      return next;
    });
    setHistory((prev) => [trimmed, ...prev.slice(0, 49)]);
    setHistoryIndex(-1);
    setInput("");
    scrollToBottom(bottomRef.current);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const navigateHistory = useCallback(
    (direction: "up" | "down") => {
      setHistoryIndex((prev) => {
        const next =
          direction === "up"
            ? Math.min(prev + 1, history.length - 1)
            : Math.max(prev - 1, -1);
        setInput(next === -1 ? "" : (history[next] ?? ""));
        return next;
      });
    },
    [history],
  );

  return {
    lines,
    input,
    setInput,
    handleCommand,
    historyIndex,
    navigateHistory,
    bottomRef,
  };
}
