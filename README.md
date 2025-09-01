# Minimalist Japanese-Inspired Portfolio

An elegant, minimalist portfolio website with Japanese design influences, built using Next.js 14, React, TypeScript, Tailwind CSS, and Framer Motion.

## 📁 Updated Project Structure

The project has been reorganized for better readability and maintainability:

### `/components` Directory

- **`/kawaii`** - Decorative elements and animations

  - `KawaiiShapes.tsx` - SVG shapes (stars, circles, etc.)
  - `AnimationWrappers.tsx` - Animation containers (floating, bouncing, etc.)
  - `index.ts` - Exports all kawaii components

- **`/layout`** - Page structure components

  - `Navbar.tsx` - Navigation with scroll detection
  - `Footer.tsx` - Site footer
  - `index.ts` - Exports all layout components

- **`/sections`** - Main content sections

  - `HeroSection.tsx` - Landing section
  - `AboutSection.tsx` - About me and skills
  - `ContactSection.tsx` - Contact form and information
  - `index.ts` - Exports all section components

- **`/projects`** - Project-related components

  - `ProjectCard.tsx` - Individual project card
  - `ProjectModal.tsx` - Detailed project modal
  - `index.ts` - Exports all project components

- **`/ui`** - Reusable UI components
  - `ArtisticBackground.tsx` - Decorative background with SVG
  - `ScrollMouse.tsx` - Mouse scroll indicator
  - `index.ts` - Exports all UI components

## 🌿 Design Philosophy

This portfolio embraces the Japanese design principles of:

- **Ma (間)** - The conscious use of negative space
- **Wabi-Sabi (侘寂)** - Finding beauty in imperfection and simplicity
- **Shibui (渋い)** - Subtle elegance that balances simplicity and complexity

## 🚀 Features

- Clean, minimalist interface with refined typography
- Elegant color palette inspired by traditional Japanese aesthetics
- Subtle, purposeful animations with Framer Motion
- Thoughtfully designed project cards and modal presentations
- Asymmetrical grid layouts with intentional negative space
- Custom paper texture and subtle dot patterns
- Responsive design that maintains elegance across all devices
- Focus on content with beautiful typography and whitespace

## 💻 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom minimalist design system
- **Typography**: Cormorant Garamond (serif), Noto Sans (sans-serif), IBM Plex Mono (monospace)
- **Color Palette**: Off-white, warm terracotta, soft grays, and subtle earth tones
- **Animations**: Subtle Framer Motion animations with natural easing
- **Icons**: Minimal React Icons with refined styling

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

## 📁 Project Structure

- `app/` - Next.js App Router files
- `components/` - Reusable React components
- `data/` - Project data and other content
- `public/` - Static assets

## ✏️ Customization

To customize the portfolio with your own information:

1. Edit the project data in `data/projects.ts`
2. Update personal information in the components
3. Replace placeholder images with your own in the `public/images/` directory
4. Adjust colors and styling in `tailwind.config.ts`

## 📝 License

[MIT License](LICENSE)

---

Created with ❤️ using Next.js and Tailwind CSS
