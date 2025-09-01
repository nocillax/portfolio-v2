"use client";

import { motion } from "framer-motion";

/**
 * AnimatedLine Component Props
 */
interface LineProps {
  x1: string | number; // Starting x-coordinate
  y1: string | number; // Starting y-coordinate
  x2: string | number; // Ending x-coordinate
  y2: string | number; // Ending y-coordinate
  className?: string; // CSS classes
  delay?: number; // Animation delay in seconds
  duration?: number; // Animation duration in seconds
}

/**
 * AnimatedLine Component
 *
 * Creates an SVG line with path animation that draws the line from start to end
 * Used as a building block for the artistic background
 */
export const AnimatedLine: React.FC<LineProps> = ({
  x1,
  y1,
  x2,
  y2,
  className = "stroke-accent/10",
  delay = 0,
  duration = 2,
}) => {
  return (
    <motion.line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      className={className}
      strokeWidth="0.5"
      // Path animation from empty to full length
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{
        duration,
        delay,
        ease: "easeInOut",
      }}
    />
  );
};

/**
 * ArtisticBackground Component
 *
 * Creates a decorative background with animated lines and shapes
 * This provides a minimal, elegant aesthetic to the page without being distracting
 */
export default function ArtisticBackground() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-[-1]">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-20"
      >
        {/* Horizontal lines */}
        <AnimatedLine x1="0" y1="100" x2="1200" y2="100" delay={0.2} />
        <AnimatedLine x1="0" y1="400" x2="1200" y2="400" delay={0.8} />
        <AnimatedLine x1="0" y1="700" x2="1200" y2="700" delay={1.4} />

        {/* Vertical lines */}
        <AnimatedLine x1="100" y1="0" x2="100" y2="800" delay={0.5} />
        <AnimatedLine x1="600" y1="0" x2="600" y2="800" delay={1.1} />
        <AnimatedLine x1="1100" y1="0" x2="1100" y2="800" delay={1.7} />

        {/* Diagonal lines in corners */}
        <AnimatedLine x1="0" y1="0" x2="300" y2="300" delay={2.0} />
        <AnimatedLine x1="900" y1="0" x2="1200" y2="300" delay={2.3} />
        <AnimatedLine x1="0" y1="500" x2="300" y2="800" delay={2.6} />
        <AnimatedLine x1="900" y1="500" x2="1200" y2="800" delay={2.9} />

        {/* Curved lines (arcs) */}
        <motion.path
          d="M 300,100 Q 600,200 900,100"
          fill="none"
          className="stroke-accent/10"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 3.2, ease: "easeInOut" }}
        />

        <motion.path
          d="M 300,700 Q 600,600 900,700"
          fill="none"
          className="stroke-accent/10"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 3.5, ease: "easeInOut" }}
        />

        {/* Accent circles at line intersections */}
        <motion.circle
          cx="100"
          cy="100"
          r="5"
          className="fill-accent/10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 4.0 }}
        />

        <motion.circle
          cx="1100"
          cy="100"
          r="5"
          className="fill-accent/10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 4.1 }}
        />

        <motion.circle
          cx="100"
          cy="700"
          r="5"
          className="fill-accent/10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 4.2 }}
        />

        <motion.circle
          cx="1100"
          cy="700"
          r="5"
          className="fill-accent/10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 4.3 }}
        />

        {/* Central square accent */}
        <motion.rect
          x="600"
          y="400"
          width="10"
          height="10"
          className="fill-accent/10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 4.4 }}
        />
      </svg>
    </div>
  );
}
