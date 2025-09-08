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
  KawaiiStar,
  KawaiiSnowflake,
  KawaiiCloud,
  KawaiiFlower,
  KawaiiOrigami,
  KawaiiMoon,
  KawaiiSun,
  KawaiiCrystal,
  KawaiiLogo,
} from "./KawaiiShapes";
