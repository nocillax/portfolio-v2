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
  fullName: "MD ASIF CHOWDHURY",
  title: "Full Stack Developer",
  location: "Dhaka, Bangladesh",

  // About Section
  bio: "I’m a Full Stack Developer with a passion for crafting scalable web applications that merge solid engineering with thoughtful design. I love solving real-world problems through clean code, intuitive interfaces, and modern UX practices.",

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

    "PHP",
    "TypeScript",
    "MSSQL",
    "Figma",
    "C#",
  ],

  technologies: [
    {
      category: "Languages",
      items: [
        "C++",
        "C#",
        "Java",
        "JavaScript",
        "TypeScript",
        "PHP",
        "HTML",
        "CSS",
      ],
    },
    {
      category: "Frameworks & Tools",
      items: [
        "Next.js",
        "NestJS",
        "ASP.NET MVC",
        "React",
        "Tailwind CSS",
        "Figma",
        "OpenGL",
      ],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL", "MSSQL", "Oracle"],
    },
    {
      category: "Others",
      items: [
        "Zustand",
        "Toastr",
        "JWT",
        "Multer",
        "Nodemailer",
        "Stripe",
        "Select2",
        "Rotativa",
        "AJAX",
        "Razor Pages",
      ],
    },
  ],

  // Experience (for About section)
  experience: [
    {
      title: "Full Stack Developer",
      company: "Academic & Personal Projects",
      period: "2023 - Present",
      description:
        "Worked on a variety of projects including e-commerce platforms, inventory management systems, and project management tools. Focused on building scalable solutions with secure authentication, data-driven dashboards, and clean UI/UX.",
    },
  ],

  // Education
  education: [
    {
      degree:
        "BSc in Computer Science & Engineering (Major in Software Engineering)",
      institution: "American International University-Bangladesh (AIUB)",
      year: "CGPA: 3.98",
    },
  ],

  // Awards & Certificates
  awards: [
    "Consistently awarded Academic Scholarship during BSc program",
    "Repeatedly recognized on the Dean's Honor List",
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
