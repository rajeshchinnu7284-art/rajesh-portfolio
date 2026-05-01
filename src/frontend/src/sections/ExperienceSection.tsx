import { Briefcase } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";

export function ExperienceSection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section
      id="experience"
      className="section-padding bg-background"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="font-jetbrains text-xs text-muted-foreground mb-1">
            {"// section.experience"}
          </div>
          <h2 className="font-jetbrains text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary-neon">$</span> cat experience.log
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="border border-dashed border-accent/20 rounded-md p-12 text-center"
          data-ocid="experience.empty_state"
        >
          <Briefcase className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
          <div className="font-jetbrains text-sm text-muted-foreground mb-2">
            <span className="text-accent">process.status</span>
            {" = "}
            <span className="text-primary">"seeking_opportunities"</span>
          </div>
          <p className="font-inter text-xs text-muted-foreground/60 max-w-xs mx-auto">
            Currently seeking internship and project opportunities. Open to
            collaborations!
          </p>
          <div className="font-jetbrains text-xs text-accent/50 mt-4">
            {"// [OPEN_TO_INTERNSHIPS]"}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
