"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiEye } from "react-icons/fi";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onViewDetails: (project: Project) => void;
}

export default function ProjectCard({
  project,
  index,
  onViewDetails,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group bg-primary rounded-xl overflow-hidden shadow-xl hover:shadow-accent/20 hover:-translate-y-1 transition-all duration-300"
    >
      <div
        className="aspect-video relative overflow-hidden cursor-pointer"
        onClick={() => onViewDetails(project)}
      >
        {/* Overlay with animation on hover */}
        <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
          <span className="px-4 py-2 bg-accent rounded-md text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
            <FiEye /> View Details
          </span>
        </div>

        {/* This div simulates the project image */}
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-dark to-secondary group-hover:scale-105 transition-transform duration-500">
          <span className="text-2xl font-bold text-accent">
            {project.title}
          </span>
        </div>
        {/* For real implementation, use Image component:
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
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

        <p className="text-gray-300 mt-4 text-sm line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-xs bg-dark px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs bg-dark px-3 py-1 rounded-full">
              +{project.tags.length - 3} more
            </span>
          )}
        </div>

        {/* View Details Button */}
        <button
          onClick={() => onViewDetails(project)}
          className="w-full mt-6 py-2 bg-secondary hover:bg-dark transition-colors rounded-md text-sm font-medium flex items-center justify-center gap-2"
        >
          <FiEye size={16} />
          View Project Details
        </button>
      </div>
    </motion.div>
  );
}
