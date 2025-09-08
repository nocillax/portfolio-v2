import Link from "next/link";

/**
 * Footer Component
 *
 * Simple footer that displays:
 * - Copyright information
 * - Link back to the top
 * - Technologies used to build the site
 */
export default function Footer() {
  // Dynamically calculate current year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-paper dark:bg-dark-paper border-t border-accent/10 dark:border-dark-accent/20 py-12 px-4 sm:px-6 w-full">
      <div className="container mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side with name and title */}
          <div>
            <Link
              href="#hero"
              className="inline-block text-xl font-serif text-dark dark:text-primary hover:text-accent dark:hover:text-accent-dark transition-colors"
            >
              Md Asif Chowdhury
            </Link>
            <p className="text-stone dark:text-stone-dark mt-2 font-sans">
              Full Stack Developer
            </p>
          </div>

          {/* Right side with copyright and tech stack */}
          <div className="text-stone dark:text-stone-dark text-left md:text-right font-sans">
            <p>&copy; {currentYear} All rights reserved.</p>
            <p className="text-sm mt-3 opacity-80">
              Crafted with Next.js, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>

        {/* Minimal decorative horizontal bar */}
        <div className="mt-12">
          <div className="w-12 h-px bg-accent/30 dark:bg-accent-dark/30 mx-auto"></div>
        </div>
      </div>
    </footer>
  );
}
