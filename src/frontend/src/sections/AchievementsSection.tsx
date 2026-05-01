import { Trophy } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";

export function AchievementsSection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="achievements" className="section-padding bg-card/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="font-jetbrains text-xs text-muted-foreground mb-1">
            {"// section.achievements"}
          </div>
          <h2 className="font-jetbrains text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary-neon">$</span> cat achievements.md
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="border border-primary/20 bg-card rounded-md p-5">
              <div className="font-jetbrains text-xs text-primary-neon mb-1">
                ACADEMIC
              </div>
              <div className="font-jetbrains text-2xl font-bold text-foreground">
                9.58
              </div>
              <div className="font-inter text-xs text-muted-foreground">
                CGPA — Top of class
              </div>
            </div>
            <div className="border border-accent/20 bg-card rounded-md p-5">
              <div className="font-jetbrains text-xs text-accent-neon mb-1">
                PROJECTS
              </div>
              <div className="font-jetbrains text-2xl font-bold text-foreground">
                3+
              </div>
              <div className="font-inter text-xs text-muted-foreground">
                Completed end-to-end
              </div>
            </div>
          </div>

          <div
            className="border border-dashed border-primary/20 rounded-md p-10 text-center"
            data-ocid="achievements.empty_state"
          >
            <Trophy className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
            <div className="font-jetbrains text-xs text-muted-foreground">
              {"More achievements loading... // [ADD_LATER]"}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
