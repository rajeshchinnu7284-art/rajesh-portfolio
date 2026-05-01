import { motion } from "motion/react";
import { CountUp } from "../components/CountUp";
import { useInView } from "../hooks/useInView";

const STATS = [
  { label: "CGPA", value: 9.58, suffix: "", decimals: 2 },
  { label: "Year", value: 2, suffix: "nd", decimals: 0 },
  { label: "Projects", value: 3, suffix: "+", decimals: 0 },
  { label: "Skills", value: 15, suffix: "+", decimals: 0 },
];

const FOCUS_ITEMS = [
  "Full-Stack Web Development (MERN Stack)",
  "Embedded Systems & IoT Projects",
  "Data Structures & Algorithms",
  "Open Source Contributions",
];

export function AboutSection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="about" className="section-padding bg-card/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="font-jetbrains text-xs text-muted-foreground mb-1">
            {"// section.about"}
          </div>
          <h2 className="font-jetbrains text-2xl md:text-3xl font-bold text-foreground mb-8">
            <span className="text-primary-neon">$</span> whoami
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="font-jetbrains text-xs text-accent space-y-2 bg-card border border-border rounded-md p-5">
              <div>
                <span className="text-muted-foreground">Name: </span>
                <span className="text-foreground">Bomalleeni Rajesh Kumar</span>
              </div>
              <div>
                <span className="text-muted-foreground">Role: </span>
                <span className="text-primary-neon">
                  ECE Student &amp; Aspiring Web Developer
                </span>
              </div>
              <div>
                <span className="text-muted-foreground">Branch: </span>
                <span className="text-foreground">
                  Electronics &amp; Communication Engineering
                </span>
              </div>
              <div>
                <span className="text-muted-foreground">Year: </span>
                <span className="text-accent-neon">2nd Year (B.Tech)</span>
              </div>
              <div>
                <span className="text-muted-foreground">CGPA: </span>
                <span className="text-accent-neon font-bold">9.58 / 10.0</span>
              </div>
              <div>
                <span className="text-muted-foreground">Email: </span>
                <span className="text-foreground">
                  bomalleenirajeshkumar@gmail.com
                </span>
              </div>
              <div>
                <span className="text-muted-foreground">Phone: </span>
                <span className="text-foreground">+91 9391134330</span>
              </div>
              <div>
                <span className="text-muted-foreground">Status: </span>
                <span className="text-accent-neon">
                  Available for internships
                </span>
              </div>
            </div>

            <p className="font-inter text-sm text-muted-foreground leading-relaxed border-l-2 border-primary/40 pl-4">
              Second-year B.Tech ECE student passionate about software
              development. I love combining electronics fundamentals with
              programming to build efficient, real-world solutions. From
              microcontrollers to modern web frameworks — I bridge the gap
              between hardware and software.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4 mb-8">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="border border-primary/20 hover:border-primary/50 hover:glow-border-primary bg-card rounded-md p-5 text-center transition-smooth"
                >
                  <div className="font-jetbrains text-3xl font-bold text-primary-neon mb-1">
                    <CountUp
                      target={stat.value}
                      duration={2000}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                    />
                  </div>
                  <div className="font-jetbrains text-xs text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="border border-accent/20 hover:glow-border-accent bg-card rounded-md p-5 transition-smooth">
              <div className="font-jetbrains text-xs text-accent-neon mb-3">
                {"// current.focus"}
              </div>
              <ul className="space-y-2 font-inter text-sm text-muted-foreground">
                {FOCUS_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-accent-neon mt-0.5 flex-shrink-0">
                      {"▹"}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
