# Two Space - Coming Soon Page

## Overview

Two Space is a modern "Coming Soon" landing page for a dual-concept business that combines professional marketing services with a coffee shop. The page aims to capture email subscribers for its upcoming launch, featuring the tagline "Where Coffee Meets Strategy" and highlighting three brand pillars: Connection, Creation, and Balance. It is built with Next.js 15, optimized for production deployment, and represents the brand identity with a Blood Orange accent and a custom logo design. The project's ambition is to create a strong initial brand presence and gather early interest for a unique business model.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: Next.js 15+ with App Router and TypeScript.
- **Styling**: TailwindCSS 4+ with custom design tokens and CSS variables, integrated with shadcn/ui and Radix UI primitives for accessible components.
- **Animations**: Framer Motion for micro-interactions, page transitions, and scroll-triggered animations, supporting reduced-motion.
- **Typography**: Inter for body text and Plus Jakarta Sans for headings, loaded via `next/font`.
- **UI/UX**: Features a "Coming Soon" page at the root, with responsive design across all devices (mobile-first approach, 8pt grid system), WCAG AA compliance, and intuitive UX enhancements like touch targets, focus states, and visual hierarchy. Brand colors include Blood Orange, Grey Space, Chalk, and Cream.

### Content Management & Data
- **Newsletter Storage**: Subscriber data is saved locally to `/data/subscribers.json` (gitignored).
- **Email Validation**: Client-side and server-side validation with duplicate prevention.
- **API Integration**: Ready for integration with external email services like Mailchimp or ConvertKit via an `/api/newsletter` endpoint.

### Performance & Optimization
- **Image Optimization**: `next/image` with AVIF/WebP formats.
- **Analytics**: Vercel Analytics integration.
- **Loading States**: Custom loading components and Suspense boundaries.
- **Code Splitting**: Automatic route-based code splitting.
- **Static Generation**: Pre-rendered static page for optimal performance.

### System Design
- **Single Page Application**: Focused exclusively on the Coming Soon landing page.
- **Design System**: Uses CSS custom properties for brand colors, design tokens for consistent UI elements (e.g., border-radius, shadows), and `class-variance-authority` for component variants.
- **Accessibility**: Focus states, keyboard navigation, semantic HTML, and screen reader support.
- **Animation Strategy**: Micro-interactions (160-240ms), page transitions (300-600ms), and scroll animations via Intersection Observer, respecting `prefers-reduced-motion`.

## External Dependencies

### Core Framework & Language
- **Next.js 15+**: React framework.
- **React 19**: Core JavaScript library for building user interfaces.
- **TypeScript 5+**: Superset of JavaScript for type safety.

### UI and Styling
- **TailwindCSS 4+**: Utility-first CSS framework.
- **Radix UI**: Accessible component primitives (e.g., `@radix-ui/react-dialog`, `@radix-ui/react-tabs`).
- **Lucide React**: Icon library.
- **class-variance-authority**: Utility for creating component variants.
- **clsx & tailwind-merge**: Utilities for conditionally joining CSS class names.

### Animation and Interaction
- **Framer Motion 12+**: Animation library for React.
- **tailwindcss-animate**: TailwindCSS animation utilities.

### Performance and Analytics
- **@vercel/analytics**: User analytics and performance monitoring.
- **next-seo**: SEO optimization.

### Hosting & Development Tools
- **Vercel Platform**: For hosting, edge functions, and CDN.
- **PostCSS**: CSS preprocessor.
- **@tailwindcss/postcss**: PostCSS plugin for TailwindCSS.