import { Check, Copy, Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { NeonCard } from "../components/NeonCard";
import { useInView } from "../hooks/useInView";
import { copyToClipboard } from "../lib/utils";

interface ContactItem {
  label: string;
  value: string;
  icon: React.ReactNode;
  href: string;
  copyable: boolean;
  color: "primary" | "accent";
}

const CONTACT_ITEMS: ContactItem[] = [
  {
    label: "Email",
    value: "bomalleenirajeshkumar@gmail.com",
    icon: <Mail className="w-5 h-5" />,
    href: "mailto:bomalleenirajeshkumar@gmail.com",
    copyable: true,
    color: "primary",
  },
  {
    label: "Phone",
    value: "+91 9391134330",
    icon: <Phone className="w-5 h-5" />,
    href: "tel:+919391134330",
    copyable: true,
    color: "accent",
  },
  {
    label: "LinkedIn",
    value: "rajesh-kumar-bomalleeni",
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://www.linkedin.com/in/rajesh-kumar-bomalleeni-b03341366",
    copyable: false,
    color: "primary",
  },
];

function ContactCard({ item, index }: { item: ContactItem; index: number }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const ok = await copyToClipboard(item.value);
    if (ok) {
      setCopied(true);
      toast.success(`Copied: ${item.value}`);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <NeonCard glowColor={item.color} className="group">
      <div className="flex items-start gap-4">
        <div
          className={`p-3 rounded border transition-smooth ${
            item.color === "primary"
              ? "border-primary/30 text-primary bg-primary/5 group-hover:bg-primary/10"
              : "border-accent/30 text-accent bg-accent/5 group-hover:bg-accent/10"
          }`}
        >
          {item.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-jetbrains text-xs text-muted-foreground mb-1">
            {item.label}
          </div>
          <a
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={
              item.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
            className={`font-inter text-sm font-medium break-all transition-smooth ${
              item.color === "primary"
                ? "text-primary-neon hover:glow-primary-sm"
                : "text-accent-neon hover:glow-accent-sm"
            }`}
            data-ocid={`contact.${item.label.toLowerCase()}_link`}
          >
            {item.value}
          </a>
        </div>
        {item.copyable && (
          <button
            type="button"
            onClick={handleCopy}
            className="flex-shrink-0 p-2 rounded border border-border hover:border-primary/40 text-muted-foreground hover:text-primary transition-smooth"
            data-ocid={`contact.copy_button.${index + 1}`}
            aria-label={`Copy ${item.label}`}
          >
            {copied ? (
              <Check className="w-4 h-4 text-accent" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        )}
      </div>
    </NeonCard>
  );
}

export function ContactSection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="contact" className="section-padding bg-card/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="font-jetbrains text-xs text-muted-foreground mb-1">
            {"// section.contact"}
          </div>
          <h2 className="font-jetbrains text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary-neon">$</span> cat contact.json
          </h2>
          <p className="font-inter text-sm text-muted-foreground mt-2">
            Click items to copy • Click links to open
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
          {CONTACT_ITEMS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <ContactCard item={item} index={i} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 border border-primary/20 bg-card rounded-md p-6 text-center"
        >
          <div className="font-jetbrains text-sm text-muted-foreground mb-2">
            <span className="text-primary-neon">system.message</span>
            {" = "}
            <span className="text-accent-neon">"open_to_connect"</span>
          </div>
          <p className="font-inter text-sm text-muted-foreground max-w-md mx-auto">
            Whether it&apos;s a project idea, internship opportunity, or just a
            tech conversation — I&apos;m always happy to connect!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
