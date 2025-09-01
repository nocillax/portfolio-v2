"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  // Skills to display
  const skills = [
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Express", level: 85 },
    { name: "MongoDB", level: 75 },
    { name: "WordPress", level: 80 },
    { name: "Tailwind CSS", level: 90 },
    { name: "QA Testing", level: 85 },
  ];

  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="w-full max-w-md mx-auto aspect-square relative overflow-hidden rounded-xl border-4 border-accent">
              <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                {/* This would be replaced with an actual image in a real portfolio */}
                <div className="text-6xl font-bold text-accent">JD</div>
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
            </div>
          </motion.div>

          {/* About text and skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Full Stack Web Developer
            </h3>
            <p className="text-gray-300 mb-6">
              I'm a passionate Full Stack Web Developer with 5+ years of
              experience creating responsive and user-friendly web applications.
              My expertise spans across both front-end and back-end
              technologies, allowing me to build complete, scalable solutions.
            </p>
            <p className="text-gray-300 mb-8">
              With a background in Computer Science and a continuous learning
              mindset, I stay updated with the latest technologies and best
              practices. I enjoy solving complex problems and transforming ideas
              into functional, elegant applications.
            </p>

            {/* Skills */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold mb-4">My Skills</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="mb-3">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: 0.1 * index }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-accent h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
