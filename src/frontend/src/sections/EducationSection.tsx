import { motion } from "motion/react";
import { Accordion } from "../components/Accordion";
import type { AccordionItem } from "../components/Accordion";
import { useInView } from "../hooks/useInView";

const SUBJECTS = [
  "Data Structures & Algorithms",
  "Embedded Systems",
  "Signals & Systems",
  "VLSI Design",
  "Digital Electronics",
  "Microprocessors",
];

const EDUCATION_ITEMS: AccordionItem[] = [
  {
    title: "B.Tech — Electronics & Communication Engineering",
    badge: "CGPA: 9.58",
    meta: "2023 – 2027",
    content: (
      <div className="space-y-3">
        <p>
          Currently pursuing B.Tech in Electronics &amp; Communication
          Engineering. Actively combining core ECE subjects with software
          development skills.
        </p>
        <div className="grid grid-cols-2 gap-2 mt-3">
          {SUBJECTS.map((subj) => (
            <span
              key={subj}
              className="text-xs font-jetbrains px-2 py-1 rounded border border-primary/20 text-primary/80 bg-primary/5"
            >
              {subj}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Intermediate (Class XII)",
    badge: "Sciences",
    meta: "2021 – 2023",
    content: (
      <p>
        Completed Intermediate education with Physics, Chemistry, and
        Mathematics (PCM). Strong foundation in sciences that drives the
        analytical approach in engineering.
      </p>
    ),
  },
  {
    title: "Secondary School (Class X)",
    badge: "Completed",
    meta: "2020 – 2021",
    content: (
      <p>
        Completed SSC with distinction. Developed early interest in mathematics
        and computer science, laying the foundation for an engineering career.
      </p>
    ),
  },
];

export function EducationSection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="education" className="section-padding bg-card/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="font-jetbrains text-xs text-muted-foreground mb-1">
            {"// section.education"}
          </div>
          <h2 className="font-jetbrains text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary-neon">$</span> cat education.log
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Accordion items={EDUCATION_ITEMS} glowColor="primary" />
        </motion.div>
      </div>
    </section>
  );
}
