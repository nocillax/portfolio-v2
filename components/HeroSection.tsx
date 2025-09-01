"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    }),
  };

  // Tech stack icons - would be replaced with actual SVG icons in a real implementation
  const techStack = [
    { name: "React", color: "#61DAFB" },
    { name: "Next.js", color: "#000000" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "Node.js", color: "#339933" },
    { name: "Tailwind", color: "#06B6D4" },
    { name: "MongoDB", color: "#47A248" },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary to-dark relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-10 left-[10%] w-40 h-40 rounded-full bg-gradient-to-r from-peach to-accent opacity-20 blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-[20%] right-[10%] w-64 h-64 rounded-full bg-gradient-to-l from-accent/40 to-dark opacity-20 blur-3xl"
          animate={{
            y: [0, 40, 0],
            x: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div
          className="absolute top-[40%] left-[60%] w-52 h-52 rounded-full bg-gradient-to-tr from-lightPink to-peach opacity-20 blur-3xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIzIDAgMi4xOTguOTY5IDIuMTk4IDIuMnYxOS42YzAgMS4yMzEtLjk2OCAyLjItMi4xOTggMi4ySDI0Yy0xLjIzIDAtMi4yLTEuOTY5LTIuMi0zLjJWMjAuMkMyMS44IDE4Ljk2OSAyMi45NyAxOCAyNC4yIDE4aDExLjhoLS4wMDJ6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wMSIvPjwvZz48L3N2Zz4=')] opacity-5" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side: Text content */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block py-1 px-3 rounded-full bg-accent bg-opacity-20 text-accent text-sm font-medium mb-5">
                  Full Stack Developer
                </span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="text-white">I'm </span>
                <span className="bg-gradient-to-r from-peach to-accent bg-clip-text text-transparent">
                  John Doe
                </span>
              </motion.h1>

              <motion.div
                className="mt-8 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h2 className="text-2xl text-white mb-6">
                  Turning <span className="text-peach">ideas</span> into{" "}
                  <span className="text-accent">reality</span> with code
                </h2>
                <p className="text-lg text-gray-300">
                  I specialize in crafting modern, responsive web applications
                  with cutting-edge technologies. Passionate about building
                  elegant solutions that solve real-world problems.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <a
                  href="#projects"
                  className="px-8 py-3 bg-accent text-white font-medium rounded-md hover:shadow-lg hover:shadow-accent/20 transition-all transform hover:-translate-y-1"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 border border-lightPink text-white font-medium rounded-md hover:bg-lightPink hover:bg-opacity-10 transition-all transform hover:-translate-y-1"
                >
                  Contact Me
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side: Creative element */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
              {/* Central circle with pulse animation */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-peach to-accent rounded-full shadow-xl animate-pulse-glow"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
              >
                <div className="w-full h-full flex items-center justify-center text-white font-bold text-xl">
                  JD
                </div>
              </motion.div>

              {/* Orbiting tech stack */}
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  className="absolute w-12 h-12 rounded-full bg-secondary flex items-center justify-center shadow-lg"
                  style={{
                    top: `${50 + 40 * Math.cos(i * (Math.PI / 3) * 2)}%`,
                    left: `${50 + 40 * Math.sin(i * (Math.PI / 3) * 2)}%`,
                  }}
                  custom={i}
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{
                    scale: 1.2,
                    backgroundColor: tech.color,
                    color: "#fff",
                  }}
                >
                  <span className="text-xs font-medium">{tech.name}</span>
                </motion.div>
              ))}

              {/* Rotating ring */}
              <motion.div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full border border-accent border-opacity-30 animate-rotate-slow" />

              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] md:w-[300px] md:h-[300px] rounded-full border border-peach border-opacity-20 animate-rotate-slow"
                style={{ animationDirection: "reverse" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-accent rounded-full mt-2"
            animate={{ y: [0, 4, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
