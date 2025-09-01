import { HeroSection, ContactSection } from "@/components/sections";
import { Navbar, Footer } from "@/components/layout";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import { ArtisticBackground } from "@/components/ui";

/**
 * Home Page Component
 *
 * The main page of the portfolio website that combines all sections.
 *
 * Sections included:
 * - Navbar: Fixed navigation at the top
 * - ArtisticBackground: Decorative lines in the background
 * - HeroSection: Introduction and headline
 * - AboutSection: About me and skills
 * - ProjectsSection: Portfolio projects showcase
 * - ContactSection: Contact form and details
 * - Footer: Copyright and additional links
 */
export default function Home() {
  return (
    <main>
      <ArtisticBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
