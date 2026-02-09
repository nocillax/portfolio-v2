export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string; // Detailed description for the modal
  image: string;
  images?: string[]; // Additional images for the modal gallery
  category: "Full-Stack" | "Front-End" | "WordPress" | "QA";
  tags: string[];
  features?: string[]; // Key features list
  technologies?: string[]; // Detailed technologies used
  challenges?: string; // Challenges faced during development
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "fs-6",
    title: "NXCertify",
    description:
      "A decentralized blockchain platform for secure academic certificate issuance and verification, eliminating fraud through immutability.",
    longDescription:
      "NXCertify leverages a private Ethereum blockchain to revolutionize academic credentialing. Replacing passwords with cryptographic wallet signatures, the system stores all certificate records on-chain via smart contracts. It features a meta-transaction architecture where admins cover gas fees, a full certificate lifecycle (issuance, revocation, versioning), and instant public verification via QR codes. It even includes offline activity detection to monitor potential security breaches of private keys.",
    image: "/images/projects/nx-cert1.png",
    images: [
      "/images/projects/nx-cert1.png",
      "/images/projects/nx-cert2.png",
      "/images/projects/nx-cert3.png",
      "/images/projects/nx-cert4.png",
      "/images/projects/nx-cert5.png",
      "/images/projects/nx-cert6.png",
      "/images/projects/nx-cert7.png",
    ],
    category: "Full-Stack",
    tags: [
      "Solidity",
      "Blockchain",
      "NestJS",
      "Next.js",
      "Ethers.js",
      "Ethereum",
    ],
    features: [
      "Passwordless authentication via MetaMask signatures",
      "Immutable on-chain certificate storage",
      "Meta-transaction pattern for gas-free user experience",
      "Public verification via Keccak256 hashing & QR codes",
      "Comprehensive audit trails and lifecycle management",
      "Rate-limited verifier tracking system",
    ],
    technologies: [
      "Solidity (Smart Contracts)",
      "Ethereum (Quorum/IBFT 2.0)",
      "Ethers.js",
      "NestJS",
      "Next.js 14",
      "PostgreSQL",
      "Hardhat",
    ],
    challenges:
      "The biggest challenge was abstracting blockchain complexity for non-technical users. Implementing meta-transactions allowed users to interact with the blockchain without needing to hold cryptocurrency, while maintaining a sub-150ms verification speed.",
    liveUrl: "",
    githubUrl: "https://github.com/nocillax/thesis/tree/main/proposed",
  },
  {
    id: "fs-5",
    title: "NX-Inventra",
    description:
      "A cloud-based collaborative inventory platform featuring dynamic schemas, real-time sync, and enterprise ERP integrations.",
    longDescription:
      "NX-Inventra is a highly flexible management system allowing organizations to build custom inventories with dynamic fields and sophisticated ID generation. It features a robust role-based access control system (Owner, Editor, Viewer) and integrates with external ecosystems like Odoo ERP, Salesforce, and Dropbox. The platform provides deep analytical insights through interactive charts and supports multi-language localization for global teams.",
    image: "/images/projects/nx-inv1.png",
    images: [
      "/images/projects/nx-inv1.png",
      "/images/projects/nx-inv2.png",
      "/images/projects/nx-inv3.png",
      "/images/projects/nx-inv4.png",
      "/images/projects/nx-inv5.png",
      "/images/projects/nx-inv6.png",
    ],
    category: "Full-Stack",
    tags: [
      "NestJS",
      "Next.js 14",
      "PostgreSQL",
      "Tailwind",
      "OAuth",
      "TypeScript",
    ],
    features: [
      "Customizable inventory schemas with 8+ ID formats",
      "Role-based team collaboration and invitations",
      "Odoo ERP and Salesforce CRM integration",
      "Advanced analytics dashboard with Recharts",
      "Multi-language support (English/Bengali)",
      "High-performance full-text search",
    ],
    technologies: [
      "NestJS",
      "Next.js (App Router)",
      "PostgreSQL (TypeORM)",
      "Zustand & SWR",
      "Radix UI / Shadcn",
      "XML-RPC (Odoo API)",
      "dnd-kit",
    ],
    challenges:
      "Designing a system that allows users to define their own data structures while maintaining type safety and search performance was the primary hurdle. I utilized PostgreSQL GIN indexes for search and Zod for dynamic schema validation.",
    liveUrl: "",
    githubUrl: "https://github.com/nocillax/it-NXInventra",
  },

  {
    id: "fs-2",
    title: "E-Commerce Website",
    description:
      "A full-featured e-commerce platform built with NestJS (backend) and Next.js + Tailwind (frontend), designed for Admin, Customer, and Guest roles.",
    longDescription:
      "This platform enables seamless online shopping with role-based access. Admins manage product listings with image uploads, variants, discounts, and category tagging that dynamically places products in homepage sections. Customers can browse products, view details, and add them to a cart with real-time quantity and discount updates. Secure Stripe payment integration ensures smooth checkout, while automated confirmation emails are sent via Nodemailer. The entire system is built with JWT authentication for security and Zustand for global cart state management.",
    image: "/images/projects/ecom1.png",
    images: [
      "/images/projects/ecom1.png",
      "/images/projects/ecom2.png",
      "/images/projects/ecom3.png",
      "/images/projects/ecom4.png",
      "/images/projects/ecom5.png",
    ],
    category: "Full-Stack",
    tags: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Tailwind CSS",
      "Stripe",
      "Zustand",
      "JWT",
    ],
    features: [
      "Role-based access: Admin, Customer, Guest",
      "Dynamic product catalog with tags and discounts",
      "Shopping cart with real-time updates",
      "Secure payment processing via Stripe",
      "Automated order confirmation emails",
      "Admin dashboard with product management",
    ],
    technologies: [
      "NestJS",
      "Next.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Zustand",
      "Stripe API",
      "JWT Authentication",
      "Multer",
      "Nodemailer",
    ],
    challenges:
      "Ensuring secure and seamless checkout flow with real-time cart synchronization was a challenge. Zustand was used for global state, while careful session handling via JWT in cookies maintained login persistence.",
    liveUrl: "",
    githubUrl: "https://github.com/nocillax/ATP3-Ecommerce-Site",
  },
  {
    id: "fs-3",
    title: "Inventory & Sales Management System",
    description:
      "A comprehensive inventory and sales system built with ASP.NET MVC and SQL Server, tailored for Managers and Salespersons with role-based dashboards.",
    longDescription:
      "This system manages product stock, sales records, and financial insights. Managers can create salesperson accounts, add products with pricing, discounts, and categories, and monitor profits through analytics dashboards. Salespersons record transactions via an intuitive sale form with AJAX-powered product search, generate invoices, and track their KPIs. The system updates inventory in real time, generates downloadable invoices, and allows managers to view filterable reports with charts and raw data. Built with a clean Razor + Bootstrap frontend for usability.",
    image: "/images/projects/isms1.png",
    images: [
      "/images/projects/isms1.png",
      "/images/projects/isms2.png",
      "/images/projects/isms3.png",
      "/images/projects/isms4.png",
    ],
    category: "Full-Stack",
    tags: ["ASP.NET MVC", "MSSQL", "Bootstrap", "Razor", "AJAX", "Rotativa"],
    features: [
      "Role-based dashboards: Manager & Salesperson",
      "Real-time stock and sales updates",
      "Invoice generation with Rotativa PDF",
      "Filterable analytics reports with charts",
      "KPI tracking for Salespersons",
      "AJAX-powered searchable dropdowns",
    ],
    technologies: [
      "ASP.NET MVC",
      "SQL Server",
      "Razor Pages",
      "Bootstrap (SB Admin 2 Theme)",
      "AJAX + Select2",
      "Toastr",
      "Rotativa PDF Generator",
      "REST APIs",
    ],
    challenges:
      "Implementing efficient real-time product search and generating professional PDF reports with charts were key challenges. These were solved using AJAX-powered dropdowns and Rotativa PDF integration.",
    liveUrl: "",
    githubUrl:
      "https://github.com/nocillax/Inventory---Sales-Management-System",
  },
  {
    id: "fs-4",
    title: "TeamSync - Project Management Platform",
    description:
      "A project lifecycle management platform built with Core PHP and MySQL, supporting Admin, Project Manager, Developer, and Client roles.",
    longDescription:
      "TeamSync facilitates structured collaboration across project stakeholders. Clients request projects via a form, which Admins review and assign to Project Managers. PMs manage developers, break projects into tasks, and track completion status. Developers update progress, submit deliverables, and receive feedback, while Clients monitor handovers and approve final outputs. The system uses manual routing and session handling in PHP with an AJAX-enhanced frontend. Despite minimal frameworks, the platform delivers role-based dashboards and task workflows effectively.",
    image: "",
    images: [],
    category: "Full-Stack",
    tags: ["Core PHP", "MySQL", "AJAX", "HTML", "CSS", "JavaScript"],
    features: [
      "Role-based dashboards: Admin, PM, Developer, Client",
      "Project request and approval flow",
      "Task assignment and progress tracking",
      "File upload and feedback system",
      "Manual routing and session handling",
      "Real-time task status updates",
    ],
    technologies: ["Core PHP", "MySQL", "HTML", "CSS", "JavaScript", "AJAX"],
    challenges:
      "Building a multi-role workflow platform without a modern PHP framework required careful session handling and manual routing logic. Optimized AJAX was implemented to make the UX smooth despite a minimal tech stack.",
    liveUrl: "",
    githubUrl: "https://github.com/nocillax/TeamSync",
  },

  {
    id: "fe-1",
    title: "Luna Tours - Tour Booking Platform",
    description:
      "A responsive front-end travel website showcasing immersive Japanese tour packages with a clean earth-toned design.",
    longDescription:
      "Luna Tours delivers an engaging travel experience with a front-end only platform. The Home Page features Swiper.js-powered hero images, popular tours, reviews, and a newsletter form. The Tours Page displays all packages in a responsive card layout with filtering and sorting. Each tour page contains high-quality galleries, itineraries, inclusions/exclusions, reviews, and a booking section. Additional pages include About Us (company journey) and Contact (validated form, embedded map, FAQs). Built with Next.js and Tailwind CSS, the site emphasizes UX and design consistency.",
    image: "/images/projects/lt1.png",
    images: [
      "/images/projects/lt1.png",
      "/images/projects/lt2.png",
      "/images/projects/lt3.png",
    ],
    category: "Front-End",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Swiper.js",
      "Heroicons",
    ],
    features: [
      "Responsive design across devices",
      "Dynamic tour detail pages",
      "Swiper.js image carousels",
      "Validated contact form with map",
      "Newsletter subscription section",
      "Earth-toned design system with custom CSS variables",
    ],
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "React",
      "Swiper.js",
      "Heroicons",
    ],
    challenges:
      "Designing a visually immersive yet lightweight front-end with consistent theming and scalable component structure was challenging. Custom CSS variables and Tailwind utilities helped maintain uniform design.",
    liveUrl: "https://luna-tours.vercel.app",
    githubUrl: "https://github.com/nocillax/raktch-frontend-assessment",
  },
  // Full-Stack Projects
  // {
  //   id: "fs-1",
  //   title: "E-Commerce Platform",
  //   description:
  //     "A full-featured e-commerce platform built with Next.js, MongoDB, and Stripe integration for payments.",
  //   longDescription:
  //     "This comprehensive e-commerce platform offers a seamless shopping experience with advanced product filtering, real-time inventory management, and secure payment processing. The application features a responsive design that works flawlessly across all devices, with optimized performance and SEO considerations built-in from the ground up. The admin dashboard provides powerful analytics and order management capabilities.",
  //   image: "/images/projects/ecommerce.jpg",
  //   images: [
  //     "/images/projects/ecommerce-detail-1.jpg",
  //     "/images/projects/ecommerce-detail-2.jpg",
  //     "/images/projects/ecommerce-detail-3.jpg",
  //     "/images/projects/ecommerce-detail-4.jpg",
  //   ],
  //   category: "Full-Stack",
  //   tags: ["Next.js", "MongoDB", "Express", "Node.js", "Stripe", "Redux"],
  //   features: [
  //     "User authentication and authorization system",
  //     "Product catalog with advanced filtering options",
  //     "Shopping cart and wishlist functionality",
  //     "Secure payment processing with Stripe",
  //     "Order tracking and history",
  //     "Admin dashboard for inventory management",
  //   ],
  //   technologies: [
  //     "Next.js",
  //     "MongoDB",
  //     "Express.js",
  //     "Node.js",
  //     "Redux",
  //     "Stripe API",
  //     "JWT Authentication",
  //     "AWS S3 for image storage",
  //   ],
  //   challenges:
  //     "Implementing real-time inventory updates across multiple concurrent user sessions while maintaining performance was particularly challenging. I solved this by implementing a custom caching layer and optimistic UI updates.",
  //   liveUrl: "https://example-ecommerce.com",
  //   githubUrl: "https://github.com/username/ecommerce-platform",
  // },

  // // Front-End Projects
  // {
  //   id: "fe-1",
  //   title: "Weather Dashboard",
  //   description:
  //     "An interactive weather dashboard that displays forecast data using OpenWeatherMap API.",
  //   image: "/images/projects/weather-app.jpg",
  //   category: "Front-End",
  //   tags: ["React", "Tailwind CSS", "REST API", "Chart.js"],
  //   liveUrl: "https://example-weather-app.com",
  //   githubUrl: "https://github.com/username/weather-dashboard",
  // },

  // // WordPress Projects
  // {
  //   id: "wp-1",
  //   title: "Corporate Website",
  //   description:
  //     "A custom WordPress theme developed for a corporate client with advanced ACF blocks.",
  //   image: "/images/projects/corporate-site.jpg",
  //   category: "WordPress",
  //   tags: ["WordPress", "Custom Theme", "ACF", "PHP", "JavaScript"],
  //   liveUrl: "https://example-corporate.com",
  // },

  // // QA Projects
  // {
  //   id: "qa-1",
  //   title: "Automated Testing Framework",
  //   description:
  //     "A comprehensive testing framework using Cypress for end-to-end testing of web applications.",
  //   image: "/images/projects/testing-framework.jpg",
  //   category: "QA",
  //   tags: ["Cypress", "JavaScript", "CI/CD", "Test Automation"],
  //   githubUrl: "https://github.com/username/cypress-testing-framework",
  // },
];
