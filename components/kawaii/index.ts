"use client";

// Re-export all kawaii components from their respective files
// This makes it easier to import them from a single location

// Re-export animation wrappers
export {
  FloatingElement,
  BouncingElement,
  SpinElement,
  PulseElement,
  WiggleElement,
  PathFloatingElement,
} from "./AnimationWrappers";

// Re-export shapes
export {
  KawaiiCircle,
  KawaiiSquare,
  KawaiiTriangle,
  KawaiiStar,
  KawaiiWave,
  KawaiiDots,
  KawaiiSnowflake,
  KawaiiCloud,
  KawaiiSakura,
  KawaiiLeaf,
  KawaiiSplash,
  KawaiiRipple,
  KawaiiLogo,
} from "./KawaiiShapes";
