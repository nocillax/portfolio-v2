"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  KawaiiCloud,
  KawaiiStar,
  KawaiiSnowflake,
  KawaiiOrigami,
  KawaiiCrystal,
  KawaiiMoon,
  KawaiiSun,
  KawaiiFlower,
} from "../kawaii";

interface CursorFollowerProps {
  shape?:
    | "cloud"
    | "star"
    | "snowflake"
    | "origami"
    | "crystal"
    | "moon"
    | "sun"
    | "flower";
  size?: number;
  colorOpacity?: number;
  springStiffness?: number;
  springDamping?: number;
}

/**
 * CursorFollower Component
 *
 * A decorative element that follows the cursor with smooth animation.
 * This is a universal component used across the entire portfolio.
 *
 * Configuration is centralized here - change it in this one place to affect all cursors.
 */
export default function CursorFollower({
  // These props are optional overrides, but by default we use the universal settings below
  shape = "snowflake",
  size = 25, // Universal size for the cursor follower
  colorOpacity = 60, // Slightly higher opacity for visibility
  springStiffness = 120,
  springDamping = 25,
}: CursorFollowerProps) {
  const [isMounted, setIsMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for the cursor follower
  const springConfig = { damping: springDamping, stiffness: springStiffness };
  const followerX = useSpring(mouseX, springConfig);
  const followerY = useSpring(mouseY, springConfig);

  // Convert opacity to a decimal with string format (limit between 0-100)
  const clampedOpacity = Math.max(0, Math.min(100, colorOpacity));
  const opacityStr = `${clampedOpacity}`;

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const renderShape = () => {
    switch (shape) {
      case "cloud":
        return <KawaiiCloud className="text-accent" size={size} />;
      case "star":
        return <KawaiiStar className="text-accent" size={size} />;
      case "snowflake":
        return <KawaiiSnowflake className="text-accent" size={size} />;
      case "origami":
        return <KawaiiOrigami className="text-accent" size={size} />;
      case "crystal":
        return <KawaiiCrystal className="text-accent" size={size * 0.9} />; // Slightly smaller due to proportions
      case "moon":
        return <KawaiiMoon className="text-accent" size={size} />;
      case "sun":
        return <KawaiiSun className="text-accent" size={size} />;
      case "flower":
        return <KawaiiFlower className="text-accent" size={size} />;
      default:
        return <KawaiiSnowflake className="text-accent" size={size} />;
    }
  };

  if (!isMounted) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      style={{
        left: -size / 2, // Offset to center the element on the cursor
        top: -size / 2,
        x: followerX,
        y: followerY,
      }}
    >
      <motion.div
        className={`opacity-${opacityStr}`}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [0.8, 1.1, 0.9],
          opacity: 1,
          rotate: [0, 180, 360],
          // You can uncomment any of these for additional effects
          // y: [0, -5, 0], // Add subtle up-down movement
          // filter: ['brightness(1)', 'brightness(1.2)', 'brightness(1)'] // Pulsing effect
        }}
        transition={{
          scale: { duration: 2, repeat: Infinity, repeatType: "reverse" },
          rotate: { duration: 8, repeat: Infinity, ease: "linear" },
          // y: { duration: 1.5, repeat: Infinity, repeatType: "reverse" },
          // filter: { duration: 2, repeat: Infinity, repeatType: "reverse" }
        }}
      >
        {renderShape()}
      </motion.div>
    </motion.div>
  );
}
