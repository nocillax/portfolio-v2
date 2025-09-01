import React from "react";

// This file contains minimalist, Japanese-inspired tech stack icons
// Each icon is designed to match the portfolio's aesthetic

interface TechIconProps {
  className?: string;
  size?: number;
}

export const NextjsIcon: React.FC<TechIconProps> = ({
  className = "",
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 2L2 19.5H22L12 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M17 14L12 7.5L7 14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const ReactIcon: React.FC<TechIconProps> = ({
  className = "",
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle
      cx="12"
      cy="12"
      r="2.5"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="10"
      ry="4.5"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="10"
      ry="4.5"
      transform="rotate(60 12 12)"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="10"
      ry="4.5"
      transform="rotate(120 12 12)"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);

export const TypeScriptIcon: React.FC<TechIconProps> = ({
  className = "",
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="1"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M12 8V16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M8 12H16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M16 12L14 10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M16 12L14 14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const NodejsIcon: React.FC<TechIconProps> = ({
  className = "",
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 21.5C11.4 21.5 10.9 21.3 10.4 21L7.9 19.6C7.1 19.1 7.5 19 7.7 18.9C8.5 18.7 8.6 18.6 9.5 18.1C9.6 18 9.8 18.1 9.9 18.2L11.9 19.3C12.1 19.4 12.3 19.4 12.5 19.3L20.5 14.7C20.7 14.6 20.8 14.4 20.8 14.1V4.9C20.8 4.6 20.7 4.4 20.5 4.3L12.5 -0.3C12.3 -0.4 12.1 -0.4 11.9 -0.3L3.9 4.3C3.7 4.4 3.6 4.6 3.6 4.9V14.1C3.6 14.4 3.7 14.6 3.9 14.7L5.9 15.8C7.6 16.7 8.7 15.6 8.7 14.6V6C8.7 5.8 8.9 5.6 9.1 5.6H10.1C10.3 5.6 10.5 5.8 10.5 6V14.6C10.5 16.9 9.4 18.2 7.2 18.2C6.4 18.2 5.8 18.2 4.4 17.4L2.5 16.3C1.6 15.8 1 14.7 1 13.6V5.4C1 4.3 1.6 3.2 2.5 2.7L10.5 -1.9C11.4 -2.4 12.6 -2.4 13.5 -1.9L21.5 2.7C22.4 3.2 23 4.3 23 5.4V13.6C23 14.7 22.4 15.8 21.5 16.3L13.5 20.9C13.1 21.3 12.5 21.5 12 21.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M14.9 13.3C11.1 13.3 10.3 11.8 10.3 10.5C10.3 10.3 10.5 10.1 10.7 10.1H11.7C11.9 10.1 12 10.2 12 10.4C12.2 11.2 12.6 11.6 14.8 11.6C16.6 11.6 17.3 11.1 17.3 10.1C17.3 9.5 17.1 9.1 14.4 8.8C12.1 8.6 10.7 8 10.7 6.2C10.7 4.5 12.1 3.6 14.5 3.6C17.2 3.6 18.5 4.5 18.7 6.5C18.7 6.6 18.7 6.7 18.6 6.8C18.5 6.9 18.4 6.9 18.3 6.9H17.3C17.1 6.9 17 6.8 17 6.6C16.7 5.6 16.2 5.3 14.5 5.3C12.7 5.3 12.5 5.9 12.5 6.3C12.5 6.8 12.7 7 15.3 7.3C17.8 7.6 19.1 8.1 19.1 9.9C19.1 11.8 17.6 13.3 14.9 13.3Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export const MongoDBIcon: React.FC<TechIconProps> = ({
  className = "",
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 3C12 3 7 6.5 7 13C7 18 10.5 20.5 11.5 21V22"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M12 3C12 3 17 6.5 17 13C17 18 13.5 20.5 12.5 21"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export const TailwindIcon: React.FC<TechIconProps> = ({
  className = "",
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M6 9.5C7 6.5 9 5 12 5C16.5 5 17 8 19.5 8.5C21 8.8 22 8 23 7C22 10 20 11.5 17 11.5C12.5 11.5 12 8.5 9.5 8C8 7.7 7 8.5 6 9.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M1 14.5C2 11.5 4 10 7 10C11.5 10 12 13 14.5 13.5C16 13.8 17 13 18 12C17 15 15 16.5 12 16.5C7.5 16.5 7 13.5 4.5 13C3 12.7 2 13.5 1 14.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const PostgreSQLIcon: React.FC<TechIconProps> = ({
  className = "",
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle
      cx="12"
      cy="12"
      r="9"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M12 7V17"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M7 12H17"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M9 9L15 15"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M15 9L9 15"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const DockerIcon: React.FC<TechIconProps> = ({
  className = "",
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect
      x="4"
      y="8"
      width="4"
      height="4"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <rect
      x="10"
      y="8"
      width="4"
      height="4"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <rect
      x="16"
      y="8"
      width="4"
      height="4"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <rect
      x="4"
      y="14"
      width="4"
      height="4"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <rect
      x="10"
      y="14"
      width="4"
      height="4"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <rect
      x="10"
      y="2"
      width="4"
      height="4"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M20 13C21.5 13 22 14 22 15.5C22 17 21.5 19 19 20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export const GitIcon: React.FC<TechIconProps> = ({
  className = "",
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle
      cx="12"
      cy="12"
      r="9"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <line
      x1="12"
      y1="3"
      x2="12"
      y2="21"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="9"
      y1="7"
      x2="15"
      y2="7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="7"
      y1="12"
      x2="17"
      y2="12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="9"
      y1="17"
      x2="15"
      y2="17"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const ExpressIcon: React.FC<TechIconProps> = ({
  className = "",
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M5 8L12 16L19 8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M5 16L12 8L19 16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const HTMLIcon: React.FC<TechIconProps> = ({
  className = "",
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M5 3L6.5 21L12 23L17.5 21L19 3H5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M8 8H16L15 17L12 18L9 17L8.5 13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const CSSIcon: React.FC<TechIconProps> = ({
  className = "",
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M5 3L6.5 21L12 23L17.5 21L19 3H5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M9 8H15L14.5 16L12 17L9.5 16L9 13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const FigmaIcon: React.FC<TechIconProps> = ({
  className = "",
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle
      cx="12"
      cy="6"
      r="3"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <circle
      cx="12"
      cy="12"
      r="3"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <circle
      cx="12"
      cy="18"
      r="3"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <circle
      cx="6"
      cy="12"
      r="3"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <circle
      cx="18"
      cy="12"
      r="3"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);

export const RedisIcon: React.FC<TechIconProps> = ({
  className = "",
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M4 8L12 5L20 8L12 11L4 8Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M4 12L12 9L20 12L12 15L4 12Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M4 16L12 13L20 16L12 19L4 16Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const JestIcon: React.FC<TechIconProps> = ({
  className = "",
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle
      cx="12"
      cy="12"
      r="9"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <circle
      cx="9"
      cy="10"
      r="1.5"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <circle
      cx="15"
      cy="10"
      r="1.5"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M8.5 15C8.5 15 9.5 17 12 17C14.5 17 15.5 15 15.5 15"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const CypressIcon: React.FC<TechIconProps> = ({
  className = "",
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle
      cx="12"
      cy="12"
      r="9"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M9 9L15 15"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M15 9L9 15"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const GraphQLIcon: React.FC<TechIconProps> = ({
  className = "",
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 3L21 8V16L12 21L3 16V8L12 3Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      fill="none"
    />
    <circle
      cx="12"
      cy="12"
      r="2"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M12 3V10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M12 14V21"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const PrismaIcon: React.FC<TechIconProps> = ({
  className = "",
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M21 18L12 3L3 18L12 12L21 18Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const FramerMotionIcon: React.FC<TechIconProps> = ({
  className = "",
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect
      x="4"
      y="4"
      width="16"
      height="16"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M12 4V20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M4 12H20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M12 12L20 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M12 12L4 20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const WordPressIcon: React.FC<TechIconProps> = ({
  className = "",
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle
      cx="12"
      cy="12"
      r="9"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <circle
      cx="12"
      cy="12"
      r="4"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M7 7L9 17"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M17 7L15 17"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M5 12H19"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// Technology name to icon mapping
export const getTechIcon = (
  name: string,
  size = 20,
  className = ""
): React.ReactNode => {
  const iconMap: { [key: string]: React.FC<TechIconProps> } = {
    "Next.js": NextjsIcon,
    NextJS: NextjsIcon,
    React: ReactIcon,
    ReactJS: ReactIcon,
    TypeScript: TypeScriptIcon,
    TS: TypeScriptIcon,
    "Node.js": NodejsIcon,
    NodeJS: NodejsIcon,
    MongoDB: MongoDBIcon,
    Tailwind: TailwindIcon,
    "Tailwind CSS": TailwindIcon,
    PostgreSQL: PostgreSQLIcon,
    Docker: DockerIcon,
    Git: GitIcon,
    Express: ExpressIcon,
    "Express.js": ExpressIcon,
    HTML: HTMLIcon,
    HTML5: HTMLIcon,
    CSS: CSSIcon,
    CSS3: CSSIcon,
    Figma: FigmaIcon,
    Redis: RedisIcon,
    Jest: JestIcon,
    Cypress: CypressIcon,
    GraphQL: GraphQLIcon,
    Prisma: PrismaIcon,
    "Framer Motion": FramerMotionIcon,
    WordPress: WordPressIcon,
  };

  const IconComponent = iconMap[name] || null;

  if (IconComponent) {
    return <IconComponent size={size} className={className} />;
  }

  return null;
};
