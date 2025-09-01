"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-primary rounded-xl overflow-hidden shadow-xl"
    >
      <div className="aspect-video relative overflow-hidden bg-dark">
        {/* This div simulates the project image */}
        <div className="w-full h-full flex items-center justify-center bg-primary">
          <span className="text-2xl font-bold text-accent">
            {project.title}
          </span>
        </div>
        {/* For real implementation, use Image component:
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
        */}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-xs font-medium text-accent rounded-full px-3 py-1 bg-accent bg-opacity-10">
              {project.category}
            </span>
            <h3 className="text-xl font-bold mt-2">{project.title}</h3>
          </div>
          <div className="flex space-x-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
                aria-label="GitHub Repository"
              >
                <FiGithub size={20} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
                aria-label="Live Demo"
              >
                <FiExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-300 mt-4 text-sm">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-5">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs bg-dark px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
