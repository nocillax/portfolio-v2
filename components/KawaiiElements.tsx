"use client";

import { motion } from "framer-motion";

export const FloatingElement = ({
  children,
  delay = 0,
  size = "sm",
  x = "auto",
  y = "auto",
}: {
  children: React.ReactNode;
  delay?: number;
  size?: "xs" | "sm" | "md" | "lg";
  x?: string | number;
  y?: string | number;
}) => {
  const sizeClasses = {
    xs: "w-4 h-4",
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const positionStyle = {
    left: x !== "auto" ? x : undefined,
    top: y !== "auto" ? y : undefined,
  };

  return (
    <motion.div
      className={`absolute pointer-events-none opacity-70 ${sizeClasses[size]}`}
      style={positionStyle}
      animate={{
        y: [0, -15, 0],
        rotate: [0, 5, 0, -5, 0],
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export const BouncingElement = ({
  children,
  delay = 0,
  size = "sm",
  x = "auto",
  y = "auto",
}: {
  children: React.ReactNode;
  delay?: number;
  size?: "xs" | "sm" | "md" | "lg";
  x?: string | number;
  y?: string | number;
}) => {
  const sizeClasses = {
    xs: "w-4 h-4",
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  };

  const positionStyle = {
    left: x !== "auto" ? x : undefined,
    top: y !== "auto" ? y : undefined,
  };

  return (
    <motion.div
      className={`absolute pointer-events-none opacity-70 ${sizeClasses[size]}`}
      style={positionStyle}
      animate={{
        y: [0, -10, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export const SpinElement = ({
  children,
  delay = 0,
  size = "sm",
  slow = false,
  x = "auto",
  y = "auto",
}: {
  children: React.ReactNode;
  delay?: number;
  size?: "xs" | "sm" | "md" | "lg";
  slow?: boolean;
  x?: string | number;
  y?: string | number;
}) => {
  const sizeClasses = {
    xs: "w-3 h-3",
    sm: "w-5 h-5",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  const positionStyle = {
    left: x !== "auto" ? x : undefined,
    top: y !== "auto" ? y : undefined,
  };

  return (
    <motion.div
      className={`absolute pointer-events-none opacity-70 ${sizeClasses[size]}`}
      style={positionStyle}
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: slow ? 12 : 6,
        delay,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      }}
    >
      {children}
    </motion.div>
  );
};

export const PulseElement = ({
  children,
  delay = 0,
  size = "sm",
  x = "auto",
  y = "auto",
}: {
  children: React.ReactNode;
  delay?: number;
  size?: "xs" | "sm" | "md" | "lg";
  x?: string | number;
  y?: string | number;
}) => {
  const sizeClasses = {
    xs: "w-4 h-4",
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const positionStyle = {
    left: x !== "auto" ? x : undefined,
    top: y !== "auto" ? y : undefined,
  };

  return (
    <motion.div
      className={`absolute pointer-events-none ${sizeClasses[size]}`}
      style={positionStyle}
      animate={{
        opacity: [0.4, 0.8, 0.4],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

// Floating animation that follows a path
export const PathFloatingElement = ({
  children,
  delay = 0,
  size = "sm",
}: {
  children: React.ReactNode;
  delay?: number;
  size?: "xs" | "sm" | "md" | "lg";
}) => {
  const sizeClasses = {
    xs: "w-4 h-4",
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <motion.div
      className={`absolute pointer-events-none opacity-70 ${sizeClasses[size]}`}
      animate={{
        x: [0, 40, 80, 40, 0],
        y: [0, 30, 0, -30, 0],
      }}
      transition={{
        duration: 15,
        delay,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

// Wiggle animation
export const WiggleElement = ({
  children,
  delay = 0,
  size = "sm",
  x = "auto",
  y = "auto",
}: {
  children: React.ReactNode;
  delay?: number;
  size?: "xs" | "sm" | "md" | "lg";
  x?: string | number;
  y?: string | number;
}) => {
  const sizeClasses = {
    xs: "w-4 h-4",
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  };

  const positionStyle = {
    left: x !== "auto" ? x : undefined,
    top: y !== "auto" ? y : undefined,
  };

  return (
    <motion.div
      className={`absolute pointer-events-none opacity-70 ${sizeClasses[size]}`}
      style={positionStyle}
      animate={{
        rotate: [0, 10, -10, 10, 0],
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

// Decorative elements
export const KawaiiCircle = ({ className = "" }) => (
  <div className={`rounded-full ${className}`}></div>
);

export const KawaiiSquare = ({ className = "" }) => (
  <div className={`${className}`}></div>
);

export const KawaiiTriangle = ({ className = "" }) => (
  <div
    className={`w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[15px] ${className}`}
  ></div>
);

export const KawaiiStar = ({ className = "", size = 5 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      fill="currentColor"
    />
  </svg>
);

export const KawaiiWave = ({ className = "" }) => (
  <svg
    width="24"
    height="10"
    viewBox="0 0 24 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M0 5C2 1 4 1 6 5C8 9 10 9 12 5C14 1 16 1 18 5C20 9 22 9 24 5"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export const KawaiiDots = ({ className = "" }) => (
  <svg
    width="30"
    height="10"
    viewBox="0 0 30 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="5" cy="5" r="2" fill="currentColor" />
    <circle cx="15" cy="5" r="2" fill="currentColor" />
    <circle cx="25" cy="5" r="2" fill="currentColor" />
  </svg>
);

export const KawaiiSnowflake = ({ className = "", size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 2L12 22M12 2L8 6M12 2L16 6M12 22L8 18M12 22L16 18M2 12L22 12M2 12L6 8M2 12L6 16M22 12L18 8M22 12L18 16M4.5 4.5L19.5 19.5M4.5 4.5L8 4.5M4.5 4.5L4.5 8M19.5 19.5L16 19.5M19.5 19.5L19.5 16M4.5 19.5L19.5 4.5M4.5 19.5L8 19.5M4.5 19.5L4.5 16M19.5 4.5L16 4.5M19.5 4.5L19.5 8"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

export const KawaiiCloud = ({ className = "", size = 24 }) => (
  <svg
    width={size}
    height={size * 0.75}
    viewBox="0 0 24 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04Z"
      fill="currentColor"
    />
  </svg>
);

export const KawaiiSakura = ({ className = "", size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 2C13.1 3.5 14 5 14 6.5C14 8 13.1 9.5 12 11C10.9 9.5 10 8 10 6.5C10 5 10.9 3.5 12 2Z"
      fill="currentColor"
    />
    <path
      d="M12 22C13.1 20.5 14 19 14 17.5C14 16 13.1 14.5 12 13C10.9 14.5 10 16 10 17.5C10 19 10.9 20.5 12 22Z"
      fill="currentColor"
    />
    <path
      d="M2 12C3.5 13.1 5 14 6.5 14C8 14 9.5 13.1 11 12C9.5 10.9 8 10 6.5 10C5 10 3.5 10.9 2 12Z"
      fill="currentColor"
    />
    <path
      d="M22 12C20.5 13.1 19 14 17.5 14C16 14 14.5 13.1 13 12C14.5 10.9 16 10 17.5 10C19 10 20.5 10.9 22 12Z"
      fill="currentColor"
    />
    <path
      d="M5.05 5.05C6.64 5.54 8 6.4 8.83 7.67C9.66 8.94 9.89 10.47 9.46 12C7.93 11.57 6.4 10.66 5.13 9.83C3.86 9 3 7.64 2.51 6.05C3.4 5.56 4.16 5.24 5.05 5.05Z"
      fill="currentColor"
    />
    <path
      d="M18.95 18.95C17.36 18.46 16 17.6 15.17 16.33C14.34 15.06 14.11 13.53 14.54 12C16.07 12.43 17.6 13.34 18.87 14.17C20.14 15 21 16.36 21.49 17.95C20.6 18.44 19.84 18.76 18.95 18.95Z"
      fill="currentColor"
    />
    <path
      d="M18.95 5.05C18.46 6.64 17.6 8 16.33 8.83C15.06 9.66 13.53 9.89 12 9.46C12.43 7.93 13.34 6.4 14.17 5.13C15 3.86 16.36 3 17.95 2.51C18.44 3.4 18.76 4.16 18.95 5.05Z"
      fill="currentColor"
    />
    <path
      d="M5.05 18.95C5.54 17.36 6.4 16 7.67 15.17C8.94 14.34 10.47 14.11 12 14.54C11.57 16.07 10.66 17.6 9.83 18.87C9 20.14 7.64 21 6.05 21.49C5.56 20.6 5.24 19.84 5.05 18.95Z"
      fill="currentColor"
    />
    <circle cx="12" cy="12" r="2.5" fill="currentColor" />
  </svg>
);

export const KawaiiLeaf = ({ className = "", size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M6 21C6 18 6 9.6 12 4C12 4 12 9 18 12C18 12 9 15 9 21"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
    />
    <path
      d="M9 21V15L15 9"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

export const KawaiiSplash = ({ className = "", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 12L9 4M12 12L20 9M12 12L15 20M12 12L4 15M12 12L7 7M12 12L17 7M12 12L17 17M12 12L7 17"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

export const KawaiiRipple = ({ className = "", size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle
      cx="10"
      cy="10"
      r="3"
      stroke="currentColor"
      strokeWidth="0.8"
      fill="none"
    />
    <circle
      cx="10"
      cy="10"
      r="6"
      stroke="currentColor"
      strokeWidth="0.6"
      fill="none"
    />
    <circle
      cx="10"
      cy="10"
      r="9"
      stroke="currentColor"
      strokeWidth="0.4"
      fill="none"
    />
  </svg>
);

export const KawaiiLogo = ({ className = "" }) => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M15 10L35 10L40 25L35 40H15L10 25L15 10Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M20 10L30 40"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M30 10L20 40"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
