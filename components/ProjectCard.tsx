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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className="group"
    >
      <div className="bg-white overflow-hidden shadow-sm transition-all duration-500 hover:shadow-md elegant-shadow">
        <div
          className="aspect-video relative overflow-hidden cursor-pointer"
          onClick={() => onViewDetails(project)}
        >
          {/* Subtle paper texture overlay */}
          <div className="absolute inset-0 paper-texture opacity-10 pointer-events-none"></div>

          {/* View project overlay with fade-in animation */}
          <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-all duration-700 flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="px-6 py-2 border border-accent/20 bg-white/90 text-dark flex items-center gap-2 font-sans text-sm tracking-wide">
                <FiEye className="text-accent" /> View Project
              </span>
            </motion.div>
          </div>

          {/* Placeholder for project image with minimal styling */}
          <div className="relative w-full h-full flex items-center justify-center bg-paper group-hover:scale-[1.02] transition-transform duration-700">
            <span className="text-2xl font-serif text-accent/80 italic">
              {project.title}
            </span>

            {/* For real implementation with proper Next.js Image component:
            <div className="relative w-full h-full image-frame">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
            */}
          </div>
        </div>

        <div className="p-6 bg-white">
          {/* Header with elegant styling */}
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs uppercase font-sans tracking-widest text-accent">
                {project.category}
              </span>
              <h3 className="text-xl font-serif mt-1">{project.title}</h3>
            </div>

            {/* Link icons with subtle hover effect */}
            <div className="flex space-x-4 mt-1">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark hover:text-accent transition-colors duration-300"
                  aria-label="GitHub Repository"
                >
                  <FiGithub size={18} />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark hover:text-accent transition-colors duration-300"
                  aria-label="Live Demo"
                >
                  <FiExternalLink size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Description with refined typography */}
          <p className="mt-4 text-stone text-sm line-clamp-3 leading-relaxed font-sans">
            {project.description}
          </p>

          {/* Subtle divider */}
          <div className="w-16 h-px bg-accent/10 my-5"></div>

          {/* Tags with minimal styling */}
          <div className="flex flex-wrap gap-3 mt-3">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs font-sans text-stone tracking-wide"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="text-xs font-sans text-accent">
                +{project.tags.length - 3}
              </span>
            )}
          </div>

          {/* View Details Button with elegant styling */}
          <button
            onClick={() => onViewDetails(project)}
            className="w-full mt-6 relative border-elegant group"
          >
            <div className="py-2.5 flex items-center justify-center gap-2 font-sans text-sm tracking-wide text-dark hover:text-accent transition-colors duration-500">
              View Project Details
            </div>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
