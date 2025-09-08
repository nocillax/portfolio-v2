"use client";

import { useState } from "react";
import {
  SectionBackground,
  FloatingShapes,
  CursorFollower,
} from "@/components/background";

/**
 * ShapeDemo Component
 *
 * A demonstration component showing different configurations of the shape system.
 * This serves as both documentation and a testing ground for the shape system.
 */
export default function ShapeDemo() {
  const [variant, setVariant] = useState<"minimal" | "standard" | "playful">(
    "standard"
  );
  const [opacity, setOpacity] = useState(30);
  // No need for cursor state anymore as it's controlled globally

  return (
    <div className="min-h-screen">
      {/* Control panel */}
      <div className="fixed bottom-6 left-6 z-50 bg-white dark:bg-dark-paper p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-lg font-bold mb-4">Shape Controls</h2>

        <div className="mb-4">
          <label className="block text-sm mb-1">Variant</label>
          <div className="flex gap-2">
            <button
              className={`px-3 py-1 text-xs rounded ${
                variant === "minimal" ? "bg-accent text-white" : "bg-gray-200"
              }`}
              onClick={() => setVariant("minimal")}
            >
              Minimal
            </button>
            <button
              className={`px-3 py-1 text-xs rounded ${
                variant === "standard" ? "bg-accent text-white" : "bg-gray-200"
              }`}
              onClick={() => setVariant("standard")}
            >
              Standard
            </button>
            <button
              className={`px-3 py-1 text-xs rounded ${
                variant === "playful" ? "bg-accent text-white" : "bg-gray-200"
              }`}
              onClick={() => setVariant("playful")}
            >
              Playful
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">Opacity: {opacity}</label>
          <input
            type="range"
            min="0"
            max="100"
            value={opacity}
            onChange={(e) => setOpacity(parseInt(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="mb-4">
          <p className="text-sm italic">
            The cursor follower is now universal and configured in one place (
            <code>UniversalCursor.tsx</code>).
          </p>
        </div>
      </div>

      {/* Shape demonstration */}
      <SectionBackground
        variant="white"
        showPattern={true}
        patternOpacity={20}
        showBorders={true}
      >
        <section className="min-h-screen flex items-center justify-center relative">
          {/* Using the FloatingShapes component with the selected options */}
          <FloatingShapes variant={variant} colorOpacity={opacity} />

          {/* Main content */}
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              Shape System Demo
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              This page demonstrates the new shape system with larger, fewer
              shapes and an optional cursor follower. Use the controls to try
              different configurations.
            </p>
            <div className="mt-12 flex gap-4 justify-center">
              <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                <span className="text-4xl">👆</span>
              </div>
              <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                <span className="text-4xl">👀</span>
              </div>
              <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                <span className="text-4xl">✨</span>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* The UniversalCursor component is now included globally in layout.tsx */}
    </div>
  );
}
