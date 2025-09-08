"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import ScrollMouse from "../ui/ScrollMouse";
import { personalInfo } from "@/data/personalInfo";
import { SectionBackground, FloatingShapes } from "../background";

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
    <SectionBackground
      variant="white"
      showPattern={true}
      patternOpacity={10}
      showBorders={true}
    >
      <section
        id="hero"
        className="min-h-screen flex items-center md:justify-center relative overflow-hidden pt-16 md:pt-20"
      >
        {/* Centralized floating shapes with fewer, larger elements for hero section */}
        <FloatingShapes variant="standard" density="high" colorOpacity={10} />

        {/* Main content container */}
        <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10 py-10 md:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-16 items-start md:items-center">
            {/* Left column - Main content */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="max-w-3xl">
                {/* Greeting and name */}
                <div className="mb-6 sm:mb-8">
                  <span className="text-lg sm:text-xl font-serif text-stone dark:text-stone-dark block mb-2 sm:mb-1">
                    Hi, I'm
                  </span>
                  <div className="overflow-hidden">
                    <motion.h1
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-dark dark:text-primary whitespace-nowrap"
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
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-dark dark:text-primary leading-tight mb-10 sm:mb-8 mt-8 sm:mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  Crafting purposeful digital experiences through{" "}
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
                <div className="mt-12 sm:mt-10">
                  <motion.p
                    className="text-stone dark:text-stone-dark text-lg md:text-xl mb-12 sm:mb-10 font-sans max-w-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                  >
                    {personalInfo.title} building minimalist, user-centered
                    applications that balance form and function.
                  </motion.p>

                  {/* Call to action buttons */}
                  <motion.div
                    className="flex flex-wrap gap-5 mt-16 sm:mt-12"
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
          className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-10"
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
    </SectionBackground>
  );
}
