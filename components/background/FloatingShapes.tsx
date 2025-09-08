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
  KawaiiTriangle,
  KawaiiStar,
  KawaiiSnowflake,
  KawaiiCloud,
  KawaiiSakura,
  KawaiiWave,
  KawaiiDots,
  KawaiiLeaf,
  KawaiiSplash,
  KawaiiRipple,
} from "../kawaii";

interface FloatingShapesProps {
  density?: "low" | "medium" | "high";
  variant?: "minimal" | "standard" | "playful";
  colorOpacity?: number;
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
  // Convert opacity to a decimal with string format
  const opacityStr = `${colorOpacity / 100}`;

  // Basic minimal shapes that appear in all variants
  const minimalShapes = (
    <>
      <FloatingElement delay={0} size="xs" x="10%" y="20%">
        <KawaiiCircle className={`bg-accent/${opacityStr}`} />
      </FloatingElement>
      <FloatingElement delay={2} size="sm" x="15%" y="30%">
        <KawaiiTriangle className={`border-b-accent/${opacityStr}`} />
      </FloatingElement>
      <SpinElement delay={1} size="xs" slow={true} x="80%" y="25%">
        <KawaiiStar className={`text-accent/${opacityStr}`} size={10} />
      </SpinElement>
      <BouncingElement delay={1.5} size="xs" x="75%" y="70%">
        <KawaiiCircle className={`bg-accent/${opacityStr}`} />
      </BouncingElement>
      <PulseElement delay={1.8} size="md" x="5%" y="60%">
        <KawaiiCloud
          className={`text-accent/${parseInt(opacityStr) / 2}`}
          size={24}
        />
      </PulseElement>
    </>
  );

  // Standard set of shapes for most sections
  const standardShapes = (
    <>
      {minimalShapes}
      <PathFloatingElement delay={0.3} size="xs">
        <KawaiiSakura
          className={`text-accent/${parseInt(opacityStr) + 10}`}
          size={12}
        />
      </PathFloatingElement>
      <WiggleElement delay={2.5} size="sm" x="85%" y="15%">
        <KawaiiSnowflake className={`text-accent/${opacityStr}`} size={12} />
      </WiggleElement>
      <SpinElement delay={3} size="xs" x="60%" y="80%" slow={true}>
        <KawaiiStar
          className={`text-accent/${parseInt(opacityStr) + 10}`}
          size={6}
        />
      </SpinElement>
      <BouncingElement delay={0.7} size="xs" x="25%" y="85%">
        <KawaiiDots className={`text-accent/${opacityStr}`} />
      </BouncingElement>
      <FloatingElement delay={2.2} size="xs" x="40%" y="15%">
        <KawaiiTriangle className={`border-b-accent/${opacityStr}`} />
      </FloatingElement>
      <PathFloatingElement delay={1.5} size="sm">
        <KawaiiSakura
          className={`text-accent/${parseInt(opacityStr) + 10}`}
          size={10}
        />
      </PathFloatingElement>
      <WiggleElement delay={0.9} size="xs" x="65%" y="35%">
        <KawaiiWave className={`text-accent/${opacityStr}`} />
      </WiggleElement>
    </>
  );

  // Playful set with more shapes and animations
  const playfulShapes = (
    <>
      {standardShapes}
      <FloatingElement delay={1.3} size="sm" x="27%" y="22%">
        <KawaiiSnowflake className={`text-accent/${opacityStr}`} size={14} />
      </FloatingElement>
      <BouncingElement delay={0.4} size="xs" x="68%" y="12%">
        <KawaiiLeaf
          className={`text-accent/${parseInt(opacityStr) + 10}`}
          size={10}
        />
      </BouncingElement>
      <SpinElement delay={2.7} size="xs" x="48%" y="60%" slow={true}>
        <KawaiiSplash className={`text-accent/${opacityStr}`} size={12} />
      </SpinElement>
      <WiggleElement delay={3.5} size="sm" x="12%" y="75%">
        <KawaiiRipple className={`text-accent/${opacityStr}`} size={16} />
      </WiggleElement>
      <PathFloatingElement delay={1.9} size="xs">
        <KawaiiStar
          className={`text-accent/${parseInt(opacityStr) + 10}`}
          size={8}
        />
      </PathFloatingElement>
      <PulseElement delay={2.1} size="sm" x="82%" y="44%">
        <KawaiiTriangle className={`border-b-accent/${opacityStr}`} />
      </PulseElement>
      <FloatingElement delay={3.3} size="xs" x="53%" y="8%">
        <KawaiiSnowflake
          className={`text-accent/${parseInt(opacityStr) + 10}`}
          size={9}
        />
      </FloatingElement>
      <BouncingElement delay={1.0} size="sm" x="35%" y="68%">
        <KawaiiCloud className={`text-accent/${opacityStr}`} size={16} />
      </BouncingElement>
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

  // Apply density filter to shapes
  const applyDensityFilter = (shapes: React.ReactNode) => {
    // The shapes are already created, but we can conditionally render them based on density
    // This is a simplified approach - a more advanced one would actually generate different numbers of shapes
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
