"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import ScrollMouse from "../ui/ScrollMouse";
import { personalInfo } from "@/data/personalInfo";
import {
  // Animation wrappers
  FloatingElement,
  BouncingElement,
  SpinElement,
  PulseElement,
  WiggleElement,
  PathFloatingElement,

  // Kawaii shapes
  KawaiiCircle,
  KawaiiTriangle,
  KawaiiStar,
  KawaiiSnowflake,
  KawaiiCloud,
  KawaiiSakura,
  KawaiiWave,
  KawaiiDots,
  KawaiiLeaf,
  KawaiiSplash,
  KawaiiRipple,
} from "../kawaii";

/**
 * HeroSection Component
 *
 * The main landing section of the portfolio website.
 * Features a minimalist Japanese-inspired design with:
 * - Animated kawaii elements for visual interest
 * - Introduction and headline
 * - Call-to-action buttons
 * - Technology stack display
 * - Custom scroll indicator
 */
export default function HeroSection() {
  // Tech stack displayed in the right sidebar - using first 6 skills from personalInfo
  const techStack = personalInfo.skills.slice(0, 6);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-dark relative overflow-hidden pt-20"
    >
      {/* Background texture */}
      <div className="absolute inset-0 paper-texture opacity-10 pointer-events-none"></div>

      {/* Decorative border elements */}
      <div className="absolute top-48 -left-10 w-24 h-24 border-r border-b border-accent/20 animate-border-dance"></div>
      <div className="absolute bottom-48 -right-10 w-24 h-24 border-l border-t border-accent/20 animate-border-dance"></div>

      {/* Kawaii decoration elements - positioned strategically around the page */}
      {/* First row of elements */}
      <FloatingElement delay={0} size="xs" x="10%" y="20%">
        <KawaiiCircle className="bg-accent/20" />
      </FloatingElement>
      <FloatingElement delay={2} size="sm" x="15%" y="30%">
        <KawaiiTriangle className="border-b-accent/20" />
      </FloatingElement>
      <SpinElement delay={1} size="xs" slow={true} x="20%" y="40%">
        <KawaiiStar className="text-accent/20" size={10} />
      </SpinElement>
      <FloatingElement delay={0.5} size="xs" x="80%" y="25%">
        <KawaiiCircle className="bg-accent/20" />
      </FloatingElement>
      <BouncingElement delay={1.5} size="xs" x="75%" y="70%">
        <KawaiiCircle className="bg-accent/20" />
      </BouncingElement>
      <SpinElement delay={1} size="xs" x="30%" y="75%">
        <KawaiiStar className="text-accent/20" size={8} />
      </SpinElement>

      {/* Second row of elements */}
      <PathFloatingElement delay={0.3} size="xs">
        <KawaiiSakura className="text-accent/30" size={12} />
      </PathFloatingElement>
      <WiggleElement delay={2.5} size="sm" x="85%" y="15%">
        <KawaiiSnowflake className="text-accent/20" size={12} />
      </WiggleElement>
      <PulseElement delay={1.8} size="md" x="5%" y="60%">
        <KawaiiCloud className="text-accent/10" size={24} />
      </PulseElement>
      <SpinElement delay={3} size="xs" x="60%" y="80%" slow={true}>
        <KawaiiStar className="text-accent/30" size={6} />
      </SpinElement>
      <BouncingElement delay={0.7} size="xs" x="25%" y="85%">
        <KawaiiDots className="text-accent/20" />
      </BouncingElement>
      <FloatingElement delay={2.2} size="xs" x="40%" y="15%">
        <KawaiiTriangle className="border-b-accent/20" />
      </FloatingElement>
      <PathFloatingElement delay={1.5} size="sm">
        <KawaiiSakura className="text-accent/30" size={10} />
      </PathFloatingElement>
      <WiggleElement delay={0.9} size="xs" x="65%" y="35%">
        <KawaiiWave className="text-accent/20" />
      </WiggleElement>
      <PulseElement delay={3.2} size="xs" x="90%" y="60%">
        <KawaiiCircle className="bg-accent/20" />
      </PulseElement>

      {/* Third row of elements */}
      <FloatingElement delay={1.3} size="sm" x="27%" y="22%">
        <KawaiiSnowflake className="text-accent/20" size={14} />
      </FloatingElement>
      <BouncingElement delay={0.4} size="xs" x="68%" y="12%">
        <KawaiiLeaf className="text-accent/30" size={10} />
      </BouncingElement>
      <SpinElement delay={2.7} size="xs" x="48%" y="60%" slow={true}>
        <KawaiiSplash className="text-accent/20" size={12} />
      </SpinElement>
      <WiggleElement delay={3.5} size="sm" x="12%" y="75%">
        <KawaiiRipple className="text-accent/20" size={16} />
      </WiggleElement>
      <PathFloatingElement delay={1.9} size="xs">
        <KawaiiStar className="text-accent/30" size={8} />
      </PathFloatingElement>
      <PulseElement delay={2.1} size="sm" x="82%" y="44%">
        <KawaiiTriangle className="border-b-accent/20" />
      </PulseElement>
      <FloatingElement delay={3.3} size="xs" x="53%" y="8%">
        <KawaiiSnowflake className="text-accent/30" size={9} />
      </FloatingElement>
      <BouncingElement delay={1.0} size="sm" x="35%" y="68%">
        <KawaiiCloud className="text-accent/20" size={16} />
      </BouncingElement>
      <WiggleElement delay={2.3} size="xs" x="95%" y="32%">
        <KawaiiDots className="text-accent/20" />
      </WiggleElement>
      <SpinElement delay={0.8} size="md" x="72%" y="90%" slow={true}>
        <KawaiiSplash className="text-accent/10" size={18} />
      </SpinElement>
      <PulseElement delay={1.7} size="xs" x="8%" y="42%">
        <KawaiiRipple className="text-accent/30" size={11} />
      </PulseElement>

      {/* Main content container */}
      <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          {/* Left column - Main content */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="max-w-3xl">
              {/* Greeting and name */}
              <div className="mb-6">
                <span className="text-lg sm:text-xl font-serif text-stone dark:text-stone-dark block mb-1">
                  Hi, I'm
                </span>
                <div className="overflow-hidden">
                  <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-dark dark:text-primary whitespace-nowrap"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <motion.span
                      className="font-mono font-bold text-accent dark:text-accent-dark relative inline-block leading-tight"
                      initial={{ opacity: 0.8 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {personalInfo.fullName}
                      <motion.span
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent/30 dark:bg-accent-dark/40"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                      ></motion.span>
                    </motion.span>
                  </motion.h1>
                </div>
              </div>

              {/* Main heading with animated underline */}
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-dark dark:text-primary leading-tight mb-8 mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              >
                Creating purposeful digital experiences through{" "}
                <motion.span
                  className="text-accent dark:text-accent-dark relative inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.8, delay: 0.8 }}
                >
                  thoughtful
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent/30 dark:bg-accent-dark/40"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1, originX: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                  ></motion.span>
                </motion.span>{" "}
                design.
              </motion.h2>

              {/* Introduction text and CTA buttons */}
              <div className="mt-10">
                <motion.p
                  className="text-stone dark:text-stone-dark text-lg md:text-xl mb-10 font-sans max-w-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  {personalInfo.title} specializing in crafting minimalist,
                  user-centered web applications that balance form and function.
                </motion.p>

                {/* Call to action buttons */}
                <motion.div
                  className="flex flex-wrap gap-5 mt-12"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  <a
                    href="#projects"
                    className="group flex items-center gap-2 px-8 py-3 bg-dark dark:bg-accent-dark text-white font-sans text-base font-medium border border-dark dark:border-accent-dark hover:bg-accent dark:hover:bg-dark hover:text-dark dark:hover:text-primary transition-colors duration-300 circle-reveal"
                  >
                    View Projects
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  <a
                    href="#contact"
                    className="px-8 py-3 text-dark dark:text-primary border border-dark dark:border-stone-dark font-sans text-base font-medium hover:bg-accent dark:hover:bg-dark-paper hover:text-white dark:hover:text-primary transition-colors duration-300 ink-brush"
                  >
                    Contact
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right column - Tech stack */}
          <motion.div
            className="hidden lg:flex flex-col items-start space-y-6 border-l border-accent/20 dark:border-accent-dark/20 pl-8 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="mb-4">
              <span className="text-xs uppercase tracking-widest text-accent dark:text-accent-dark font-sans">
                Technologies
              </span>
            </div>

            {/* Technology stack list with staggered animations */}
            <div className="flex flex-col space-y-5">
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="group"
                >
                  <span className="text-lg font-mono text-dark dark:text-primary group-hover:text-accent dark:group-hover:text-accent-dark transition-colors duration-300">
                    {tech}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Location information */}
            <div className="mt-8 pt-8 border-t border-accent/20 dark:border-accent-dark/20 w-full">
              <span className="text-xs uppercase tracking-widest text-stone dark:text-stone-dark font-sans block mb-2">
                Based in
              </span>
              <span className="font-serif text-lg text-dark dark:text-primary">
                {personalInfo.location}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <ScrollMouse
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        />
      </motion.div>
    </section>
  );
}
