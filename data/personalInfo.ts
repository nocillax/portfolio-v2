/**
 * Personal Information Data File
 *
 * This file serves as a central place to manage all personal information
 * displayed in the portfolio. Edit this file to update your information
 * across the entire site.
 */

export const personalInfo = {
  // Basic Information
  name: "nocillax",
  fullName: "ASIF CHOWDHURY",
  title: "Full Stack Web Developer",
  location: "Dhaka, Bangladesh",

  // About Section
  bio: "I’m a Full Stack Web Developer with a passion for crafting scalable web applications that merge solid engineering with thoughtful design. I love solving real-world problems through clean code, intuitive interfaces, and modern UX practices.",

  // Contact Information
  email: "asifjarif@gmail.com",
  phone: "+880 1643 469308",

  // Social Links
  socials: {
    github: "https://github.com/nocillax",
    linkedin: "https://linkedin.com/in/md-asif-chowdhury-xarif",
    facebook: "https://www.facebook.com/xarif.axc",
    portfolio: "https://nocillax-portfolio.vercel.app",
    codeforces: "https://codeforces.com/profile/NoCiLLaX",
    whatsapp: "https://wa.me/8801643469308",
  },

  // Resume/CV
  resumeLink: "/Asif_Chowdhury_CV.pdf",

  // Skills & Technologies
  skills: [
    "Next.js",
    "NestJS",
    "PostgreSQL",
    "Tailwind CSS",
    "ASP.NET MVC",
    "Express.js",
    "TypeScript",
    "MSSQL",
    "Figma",
    "C#",
    "JavaScript",
    "Node.js",
    "Express",
    "React",
  ],

  technologies: [
    {
      category: "Languages",
      items: [
        "TypeScript",
        "JavaScript",
        "Solidity",
        "C#",
        "Java",
        "PHP",
        "C++",
        "SQL",
      ],
    },
    {
      category: "Frameworks & Tools",
      items: [
        "Next.js 14",
        "NestJS",
        "React",
        "Node.js",
        "ASP.NET MVC",
        "Tailwind CSS",
        "Docker",
        "Hardhat",
      ],
    },
    {
      category: "Databases & Blockchain",
      items: [
        "PostgreSQL",
        "Ethereum (GoQuorum)",
        "MySQL",
        "MSSQL",
        "Oracle",
        "TypeORM",
      ],
    },
    {
      category: "Others",
      items: [
        "Blockchain & Smart Contracts",
        "System Integration (ERP/CRM)",
        "RESTful API Design",
        "Zustand & TanStack Query",
        "OAuth 2.0 & JWT",
        "Stripe Integration",
        "Internationalization (i18n)",
      ],
    },
  ],

  // Experience (for About section)
  experience: [
    {
      title: "Backend Engineer Intern",
      company: "V2 Technologies Ltd.",
      period: "September 2025 - December 2025",
      description:
        "Built and maintained scalable RESTful APIs using NestJS and TypeScript, securing endpoints with OAuth 2.0 and RBAC. Optimized PostgreSQL database performance via TypeORM and collaborated with cross-functional teams to define strict API contracts and ensure seamless integration.",
    },
    {
      title: "Full Stack Web Developer",
      company: "Academic & Personal Projects",
      period: "January 2023 - September 2025",
      description:
        "Worked on a variety of projects including e-commerce platforms, inventory management systems, and project management tools. Focused on building scalable solutions with secure authentication, data-driven dashboards, and clean UI/UX.",
    },
  ],

  // Education
  education: [
    {
      degree: "BSc in Computer Science & Engineering",
      institution: "American International University-Bangladesh (AIUB)",
      year: "January 2022 - January 2026",
      result: "CGPA: 3.98",
      description: "Major in Software Engineering",
    },
  ],

  // Awards & Certificates
  awards: [
    "Consistently awarded Academic Scholarship during BSc program",
    "Repeatedly recognized on the Dean's Honor List (6 Semesters)",
    "Best Poster Award - Physics Poster Contest 2023 (AIUB)",
    "IELTS Score: 7.5 (Jan 2022)",
  ],

  // Custom Sections (for flexibility)
  customSections: {
    interests: [
      "Competitive Programming",
      "Algorithm Design",
      "Database Optimization",
      "Open Source Contribution",
      "Software Architecture",
    ],
  },
};

// Export individual sections for more specific imports if needed
export const { name, fullName, title, location } = personalInfo;
export const { bio } = personalInfo;
export const { email, phone } = personalInfo;
export const { socials } = personalInfo;
export const { skills, technologies } = personalInfo;
export const { experience, education, awards } = personalInfo;
