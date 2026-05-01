import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { ParticleBackground } from "./components/ParticleBackground";
import { Toaster } from "./components/ui/sonner";
import { AboutSection } from "./sections/AboutSection";
import { AchievementsSection } from "./sections/AchievementsSection";
import { CertificatesSection } from "./sections/CertificatesSection";
import { ContactSection } from "./sections/ContactSection";
import { EducationSection } from "./sections/EducationSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { HeroSection } from "./sections/HeroSection";
import { LanguagesSection } from "./sections/LanguagesSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { SkillsSection } from "./sections/SkillsSection";

export default function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />

      {/* Scanline overlay */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(0deg, oklch(0 0 0 / 0.03), oklch(0 0 0 / 0.03) 1px, transparent 1px, transparent 3px)",
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      <div className="relative" style={{ zIndex: 2 }}>
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <EducationSection />
          <ProjectsSection />
          <CertificatesSection />
          <ExperienceSection />
          <AchievementsSection />
          <LanguagesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
      <Toaster position="bottom-right" theme="dark" />
    </div>
  );
}
