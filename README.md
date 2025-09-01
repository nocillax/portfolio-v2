# Minimalist Japanese-Inspired Portfolio

An elegant, minimalist portfolio website with Japanese design influences, built using Next.js 14, React, TypeScript, Tailwind CSS, and Framer Motion. Features light and dark mode with seamless transitions.

## 📁 Project Structure

The project has been organized for optimal readability and maintainability:

### Core Structure

```
portfolio-v2/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with ThemeProvider
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and animations
├── components/             # All React components
│   ├── kawaii/             # Decorative elements and animations
│   ├── layout/             # Page structure components
│   ├── projects/           # Project-related components
│   ├── sections/           # Main content sections
│   └── ui/                 # Reusable UI components
│       └── theme/          # Theme-related components
├── context/                # React Context providers
│   └── ThemeContext.tsx    # Dark/light mode context
├── data/                   # Content and configuration
│   └── projects.ts         # Project data
├── public/                 # Static assets
│   └── images/             # Image files
└── styles/                 # Additional styles
```

### `/components` Directory

- **`/kawaii`** - Decorative elements and animations

  - `KawaiiShapes.tsx` - SVG shapes (Circle, Triangle, Star, Sakura, Snowflake, Leaf, Splash, Ripple, etc.)
  - `AnimationWrappers.tsx` - Animation containers (FloatingAnimation, BouncingAnimation, etc.)
  - `index.ts` - Exports all kawaii components

- **`/layout`** - Page structure components

  - `Navbar.tsx` - Navigation with scroll detection and NX logo
  - `Footer.tsx` - Site footer with copyright and tech stack mentions
  - `index.ts` - Exports all layout components

- **`/sections`** - Main content sections

  - `HeroSection.tsx` - Landing section with animated elements
  - `AboutSection.tsx` - About me and skills section
  - `ContactSection.tsx` - Contact form and social links
  - `index.ts` - Exports all section components

- **`/projects`** - Project-related components

  - `ProjectCard.tsx` - Individual project card with hover effects
  - `ProjectModal.tsx` - Detailed project modal view
  - `index.ts` - Exports all project components

- **`/ui`** - Reusable UI components
  - `ArtisticBackground.tsx` - Decorative SVG background with animation
  - `ScrollMouse.tsx` - Custom minimalist mouse scroll indicator
  - `theme/ThemeToggle.tsx` - Animated sun/moon toggle for dark mode
  - `index.ts` - Exports all UI components

## 🌿 Design Philosophy

This portfolio embraces the Japanese design principles of:

- **Ma (間)** - The conscious use of negative space
- **Wabi-Sabi (侘寂)** - Finding beauty in imperfection and simplicity
- **Shibui (渋い)** - Subtle elegance that balances simplicity and complexity
- **Yohaku (余白)** - The beauty of emptiness and margin
- **Kanso (簡素)** - Simplicity and elimination of clutter

## 🌓 Dark Mode Implementation

The dark mode follows these design principles:

- **Complementary Rather Than Inverse** - The dark theme isn't simply an inversion but a thoughtfully designed complementary aesthetic
- **Reduced Contrast** - Slightly reduced contrast in dark mode to be gentler on the eyes
- **Warmer Dark Tones** - Using warmer dark grays rather than pure blacks for a more sophisticated feel
- **Consistent Brand Identity** - Maintaining the same minimalist Japanese aesthetic across both themes
- **Seamless Transitions** - Smooth transitions between modes with carefully eased animations
- **System Preference Detection** - Automatically detects and applies user's system preference
- **Persistent Choice** - Remembers user's manual preference across sessions

## 🚀 Features

- Clean, minimalist interface with refined typography
- Elegant color palette inspired by traditional Japanese aesthetics
- Light and dark mode with thoughtful, complementary designs for both themes
- User preference detection with system theme and manual toggle
- Subtle, purposeful animations with Framer Motion
- Thoughtfully designed project cards and modal presentations
- Asymmetrical grid layouts with intentional negative space
- Custom artistic background with SVG lines
- Responsive design that maintains elegance across all devices
- Focus on content with beautiful typography and whitespace
- Kawaii decorative elements (SVG shapes) for visual interest
- Custom NX logo with minimalist aesthetic
- Accessible design with proper contrast and ARIA attributes

## 💻 Tech Stack

### Core Technologies

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript 5.3](https://www.typescriptlang.org/)
- **UI Library**: [React 18.2](https://react.dev/)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/) with custom minimalist design system
- **Animation**: [Framer Motion 11](https://www.framer.com/motion/) for subtle, elegant animations

### Design System

- **Theming**: Dark/light mode with Tailwind's class strategy and React Context API
- **Typography**:

  - Primary Serif: [Playfair Display](https://fonts.google.com/specimen/Playfair+Display)
  - Secondary Serif: [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond)
  - Sans-serif: [Noto Sans](https://fonts.google.com/specimen/Noto+Sans)
  - Monospace: [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono)

- **Color Palette**:
  - **Light Mode**:
    - Background: Off-white (#F7F7F7)
    - Secondary: Light gray (#EFEFEF)
    - Text: Soft dark gray (#1C1C1C)
    - Accent: Terracotta/warm wood (#A67F5D)
    - Paper: Warm cream (#F9F6F0)
    - Subtle: Light gray (#D4D4D4)
  - **Dark Mode**:
    - Background: Deep charcoal (#1C1C1C)
    - Secondary: Lighter charcoal (#2A2A2A)
    - Text: Off-white (#F7F7F7)
    - Accent: Lighter terracotta (#C89C78)
    - Paper: Dark gray (#242424)
    - Subtle: Medium gray (#3A3A3A)

### Additional Libraries & Tools

- **Icons**: [React Icons 5](https://react-icons.github.io/react-icons/) (FiFacebook, FiWhatsapp, FiLinkedin, FiGithub, FiMail, FiEye)
- **State Management**: React Context API for theme persistence and switching
- **SVG Graphics**: Custom kawaii shapes and artistic backgrounds
- **Development Tools**:
  - ESLint 8.56 for code quality
  - PostCSS 8.4 and Autoprefixer 10.4 for CSS processing
  - TypeScript 5.3 for type checking

### Accessibility & Performance

- **Accessibility**:

  - Color contrast compliance in both themes
  - Appropriate ARIA labels
  - Semantic HTML structure
  - Keyboard navigation support
  - Focus state styling

- **Performance Optimizations**:
  - Next.js image optimization
  - Component lazy-loading where appropriate
  - CSS animations for better performance
  - Minimized layout shifts
  - Responsive image handling

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or newer)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/portfolio-v2.git
   cd portfolio-v2
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## ✏️ Customization

To customize the portfolio with your own information:

1. Edit the project data in `data/projects.ts`
2. Update personal information in the components
3. Replace placeholder images with your own in the `public/images/` directory
4. Adjust colors and styling in `tailwind.config.ts`
5. Customize kawaii elements in `components/kawaii/KawaiiShapes.tsx`
6. Modify the theme toggle in `components/ui/theme/ThemeToggle.tsx`
7. Update background patterns in both `tailwind.config.ts` and `globals.css`

## 🎨 Design Customization

### Tailwind Configuration

The `tailwind.config.ts` file contains extensive customization options:

- **Colors**: Modify the color palette in the `colors` section
- **Fonts**: Change typography in the `fontFamily` section
- **Animations**: Add or modify animations in the `animation` and `keyframes` sections
- **Background Patterns**: Update SVG patterns in the `backgroundImage` section

### Dark Mode

The dark mode implementation uses Tailwind's `class` strategy and is managed through:

- `context/ThemeContext.tsx` - Handles theme state and persistence
- `components/ui/theme/ThemeToggle.tsx` - Provides the user interface for switching
- `dark:` prefixed utility classes in components - Apply dark mode specific styling

## 📝 License

[MIT License](LICENSE)

---

Created with ❤️ using Next.js, TypeScript, Tailwind CSS, and Framer Motion
