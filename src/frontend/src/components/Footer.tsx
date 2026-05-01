import { Terminal as TerminalIcon } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "portfolio",
  );

  return (
    <footer className="border-t border-primary/20 bg-card/50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-primary" />
            <span className="font-jetbrains text-xs text-muted-foreground">
              <span className="text-accent-neon">guest@portfolio</span>
              <span className="text-muted-foreground">:~$ exit 0</span>
            </span>
          </div>

          <div className="font-jetbrains text-xs text-center text-muted-foreground">
            <span className="text-primary-neon">[</span> &copy; {year}{" "}
            Bomalleeni Rajesh Kumar <span className="text-primary-neon">]</span>
            <span className="mx-2 text-primary/40">|</span>
            Built with <span className="text-accent-neon">love</span> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-neon neon-underline hover:glow-primary-sm transition-smooth"
            >
              caffeine.ai
            </a>
          </div>

          <div className="font-jetbrains text-xs text-muted-foreground flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>
              Status: <span className="text-accent-neon">ONLINE</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
