"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { KawaiiLogo } from "../kawaii";
import { ThemeToggle } from "../ui";

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

  // Effect to handle scroll events and update active section
  useEffect(() => {
    const handleScroll = () => {
      // Update scroll state for background color change
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.href);
      const currentPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.querySelector(sections[i]);
        if (section && (section as HTMLElement).offsetTop <= currentPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white dark:bg-dark dark:bg-opacity-95 shadow-sm py-3"
          : "bg-transparent py-6"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container mx-auto flex justify-between items-center px-6 md:px-10">
        {/* Logo and brand name */}
        <Link href="#hero" className="flex items-center gap-2 group">
          <span className="text-accent/90 group-hover:text-accent transition-colors duration-300">
            <KawaiiLogo className="w-8 h-8 md:w-10 md:h-10" />
          </span>
          <span className="text-xl md:text-2xl font-serif text-dark dark:text-primary">
            <span className="text-accent">N</span>X
          </span>
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
                onClick={() => setActiveSection(link.href)}
              >
                {/* Animated underline indicator for active section */}
                {activeSection === link.href && (
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-px bg-accent"
                    layoutId="navIndicator"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
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
          <div className="container mx-auto px-6 flex flex-col space-y-6">
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
