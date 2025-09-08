"use client";

import React from "react";

interface SectionBackgroundProps {
  variant?: "white" | "paper" | "dark" | "dark-paper";
  showPattern?: boolean;
  patternOpacity?: number;
  showBorders?: boolean;
  children?: React.ReactNode;
}

/**
 * SectionBackground Component
 *
 * A reusable component that provides consistent backgrounds and patterns across sections.
 * It handles:
 * - Background colors based on theme variants
 * - Paper texture patterns with configurable opacity
 * - Optional decorative borders
 * - Children content rendering
 *
 * @param variant - Background color variant (white, paper, dark, dark-paper)
 * @param showPattern - Whether to show the paper texture pattern
 * @param patternOpacity - Opacity level of the pattern (0-100)
 * @param showBorders - Whether to show decorative border elements
 * @param children - Content to render inside the background
 */
export default function SectionBackground({
  variant = "white",
  showPattern = true,
  patternOpacity = 10,
  showBorders = false,
  children,
}: SectionBackgroundProps) {
  // Map variants to tailwind classes
  const bgClasses = {
    white: "bg-white dark:bg-dark",
    paper: "bg-paper dark:bg-dark-paper",
    dark: "bg-dark dark:bg-dark",
    "dark-paper": "bg-dark-paper dark:bg-dark-paper",
  };

  return (
    <div className={`relative ${bgClasses[variant]}`}>
      {/* Paper texture pattern */}
      {showPattern && (
        <div
          className={`absolute inset-0 paper-texture pointer-events-none`}
          style={{ opacity: patternOpacity / 100 }}
        />
      )}

      {/* Decorative border elements */}
      {showBorders && (
        <>
          <div className="absolute top-48 -left-10 w-24 h-24 border-r border-b border-accent/20 animate-border-dance"></div>
          <div className="absolute bottom-48 -right-10 w-24 h-24 border-l border-t border-accent/20 animate-border-dance"></div>
        </>
      )}

      {/* Content */}
      {children}
    </div>
  );
}
