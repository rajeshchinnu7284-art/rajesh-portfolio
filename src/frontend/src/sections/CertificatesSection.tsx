import { Award } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";

export function CertificatesSection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="certificates" className="section-padding bg-card/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="font-jetbrains text-xs text-muted-foreground mb-1">
            {"// section.certificates"}
          </div>
          <h2 className="font-jetbrains text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary-neon">$</span> cat certificates.json
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="border border-dashed border-primary/20 rounded-md p-12 text-center"
          data-ocid="certificates.empty_state"
        >
          <Award className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
          <div className="font-jetbrains text-sm text-muted-foreground mb-2">
            <span className="text-accent">{"[]"}</span> — array is empty
          </div>
          <p className="font-inter text-xs text-muted-foreground/60 max-w-xs mx-auto">
            Certificates and achievements will be added here as they are earned.
          </p>
          <div className="font-jetbrains text-xs text-primary/50 mt-4">
            {"// [ADD_LATER]"}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
