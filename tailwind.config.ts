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
        // New sophisticated color palette
        primary: "#3A3462", // Dark Blue
        secondary: "#4D5779", // Dusty Blue-Gray
        dark: "#6E1E53", // Deep Plum/Maroon
        accent: "#EEA8BB", // Vibrant Pink
        peach: "#E7AB96", // Soft Peach
        lightPink: "#F3C2B9", // Light Pink
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Main text
        heading: ["Poppins", "sans-serif"], // Headings
      },
      animation: {
        "fade-in": "fadeIn 1.5s ease-in-out forwards",
        "slide-up": "slideUp 0.8s ease-in-out forwards",
        "slide-in-right": "slideInRight 0.8s ease-in-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "rotate-slow": "rotateSlow 12s linear infinite",
        wave: "wave 2.5s ease-in-out infinite",
        "scale-in": "scaleIn 0.6s cubic-bezier(0.25, 1, 0.5, 1.2) forwards",
        "blur-in": "blurIn 1s ease-in-out forwards",
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
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px 5px rgba(238, 168, 187, 0.2)" },
          "50%": { boxShadow: "0 0 25px 10px rgba(238, 168, 187, 0.5)" },
        },
        rotateSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        wave: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
          "100%": { transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        blurIn: {
          "0%": { filter: "blur(10px)", opacity: "0" },
          "100%": { filter: "blur(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
