# FloatingShapes Customization Guide

This document explains how to customize the FloatingShapes component in your portfolio to change shapes, colors, positions, and animations.

## Basic Usage

The FloatingShapes component can be imported and used in any section:

```tsx
import FloatingShapes from "@/components/background/FloatingShapes";

// Inside your component's return statement
<div className="relative">
  <FloatingShapes variant="standard" density="medium" colorOpacity={20} />
  {/* Your section content */}
</div>;
```

## Available Props

| Prop           | Description                               | Options                                | Default      |
| -------------- | ----------------------------------------- | -------------------------------------- | ------------ |
| `variant`      | Determines the style and number of shapes | `"minimal"`, `"standard"`, `"playful"` | `"standard"` |
| `density`      | Controls how many shapes appear           | `"low"`, `"medium"`, `"high"`          | `"medium"`   |
| `colorOpacity` | Base opacity for shape colors (0-100)     | Number between 0-100                   | 20           |

## Adding New Shapes

To add new shapes to the FloatingShapes component, follow these steps:

1. Open the `FloatingShapes.tsx` file in `components/background/`
2. Identify which variant you want to modify (minimal, standard, or playful)
3. Add new shape elements following the existing pattern:

```tsx
{
  /* Example of adding a new shape */
}
<AnimationWrapper delay={2.5} size="sm" x="45%" y="65%">
  <KawaiiShapeName className={`text-accent/${opacityStr}`} size={12} />
</AnimationWrapper>;
```

### Available Shapes

You can use any of these kawaii shapes:

- `KawaiiCircle`
- `KawaiiTriangle`
- `KawaiiStar`
- `KawaiiSnowflake`
- `KawaiiCloud`
- `KawaiiSakura`
- `KawaiiWave`
- `KawaiiDots`
- `KawaiiLeaf`
- `KawaiiSplash`
- `KawaiiRipple`

### Available Animation Wrappers

Choose from these animation wrappers for your shapes:

- `FloatingElement` - gentle up/down floating motion
- `BouncingElement` - slightly more pronounced bouncing effect
- `SpinElement` - rotating animation (use `slow={true}` for slower rotation)
- `PulseElement` - subtle scaling in/out effect
- `WiggleElement` - small side-to-side movement
- `PathFloatingElement` - moves along a curved path

## Changing Colors

The shapes use the `accent` color defined in your Tailwind config. To change colors:

1. Each shape uses a className like `text-accent/${opacityStr}` or `bg-accent/${opacityStr}`
2. You can change these to use any color from your Tailwind config:

```tsx
// Example: Change to primary color
<KawaiiCircle className={`bg-primary/${opacityStr}`} />

// Example: Use a different opacity for a specific shape
<KawaiiStar className={`text-accent/${parseInt(opacityStr) + 10}`} size={10} />
```

## Positioning Shapes

To change the position of shapes:

1. Each animation wrapper takes `x` and `y` props as percentages
2. Modify these values to move shapes around:

```tsx
// Example: Position a shape at top-right
<FloatingElement delay={0} size="xs" x="90%" y="10%">
  <KawaiiCircle className={`bg-accent/${opacityStr}`} />
</FloatingElement>

// Example: Position a shape at bottom-center
<BouncingElement delay={1.5} size="xs" x="50%" y="80%">
  <KawaiiTriangle className={`border-b-accent/${opacityStr}`} />
</BouncingElement>
```

## Customizing Animation Timing

Each animation wrapper takes a `delay` prop (in seconds) to stagger the animations:

```tsx
// Example: Start animation immediately
<FloatingElement delay={0} size="xs" x="10%" y="20%">
  <KawaiiCircle className={`bg-accent/${opacityStr}`} />
</FloatingElement>

// Example: Delay animation by 2 seconds
<BouncingElement delay={2} size="sm" x="15%" y="30%">
  <KawaiiTriangle className={`border-b-accent/${opacityStr}`} />
</BouncingElement>
```

## Adjusting Shape Sizes

The `size` prop on animation wrappers controls the overall size:

- `"xs"` - very small shapes
- `"sm"` - small shapes
- `"md"` - medium shapes
- `"lg"` - large shapes

Additionally, many Kawaii shapes accept a `size` prop for more precise control:

```tsx
<KawaiiStar className={`text-accent/${opacityStr}`} size={10} />
<KawaiiCloud className={`text-accent/${opacityStr}`} size={24} />
```

## Creating a New Variant

To create a completely new variant:

1. Open `FloatingShapes.tsx`
2. Add a new constant with your shapes:

```tsx
const myCustomVariant = (
  <>
    {/* Add your custom shape configuration here */}
    <FloatingElement delay={0} size="xs" x="10%" y="20%">
      <KawaiiCircle className={`bg-accent/${opacityStr}`} />
    </FloatingElement>
    {/* More shapes... */}
  </>
);
```

3. Update the `renderShapesByVariant` function to include your new variant:

```tsx
const renderShapesByVariant = () => {
  switch (variant) {
    case "minimal":
      return minimalShapes;
    case "standard":
      return standardShapes;
    case "playful":
      return playfulShapes;
    case "myCustom":
      return myCustomVariant;
    default:
      return standardShapes;
  }
};
```

4. Update the component's TypeScript interface to include your new variant:

```tsx
interface FloatingShapesProps {
  density?: "low" | "medium" | "high";
  variant?: "minimal" | "standard" | "playful" | "myCustom";
  colorOpacity?: number;
}
```

## Example: Adding a Cloud in the Top-Right Corner

```tsx
// Inside the standardShapes constant
<PulseElement delay={3.2} size="md" x="85%" y="15%">
  <KawaiiCloud
    className={`text-primary/${parseInt(opacityStr) / 2}`}
    size={28}
  />
</PulseElement>
```

## Example: Creating a Gradient Color Effect

For more advanced color effects, you can customize individual shapes:

```tsx
// Inside any variant constant
<FloatingElement delay={1.5} size="sm" x="30%" y="40%">
  <div className="bg-gradient-to-br from-accent to-primary rounded-full w-4 h-4 opacity-30" />
</FloatingElement>
```
