import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";

const LANGUAGES = [
  { name: "Telugu", level: "Native", color: "accent" },
  { name: "English", level: "Fluent", color: "primary" },
  { name: "Hindi", level: "Conversational", color: "accent" },
];

export function LanguagesSection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="languages" className="section-padding bg-background" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="font-jetbrains text-xs text-muted-foreground mb-1">
            {"// section.languages"}
          </div>
          <h2 className="font-jetbrains text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary-neon">$</span> ls languages/
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-4">
          {LANGUAGES.map((lang, i) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`border bg-card rounded-md px-6 py-4 transition-smooth hover:scale-105 ${
                lang.color === "primary"
                  ? "border-primary/30 hover:glow-border-primary"
                  : "border-accent/30 hover:glow-border-accent"
              }`}
            >
              <div
                className={`font-jetbrains text-base font-semibold mb-1 ${
                  lang.color === "primary"
                    ? "text-primary-neon"
                    : "text-accent-neon"
                }`}
              >
                {lang.name}
              </div>
              <div className="font-inter text-xs text-muted-foreground">
                {lang.level}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
