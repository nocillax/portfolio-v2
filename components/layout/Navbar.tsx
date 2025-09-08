"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ThemeToggle, FallbackImage } from "../ui";

/**
 * Navigation links configuration
 */
const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

/**
 * Navbar Component
 *
 * Responsive navigation bar that changes appearance on scroll
 * Features:
 * - Animated underline indicator for active section
 * - Mobile responsive with collapsible menu
 * - Background becomes visible on scroll
 * - Custom logo integration
 * - Theme toggle for light/dark mode
 */
export default function Navbar() {
  // State for scroll position, mobile menu, and active section
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const [lastManualSection, setLastManualSection] = useState<string | null>(
    null
  );

  // We'll use this ref to make sure we initialize the animation correctly
  const isFirstRender = useRef(true);

  // Set first render to false after mount
  useEffect(() => {
    // After the component has rendered once, set isFirstRender to false
    isFirstRender.current = false;
  }, []);

  // Effect to handle manual section selection
  useEffect(() => {
    if (lastManualSection) {
      // When a section is manually selected, keep it active for a short period
      const lockPeriod = setTimeout(() => {
        // After the lock period, clear the manual selection
        setLastManualSection(null);
      }, 1500); // Lock for 1.5 seconds to allow smooth scrolling

      return () => clearTimeout(lockPeriod);
    }
  }, [lastManualSection]);

  // Effect to handle scroll events and update active section
  useEffect(() => {
    const handleScroll = () => {
      // Update scroll state for background color change
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // If we have a manually selected section that's still locked, don't change the active section
      if (lastManualSection) {
        return;
      }

      // Get viewport height for calculations
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      // Keep track of which section has the most visibility
      let maxVisibleSection = null;
      let maxVisiblePercentage = 0;

      // Check each section
      navLinks.forEach(({ href }) => {
        const section = document.querySelector(href);
        if (!section) return;

        const rect = (section as HTMLElement).getBoundingClientRect();

        // Calculate how much of the section is visible
        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(viewportHeight, rect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        // Calculate what percentage of the viewport this section occupies
        const visiblePercentage = visibleHeight / viewportHeight;

        // If this section is more visible than previous sections, make it active
        if (visiblePercentage > maxVisiblePercentage) {
          maxVisiblePercentage = visiblePercentage;
          maxVisibleSection = href;
        }
      });

      // If a section is significantly visible, set it as active
      if (maxVisibleSection && maxVisiblePercentage > 0.15) {
        setActiveSection(maxVisibleSection);
      }
      // Special case for the hero section at the very top
      else if (scrollPosition < 100) {
        setActiveSection("#hero");
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Trigger once on mount to set initial active section
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastManualSection]);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white dark:bg-dark dark:bg-opacity-94 shadow-sm py-3"
          : "bg-opacity-98 py-6"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 md:px-10 w-full">
        {/* Logo and brand name */}
        <Link href="#hero" className="flex items-center gap-2 group">
          <span className="text-accent/90 group-hover:text-accent transition-colors duration-300">
            <FallbackImage
              src="/images/logo/nocillax-logo.png"
              alt="Nocillax Logo"
              width={50}
              height={50}
            />
          </span>
          {/* <span className="text-xl md:text-2xl font-sans text-dark dark:text-primary">
            <span className="text-accent">nocilla</span>x
          </span> */}
        </Link>

        {/* Desktop Navigation - only visible on md breakpoint and above */}
        <div className="hidden md:flex items-center">
          <nav className="flex space-x-8 mr-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-2 font-sans text-sm tracking-wide ${
                  activeSection === link.href
                    ? "text-dark dark:text-primary font-medium"
                    : "text-stone hover:text-dark dark:text-stone dark:hover:text-primary"
                } transition-colors duration-300`}
                onClick={(e) => {
                  // Set active section explicitly when clicked
                  setActiveSection(link.href);
                  // Track that this was a manual selection
                  setLastManualSection(link.href);

                  // Add a small delay to ensure the active section persists
                  // after the scroll animation begins
                  setTimeout(() => {
                    setActiveSection(link.href);
                  }, 100);
                }}
              >
                {/* Animated underline indicator for active section */}
                {activeSection === link.href && (
                  <motion.span
                    layoutId="navUnderline"
                    className="absolute -bottom-1 left-0 w-full h-px bg-accent"
                    style={{ bottom: "-4px", transform: "translateY(0px)" }}
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 25,
                      mass: 0.4,
                      restDelta: 0.01,
                    }}
                  />
                )}
                {link.name}
              </Link>
            ))}
          </nav>
          {/* Theme toggle button */}
          <ThemeToggle />
        </div>

        {/* Mobile Controls: Menu Button and Theme Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="text-dark dark:text-primary focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu - conditionally rendered */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white dark:bg-dark dark:bg-opacity-95 absolute w-full py-6 shadow-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 sm:px-6 md:px-10 flex flex-col space-y-6 w-full">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-sans ${
                  activeSection === link.href
                    ? "text-dark dark:text-primary font-medium border-l-2 border-accent pl-4"
                    : "text-stone dark:text-stone hover:text-dark dark:hover:text-primary pl-4"
                } transition-colors duration-300`}
                onClick={() => {
                  setMobileMenuOpen(false);
                  setActiveSection(link.href);
                  // Track that this was a manual selection
                  setLastManualSection(link.href);

                  // Add a small delay to ensure the active section persists
                  // after the scroll animation begins
                  setTimeout(() => {
                    setActiveSection(link.href);
                  }, 100);
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
