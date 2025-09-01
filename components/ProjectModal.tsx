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
    if (!project.images) return;
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    if (!project.images) return;
    setCurrentImageIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-primary border border-secondary rounded-xl overflow-hidden shadow-2xl z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-dark bg-opacity-80 flex items-center justify-center text-white hover:bg-accent transition-colors"
              aria-label="Close modal"
            >
              <FiX size={24} />
            </button>

            <div className="overflow-y-auto max-h-[90vh]">
              {/* Image Gallery */}
              <div className="relative aspect-video bg-dark">
                {project.images && project.images.length > 0 ? (
                  <>
                    {/* Main Image */}
                    <div className="w-full h-full relative overflow-hidden">
                      <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full flex items-center justify-center bg-dark"
                      >
                        {/* Image placeholder - would be replaced with actual images */}
                        <div className="w-full h-full bg-gradient-to-br from-dark to-secondary flex items-center justify-center">
                          <span className="text-2xl font-bold text-accent">
                            {project.title} - Image {currentImageIndex + 1}
                          </span>
                        </div>
                        {/* Real implementation would use: 
                        <Image 
                          src={project.images[currentImageIndex]} 
                          alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                          fill
                          className="object-contain"
                        /> 
                        */}
                      </motion.div>
                    </div>

                    {/* Navigation Controls */}
                    {project.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-primary bg-opacity-60 flex items-center justify-center hover:bg-accent transition-colors"
                          aria-label="Previous image"
                        >
                          <FiChevronLeft size={24} />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-primary bg-opacity-60 flex items-center justify-center hover:bg-accent transition-colors"
                          aria-label="Next image"
                        >
                          <FiChevronRight size={24} />
                        </button>

                        {/* Image Indicators */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                          {project.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`w-3 h-3 rounded-full transition-all ${
                                currentImageIndex === index
                                  ? "bg-accent scale-125"
                                  : "bg-white bg-opacity-50"
                              }`}
                              aria-label={`Go to image ${index + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  // Fallback if no gallery images
                  <div className="w-full h-full bg-gradient-to-br from-dark to-secondary flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent">
                      {project.title}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div>
                    <span className="text-xs font-medium text-accent rounded-full px-3 py-1 bg-accent bg-opacity-10 mb-2 inline-block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex space-x-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-md bg-secondary hover:bg-dark transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <FiGithub size={18} />
                        <span>GitHub</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-md bg-accent hover:bg-opacity-90 transition-colors"
                        aria-label="Live Demo"
                      >
                        <FiExternalLink size={18} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Detailed Description */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold mb-3">About the Project</h4>
                  <p className="text-gray-300">
                    {project.longDescription || project.description}
                  </p>
                </div>

                {/* Two Column Layout for Features and Technologies */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Features */}
                  {project.features && project.features.length > 0 && (
                    <div>
                      <h4 className="text-lg font-bold mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-accent mr-2">•</span>
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  {project.technologies && project.technologies.length > 0 && (
                    <div>
                      <h4 className="text-lg font-bold mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="text-sm bg-secondary px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Challenges */}
                {project.challenges && (
                  <div className="mt-8">
                    <h4 className="text-lg font-bold mb-3">
                      Challenges & Solutions
                    </h4>
                    <p className="text-gray-300 p-4 bg-secondary bg-opacity-40 rounded-lg border-l-4 border-accent">
                      {project.challenges}
                    </p>
                  </div>
                )}

                {/* Tags */}
                <div className="mt-8">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-dark px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
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
