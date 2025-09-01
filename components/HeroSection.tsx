"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

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
      className="min-h-screen flex items-center bg-white relative overflow-hidden pt-20"
    >
      {/* Subtle paper texture overlay */}
      <div className="absolute inset-0 paper-texture opacity-10 pointer-events-none"></div>

      {/* Small decorative element */}
      <div className="absolute top-48 -left-10 w-24 h-24 border-r border-b border-accent/20"></div>
      <div className="absolute bottom-48 -right-10 w-24 h-24 border-l border-t border-accent/20"></div>

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
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-dark leading-tight mb-8">
                Creating purposeful digital experiences through{" "}
                <span className="text-accent">thoughtful</span> design.
              </h1>

              <div className="mt-10">
                <p className="text-stone text-lg md:text-xl mb-10 font-sans max-w-lg">
                  Full-stack developer specializing in crafting minimalist,
                  user-centered web applications that balance form and function.
                </p>

                <div className="flex flex-wrap gap-5 mt-12">
                  <a
                    href="#projects"
                    className="group flex items-center gap-2 px-8 py-3 bg-dark text-white font-sans text-base font-medium border border-dark hover:bg-white hover:text-dark transition-colors duration-300"
                  >
                    View Projects
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  <a
                    href="#contact"
                    className="px-8 py-3 text-dark border border-dark font-sans text-base font-medium hover:bg-dark hover:text-white transition-colors duration-300"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side column - Showcase */}
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
                  className="text-dark"
                >
                  <span className="text-lg font-mono text-dark">{tech}</span>
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

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs uppercase tracking-widest text-dark font-sans">
            Scroll
          </span>
          <div className="h-10 w-px bg-dark/30"></div>
        </div>
      </motion.div>
    </section>
  );
}
