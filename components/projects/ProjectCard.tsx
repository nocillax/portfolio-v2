"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiEye } from "react-icons/fi";
import { Project } from "@/data/projects";
import Image from "next/image";

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
      <div className="bg-white dark:bg-dark-paper overflow-hidden border border-transparent hover:border-accent/30 dark:hover:border-accent-dark/30 transition-all duration-500 hover:shadow-xl hover:shadow-accent/20 dark:hover:shadow-accent-dark/20 transform hover:-translate-y-2 elegant-shadow dark:elegant-shadow-dark">
        {/* Project image/preview area */}
        <div
          className="aspect-video relative overflow-hidden cursor-pointer hover:cursor-pointer"
          onClick={() => onViewDetails(project)}
        >
          {/* Subtle paper texture overlay */}
          <div className="absolute inset-0 paper-texture opacity-10 pointer-events-none"></div>

          {/* No overlay, just cursor change and zoom effect on hover */}

          {/* Placeholder for project image with stronger hover effect */}
          <div className="relative w-full h-full flex items-center justify-center bg-paper dark:bg-dark-secondary group-hover:scale-[1.06] group-hover:bg-paper/90 group-hover:border-accent/40 dark:group-hover:bg-dark-secondary/90 dark:group-hover:border-accent-dark/40 transition-all duration-500">
            {/* Project image implementation with Next.js Image component */}
            <div className="relative w-full h-full image-frame">
              <Image
                src={project.image || "/images/projects/placeholder.jpg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                priority={index < 2} // Prioritize loading first visible images
              />
            </div>
          </div>
        </div>

        {/* Project details section */}
        <div className="p-6 bg-white dark:bg-dark-paper">
          {/* Header with category, title and links */}
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs uppercase font-sans tracking-widest text-accent dark:text-accent-dark">
                {project.category}
              </span>
              <h3 className="text-xl font-serif mt-1 text-dark dark:text-primary">
                {project.title}
              </h3>
            </div>

            {/* External links */}
            <div className="flex space-x-4 mt-1">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark dark:text-primary hover:text-accent dark:hover:text-accent-dark transition-colors duration-300"
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
                  className="text-dark dark:text-primary hover:text-accent dark:hover:text-accent-dark transition-colors duration-300"
                  aria-label="Live Demo"
                >
                  <FiExternalLink size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Project description */}
          <p className="mt-4 text-stone dark:text-stone-dark text-sm line-clamp-3 leading-relaxed font-sans">
            {project.description}
          </p>

          {/* Divider */}
          <div className="w-16 h-px bg-accent/10 dark:bg-accent-dark/10 my-5"></div>

          {/* Project tags with max display limit */}
          <div className="flex flex-wrap gap-3 mt-3">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs font-sans text-stone dark:text-stone-dark tracking-wide px-2 py-1 bg-accent/5 dark:bg-accent-dark/5 rounded-sm border border-accent/10 dark:border-accent-dark/10"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="text-xs font-sans text-accent dark:text-accent-dark px-2 py-1 bg-accent/5 dark:bg-accent-dark/5 rounded-sm border border-accent/10 dark:border-accent-dark/10">
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
            <div className="py-3 flex items-center justify-center gap-3 font-sans text-sm tracking-wide text-dark dark:text-primary hover:text-accent dark:hover:text-accent-dark transition-colors duration-500 border-t border-transparent group-hover:border-accent/30 dark:group-hover:border-accent-dark/30">
              <FiEye
                className="text-accent dark:text-accent-dark group-hover:translate-x-2 transition-transform duration-500"
                size={18}
              />
              <span className="relative font-medium">
                View Project Details
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent dark:bg-accent-dark scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </span>
            </div>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
