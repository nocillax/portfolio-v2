"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects, Project } from "@/data/projects";

export default function ProjectsSection() {
  const categories = ["All", "Full-Stack", "Front-End", "WordPress", "QA"];
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
    <section id="projects" className="py-24 md:py-32 bg-white relative">
      {/* Background elements */}
      <div className="absolute inset-0 paper-texture opacity-5 pointer-events-none"></div>

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
            <span className="block text-sm uppercase tracking-widest text-accent mb-3 font-sans">
              Selected Works
            </span>

            <h2 className="text-3xl md:text-4xl mb-5 font-serif text-dark">
              Projects
            </h2>

            <div className="w-12 h-px bg-accent/30 my-5"></div>

            <p className="text-stone leading-relaxed font-sans">
              A collection of my recent work spanning web development, design
              systems, and interactive experiences.
            </p>
          </div>
        </motion.div>

        {/* Category filter with minimal styling */}
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
              className={`text-sm relative transition-all duration-300 ${
                activeCategory === category
                  ? "text-accent animated-underline"
                  : "text-stone hover:text-dark"
              } font-sans`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects grid with asymmetrical layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative"
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
            <div className="col-span-3 text-center py-20 border border-accent/10">
              <p className="text-stone font-serif text-lg italic">
                No projects found in this category
              </p>
            </div>
          )}
        </motion.div>

        {/* Minimal footer with project count */}
        <div className="mt-16 pt-8 text-right">
          <span className="text-xs uppercase tracking-widest text-stone font-sans">
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
