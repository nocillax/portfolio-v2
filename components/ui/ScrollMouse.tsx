"use client";

import { motion } from "framer-motion";

/**
 * ScrollMouse Component
 *
 * A minimalist animated mouse SVG that indicates scrolling functionality.
 * Used in the hero section to prompt users to scroll down.
 *
 * @param onClick - Function to execute when the mouse is clicked (typically scrolls to next section)
 * @param className - Additional CSS classes to apply
 */
interface ScrollMouseProps {
  onClick?: () => void;
  className?: string;
}

export default function ScrollMouse({
  onClick,
  className = "",
}: ScrollMouseProps) {
  return (
    <motion.div
      className={`cursor-pointer ${className}`}
      onClick={onClick}
      // Subtle up and down animation to draw attention
      animate={{ y: [0, -5, 0] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      <svg
        width="24"
        height="36"
        viewBox="0 0 24 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-accent"
      >
        {/* Mouse outline - simple rounded rectangle */}
        <rect
          x="1"
          y="1"
          width="22"
          height="34"
          rx="11"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Scroll indicator/wheel - animates up and down within the mouse */}
        <motion.rect
          x="11"
          y="8"
          width="2"
          height="6"
          rx="1"
          fill="currentColor"
          animate={{
            y: [8, 14, 8], // Move up and down
            opacity: [1, 0.6, 1], // Fade in and out slightly
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      </svg>
    </motion.div>
  );
}
