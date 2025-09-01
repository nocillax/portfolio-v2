"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * ThemeToggle Component
 *
 * A stylish toggle button that switches between light and dark themes.
 * Uses Japanese-inspired design elements with subtle animations.
 *
 * Features:
 * - Smooth animation transitions between states
 * - Visual feedback on hover and interaction
 * - Maintains Japanese minimalist aesthetic
 * - Adapts to both light and dark modes
 */
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything until client-side
  if (!mounted) return <div className="w-10 h-10" />;

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-10 h-10 rounded-full overflow-hidden focus:outline-none group"
      whileTap={{ scale: 0.95 }}
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.div
        className={`absolute inset-0 bg-opacity-10 rounded-full
          ${theme === "dark" ? "bg-dark-secondary" : "bg-paper"}
          transition-colors duration-300 ease-in-out`}
        initial={false}
        animate={{ scale: [0.8, 1] }}
        transition={{ duration: 0.2 }}
      />

      {/* Clear Sun/Moon Theme Icon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative w-6 h-6"
      >
        {theme === "dark" ? (
          // Moon icon for dark mode
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-accent-dark"
            initial={{ rotate: -45 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.4 }}
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </motion.svg>
        ) : (
          // Sun icon for light mode
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-accent"
            initial={{ rotate: 45 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.4 }}
          >
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </motion.svg>
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
