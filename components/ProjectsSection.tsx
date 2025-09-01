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
    <section id="projects" className="section-padding bg-primary">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My Projects</h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
          <p className="max-w-2xl mx-auto mt-4 text-gray-300">
            Explore my recent work across various technologies and domains. Each
            project represents different skills and challenges.
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                activeCategory === category
                  ? "bg-accent text-white"
                  : "bg-secondary text-gray-300 hover:bg-dark"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
            <div className="col-span-3 text-center py-10">
              <p className="text-xl text-gray-300">
                No projects in this category yet.
              </p>
            </div>
          )}
        </motion.div>

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
