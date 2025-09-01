"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import ScrollMouse from "./ScrollMouse";
import {
  FloatingElement,
  BouncingElement,
  SpinElement,
  PulseElement,
  WiggleElement,
  PathFloatingElement,
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
} from "./KawaiiElements";

export default function HeroSection() {
  // Tech stack for the minimal display
  const techStack = [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Tailwind",
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden pt-20"
    >
      {/* Subtle paper texture overlay */}
      <div className="absolute inset-0 paper-texture opacity-10 pointer-events-none"></div>

      {/* Small decorative element - with animation */}
      <div className="absolute top-48 -left-10 w-24 h-24 border-r border-b border-accent/20 animate-border-dance"></div>
      <div className="absolute bottom-48 -right-10 w-24 h-24 border-l border-t border-accent/20 animate-border-dance"></div>

      {/* Kawaii elements */}
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

      {/* Additional kawaii elements - Significantly more elements */}
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

      {/* More kawaii elements as requested */}
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

      {/* Container */}
      <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          {/* Left side column - Main heading */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="max-w-3xl">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-dark mb-2">
                  Hi, I'm{" "}
                  <span className="font-serif italic text-accent relative inline-block tracking-wider">
                    Asif Chowdhury
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent/30"></span>
                  </span>
                </h2>
              </div>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-dark leading-tight mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              >
                Creating purposeful digital experiences through{" "}
                <motion.span
                  className="text-accent relative inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.8, delay: 0.8 }}
                >
                  thoughtful
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent/30"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1, originX: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                  ></motion.span>
                </motion.span>{" "}
                design.
              </motion.h1>

              <div className="mt-10">
                <motion.p
                  className="text-stone text-lg md:text-xl mb-10 font-sans max-w-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  Full-stack developer specializing in crafting minimalist,
                  user-centered web applications that balance form and function.
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-5 mt-12"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  <a
                    href="#projects"
                    className="group flex items-center gap-2 px-8 py-3 bg-dark text-white font-sans text-base font-medium border border-dark hover:bg-white hover:text-dark transition-colors duration-300 circle-reveal"
                  >
                    View Projects
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  <a
                    href="#contact"
                    className="px-8 py-3 text-dark border border-dark font-sans text-base font-medium hover:bg-dark hover:text-white transition-colors duration-300 ink-brush"
                  >
                    Contact
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right side column - Showcase with tech icons */}
          <motion.div
            className="hidden lg:flex flex-col items-start space-y-6 border-l border-accent/20 pl-8 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="mb-4">
              <span className="text-xs uppercase tracking-widest text-accent font-sans">
                Technologies
              </span>
            </div>

            <div className="flex flex-col space-y-5">
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="group"
                >
                  <span className="text-lg font-mono text-dark group-hover:text-accent transition-colors duration-300">
                    {tech}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-accent/20 w-full">
              <span className="text-xs uppercase tracking-widest text-stone font-sans block mb-2">
                Based in
              </span>
              <span className="font-serif text-lg text-dark">Tokyo, Japan</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom minimalist mouse scroll indicator */}
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
