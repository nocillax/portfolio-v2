"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../projects/ProjectCard";
import ProjectModal from "../projects/ProjectModal";
import { projects, Project } from "@/data/projects";
import {
  SpinElement,
  PulseElement,
  FloatingElement,
  BouncingElement,
  WiggleElement,
  PathFloatingElement,
  KawaiiCircle,
  KawaiiStar,
  KawaiiDots,
  KawaiiTriangle,
  KawaiiSnowflake,
  KawaiiCloud,
  KawaiiSakura,
  KawaiiLeaf,
  KawaiiSplash,
  KawaiiRipple,
} from "../kawaii";

export default function ProjectsSection() {
  // const categories = ["All", "Full-Stack", "Front-End", "WordPress", "QA"];
  const categories = ["All", "Full-Stack", "Front-End"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    // Optional: prevent scrolling when modal is open
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Re-enable scrolling
    document.body.style.overflow = "auto";
  };

  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-white dark:bg-dark relative"
    >
      {/* Background elements */}
      <div className="absolute inset-0 paper-texture opacity-5 pointer-events-none"></div>

      {/* Kawaii decorative elements - Added even more elements */}
      <SpinElement delay={0} size="xs" slow={true} x="90%" y="5%">
        <KawaiiStar className="text-accent/20" size={10} />
      </SpinElement>
      <PulseElement delay={1} size="xs" x="20%" y="85%">
        <KawaiiCircle className="bg-accent/20" />
      </PulseElement>
      <SpinElement delay={2} size="xs" x="65%" y="30%">
        <KawaiiDots className="text-accent/20" />
      </SpinElement>
      <FloatingElement delay={1.2} size="xs" x="10%" y="20%">
        <KawaiiSakura className="text-accent/20" size={12} />
      </FloatingElement>
      <WiggleElement delay={0.5} size="xs" x="80%" y="60%">
        <KawaiiSnowflake className="text-accent/20" size={10} />
      </WiggleElement>
      <PathFloatingElement delay={2.5} size="sm">
        <KawaiiCloud className="text-accent/10" size={18} />
      </PathFloatingElement>
      <BouncingElement delay={1.8} size="xs" x="40%" y="15%">
        <KawaiiTriangle className="border-b-accent/20" />
      </BouncingElement>
      <SpinElement delay={3} size="xs" x="75%" y="75%" slow={true}>
        <KawaiiStar className="text-accent/20" size={8} />
      </SpinElement>

      {/* Additional kawaii elements */}
      <FloatingElement delay={0.7} size="xs" x="25%" y="45%">
        <KawaiiSnowflake className="text-accent/20" size={9} />
      </FloatingElement>
      <PulseElement delay={2.2} size="xs" x="85%" y="35%">
        <KawaiiSplash className="text-accent/20" size={12} />
      </PulseElement>
      <SpinElement delay={1.5} size="sm" x="15%" y="65%" slow={true}>
        <KawaiiLeaf className="text-accent/20" size={14} />
      </SpinElement>
      <BouncingElement delay={3.1} size="xs" x="60%" y="12%">
        <KawaiiRipple className="text-accent/20" size={10} />
      </BouncingElement>
      <WiggleElement delay={2.7} size="xs" x="45%" y="80%">
        <KawaiiDots className="text-accent/20" />
      </WiggleElement>
      <PathFloatingElement delay={1.0} size="xs">
        <KawaiiSakura className="text-accent/30" size={8} />
      </PathFloatingElement>
      <FloatingElement delay={2.3} size="xs" x="95%" y="22%">
        <KawaiiTriangle className="border-b-accent/20" />
      </FloatingElement>
      <SpinElement delay={0.4} size="xs" x="30%" y="28%" slow={false}>
        <KawaiiSnowflake className="text-accent/30" size={11} />
      </SpinElement>
      <PulseElement delay={3.5} size="sm" x="78%" y="50%">
        <KawaiiSplash className="text-accent/10" size={16} />
      </PulseElement>
      <BouncingElement delay={1.6} size="xs" x="5%" y="40%">
        <KawaiiRipple className="text-accent/30" size={8} />
      </BouncingElement>

      <div className="container mx-auto px-6 relative">
        {/* Section header with refined typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-20"
        >
          {/* Asymmetrical layout with left alignment */}
          <div className="max-w-md relative">
            <span className="block text-sm uppercase tracking-widest text-accent dark:text-accent-dark mb-3 font-sans">
              Selected Works
            </span>

            <h2 className="text-3xl md:text-4xl mb-5 font-serif text-dark dark:text-primary">
              Projects
            </h2>

            <div className="w-12 h-px bg-accent/30 dark:bg-accent-dark/30 my-5"></div>

            <p className="text-stone dark:text-stone-dark leading-relaxed font-sans">
              A collection of my recent work spanning web development, design
              systems, and interactive experiences.
            </p>
          </div>
        </motion.div>

        {/* Category filter with dramatically improved UX for clickable tabs */}
        <div className="flex flex-wrap mb-16 gap-x-8 gap-y-3">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: categories.indexOf(category) * 0.1,
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className={`text-sm relative transition-all duration-300 px-4 py-2 ${
                activeCategory === category
                  ? "text-accent dark:text-accent-dark bg-accent/10 dark:bg-accent-dark/10 border-b-2 border-accent dark:border-accent-dark font-medium"
                  : "text-stone dark:text-stone-dark hover:text-dark dark:hover:text-primary hover:bg-dark/5 dark:hover:bg-dark-subtle/20 hover:shadow-sm"
              } font-sans clickable`}
              aria-label={`Filter by ${category}`}
              aria-pressed={activeCategory === category}
            >
              {category}
              {activeCategory === category && (
                <motion.span
                  layoutId="activeCategory"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-accent dark:bg-accent-dark"
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Projects grid with faster animation on category change */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onViewDetails={handleViewDetails}
                />
              ))
            ) : (
              <div className="col-span-3 text-center py-20 border border-accent/10 dark:border-accent-dark/10">
                <p className="text-stone dark:text-stone-dark font-serif text-lg italic">
                  No projects found in this category
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Minimal footer with project count */}
        <div className="mt-16 pt-8 text-right">
          <span className="text-xs uppercase tracking-widest text-stone dark:text-stone-dark font-sans">
            Displaying {filteredProjects.length} projects
          </span>
        </div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
}
