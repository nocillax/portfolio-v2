"use client";

import { motion } from "framer-motion";
import { FallbackImage } from "@/components/ui";
import {
  FiCode,
  FiDatabase,
  FiLayout,
  FiTool,
  FiServer,
  FiPackage,
} from "react-icons/fi";
import { personalInfo } from "@/data/personalInfo";
import { SectionBackground, FloatingShapes } from "../background";

export default function AboutSection() {
  // Tech stacks from personalInfo data with icons mapping
  const techStackIcons = {
    Languages: <FiCode className="text-accent dark:text-accent-dark w-5 h-5" />,
    "Frameworks & Tools": (
      <FiLayout className="text-accent dark:text-accent-dark w-5 h-5" />
    ),
    Design: <FiTool className="text-accent dark:text-accent-dark w-5 h-5" />,
    Tools: <FiServer className="text-accent dark:text-accent-dark w-5 h-5" />,
    Databases: (
      <FiDatabase className="text-accent dark:text-accent-dark w-5 h-5" />
    ),
    Others: <FiPackage className="text-accent dark:text-accent-dark w-5 h-5" />,
  };

  // Map technology data from personalInfo
  const techStacks = personalInfo.technologies.map((tech) => ({
    category: tech.category,
    icon: techStackIcons[tech.category as keyof typeof techStackIcons] || (
      <FiTool className="text-accent dark:text-accent-dark w-5 h-5" />
    ),
    technologies: tech.items,
  }));

  return (
    <SectionBackground variant="white" showPattern={true} patternOpacity={15}>
      <section id="about" className="py-12 md:py-24 relative">
        {/* Add subtle floating shapes for visual interest */}
        <FloatingShapes variant="standard" density="low" colorOpacity={10} />
        <div className="container mx-auto px-4 sm:px-6 md:px-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left column - Heading and text */}
            <motion.div
              className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="block text-sm uppercase tracking-widest text-accent dark:text-accent-dark font-sans mb-2">
                About me
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-dark dark:text-primary mb-8">
                Developer & designer creating elegant, user-centered experiences
              </h2>

              {/* Enhanced profile image with Japanese-inspired design elements */}
              <div className="mt-12 mb-12 relative w-full flex justify-center lg:justify-start">
                <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
                  {/* Animated background elements */}
                  <motion.div
                    className="absolute inset-4 bg-accent/5 dark:bg-accent-dark/5 rounded-full"
                    animate={{
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  />

                  {/* Main image with frame */}
                  <div
                    className="relative w-full h-full 
                                before:content-[''] before:absolute before:inset-0
                                before:border-2 before:border-accent/40 dark:before:border-accent-dark/40
                                before:translate-x-3 before:translate-y-3 before:z-[-1]
                                after:content-[''] after:absolute after:inset-0
                                after:border-2 after:border-accent/20 dark:after:border-accent-dark/30
                                after:-translate-x-3 after:-translate-y-3 after:z-[-1]"
                  >
                    {/* Clip path mask for hexagon shape */}
                    <div className="w-full h-full overflow-hidden bg-paper dark:bg-dark-paper relative">
                      {/* Subtle background pattern */}
                      <div
                        className="absolute inset-0 opacity-20 dark:opacity-10 z-0 mix-blend-overlay"
                        style={{
                          backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M0 0h10v10H0V0zm10 10h10v10H10V10z' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E\")",
                        }}
                      />

                      <FallbackImage
                        src="/images/profile/profile.JPG"
                        alt={personalInfo.fullName}
                        fill
                        className="object-cover relative z-10
                                  hover:scale-105
                                  grayscale-[15%] hover:grayscale-0
                                  transition-all duration-700 ease-out"
                        priority
                        sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                      />

                      {/* Subtle overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 dark:from-accent-dark/10 to-transparent z-20 mix-blend-overlay opacity-70 pointer-events-none" />
                    </div>
                  </div>

                  {/* Origami-inspired decorations */}
                  <div className="absolute -bottom-8 -right-8 w-24 h-24 rotate-12 opacity-80 dark:opacity-60">
                    <motion.div
                      initial={{ rotate: 10 }}
                      animate={{ rotate: -5 }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                    >
                      <svg
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full text-accent/40 dark:text-accent-dark/40"
                      >
                        <path d="M0,0 L100,0 L100,100 Z" fill="currentColor" />
                        <path
                          d="M0,0 L100,0 L50,50 Z"
                          fill="currentColor"
                          opacity="0.7"
                        />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Left side decoration */}
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 opacity-80 dark:opacity-60">
                    <motion.div
                      initial={{ rotate: -5 }}
                      animate={{ rotate: 10 }}
                      transition={{
                        duration: 7,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                    >
                      <svg
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full text-accent/30 dark:text-accent-dark/30"
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="20"
                          stroke="currentColor"
                          strokeWidth="1"
                          fill="none"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right column - About text and tech stacks */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-dark dark:text-primary text-lg font-medium mb-12 font-sans italic">
                  {personalInfo.bio}
                </p>

                {/* Work Experience Section */}
                {personalInfo.experience && (
                  <div className="mb-12">
                    <h3 className="text-lg font-serif text-dark dark:text-primary mb-5 pb-2 border-b border-accent/10 dark:border-accent-dark/10">
                      Work Experience
                    </h3>
                    <div className="space-y-6">
                      {personalInfo.experience.map((exp, i) => (
                        <div
                          key={i}
                          className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-accent dark:before:bg-accent-dark before:rounded-full"
                        >
                          <p className="text-stone dark:text-stone-dark mb-1 font-sans">
                            <span className="font-medium text-dark dark:text-primary">
                              {exp.title}
                            </span>{" "}
                            • {exp.company}
                          </p>
                          <p className="text-sm text-stone/80 dark:text-stone-dark/80 mb-2 font-sans">
                            {exp.period}
                          </p>
                          <p className="text-stone dark:text-stone-dark font-sans">
                            {exp.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Education Section */}
                {personalInfo.education && (
                  <div className="mb-12">
                    <h3 className="text-lg font-serif text-dark dark:text-primary mb-5 pb-2 border-b border-accent/10 dark:border-accent-dark/10">
                      Education
                    </h3>
                    <div className="space-y-6">
                      {personalInfo.education.map((edu, i) => (
                        <div
                          key={i}
                          className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-accent dark:before:bg-accent-dark before:rounded-full"
                        >
                          <p className="font-medium text-dark dark:text-primary mb-1 font-sans">
                            {edu.degree}
                          </p>
                          <p className="text-stone dark:text-stone-dark mb-1 font-sans">
                            {edu.institution}
                          </p>
                          <p className="text-sm text-stone/80 dark:text-stone-dark/80 font-sans">
                            {edu.year}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech stacks in a more elegant way */}
                <div className="mb-12">
                  <h3 className="text-lg font-serif text-dark dark:text-primary mb-5 pb-2 border-b border-accent/10 dark:border-accent-dark/10">
                    Technical Expertise
                  </h3>

                  <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                    {techStacks.map((stack, i) => (
                      <motion.div
                        key={stack.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 * i }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          {stack.icon}
                          <h4 className="font-sans font-medium text-dark dark:text-primary">
                            {stack.category}
                          </h4>
                        </div>
                        <ul className="space-y-2">
                          {stack.technologies.map((tech) => (
                            <li
                              key={tech}
                              className="text-stone dark:text-stone-dark font-sans text-sm group hover:text-dark dark:hover:text-primary transition-colors duration-300 cursor-default"
                            >
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Awards Section */}
                {personalInfo.awards && (
                  <div className="mb-12">
                    <h3 className="text-lg font-serif text-dark dark:text-primary mb-5 pb-2 border-b border-accent/10 dark:border-accent-dark/10">
                      Awards & Recognition
                    </h3>
                    <ul className="space-y-3">
                      {personalInfo.awards.map((award, i) => (
                        <li
                          key={i}
                          className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-accent dark:before:bg-accent-dark before:rounded-full"
                        >
                          <p className="text-stone dark:text-stone-dark font-sans">
                            {award}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}

// We're now using the FiServer component from react-icons/fi
