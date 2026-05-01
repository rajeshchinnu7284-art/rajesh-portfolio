import { Menu, Terminal as TerminalIcon, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { cn, scrollToSection } from "../lib/utils";

const NAV_LINKS = [
  { label: "HOME", id: "hero" },
  { label: "ABOUT", id: "about" },
  { label: "SKILLS", id: "skills" },
  { label: "EDUCATION", id: "education" },
  { label: "PROJECTS", id: "projects" },
  { label: "CONTACT", id: "contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_LINKS[i].id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(NAV_LINKS[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-smooth",
        scrolled
          ? "bg-card/95 backdrop-blur-md border-b border-primary/20 shadow-glow-primary"
          : "bg-transparent",
      )}
      data-ocid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            type="button"
            className="flex items-center gap-2 group"
            onClick={() => handleNav("hero")}
            data-ocid="navbar.logo_link"
          >
            <TerminalIcon className="w-5 h-5 text-primary transition-smooth group-hover:glow-primary-sm" />
            <span className="font-jetbrains text-sm font-bold text-foreground">
              <span className="text-primary-neon">rajesh</span>
              <span className="text-muted-foreground">@</span>
              <span className="text-accent-neon">portfolio</span>
              <span className="text-muted-foreground">:~</span>
              <span className="cursor-blink text-primary ml-0.5">$</span>
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link.id}
                onClick={() => handleNav(link.id)}
                data-ocid={`navbar.${link.id}_link`}
                className={cn(
                  "px-3 py-1.5 font-jetbrains text-xs font-semibold transition-smooth rounded border",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                  active === link.id
                    ? "border-primary/60 text-primary-neon glow-border-primary bg-primary/5"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-primary/30",
                )}
              >
                [{link.label}]
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((p) => !p)}
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-smooth"
            data-ocid="navbar.mobile_menu_button"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-card/98 backdrop-blur border-b border-primary/20 px-4 pb-4"
          >
            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link.id}
                onClick={() => handleNav(link.id)}
                data-ocid={`navbar.mobile.${link.id}_link`}
                className={cn(
                  "block w-full text-left px-3 py-2.5 font-jetbrains text-sm border-b border-border/30",
                  "transition-smooth last:border-0",
                  active === link.id
                    ? "text-primary-neon"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {`> ${link.label}`}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
