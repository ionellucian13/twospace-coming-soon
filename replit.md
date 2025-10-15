# Two Space - Dual Marketing & Coffee Hub

## Overview

Two Space is a comprehensive Next.js application that represents a dual-concept business combining professional marketing services with a coffee shop space. The platform serves as both a marketing agency portfolio/service website and a coffee shop experience, targeting entrepreneurs, creatives, and business professionals who need marketing expertise in an inspiring physical environment.

The application showcases marketing services (branding, product launches, research, growth marketing), displays case studies with measurable results, offers service packages, and promotes the coffee space with menu, events, and booking capabilities. It's designed to convert visitors into both marketing clients and coffee shop customers.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: Next.js 15+ with App Router and TypeScript for modern React development with server-side rendering and optimal performance
- **Styling**: TailwindCSS 4+ with custom design tokens and CSS variables for consistent branding across "Two Space" color palette (cream, ink, stone, espresso, accent green)
- **UI Components**: shadcn/ui with Radix UI primitives providing accessible, customizable components following design system patterns
- **Animations**: Framer Motion for micro-interactions, page transitions, and scroll-triggered animations with reduced-motion support
- **Typography**: Inter for body text, Plus Jakarta Sans for headings, loaded via next/font with display: swap for performance

### Content Management
- **Data Structure**: TypeScript interfaces defining services, packages, case studies, menu items, events, and testimonials
- **Content Storage**: Local JSON/TypeScript data files in /lib/data.ts for immediate deployment without external CMS dependencies
- **Static Generation**: Pre-built pages with generateStaticParams for case study detail pages ensuring fast load times

### Page Structure & Routing
- **Multi-page Architecture**: Separate routes for marketing services (/marketing), packages (/packages), case studies (/cases), cafe (/cafe), and contact (/contact)
- **Dynamic Routes**: Case study detail pages at /cases/[slug] with static generation
- **SEO Optimization**: next-seo integration with OpenGraph, Twitter Cards, and structured data markup

### Performance Optimization
- **Image Optimization**: next/image with AVIF/WebP formats and remote pattern configuration for external images
- **Analytics**: Vercel Analytics integration for user behavior tracking
- **Loading States**: Custom loading components and Suspense boundaries
- **Code Splitting**: Automatic route-based code splitting with Next.js App Router

### Design System
- **Brand Colors**: CSS custom properties mapping to TailwindCSS theme (cream #F5EFE7, ink #0F172A, stone #D9D3CC, espresso #2B1E16, accent #3ECF8E)
- **Design Tokens**: Consistent border radius (20px), shadows, and spacing using CSS variables
- **Component Variants**: class-variance-authority for systematic component styling variations
- **Accessibility**: Focus states, keyboard navigation, semantic HTML, and screen reader support

### Animation Strategy
- **Micro-interactions**: 160-240ms duration for UI feedback (buttons, hovers, form states)
- **Page Transitions**: 300-600ms for section entrances and page navigation using custom easing curves
- **Scroll Animations**: Intersection Observer-based animations via Framer Motion's whileInView
- **Reduced Motion**: Respects prefers-reduced-motion media query for accessibility

## External Dependencies

### Core Framework Dependencies
- **Next.js 15+**: React framework with App Router, server components, and optimization features
- **React 19**: Latest React with improved concurrent features and server components support
- **TypeScript 5+**: Type safety and developer experience enhancement

### UI and Styling
- **TailwindCSS 4+**: Utility-first CSS framework with PostCSS integration
- **Radix UI**: Accessible component primitives (@radix-ui/react-dialog, react-tabs, react-slot)
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Component variant styling system
- **clsx & tailwind-merge**: Conditional styling utilities

### Animation and Interaction
- **Framer Motion 12+**: Production-ready animation library for React with layout animations and gestures
- **tailwindcss-animate**: CSS animation utilities extending TailwindCSS

### Performance and Analytics
- **@vercel/analytics**: User analytics and performance monitoring
- **next-seo**: SEO optimization with structured data and social media tags
- **Vercel Platform**: Hosting, edge functions, and global CDN for optimal performance

### Development Tools
- **PostCSS**: CSS processing with Autoprefixer for browser compatibility
- **@tailwindcss/postcss**: TailwindCSS PostCSS plugin for processing

Note: The application is designed to be database-ready, with structured TypeScript interfaces that can easily integrate with databases like PostgreSQL via Drizzle ORM when data persistence becomes necessary for bookings, contact forms, or dynamic content management.

## Recent Changes

### October 15, 2025 - Coming Soon Page Created & Activated

**Coming Soon Homepage Implementation:**
- ✅ Created premium Coming Soon page with Phosphor Icons (duotone) integration
- ✅ Installed @phosphor-icons/react package for modern icon system
- ✅ Implemented animated gradient text with "Something Extraordinary Is Brewing" heading
- ✅ Added email signup form with Framer Motion micro-interactions
- ✅ Created 3 feature cards: Marketing Premium, Coffee Experience, Un Singur Loc
- ✅ Deployed as main homepage (original homepage backed up to app/page.main.backup.tsx)
- ✅ Ready for domain connection - visitors will see Coming Soon page

**Technical Implementation:**
- Custom gradient animation (@keyframes) added to globals.css
- Responsive design with backdrop-blur glass effects
- Background decorative elements with animated blur orbs
- Email form with submit state management and visual feedback
- Full Romanian language content for target audience

**Status: Coming Soon page is LIVE as homepage, ready for domain deployment.**

### September 19, 2025 - Stilizare Completă Finalizată

**TailwindCSS v4 Integration Complete:**
- ✅ Rezolvat configurația TailwindCSS v4 cu sintaxa `@import "tailwindcss"`
- ✅ Configurat `@theme` pentru culorile Two Space brand (#F5EFE7, #3ECF8E, #0F172A)
- ✅ Adăugat compatibilitate shadcn/ui cu `--color-primary`, `--color-primary-foreground`
- ✅ Implementat utilități personalizate: `.shadow-soft`, `.rounded-2xl`

**Styling & Design System:**
- ✅ Toate culorile Two Space brand aplicate corect (`bg-cream`, `text-accent`, `bg-espresso`)
- ✅ Typography responsive cu Inter + Plus Jakarta Sans funcțională
- ✅ Button components shadcn/ui complet stilizate cu hover effects
- ✅ Responsive design verificat pe toate device-urile (lg:grid-cols-2, mobile navigation)

**Animații & Interactions:**
- ✅ Framer Motion funcțional cu motion.nav, motion.div components
- ✅ Initial/animate states pentru fade-in effects (opacity: 0 → 1)
- ✅ Hover animations (whileHover scale effects) implementate
- ✅ Mobile navigation toggle cu AnimatePresence funcțional

**Performance & Build:**
- ✅ Server compilează rapid cu 1543-1594 modules per pagină
- ✅ CSS generat corect cu toate clasele Tailwind necesare
- ✅ Fast Refresh funcțional fără erori în browser console
- ✅ Toate 6 paginile (Home, Marketing, Cafe, Cases, Packages, Contact) stilizate complet

**Status: Website-ul Two Space are acum stilizarea completă și funcțională, gata pentru prezentare și utilizare.**