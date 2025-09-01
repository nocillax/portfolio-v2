import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-10 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link
              href="#hero"
              className="text-2xl font-heading font-bold text-accent"
            >
              Portfolio
            </Link>
            <p className="text-gray-400 mt-2">Full Stack Web Developer</p>
          </div>

          <div className="text-gray-400 text-center md:text-right">
            <p>&copy; {currentYear} John Doe. All rights reserved.</p>
            <p className="text-sm mt-1">
              Designed & Built with Next.js, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
