"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FiCode,
  FiDatabase,
  FiLayout,
  FiTool,
  FiServer,
  FiPackage,
} from "react-icons/fi";
import { personalInfo } from "@/data/personalInfo";

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
    <section id="about" className="py-24 md:py-32 bg-white dark:bg-dark">
      <div className="container mx-auto px-6 md:px-10">
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

            {/* Profile image - centered in mobile view */}
            <div className="mt-12 mb-0 relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 overflow-hidden mx-auto lg:mx-0">
              <div className="w-full h-full border border-accent/20 dark:border-accent-dark/30 bg-paper dark:bg-dark-paper relative">
                <Image
                  src="/images/profile/profile.JPG"
                  alt={personalInfo.fullName}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-20 h-20 border border-accent/20 dark:border-accent-dark/30 z-[-1]"></div>
            </div>
          </motion.div>

          {/* Right column - About text and tech stacks */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-dark dark:text-primary text-lg font-medium mb-6 font-sans">
                {personalInfo.bio}
              </p>

              {/* Work Experience Section */}
              {personalInfo.experience && (
                <div className="mb-10">
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
                <div className="mb-10">
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
              <div className="mt-12 pt-6 border-t border-accent/10 dark:border-accent-dark/10">
                <h3 className="text-lg font-serif text-dark dark:text-primary mb-8">
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
                <div className="mb-10">
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
  );
}

// We're now using the FiServer component from react-icons/fi
