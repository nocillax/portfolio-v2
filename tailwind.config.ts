import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Japanese minimalist-inspired color palette
        primary: "#F7F7F7", // Light off-white background
        secondary: "#EFEFEF", // Slightly darker off-white
        dark: "#333333", // Soft dark gray
        accent: "#A67F5D", // Terracotta/warm wood tone
        subtle: "#D4D4D4", // Subtle light gray
        paper: "#F9F6F0", // Warm paper color
        ink: "#1A1A1A", // Deep ink color, almost black
        charcoal: "#2C2C2C", // Charcoal gray
        stone: "#949494", // Stone gray
        clay: "#C8BCB9", // Clay/earth tone
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"], // Elegant serif for headings
        sans: ["'Noto Sans'", "system-ui", "sans-serif"], // Clean sans-serif for body
        mono: ["'IBM Plex Mono'", "monospace"], // Monospace for code or accents
      },
      backgroundImage: {
        "paper-texture": "url('/images/paper-texture.png')",
        "subtle-dots":
          "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.03' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
        "subtle-grid":
          "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.02' fill-rule='evenodd'%3E%3Cpath d='M0 0h40v1H0V0zm0 20h40v1H0V20zm0 20h40v1H0V40zM20 0v40h1V0H20z'/%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        "fade-in": "fadeIn 1.8s ease-out forwards",
        "slide-up": "slideUp 1.2s ease-out forwards",
        "slide-in-right": "slideInRight 1.2s ease-out forwards",
        "slide-in-left": "slideInLeft 1.2s ease-out forwards",
        reveal: "reveal 1.5s ease forwards",
        float: "float 8s ease-in-out infinite",
        "gentle-pulse": "gentlePulse 4s ease-in-out infinite",
        "draw-line": "drawLine 2s ease-out forwards",
        "text-focus": "textFocus 2.5s ease-out forwards",
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
      },
      spacing: {
        "128": "32rem",
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
