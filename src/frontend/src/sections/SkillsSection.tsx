import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  icon: string;
  color: "primary" | "accent";
  skills: Skill[];
}

const SKILL_DATA: SkillCategory[] = [
  {
    category: "Languages",
    icon: "{ }",
    color: "primary",
    skills: [
      { name: "C", level: 80 },
      { name: "C++", level: 75 },
      { name: "Python", level: 82 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 78 },
    ],
  },
  {
    category: "Frontend",
    icon: "</>",
    color: "accent",
    skills: [
      { name: "React", level: 84 },
      { name: "HTML/CSS", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Framer Motion", level: 72 },
    ],
  },
  {
    category: "Backend",
    icon: "[srv]",
    color: "primary",
    skills: [
      { name: "Node.js", level: 76 },
      { name: "Express.js", level: 74 },
      { name: "REST APIs", level: 80 },
      { name: "MongoDB", level: 70 },
    ],
  },
  {
    category: "Hardware",
    icon: "⚡",
    color: "accent",
    skills: [
      { name: "Arduino", level: 85 },
      { name: "Raspberry Pi", level: 75 },
      { name: "Circuit Design", level: 78 },
      { name: "Embedded C", level: 72 },
    ],
  },
  {
    category: "Tools",
    icon: "#",
    color: "primary",
    skills: [
      { name: "Git / GitHub", level: 82 },
      { name: "VS Code", level: 90 },
      { name: "Linux", level: 76 },
      { name: "MySQL", level: 70 },
    ],
  },
];

function SkillBar({
  name,
  level,
  delay,
  color,
}: Skill & { delay: number; color: "primary" | "accent" }) {
  const [ref, inView] = useInView(0.1);
  return (
    <div ref={ref} className="space-y-1">
      <div className="flex justify-between font-jetbrains text-xs">
        <span className="text-foreground/80">{name}</span>
        <span className={color === "primary" ? "text-primary" : "text-accent"}>
          {level}%
        </span>
      </div>
      <div className="h-1 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 0.8, delay, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{
            background:
              color === "primary" ? "var(--primary)" : "var(--accent)",
            boxShadow:
              color === "primary"
                ? "0 0 8px color-mix(in oklch, var(--primary) 60%, transparent)"
                : "0 0 8px color-mix(in oklch, var(--accent) 60%, transparent)",
          }}
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="skills" className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="font-jetbrains text-xs text-muted-foreground mb-1">
            {"// section.skills"}
          </div>
          <h2 className="font-jetbrains text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary-neon">$</span> ls skills/ -la
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_DATA.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: catIdx * 0.1 }}
              className="border bg-card rounded-md p-5 transition-smooth hover:glow-border-primary border-border hover:border-primary/40"
            >
              <div className="flex items-center gap-2 mb-5">
                <span
                  className={`font-jetbrains text-lg ${cat.color === "primary" ? "text-primary" : "text-accent"}`}
                >
                  {cat.icon}
                </span>
                <span
                  className={`font-jetbrains text-sm font-semibold ${cat.color === "primary" ? "text-primary-neon" : "text-accent-neon"}`}
                >
                  {cat.category}/
                </span>
              </div>
              <div className="space-y-3">
                {cat.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={cat.color}
                    delay={catIdx * 0.1 + skillIdx * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
