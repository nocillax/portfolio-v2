# FloatingShapes and UniversalCursor System

## Recent Updates

The decorative shape system has been improved with the following changes:

1. **Reduced Shape Count**: Decreased from many small shapes to 8-9 carefully selected shapes
2. **Increased Shape Size**: All shapes are now significantly larger for better visibility
3. **Universal Cursor Follower**: Global cursor follower with centralized configuration
4. **Improved Performance**: Fewer DOM elements for better rendering performance
5. **Simplified API**: Cleaner prop interface for easier customization

## Using FloatingShapes

The `FloatingShapes` component is designed to add decorative elements to any section. It now has the following properties:

```tsx
interface FloatingShapesProps {
  density?: "low" | "medium" | "high";
  variant?: "minimal" | "standard" | "playful";
  colorOpacity?: number;
}
```

### Basic Usage

```tsx
import { SectionBackground, FloatingShapes } from "@/components/background";

export default function MySection() {
  return (
    <SectionBackground variant="white">
      <section className="relative min-h-screen">
        {/* Add decorative shapes */}
        <FloatingShapes variant="standard" colorOpacity={20} />

        {/* Your section content */}
        <div className="container mx-auto">{/* Content here */}</div>
      </section>
    </SectionBackground>
  );
}
```

### Available Options

1. **Variants**:

   - `minimal`: 3 large shapes for subtle decoration
   - `standard`: 6 large shapes for balanced decoration
   - `playful`: 8-9 large shapes for maximum visual interest

2. **Density**: (Note: With fewer shapes, this has less impact than before)

   - `low`: Fewer shapes visible
   - `medium`: Default density
   - `high`: Maximum shapes visible

3. **Color Opacity**: Value from 0-100
   - `0`: No shapes visible at all (component returns null)
   - `10-30`: Subtle, ghostly shapes
   - `40-70`: Medium visibility
   - `80-100`: High visibility shapes

## The Universal Cursor System

The portfolio now uses a universal cursor follower that's configured in one place and applied globally across the site.

### How It Works

1. The `UniversalCursor` component is added to the root layout (`app/layout.tsx`)
2. It wraps `CursorFollower` with global configuration
3. This ensures cursor behavior is consistent across all pages

```tsx
// app/layout.tsx
import { UniversalCursor } from "@/components/background";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <UniversalCursor /> {/* This adds the cursor to all pages */}
      </body>
    </html>
  );
}
```

### Customizing the Cursor

To change cursor appearance and behavior, edit `components/background/UniversalCursor.tsx`:

```tsx
// components/background/UniversalCursor.tsx
export default function UniversalCursor() {
  return (
    <CursorFollower
      shape="snowflake" // Shape options: cloud, star, snowflake, origami, crystal, moon, sun, flower
      size={24} // Size in pixels
      colorOpacity={70} // Opacity (0-100)
      springStiffness={150} // Higher = faster movement
      springDamping={20} // Lower = more bouncy
    />
  );
}
```

### CursorFollower Options

```tsx
interface CursorFollowerProps {
  shape?:
    | "cloud"
    | "star"
    | "snowflake"
    | "origami"
    | "crystal"
    | "moon"
    | "sun"
    | "flower";
  size?: number;
  colorOpacity?: number;
  springStiffness?: number;
  springDamping?: number;
}
```

- **shape**: Type of kawaii shape to use for the cursor
- **size**: Size of the shape in pixels (default: 25)
- **colorOpacity**: Opacity of the shape (0-100)
- **springStiffness**: Animation stiffness (higher = faster movement)
- **springDamping**: Animation damping (higher = less bounce)

## Performance Considerations

1. The cursor follower uses spring animations which are highly optimized but still have a small performance cost.
2. If you notice any performance issues, consider:
   - Reducing cursor size or animation parameters
   - Using the `minimal` variant with fewer floating shapes
   - Decreasing the density to `low`
