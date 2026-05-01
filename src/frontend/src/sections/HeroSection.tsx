import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Terminal } from "../components/Terminal";
import { Typewriter } from "../components/Typewriter";
import { scrollToSection } from "../lib/utils";

const BOOT_LINES = [
  { text: "BIOS v2.0.1 — Initializing hardware...", delay: 200 },
  { text: "Checking RAM... 16384MB OK", delay: 600 },
  { text: "Loading kernel modules...", delay: 1000 },
  { text: "Starting portfolio services... [OK]", delay: 1400 },
  { text: "System ready.", delay: 1800 },
];

export function HeroSection() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    BOOT_LINES.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
        if (i === BOOT_LINES.length - 1) {
          setTimeout(() => setShowMain(true), 400);
        }
      }, line.delay);
    });
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-4 md:px-8 lg:px-16 pt-20 pb-12"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="font-jetbrains text-xs text-muted-foreground mb-8 space-y-1 min-h-[100px]">
              {BOOT_LINES.map((line, i) => (
                <motion.div
                  key={line.delay}
                  initial={{ opacity: 0, x: -10 }}
                  animate={visibleLines.includes(i) ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3 }}
                  className={
                    i === BOOT_LINES.length - 1 ? "text-accent-neon" : ""
                  }
                >
                  {`> ${line.text}`}
                </motion.div>
              ))}
            </div>

            {showMain && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="font-jetbrains text-xs text-muted-foreground mb-2">
                  {"// user.name"}
                </div>
                <h1 className="font-jetbrains text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  <Typewriter
                    text="Bomalleeni"
                    speed={70}
                    showCursor={false}
                    className="text-neon"
                  />
                  <br />
                  <Typewriter
                    text="Rajesh Kumar"
                    speed={70}
                    delay={900}
                    showCursor={false}
                    className="text-foreground"
                  />
                </h1>

                <div className="font-jetbrains text-base md:text-lg text-primary-neon mb-2">
                  <Typewriter
                    text="ECE Student • Aspiring Web Developer"
                    speed={45}
                    delay={1700}
                    showCursor={false}
                  />
                </div>

                <p className="font-inter text-sm text-muted-foreground max-w-md mb-8 leading-relaxed">
                  2nd Year B.Tech ECE student passionate about combining{" "}
                  <span className="text-accent-neon">
                    electronics fundamentals
                  </span>{" "}
                  with <span className="text-primary-neon">programming</span> to
                  build efficient, real-world solutions.
                </p>

                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => scrollToSection("projects")}
                    data-ocid="hero.view_projects_button"
                    className="px-5 py-2.5 font-jetbrains text-sm font-semibold border border-primary/60 text-primary-neon hover:bg-primary/10 hover:glow-border-primary transition-smooth rounded"
                  >
                    [VIEW_PROJECTS]
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToSection("contact")}
                    data-ocid="hero.contact_button"
                    className="px-5 py-2.5 font-jetbrains text-sm font-semibold border border-accent/60 text-accent-neon hover:bg-accent/10 hover:glow-border-accent transition-smooth rounded"
                  >
                    [CONTACT_ME]
                  </button>
                  <a
                    href="/resume.pdf"
                    download
                    data-ocid="hero.resume_button"
                    className="px-5 py-2.5 font-jetbrains text-sm font-semibold border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 transition-smooth rounded"
                  >
                    [DOWNLOAD_CV]
                  </a>
                </div>
              </motion.div>
            )}
          </div>

          {showMain && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="font-jetbrains text-xs text-muted-foreground mb-2">
                {"// interactive.terminal"}
              </div>
              <Terminal className="w-full shadow-glow-primary" />
              <p className="font-jetbrains text-xs text-muted-foreground mt-2 text-center">
                Try: <span className="text-primary">help</span> •{" "}
                <span className="text-primary">about</span> •{" "}
                <span className="text-primary">skills</span> •{" "}
                <span className="text-primary">projects</span>
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
