"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiX,
  FiChevronRight,
  FiChevronLeft,
  FiExternalLink,
  FiGithub,
} from "react-icons/fi";
import { Project } from "@/data/projects";
import Image from "next/image";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset current image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project?.id]);

  // Handle escape key press
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose]);

  // If there's no project or modal is closed, don't render
  if (!project || !isOpen) {
    return null;
  }

  // Navigate between images
  const nextImage = () => {
    if (!project.images || project.images.length <= 1) return;
    setCurrentImageIndex((prev) => (prev + 1) % (project.images?.length || 1));
  };

  const prevImage = () => {
    if (!project.images || project.images.length <= 1) return;
    const imagesLength = project.images?.length || 1;
    setCurrentImageIndex((prev) => (prev - 1 + imagesLength) % imagesLength);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
        >
          {/* Backdrop with subtle paper texture */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.95 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-dark/80"
            onClick={onClose}
          />
          <div className="absolute inset-0 paper-texture opacity-5 pointer-events-none"></div>

          {/* Modal Content - with an enhanced card growing animation */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: 0 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.5, opacity: 0, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.19, 1, 0.22, 1],
              opacity: { duration: 0.4 },
            }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-dark-paper overflow-hidden z-10 elegant-shadow-dark border border-accent/20 dark:border-accent-dark/20"
          >
            {/* Close Button - Elegant style */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center text-dark dark:text-primary hover:text-accent dark:hover:text-accent-dark transition-colors duration-300"
              aria-label="Close modal"
            >
              <FiX size={20} />
            </button>

            <div className="overflow-y-auto max-h-[90vh] scrollbar-hide">
              {/* Image Gallery */}
              <div className="relative aspect-video bg-white dark:bg-dark-paper">
                {project.images && project.images.length > 0 ? (
                  <>
                    {/* Main Image with elegant fade effect */}
                    <div className="w-full h-full relative overflow-hidden">
                      <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7 }}
                        className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-dark-secondary"
                      >
                        {/* Real implementation with Next.js Image */}
                        <div className="relative w-full h-full">
                          <Image
                            src={
                              project.images?.[currentImageIndex] ||
                              project.image
                            }
                            alt={`${project.title} screenshot ${
                              currentImageIndex + 1
                            }`}
                            fill
                            className="object-contain"
                            priority={true}
                          />
                          <div className="absolute inset-0 paper-texture opacity-10 pointer-events-none"></div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Navigation Controls - Minimalist style */}
                    {project.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center text-dark dark:text-primary hover:text-accent dark:hover:text-accent-dark transition-colors duration-300 bg-white/90 dark:bg-dark-secondary/90 rounded-full shadow-sm"
                          aria-label="Previous image"
                        >
                          <FiChevronLeft size={24} />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center text-dark dark:text-primary hover:text-accent dark:hover:text-accent-dark transition-colors duration-300 bg-white/90 dark:bg-dark-secondary/90 rounded-full shadow-sm"
                          aria-label="Next image"
                        >
                          <FiChevronRight size={24} />
                        </button>

                        {/* Image Indicators - Elegant dots */}
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                          {project.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className="transition-all duration-300"
                              aria-label={`Go to image ${index + 1}`}
                            >
                              <div
                                className={`w-2 h-2 rounded-full ${
                                  currentImageIndex === index
                                    ? "bg-accent dark:bg-accent-dark"
                                    : "bg-stone/30 dark:bg-stone-dark/30"
                                }`}
                              ></div>
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  // Fallback if no gallery images - use main project image
                  <div className="w-full h-full bg-paper dark:bg-dark-secondary relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain"
                      priority={true}
                    />
                    <div className="absolute inset-0 paper-texture opacity-10 pointer-events-none"></div>
                  </div>
                )}
              </div>

              {/* Content - Elegant styled */}
              <div className="p-6 md:p-10 bg-white dark:bg-dark-paper">
                {/* Title Section with Elegant Design */}
                <div className="flex flex-wrap justify-between items-start gap-6 mb-10 relative">
                  <div className="flex-1">
                    <span className="text-xs uppercase font-sans tracking-widest text-accent dark:text-accent-dark mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif text-dark dark:text-primary">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex space-x-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-elegant flex items-center gap-2 px-4 py-2 text-dark dark:text-primary hover:text-accent dark:hover:text-accent-dark transition-colors duration-300"
                        aria-label="GitHub Repository"
                      >
                        <FiGithub size={18} />
                        <span className="font-sans text-sm">GitHub</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-elegant flex items-center gap-2 px-4 py-2 text-dark dark:text-primary hover:text-accent dark:hover:text-accent-dark transition-colors duration-300"
                        aria-label="Live Demo"
                      >
                        <FiExternalLink size={18} />
                        <span className="font-sans text-sm">Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Detailed Description with Elegant styling */}
                <div className="mb-12 relative">
                  <h4 className="text-lg font-serif mb-4 text-dark dark:text-primary">
                    About the Project
                  </h4>
                  <p className="text-stone dark:text-stone-dark leading-relaxed font-sans">
                    {project.longDescription || project.description}
                  </p>
                </div>

                {/* Two Column Layout for Features and Technologies with Elegant Styling */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                  {/* Features */}
                  {project.features && project.features.length > 0 && (
                    <div className="border-l border-accent/10 dark:border-accent-dark/10 pl-6">
                      <h4 className="text-lg font-serif mb-4 text-dark dark:text-primary">
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {project.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            className="text-stone dark:text-stone-dark font-sans"
                            initial={{ opacity: 0, x: -5 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                          >
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="border-l border-accent/10 dark:border-accent-dark/10 pl-6">
                      <h4 className="text-lg font-serif mb-4 text-dark dark:text-primary">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-y-3 gap-x-6">
                        {project.technologies.map((tech, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-stone dark:text-stone-dark font-mono text-sm"
                          >
                            {tech}
                            {project.technologies &&
                              index < project.technologies.length - 1 && (
                                <span className="ml-4 text-accent/40 dark:text-accent-dark/40">
                                  •
                                </span>
                              )}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Challenges - Elegant Box */}
                {project.challenges && (
                  <div className="mt-10 mb-12">
                    <h4 className="text-lg font-serif mb-4 text-dark dark:text-primary">
                      Challenges & Solutions
                    </h4>
                    <p className="text-stone dark:text-stone-dark font-sans leading-relaxed p-6 bg-paper dark:bg-dark-secondary">
                      {project.challenges}
                    </p>
                  </div>
                )}

                {/* Tags with matching minimalist tag styling */}
                <div className="mt-10 pt-6 border-t border-accent/10 dark:border-accent-dark/10">
                  <div className="flex flex-wrap gap-x-3 gap-y-3">
                    {project.tags.map((tag, index) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.05, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-xs font-sans text-stone dark:text-stone-dark tracking-wide px-2 py-1 bg-accent/5 dark:bg-accent-dark/5 rounded-sm border border-accent/10 dark:border-accent-dark/10"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
