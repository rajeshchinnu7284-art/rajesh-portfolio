import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import { Accordion } from "../components/Accordion";
import type { AccordionItem } from "../components/Accordion";
import { useInView } from "../hooks/useInView";

const PROJECT_ITEMS: AccordionItem[] = [
  {
    title: "Smart Home Automation System",
    badge: "IoT + Web",
    meta: "2024",
    content: (
      <div className="space-y-4">
        <p>
          A complete IoT-based smart home system with real-time control via a
          React web dashboard. ESP8266 microcontroller communicates with Node.js
          backend via MQTT protocol.
        </p>
        <div className="flex flex-wrap gap-2">
          {["React", "Node.js", "Arduino", "ESP8266", "MQTT", "MongoDB"].map(
            (t) => (
              <span
                key={t}
                className="text-xs font-jetbrains px-2 py-0.5 rounded border border-accent/30 text-accent/80 bg-accent/5"
              >
                {t}
              </span>
            ),
          )}
        </div>
        <div className="flex gap-3 mt-2">
          <span className="flex items-center gap-1.5 text-xs font-jetbrains text-primary-neon border border-primary/30 px-3 py-1.5 rounded opacity-60 cursor-not-allowed">
            <Github className="w-3 h-3" /> VIEW_REPO
          </span>
          <span className="flex items-center gap-1.5 text-xs font-jetbrains text-accent-neon border border-accent/30 px-3 py-1.5 rounded opacity-60 cursor-not-allowed">
            <ExternalLink className="w-3 h-3" /> LIVE_DEMO
          </span>
        </div>
      </div>
    ),
  },
  {
    title: "Student Portal System",
    badge: "Full Stack",
    meta: "2024",
    content: (
      <div className="space-y-4">
        <p>
          A MERN stack student management portal with authentication, grade
          tracking, attendance, and a RESTful API serving both web and potential
          mobile clients.
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            "MongoDB",
            "Express.js",
            "React",
            "Node.js",
            "JWT",
            "Tailwind CSS",
          ].map((t) => (
            <span
              key={t}
              className="text-xs font-jetbrains px-2 py-0.5 rounded border border-primary/30 text-primary/80 bg-primary/5"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-3 mt-2">
          <span className="flex items-center gap-1.5 text-xs font-jetbrains text-primary-neon border border-primary/30 px-3 py-1.5 rounded opacity-60 cursor-not-allowed">
            <Github className="w-3 h-3" /> VIEW_REPO
          </span>
        </div>
      </div>
    ),
  },
  {
    title: "Circuit Simulator Web App",
    badge: "Canvas",
    meta: "2024",
    content: (
      <div className="space-y-4">
        <p>
          Browser-based electronic circuit simulator using HTML5 Canvas and
          React. Supports basic components: resistors, capacitors, LEDs,
          batteries with real-time simulation.
        </p>
        <div className="flex flex-wrap gap-2">
          {["React", "TypeScript", "HTML5 Canvas", "Circuit Logic"].map((t) => (
            <span
              key={t}
              className="text-xs font-jetbrains px-2 py-0.5 rounded border border-accent/30 text-accent/80 bg-accent/5"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-3 mt-2">
          <span className="flex items-center gap-1.5 text-xs font-jetbrains text-primary-neon border border-primary/30 px-3 py-1.5 rounded opacity-60 cursor-not-allowed">
            <Github className="w-3 h-3" /> VIEW_REPO
          </span>
          <span className="flex items-center gap-1.5 text-xs font-jetbrains text-accent-neon border border-accent/30 px-3 py-1.5 rounded opacity-60 cursor-not-allowed">
            <ExternalLink className="w-3 h-3" /> LIVE_DEMO
          </span>
        </div>
      </div>
    ),
  },
];

export function ProjectsSection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="projects" className="section-padding bg-background" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="font-jetbrains text-xs text-muted-foreground mb-1">
            {"// section.projects"}
          </div>
          <h2 className="font-jetbrains text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary-neon">$</span> ls projects/ -la
          </h2>
          <p className="font-inter text-sm text-muted-foreground mt-2">
            <span className="text-accent-neon">
              total {PROJECT_ITEMS.length}
            </span>{" "}
            project entries
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Accordion items={PROJECT_ITEMS} glowColor="accent" allowMultiple />
        </motion.div>
      </div>
    </section>
  );
}
