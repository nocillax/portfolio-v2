"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiEye } from "react-icons/fi";
import { Project } from "@/data/projects";

/**
 * ProjectCard Component Props
 */
interface ProjectCardProps {
  project: Project; // Project data
  index: number; // Used for staggered animations
  onViewDetails: (project: Project) => void; // Callback for viewing project details
}

/**
 * ProjectCard Component
 *
 * Displays a single project card in the projects grid.
 * Features:
 * - Elegant hover animation with scale transform
 * - Tag display with limit
 * - External links to GitHub and live site
 * - Click handler for modal view
 *
 * @param project - The project data to display
 * @param index - Index for staggered animations
 * @param onViewDetails - Function to call when clicking to view project details
 */
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
      <div className="bg-white overflow-hidden border border-transparent hover:border-accent/30 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 elegant-shadow">
        {/* Project image/preview area */}
        <div
          className="aspect-video relative overflow-hidden cursor-pointer hover:cursor-pointer"
          onClick={() => onViewDetails(project)}
        >
          {/* Subtle paper texture overlay */}
          <div className="absolute inset-0 paper-texture opacity-10 pointer-events-none"></div>

          {/* No overlay, just cursor change and zoom effect on hover */}

          {/* Placeholder for project image with stronger hover effect */}
          <div className="relative w-full h-full flex items-center justify-center bg-paper group-hover:scale-[1.06] transition-transform duration-500">
            <span className="text-2xl font-serif text-accent/80 italic group-hover:text-accent transition-colors duration-500">
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

        {/* Project details section */}
        <div className="p-6 bg-white">
          {/* Header with category, title and links */}
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs uppercase font-sans tracking-widest text-accent">
                {project.category}
              </span>
              <h3 className="text-xl font-serif mt-1">{project.title}</h3>
            </div>

            {/* External links */}
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

          {/* Project description */}
          <p className="mt-4 text-stone text-sm line-clamp-3 leading-relaxed font-sans">
            {project.description}
          </p>

          {/* Divider */}
          <div className="w-16 h-px bg-accent/10 my-5"></div>

          {/* Project tags with max display limit */}
          <div className="flex flex-wrap gap-3 mt-3">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs font-sans text-stone tracking-wide px-2 py-1 bg-accent/5 rounded-sm border border-accent/10"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="text-xs font-sans text-accent px-2 py-1 bg-accent/5 rounded-sm border border-accent/10">
                +{project.tags.length - 3}
              </span>
            )}
          </div>

          {/* View Details Button */}
          <button
            onClick={() => onViewDetails(project)}
            className="w-full mt-6 relative group clickable"
            aria-label="View project details"
          >
            <div className="py-3 flex items-center justify-center gap-3 font-sans text-sm tracking-wide text-dark hover:text-accent transition-colors duration-500 border-t border-transparent group-hover:border-accent/20">
              <FiEye
                className="text-accent group-hover:translate-x-2 transition-transform duration-500"
                size={18}
              />
              <span className="relative font-medium">
                View Project Details
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </span>
            </div>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
