"use client";

import React from "react";
import {
  // Animation wrappers
  FloatingElement,
  BouncingElement,
  SpinElement,
  PulseElement,
  WiggleElement,
  PathFloatingElement,

  // Kawaii shapes
  KawaiiCircle,
  KawaiiCrystal,
  KawaiiStar,
  KawaiiSnowflake,
  KawaiiCloud,
  KawaiiFlower,
  KawaiiOrigami,
  KawaiiMoon,
  KawaiiSun,
} from "../kawaii";

interface FloatingShapesProps {
  density?: "low" | "medium" | "high";
  variant?: "minimal" | "standard" | "playful";
  colorOpacity?: number;
  // Removed enableCursorFollower prop since we're using UniversalCursor now
}

/**
 * FloatingShapes Component
 *
 * A centralized component for managing all decorative floating elements.
 * It handles:
 * - Different densities of shapes
 * - Different style variants
 * - Proper placement and animation
 *
 * This component is designed to be placed within a section and automatically
 * adds decorative elements with appropriate positioning and animations.
 *
 * @param density - Controls how many elements appear (low, medium, high)
 * @param variant - The style variant (minimal, standard, playful)
 * @param colorOpacity - Base opacity for shape colors (0-100)
 */
export default function FloatingShapes({
  density = "medium",
  variant = "standard",
  colorOpacity = 20,
}: FloatingShapesProps) {
  // Convert opacity to a decimal with string format (limit between 0-100)
  const clampedOpacity = Math.max(0, Math.min(100, colorOpacity));
  const opacityStr = `${clampedOpacity}`;

  // Larger, fewer shapes - Basic minimal variant with just a few large shapes
  const minimalShapes = (
    <>
      <FloatingElement delay={0} size="lg" x="15%" y="20%">
        <div className={`opacity-${opacityStr}`}>
          <KawaiiCircle className="text-accent" size={40} />
        </div>
      </FloatingElement>
      <SpinElement delay={1.5} size="lg" slow={true} x="75%" y="30%">
        <div className={`opacity-${opacityStr}`}>
          <KawaiiSnowflake className="text-accent" size={45} />
        </div>
      </SpinElement>
      <BouncingElement delay={2.2} size="lg" x="25%" y="70%">
        <div className={`opacity-${opacityStr}`}>
          <KawaiiCloud className="text-accent" size={50} />
        </div>
      </BouncingElement>
    </>
  );

  // Standard set with medium number of larger shapes
  const standardShapes = (
    <>
      <FloatingElement delay={0.2} size="lg" x="10%" y="25%">
        <div className={`opacity-${opacityStr}`}>
          <KawaiiStar className="text-accent" size={20} />
        </div>
      </FloatingElement>
      <WiggleElement delay={1.5} size="lg" x="80%" y="20%">
        <div className={`opacity-${opacityStr}`}>
          <KawaiiSnowflake className="text-accent" size={42} />
        </div>
      </WiggleElement>
      <PulseElement delay={0.8} size="lg" x="20%" y="70%">
        <div className={`opacity-${opacityStr}`}>
          <KawaiiCloud className="text-accent" size={50} />
        </div>
      </PulseElement>
      <SpinElement delay={1.2} size="md" x="60%" y="65%" slow={true}>
        <div className={`opacity-${opacityStr}`}>
          <KawaiiStar className="text-accent" size={36} />
        </div>
      </SpinElement>
      <PathFloatingElement delay={2} size="lg">
        <div className={`opacity-${opacityStr}`}>
          <KawaiiMoon className="text-accent" size={40} />
        </div>
      </PathFloatingElement>
    </>
  );

  // Playful set with 8-9 larger shapes
  const playfulShapes = (
    <>
      <FloatingElement delay={0} size="lg" x="12%" y="15%">
        <div className={`opacity-${opacityStr}`}>
          <KawaiiCloud className="text-accent" size={48} />
        </div>
      </FloatingElement>
      <SpinElement delay={1} size="lg" slow={true} x="78%" y="20%">
        <div className={`opacity-${opacityStr}`}>
          <KawaiiSnowflake className="text-accent" size={45} />
        </div>
      </SpinElement>

      <PulseElement delay={0.3} size="lg" x="82%" y="65%">
        <div className={`opacity-${opacityStr}`}>
          <KawaiiMoon className="text-accent" size={42} />
        </div>
      </PulseElement>
      <BouncingElement delay={1.2} size="lg" x="55%" y="40%">
        <div className={`opacity-${opacityStr}`}>
          <KawaiiStar className="text-accent" size={38} />
        </div>
      </BouncingElement>
      <FloatingElement delay={2.2} size="lg" x="40%" y="15%">
        <div className={`opacity-${opacityStr}`}>
          <KawaiiSun className="text-accent" size={40} />
        </div>
      </FloatingElement>
      <SpinElement delay={0.7} size="lg" x="75%" y="45%" slow={true}>
        <div className={`opacity-${opacityStr}`}>
          <KawaiiOrigami className="text-accent" size={36} />
        </div>
      </SpinElement>
    </>
  );

  // Determine which set of shapes to show based on variant
  const renderShapesByVariant = () => {
    switch (variant) {
      case "minimal":
        return minimalShapes;
      case "standard":
        return standardShapes;
      case "playful":
        return playfulShapes;
      default:
        return standardShapes;
    }
  };

  // Apply density filter - with fewer shapes, we can simplify this
  const applyDensityFilter = (shapes: React.ReactNode) => {
    // Since we now have fewer, larger shapes, we can just return them as is
    return shapes;
  };

  // If opacity is set to 0, don't render any shapes at all
  if (colorOpacity === 0) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {applyDensityFilter(renderShapesByVariant())}
    </div>
  );
}
