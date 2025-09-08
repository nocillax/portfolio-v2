"use client";

/**
 * KawaiiShapes.tsx
 *
 * This file contains all the improved kawaii shapes used throughout the portfolio.
 * Each shape is a simple SVG element that can be styled and animated.
 * These elements are meant to be placed inside animation wrapper components.
 */

// Interface for size props
interface SizeProps {
  size?: number;
  className?: string;
}

/**
 * A cute circle shape
 */
export const KawaiiCircle = ({ className = "", size = 20 }: SizeProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="50" cy="50" r="45" fill="currentColor" />
    <circle cx="35" cy="40" r="5" fill="white" fillOpacity="0.7" />
    <circle cx="65" cy="40" r="5" fill="white" fillOpacity="0.7" />
    <path
      d="M35 65Q50 80 65 65"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
      strokeOpacity="0.7"
    />
  </svg>
);

/**
 * A cute square shape
 */
export const KawaiiSquare = ({ className = "", size = 20 }: SizeProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="10" y="10" width="80" height="80" rx="15" fill="currentColor" />
    <circle cx="35" cy="40" r="5" fill="white" fillOpacity="0.7" />
    <circle cx="65" cy="40" r="5" fill="white" fillOpacity="0.7" />
    <path
      d="M40 65Q50 75 60 65"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
      strokeOpacity="0.7"
    />
  </svg>
);

/**
 * A sparkly crystal/gem shape
 */
export const KawaiiCrystal = ({ className = "", size = 30 }: SizeProps) => (
  <svg
    width={size}
    height={size * 1.2}
    viewBox="0 0 100 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Main crystal body */}
    <path
      d="M50 10L20 30L50 60L80 30L50 10Z"
      fill="currentColor"
      fillOpacity="0.9"
    />
    <path
      d="M20 30L10 90L50 110L90 90L80 30"
      fill="currentColor"
      fillOpacity="0.7"
    />
    <path
      d="M50 60L10 90L50 110L90 90L50 60"
      fill="currentColor"
      fillOpacity="0.8"
    />

    {/* Facets and reflections */}
    <path
      d="M50 10L50 60"
      stroke="white"
      strokeWidth="1.5"
      strokeOpacity="0.7"
    />
    <path
      d="M20 30L80 30"
      stroke="white"
      strokeWidth="1.5"
      strokeOpacity="0.7"
    />
    <path
      d="M10 90L90 90"
      stroke="white"
      strokeWidth="1.5"
      strokeOpacity="0.7"
    />
    <path
      d="M20 30L50 60L80 30"
      stroke="white"
      strokeWidth="1.5"
      strokeOpacity="0.8"
    />

    {/* Light reflections */}
    <path d="M40 20L48 25L40 30Z" fill="white" fillOpacity="0.5" />
    <path d="M60 30L52 25L60 20Z" fill="white" fillOpacity="0.5" />
    <circle cx="30" cy="50" r="3" fill="white" fillOpacity="0.9" />
    <circle cx="70" cy="50" r="2" fill="white" fillOpacity="0.9" />
    <circle cx="50" cy="80" r="4" fill="white" fillOpacity="0.6" />

    {/* Sparkles */}
    <path
      d="M15 35L25 35M20 30L20 40"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeOpacity="0.9"
    />
    <path
      d="M80 40L88 40M84 36L84 44"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeOpacity="0.9"
    />
    <path
      d="M50 90L58 90M54 86L54 94"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeOpacity="0.9"
    />
  </svg>
);

/**
 * An improved star shape using SVG
 */
export const KawaiiStar = ({ className = "", size = 24 }: SizeProps) => (
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
      stroke="currentColor"
      strokeOpacity="0.3"
      strokeWidth="0.5"
    />
  </svg>
);

/**
 * A cute snowflake shape
 */
export const KawaiiSnowflake = ({ className = "", size = 30 }: SizeProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M50 5V95"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M5 50H95"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M19.1 19.1L80.9 80.9"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M80.9 19.1L19.1 80.9"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path d="M50 25L56 32H44L50 25Z" fill="currentColor" />
    <path d="M50 75L44 68H56L50 75Z" fill="currentColor" />
    <path d="M25 50L32 44V56L25 50Z" fill="currentColor" />
    <path d="M75 50L68 56V44L75 50Z" fill="currentColor" />
    <path d="M30 30L38 33L33 38L30 30Z" fill="currentColor" />
    <path d="M70 70L62 67L67 62L70 70Z" fill="currentColor" />
    <path d="M30 70L33 62L38 67L30 70Z" fill="currentColor" />
    <path d="M70 30L67 38L62 33L70 30Z" fill="currentColor" />
    <circle cx="50" cy="50" r="6" fill="currentColor" />
    <circle cx="50" cy="20" r="4" fill="currentColor" />
    <circle cx="50" cy="80" r="4" fill="currentColor" />
    <circle cx="20" cy="50" r="4" fill="currentColor" />
    <circle cx="80" cy="50" r="4" fill="currentColor" />
    <circle cx="29" cy="29" r="3" fill="currentColor" />
    <circle cx="71" cy="29" r="3" fill="currentColor" />
    <circle cx="29" cy="71" r="3" fill="currentColor" />
    <circle cx="71" cy="71" r="3" fill="currentColor" />
  </svg>
);

/**
 * An improved cloud shape
 */
export const KawaiiCloud = ({ className = "", size = 36 }: SizeProps) => (
  <svg
    width={size}
    height={size * 0.7}
    viewBox="0 0 100 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M80 35C80 30.5817 77.7614 26.7085 74.2922 24.7508C73.4717 14.7403 65.1376 7 55 7C46.9071 7 40 12.5964 37.586 20.2735C35.9322 19.4605 34.0368 19 32 19C23.7157 19 17 25.7157 17 34C17 34.3355 17.0147 34.6679 17.0436 34.997C13.022 37.0825 10 41.1756 10 46C10 53.1797 15.8203 59 23 59H77C83.6274 59 89 53.6274 89 47C89 41.4339 85.1239 36.7319 80 35Z"
      fill="currentColor"
      stroke="white"
      strokeOpacity="0.2"
      strokeWidth="2"
    />
    <path
      d="M25 45C25 41.6863 21.6863 38 18.3726 38C15.0589 38 14 39.6863 14 43"
      stroke="white"
      strokeOpacity="0.3"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * A flower shape
 */
export const KawaiiFlower = ({ className = "", size = 30 }: SizeProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M50 20C55 25 60 30 60 40C60 50 55 55 50 60C45 55 40 50 40 40C40 30 45 25 50 20Z"
      fill="currentColor"
    />
    <path
      d="M50 80C55 75 60 70 60 60C60 50 55 45 50 40C45 45 40 50 40 60C40 70 45 75 50 80Z"
      fill="currentColor"
    />
    <path
      d="M20 50C25 45 30 40 40 40C50 40 55 45 60 50C55 55 50 60 40 60C30 60 25 55 20 50Z"
      fill="currentColor"
    />
    <path
      d="M80 50C75 55 70 60 60 60C50 60 45 55 40 50C45 45 50 40 60 40C70 40 75 45 80 50Z"
      fill="currentColor"
    />
    <path
      d="M29.3934 29.3934C34.3553 31.8553 39.3174 35.3174 42.1924 45C45.0675 54.6826 42.1924 60.5962 38.2843 64.5043C33.3223 62.0424 28.3603 58.5803 25.4852 48.8976C22.6101 39.215 25.4852 33.3015 29.3934 29.3934Z"
      fill="currentColor"
      fillOpacity="0.7"
    />
    <path
      d="M70.6066 70.6066C65.6447 68.1447 60.6826 64.6826 57.8076 55C54.9325 45.3174 57.8076 39.4038 61.7157 35.4957C66.6777 37.9576 71.6397 41.4197 74.5148 51.1024C77.3899 60.785 74.5148 66.6985 70.6066 70.6066Z"
      fill="currentColor"
      fillOpacity="0.7"
    />
    <path
      d="M70.6066 29.3934C68.1447 34.3553 64.6826 39.3174 55 42.1924C45.3174 45.0675 39.4038 42.1924 35.4957 38.2843C37.9576 33.3223 41.4197 28.3603 51.1024 25.4852C60.785 22.6101 66.6985 25.4852 70.6066 29.3934Z"
      fill="currentColor"
      fillOpacity="0.7"
    />
    <path
      d="M29.3934 70.6066C31.8553 65.6447 35.3174 60.6826 45 57.8076C54.6826 54.9325 60.5962 57.8076 64.5043 61.7157C62.0424 66.6777 58.5803 71.6397 48.8976 74.5148C39.215 77.3899 33.3015 74.5148 29.3934 70.6066Z"
      fill="currentColor"
      fillOpacity="0.7"
    />
    <circle cx="50" cy="50" r="8" fill="currentColor" />
  </svg>
);

/**
 * A cute origami bird shape
 */
export const KawaiiOrigami = ({ className = "", size = 30 }: SizeProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Main body */}
    <path d="M20 30L50 20L80 30L50 60Z" fill="currentColor" />

    {/* Wings */}
    <path d="M20 30L10 70L30 60L50 60Z" fill="currentColor" fillOpacity="0.9" />
    <path d="M80 30L90 70L70 60L50 60Z" fill="currentColor" fillOpacity="0.9" />

    {/* Tail */}
    <path d="M45 60L50 85L55 60" fill="currentColor" fillOpacity="0.8" />

    {/* Fold lines */}
    <path
      d="M50 20L50 60"
      stroke="white"
      strokeWidth="1.5"
      strokeOpacity="0.6"
    />
    <path
      d="M20 30L80 30"
      stroke="white"
      strokeWidth="1.5"
      strokeOpacity="0.6"
    />
    <path
      d="M10 70L50 60L90 70"
      stroke="white"
      strokeWidth="1"
      strokeOpacity="0.6"
    />

    {/* Head details */}
    <circle cx="45" cy="35" r="3" fill="white" fillOpacity="0.8" />
    <circle cx="55" cy="35" r="3" fill="white" fillOpacity="0.8" />
    <path
      d="M48 42Q50 45 52 42"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeOpacity="0.7"
    />

    {/* Beak */}
    <path d="M47 38L50 43L53 38" fill="white" fillOpacity="0.6" />
  </svg>
);

/**
 * A moon shape
 */
export const KawaiiMoon = ({ className = "", size = 30 }: SizeProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M70 85C42.3858 85 20 62.6142 20 35C20 32.3537 20.2003 29.7565 20.5858 27.2233C18.2217 32.9757 17 39.3218 17 46C17 72.5097 38.4903 94 65 94C75.5171 94 85.2268 90.4301 92.9434 84.4773C86.1853 84.4773 77.6255 85 70 85Z"
      fill="currentColor"
    />
    <circle cx="45" cy="50" r="8" fill="currentColor" fillOpacity="0.3" />
    <circle cx="75" cy="35" r="5" fill="currentColor" fillOpacity="0.3" />
    <circle cx="60" cy="60" r="6" fill="currentColor" fillOpacity="0.3" />
  </svg>
);

/**
 * A sun shape
 */
export const KawaiiSun = ({ className = "", size = 32 }: SizeProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="50" cy="50" r="25" fill="currentColor" />
    <path
      d="M50 15V5"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <path
      d="M50 95V85"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <path
      d="M85 50L95 50"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <path
      d="M5 50L15 50"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <path
      d="M73.5355 26.4645L80.7782 19.2218"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <path
      d="M19.2218 80.7782L26.4645 73.5355"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <path
      d="M73.5355 73.5355L80.7782 80.7782"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <path
      d="M19.2218 19.2218L26.4645 26.4645"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * A simple logo for branding
 */
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
