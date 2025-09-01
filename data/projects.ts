export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "Full-Stack" | "Front-End" | "WordPress" | "QA";
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  // Full-Stack Projects
  {
    id: "fs-1",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform built with Next.js, MongoDB, and Stripe integration for payments.",
    image: "/images/projects/ecommerce.jpg",
    category: "Full-Stack",
    tags: ["Next.js", "MongoDB", "Express", "Node.js", "Stripe", "Redux"],
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/username/ecommerce-platform",
  },
  {
    id: "fs-2",
    title: "Task Management System",
    description:
      "A collaborative task management system with real-time updates using Socket.io and React.",
    image: "/images/projects/task-manager.jpg",
    category: "Full-Stack",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "JWT"],
    liveUrl: "https://example-task-manager.com",
    githubUrl: "https://github.com/username/task-manager",
  },

  // Front-End Projects
  {
    id: "fe-1",
    title: "Weather Dashboard",
    description:
      "An interactive weather dashboard that displays forecast data using OpenWeatherMap API.",
    image: "/images/projects/weather-app.jpg",
    category: "Front-End",
    tags: ["React", "Tailwind CSS", "REST API", "Chart.js"],
    liveUrl: "https://example-weather-app.com",
    githubUrl: "https://github.com/username/weather-dashboard",
  },
  {
    id: "fe-2",
    title: "Portfolio Website",
    description:
      "A responsive portfolio website built with Next.js and Framer Motion for smooth animations.",
    image: "/images/projects/portfolio.jpg",
    category: "Front-End",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    liveUrl: "https://example-portfolio.com",
    githubUrl: "https://github.com/username/portfolio",
  },

  // WordPress Projects
  {
    id: "wp-1",
    title: "Corporate Website",
    description:
      "A custom WordPress theme developed for a corporate client with advanced ACF blocks.",
    image: "/images/projects/corporate-site.jpg",
    category: "WordPress",
    tags: ["WordPress", "Custom Theme", "ACF", "PHP", "JavaScript"],
    liveUrl: "https://example-corporate.com",
  },
  {
    id: "wp-2",
    title: "E-Learning Platform",
    description:
      "An e-learning platform built on WordPress with LearnDash LMS and WooCommerce integration.",
    image: "/images/projects/elearning.jpg",
    category: "WordPress",
    tags: ["WordPress", "LearnDash", "WooCommerce", "Custom Plugins"],
    liveUrl: "https://example-elearning.com",
  },

  // QA Projects
  {
    id: "qa-1",
    title: "Automated Testing Framework",
    description:
      "A comprehensive testing framework using Cypress for end-to-end testing of web applications.",
    image: "/images/projects/testing-framework.jpg",
    category: "QA",
    tags: ["Cypress", "JavaScript", "CI/CD", "Test Automation"],
    githubUrl: "https://github.com/username/cypress-testing-framework",
  },
  {
    id: "qa-2",
    title: "API Testing Suite",
    description:
      "A suite of automated API tests using Postman and Newman for continuous integration.",
    image: "/images/projects/api-testing.jpg",
    category: "QA",
    tags: ["Postman", "Newman", "API Testing", "CI/CD"],
    githubUrl: "https://github.com/username/api-testing-suite",
  },
];
