"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiCode, FiDatabase, FiLayout, FiTool } from "react-icons/fi";

export default function AboutSection() {
  // Tech stacks by category
  const techStacks = [
    {
      category: "Front End",
      icon: <FiLayout className="text-accent w-5 h-5" />,
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    {
      category: "Back End",
      icon: <FiServer className="text-accent w-5 h-5" />,
      technologies: ["Node.js", "Express", "REST APIs", "GraphQL"],
    },
    {
      category: "Database",
      icon: <FiDatabase className="text-accent w-5 h-5" />,
      technologies: ["MongoDB", "PostgreSQL", "Redis", "Prisma"],
    },
    {
      category: "Tools & Others",
      icon: <FiTool className="text-accent w-5 h-5" />,
      technologies: ["Git", "Docker", "CI/CD", "Jest", "Cypress", "Figma"],
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-white">
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
            <span className="block text-sm uppercase tracking-widest text-accent font-sans mb-2">
              About me
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-dark mb-8">
              Design-minded developer focused on building elegant, user-centered
              experiences
            </h2>

            {/* Profile image - more reasonably sized */}
            <div className="mt-12 mb-8 relative w-40 h-40 md:w-56 md:h-56 overflow-hidden">
              <div className="w-full h-full border border-accent/20 flex items-center justify-center bg-paper">
                {/* This would be replaced with an actual image in a real portfolio */}
                <span className="text-3xl font-serif italic text-accent">
                  JD
                </span>
                {/* Example of how to use Next.js Image:
                <Image
                  src="/images/profile.jpg"
                  alt="John Doe"
                  fill
                  className="object-cover"
                  priority
                />
                */}
              </div>
              <div className="absolute -bottom-2 -right-2 w-20 h-20 border border-accent/20 z-[-1]"></div>
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
            <div className="prose prose-lg max-w-none">
              <p className="text-dark text-lg font-medium mb-6 font-sans">
                I'm a full-stack developer with 5+ years of experience creating
                thoughtful digital experiences that blend form and function.
              </p>

              <p className="text-stone mb-6 font-sans">
                My approach combines clean, minimalist design principles with
                robust technical implementation. I believe in creating software
                that not only solves problems effectively but also provides an
                intuitive and elegant user experience.
              </p>

              <p className="text-stone mb-6 font-sans">
                With a background in Computer Science and a passion for design,
                I bring a holistic perspective to every project. I focus on
                writing clean, maintainable code that scales well and adapts to
                changing requirements.
              </p>

              {/* Tech stacks in a more elegant way */}
              <div className="mt-12 pt-6 border-t border-accent/10">
                <h3 className="text-lg font-serif text-dark mb-8">
                  Technical Expertise
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
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
                        <h4 className="font-sans font-medium text-dark">
                          {stack.category}
                        </h4>
                      </div>
                      <ul className="space-y-2">
                        {stack.technologies.map((tech) => (
                          <li
                            key={tech}
                            className="text-stone font-sans text-sm"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Add this component for the icon that's missing
function FiServer(props: any) {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6" y2="6"></line>
      <line x1="6" y1="18" x2="6" y2="18"></line>
    </svg>
  );
}
