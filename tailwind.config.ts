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
        // Dark theme with a vibrant accent color
        primary: "#1a1a2e", // Dark blue-black
        secondary: "#16213e", // Dark blue
        dark: "#0f3460", // Deep blue
        accent: "#e94560", // Vibrant pink-red accent
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Main text
        heading: ["Poppins", "sans-serif"], // Headings
      },
      animation: {
        "fade-in": "fadeIn 1.5s ease-in-out forwards",
        "slide-up": "slideUp 0.8s ease-in-out forwards",
        "slide-in-right": "slideInRight 0.8s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(-100px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
