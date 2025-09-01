import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-paper border-t border-accent/10 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <Link
              href="#hero"
              className="inline-block text-xl md:text-2xl font-serif text-dark hover:text-accent transition-colors"
            >
              Takumi Sato
            </Link>
            <p className="text-stone mt-2 font-sans">Developer & Designer</p>
          </div>

          <div className="text-stone text-left md:text-right font-sans">
            <p>&copy; {currentYear} All rights reserved.</p>
            <p className="text-sm mt-3 opacity-80">
              Crafted with Next.js, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>

        {/* Minimal decorative horizontal bar */}
        <div className="mt-12">
          <div className="w-12 h-px bg-accent/30 mx-auto"></div>
        </div>
      </div>
    </footer>
  );
}
