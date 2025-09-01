"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

// Type definitions for props to ensure type safety
interface AnimatedElementProps {
  children: ReactNode;
  delay?: number;
  size?: "xs" | "sm" | "md" | "lg";
  x?: string | number;
  y?: string | number;
}

interface SpinElementProps extends AnimatedElementProps {
  slow?: boolean;
}

/**
 * Size classes for Kawaii animation wrappers
 * Controls the dimensions of the wrapper element that contains the animated shape
 */
const sizeClasses = {
  xs: "w-4 h-4",
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
};

/**
 * Floating animation wrapper - creates a gentle floating up and down motion
 *
 * @param children - The kawaii element to animate
 * @param delay - Animation start delay in seconds
 * @param size - Size preset (xs, sm, md, lg)
 * @param x - Horizontal position (percentage or pixels)
 * @param y - Vertical position (percentage or pixels)
 */
export const FloatingElement = ({
  children,
  delay = 0,
  size = "sm",
  x = "auto",
  y = "auto",
}: AnimatedElementProps) => {
  // Convert position props to CSS style object
  const positionStyle = {
    left: x !== "auto" ? x : undefined,
    top: y !== "auto" ? y : undefined,
  };

  return (
    <motion.div
      className={`absolute pointer-events-none opacity-70 ${sizeClasses[size]}`}
      style={positionStyle}
      animate={{
        y: [0, -15, 0],
        rotate: [0, 5, 0, -5, 0],
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * Bouncing animation wrapper - creates a gentle bounce effect
 *
 * @param children - The kawaii element to animate
 * @param delay - Animation start delay in seconds
 * @param size - Size preset (xs, sm, md, lg)
 * @param x - Horizontal position (percentage or pixels)
 * @param y - Vertical position (percentage or pixels)
 */
export const BouncingElement = ({
  children,
  delay = 0,
  size = "sm",
  x = "auto",
  y = "auto",
}: AnimatedElementProps) => {
  // Different size presets for bouncing elements
  const bouncingSizeClasses = {
    xs: "w-4 h-4",
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  };

  const positionStyle = {
    left: x !== "auto" ? x : undefined,
    top: y !== "auto" ? y : undefined,
  };

  return (
    <motion.div
      className={`absolute pointer-events-none opacity-70 ${bouncingSizeClasses[size]}`}
      style={positionStyle}
      animate={{
        y: [0, -10, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * Spinning animation wrapper - rotates elements
 *
 * @param children - The kawaii element to animate
 * @param delay - Animation start delay in seconds
 * @param size - Size preset (xs, sm, md, lg)
 * @param slow - Whether to use slow rotation
 * @param x - Horizontal position (percentage or pixels)
 * @param y - Vertical position (percentage or pixels)
 */
export const SpinElement = ({
  children,
  delay = 0,
  size = "sm",
  slow = false,
  x = "auto",
  y = "auto",
}: SpinElementProps) => {
  // Different size presets for spin elements
  const spinSizeClasses = {
    xs: "w-3 h-3",
    sm: "w-5 h-5",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  const positionStyle = {
    left: x !== "auto" ? x : undefined,
    top: y !== "auto" ? y : undefined,
  };

  return (
    <motion.div
      className={`absolute pointer-events-none opacity-70 ${spinSizeClasses[size]}`}
      style={positionStyle}
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: slow ? 12 : 6,
        delay,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * Pulse animation wrapper - creates a pulsing fade in/out effect
 *
 * @param children - The kawaii element to animate
 * @param delay - Animation start delay in seconds
 * @param size - Size preset (xs, sm, md, lg)
 * @param x - Horizontal position (percentage or pixels)
 * @param y - Vertical position (percentage or pixels)
 */
export const PulseElement = ({
  children,
  delay = 0,
  size = "sm",
  x = "auto",
  y = "auto",
}: AnimatedElementProps) => {
  const positionStyle = {
    left: x !== "auto" ? x : undefined,
    top: y !== "auto" ? y : undefined,
  };

  return (
    <motion.div
      className={`absolute pointer-events-none ${sizeClasses[size]}`}
      style={positionStyle}
      animate={{
        opacity: [0.4, 0.8, 0.4],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * Path floating animation wrapper - elements follow a curved path
 *
 * @param children - The kawaii element to animate
 * @param delay - Animation start delay in seconds
 * @param size - Size preset (xs, sm, md, lg)
 */
export const PathFloatingElement = ({
  children,
  delay = 0,
  size = "sm",
}: AnimatedElementProps) => {
  return (
    <motion.div
      className={`absolute pointer-events-none opacity-70 ${sizeClasses[size]}`}
      animate={{
        x: [0, 40, 80, 40, 0],
        y: [0, 30, 0, -30, 0],
      }}
      transition={{
        duration: 15,
        delay,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * Wiggle animation wrapper - creates a wiggling rotational motion
 *
 * @param children - The kawaii element to animate
 * @param delay - Animation start delay in seconds
 * @param size - Size preset (xs, sm, md, lg)
 * @param x - Horizontal position (percentage or pixels)
 * @param y - Vertical position (percentage or pixels)
 */
export const WiggleElement = ({
  children,
  delay = 0,
  size = "sm",
  x = "auto",
  y = "auto",
}: AnimatedElementProps) => {
  // Different size classes for wiggle elements
  const wiggleSizeClasses = {
    xs: "w-4 h-4",
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  };

  const positionStyle = {
    left: x !== "auto" ? x : undefined,
    top: y !== "auto" ? y : undefined,
  };

  return (
    <motion.div
      className={`absolute pointer-events-none opacity-70 ${wiggleSizeClasses[size]}`}
      style={positionStyle}
      animate={{
        rotate: [0, 10, -10, 10, 0],
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};
