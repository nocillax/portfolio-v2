"use client";

import { motion } from "framer-motion";

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
        {/* Mouse outline */}
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

        {/* Scroll indicator/wheel */}
        <motion.rect
          x="11"
          y="8"
          width="2"
          height="6"
          rx="1"
          fill="currentColor"
          animate={{
            y: [8, 14, 8],
            opacity: [1, 0.6, 1],
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
