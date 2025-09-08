"use client";

import CursorFollower from "./CursorFollower";
import { usePathname } from "next/navigation";

/**
 * UniversalCursor Component
 *
 * A global wrapper for the cursor follower that should be included once at the root level.
 * This ensures a single, consistent cursor experience throughout the portfolio.
 *
 * All cursor configuration is centralized here and applies globally.
 * Simply change the props here to update cursor behavior site-wide.
 */
export default function UniversalCursor() {
  // We could potentially adjust cursor based on current path
  const pathname = usePathname();

  return (
    <CursorFollower
      // All cursor configuration is centralized here
      shape="snowflake" // Shape options: cloud, star, snowflake, origami, crystal, moon, sun, flower
      size={28} // Size in pixels (adjust as needed)
      colorOpacity={50} // Opacity (0-100)
      springStiffness={150} // Higher = faster movement
      springDamping={20} // Lower = more bouncy
    />
  );
}
