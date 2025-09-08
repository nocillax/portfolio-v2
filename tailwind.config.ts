import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        // Japanese minimalist-inspired color palette - Light & Dark mode
        primary: "#F7F7F7", // Light off-white background (light mode)
        secondary: "#EFEFEF", // Slightly darker off-white (light mode)
        dark: "#1C1C1C", // Soft dark gray for text in light mode, bg in dark mode
        accent: "#A67F5D", // Terracotta/warm wood tone (common in both modes)
        "accent-dark": "#C89C78", // Lighter terracotta for dark mode
        subtle: "#D4D4D4", // Subtle light gray (light mode)
        paper: "#F9F6F0", // Warm paper color (light mode)
        ink: "#1A1A1A", // Deep ink color, almost black (light mode)
        charcoal: "#2C2C2C", // Charcoal gray
        stone: "#949494", // Stone gray (light mode)
        "stone-dark": "#A3A3A3", // Lighter stone gray (dark mode)
        clay: "#C8BCB9", // Clay/earth tone
        // Dark mode specific colors
        "dark-paper": "#242424", // Dark paper texture background
        "dark-subtle": "#3A3A3A", // Subtle dark gray for dark mode
        "dark-accent": "#9B755A", // Darker terracotta accent for dark mode
        "dark-secondary": "#2A2A2A", // Slightly lighter than background in dark mode
      },
      fontFamily: {
        serif: [
          "'Playfair Display'",
          "'Cormorant Garamond'",
          "Georgia",
          "serif",
        ], // Elegant serif for headings
        sans: ["'Noto Sans'", "system-ui", "sans-serif"], // Clean sans-serif for body
        mono: ["'IBM Plex Mono'", "monospace"], // Monospace for code or accents
      },
      backgroundImage: {
        // Light mode patterns
        "paper-texture":
          "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20zm20-20h20v20H40V0zm0 40h20v20H40V40zM0 40h20v20H0V40z' fill='%23a67f5d' fill-opacity='0.08' fill-rule='evenodd'/%3E%3C/svg%3E\")",
        "subtle-dots":
          "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23a67f5d' fill-opacity='0.08' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
        "subtle-grid":
          "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23a67f5d' fill-opacity='0.08' fill-rule='evenodd'%3E%3Cpath d='M0 0h40v1H0V0zm0 20h40v1H0V20zm0 20h40v1H0V40zM20 0v40h1V0H20z'/%3E%3C/g%3E%3C/svg%3E\")",
        "abstract-pattern":
          "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20zm20-20h20v20H40V0zm0 40h20v20H40V40zM0 40h20v20H0V40z' fill='%23a67f5d' fill-opacity='0.08' fill-rule='evenodd'/%3E%3C/svg%3E\")",
        "minimal-squares":
          "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h10v10H0V0zm10 10h10v10H10V10zm10-10h10v10H20V0zm10 10h10v10H30V10zM0 20h10v10H0V20zm10 10h10v10H10V30zm10-10h10v10H20V20zm10 10h10v10H30V30z' fill='%23a67f5d' fill-opacity='0.08' fill-rule='evenodd'/%3E%3C/svg%3E\")",

        // Dark mode patterns
        "dark-paper-texture":
          "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20zm20-20h20v20H40V0zm0 40h20v20H40V40zM0 40h20v20H0V40z' fill='%23FFFFFF' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E\")",
        "dark-subtle-dots":
          "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.03' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
        "dark-subtle-grid":
          "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.03' fill-rule='evenodd'%3E%3Cpath d='M0 0h40v1H0V0zm0 20h40v1H0V20zm0 20h40v1H0V40zM20 0v40h1V0H20z'/%3E%3C/g%3E%3C/svg%3E\")",
        "dark-abstract-pattern":
          "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20zm20-20h20v20H40V0zm0 40h20v20H40V40zM0 40h20v20H0V40z' fill='%23FFFFFF' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E\")",
        "dark-minimal-squares":
          "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h10v10H0V0zm10 10h10v10H10V10zm10-10h10v10H20V0zm10 10h10v10H30V10zM0 20h10v10H0V20zm10 10h10v10H10V30zm10-10h10v10H20V20zm10 10h10v10H30V30z' fill='%23FFFFFF' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E\")",
      },
      animation: {
        "fade-in": "fadeIn 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "slide-up": "slideUp 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "slide-in-right":
          "slideInRight 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "slide-in-left":
          "slideInLeft 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        reveal: "reveal 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        float: "float 8s ease-in-out infinite",
        "gentle-pulse": "gentlePulse 4s ease-in-out infinite",
        "draw-line": "drawLine 2s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "text-focus": "textFocus 2.5s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "brush-stroke":
          "brushStroke 2.5s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "ink-drop": "inkDrop 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "scale-in": "scaleIn 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "rotate-in": "rotateIn 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "border-dance": "borderDance 3s ease-in-out infinite",
        "subtle-bounce":
          "subtleBounce 1.5s cubic-bezier(0.22, 1, 0.36, 1) infinite",
        "ink-fade": "inkFade 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "paper-fold": "paperFold 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(-40px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(40px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        gentlePulse: {
          "0%, 100%": { opacity: "0.9" },
          "50%": { opacity: "1" },
        },
        reveal: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        drawLine: {
          "0%": { width: "0%", opacity: "0" },
          "100%": { width: "100%", opacity: "1" },
        },
        textFocus: {
          "0%": { filter: "blur(4px)", opacity: "0" },
          "100%": { filter: "blur(0)", opacity: "1" },
        },
        brushStroke: {
          "0%": { transform: "scaleX(0)", transformOrigin: "left" },
          "45%": { transform: "scaleX(1)", transformOrigin: "left" },
          "55%": { transform: "scaleX(1)", transformOrigin: "right" },
          "100%": { transform: "scaleX(0)", transformOrigin: "right" },
        },
        inkDrop: {
          "0%": {
            transform: "scale(0) translateY(-50%)",
            opacity: "0.8",
          },
          "70%": {
            transform: "scale(1.2) translateY(0)",
            opacity: "0.6",
          },
          "100%": {
            transform: "scale(1) translateY(0)",
            opacity: "0.2",
          },
        },
        scaleIn: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        rotateIn: {
          "0%": { transform: "rotate(-5deg) scale(0.95)", opacity: "0" },
          "100%": { transform: "rotate(0) scale(1)", opacity: "1" },
        },
        borderDance: {
          "0%, 100%": { borderRadius: "40% 60% 60% 40% / 60% 30% 70% 40%" },
          "50%": { borderRadius: "40% 60% 30% 70% / 50% 60% 30% 60%" },
        },
        subtleBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        inkFade: {
          "0%": {
            opacity: "0",
            transform: "scale(0.95) translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1) translateY(0)",
          },
        },
        paperFold: {
          "0%": {
            transform: "perspective(1500px) rotateY(90deg)",
            transformOrigin: "left",
          },
          "100%": {
            transform: "perspective(1500px) rotateY(0deg)",
            transformOrigin: "left",
          },
        },
      },
      spacing: {
        "128": "32rem",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          md: "2.5rem",
          lg: "4rem",
        },
        screens: {
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "100%",
          "2xl": "100%",
        },
      },
      letterSpacing: {
        widest: "0.2em",
        ultra: "0.3em",
      },
      borderWidth: {
        "0.5": "0.5px",
      },
    },
  },
  plugins: [],
};

export default config;
