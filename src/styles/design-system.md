# Alicante Transfers Design System

## Color Palette

### Primary Colors
- **Primary Red**: `#DC2626` (red-600) - Main brand color, CTA buttons
- **Primary Yellow**: `#F59E0B` (amber-500) - Accent color, highlights
- **Dark Red**: `#991B1B` (red-800) - Hover states, dark themes

### Secondary Colors  
- **Light Yellow**: `#FEF3C7` (amber-100) - Backgrounds, cards
- **Orange**: `#EA580C` (orange-600) - Secondary accents
- **Warm Gray**: `#78716C` (stone-500) - Text secondary

### Neutral Colors
- **White**: `#FFFFFF` - Backgrounds
- **Light Gray**: `#F5F5F4` (stone-100) - Section backgrounds
- **Gray**: `#E7E5E4` (stone-200) - Borders, dividers
- **Dark Gray**: `#44403C` (stone-700) - Text primary
- **Black**: `#1C1917` (stone-900) - Headers, emphasis

## Typography

### Font Family
- **Primary**: Inter (sans-serif)
- **Secondary**: System fonts fallback

### Font Sizes & Weights
- **Hero Title**: 3xl-4xl, font-bold (700)
- **Section Headers**: 2xl-3xl, font-semibold (600)  
- **Card Titles**: xl, font-medium (500)
- **Body Text**: base, font-normal (400)
- **Small Text**: sm, font-normal (400)
- **Labels**: sm, font-medium (500)

## Layout & Spacing

### Container Sizes
- **Max Width**: 1200px
- **Padding**: px-4 (mobile), px-6 (tablet), px-8 (desktop)

### Spacing Scale (Tailwind)
- **xs**: 0.5rem (2)
- **sm**: 0.75rem (3)  
- **base**: 1rem (4)
- **lg**: 1.5rem (6)
- **xl**: 2rem (8)
- **2xl**: 3rem (12)
- **3xl**: 4rem (16)

### Border Radius
- **Small**: 0.375rem (rounded-md)
- **Medium**: 0.5rem (rounded-lg)  
- **Large**: 0.75rem (rounded-xl)
- **Full**: 9999px (rounded-full)

## Components Style Guide

### Buttons
- **Primary**: bg-red-600, hover:bg-red-700, text-white, py-3 px-6, rounded-lg
- **Secondary**: bg-amber-500, hover:bg-amber-600, text-white, py-3 px-6, rounded-lg
- **Outline**: border-2 border-red-600, text-red-600, hover:bg-red-600, hover:text-white

### Cards
- **Background**: bg-white
- **Border**: border border-stone-200
- **Shadow**: shadow-lg
- **Padding**: p-6
- **Radius**: rounded-xl

### Form Elements
- **Input**: border-stone-300, focus:border-red-500, focus:ring-red-200, rounded-md
- **Label**: text-stone-700, font-medium

## Animation Principles

### Timing
- **Fast**: 150ms - micro interactions
- **Normal**: 300ms - standard transitions  
- **Slow**: 500ms - complex animations

### Easing
- **Ease Out**: cubic-bezier(0, 0, 0.2, 1)
- **Ease In Out**: cubic-bezier(0.4, 0, 0.2, 1)

## Accessibility

### Contrast Ratios
- Text on white: minimum 4.5:1
- Interactive elements: minimum 3:1
- Focus indicators: visible 2px outline

### Interactive States
- **Hover**: Subtle color darkening (-100 shade)
- **Focus**: Ring outline, 2px, brand color
- **Active**: Slight scale transform (scale-95)
- **Disabled**: opacity-50, cursor-not-allowed

## Brand Personality
- Professional yet warm
- Reliable and trustworthy  
- Modern and efficient
- Spanish/Mediterranean warmth through colors
- Clear and direct communication