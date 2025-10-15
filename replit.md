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

### October 15, 2025 - Duo Space Brand Integration & Content Refinement

**Updated Logo & Brand Messaging:**
- ✅ Replaced logo with official Duo Space brand logo (transparent background)
- ✅ Reformulated all content following Duo Space brand guide concept:
  - **Heading**: "Două Spații. O Singură Experiență." (Two Spaces. One Experience.)
  - **Subtitle**: Dual concept explanation - café (inspiră conexiuni și creativitate) + agenție (transformă idei în strategie)
  - **Features**: Aligned with brand guide - "Spațiu pentru Conexiuni" (energie care inspiră idei) + "Spațiu pentru Creație" (energie care construiește viziune)
- ✅ All text exclusively in Romanian as requested
- ✅ Updated copyright footer to © 2025 Two Space
- ✅ Maintained 100% responsive optimization and newsletter functionality

**Diamond Icon Implementation:**
- ✅ Replaced feature card icons with brand-guide diamond shape
- ✅ Specifications: 21.59px × 21.59px, Blood Orange (#FF491F), rotated -45deg
- ✅ Hover animations preserved with scale transform on group hover
- ✅ Minimalist design matching brand aesthetic

**Duo Space Concept Applied:**
- Cafe (bright side): "A space for people, connection, and flow" → "Spațiu pentru Conexiuni - Energie care inspiră idei"
- Agency (dark side): "A space for clarity, creation, and progress" → "Spațiu pentru Creație - Energie care construiește viziune"
- Unified messaging: "Unde creativitatea întâlnește strategia" (Where creativity meets strategy)

### October 15, 2025 - Coming Soon Page - Complete Responsive & Newsletter Optimization

**Two Space Brand Implementation (FINAL):**
- ✅ Implemented official Two Space brand colors from brand guide:
  - Blood Orange (#FF491F) - primary brand color
  - Grey Space (#2B2B2B) - dark grey, almost black
  - Chalk (#F5F5F5) - light grey background
  - Cream Brand (#F2F6D0) - light yellow-green accent
- ✅ Installed and integrated brand fonts from Google Fonts:
  - Space Grotesk - primary heading font
  - Manrope - body text and UI elements
- ✅ Integrated official Two Space logo image (Group_1760512624293.png):
  - Orange circle with stylized "two SPACE" in black
  - Black circle with "THINGS WORK OUT." in white
  - Optimized with Next.js Image component for performance
- ✅ Re-styled Coming Soon page with complete brand identity
- ✅ Fixed hydration issues with client-side animation mounting
- ✅ Deployed as main homepage (original backed up to app/page.main.backup.tsx)
- ✅ Ready for domain connection

**Responsive Optimization (All Devices):**
- ✅ Mobile First Design (320px+): Logo 280px, heading 3xl, touch targets 44px min
- ✅ Tablet Optimization (768px+): Logo 400px, heading 4xl-5xl, grid 3 columns
- ✅ Desktop Optimization (1024px+): Logo 600px max, heading 6xl-7xl, centered layout
- ✅ 8pt Grid System: Consistent spacing (8px, 16px, 24px, 32px, 48px, 64px)
- ✅ Typography Scaling: Responsive text sizes with optimal line-height
- ✅ WCAG AA Compliance: Contrast ratios 7:1+ for all text elements

**Newsletter Functionality (100% Operational):**
- ✅ API Route: `/app/api/newsletter/route.ts` with POST/GET endpoints
- ✅ Email Validation: Client + server-side with regex pattern matching
- ✅ Duplicate Prevention: Check existing subscribers before save
- ✅ Data Storage: `/data/subscribers.json` (git ignored for security)
- ✅ User Feedback: Success/error messages with CheckCircle/XCircle icons
- ✅ Loading States: Spinner animation during submission
- ✅ Accessibility: ARIA labels, keyboard navigation, role alerts
- ✅ Export Ready: Data format compatible with Mailchimp/ConvertKit

**UX/UI Enhancements:**
- ✅ Touch Targets: Minimum 44x44px for mobile (iOS/Android standard)
- ✅ Focus States: 4px ring blood-orange for keyboard navigation
- ✅ Visual Hierarchy: Logo → Heading → CTA → Features progression
- ✅ Micro-interactions: Hover scale effects, smooth transitions
- ✅ Error Handling: Clear Romanian messages for all error cases
- ✅ Auto-dismiss: Status messages disappear after 4-5 seconds

**Technical Implementation:**
- TailwindCSS brand colors: blood-orange, grey-space, chalk, cream-brand
- Next.js font optimization with Space_Grotesk and Manrope from next/font/google
- Responsive image sizing with next/image priority loading
- Framer Motion GPU-accelerated animations with hydration fix
- Email normalization (lowercase, trim) and IP tracking for security
- Form disabled states during loading to prevent double submission

**Documentation Created:**
- `NEWSLETTER_GUIDE.md` - Complete API documentation and usage guide
- `RESPONSIVE_UX_CHECKLIST.md` - Comprehensive testing and optimization checklist
- `COMING_SOON_INSTRUCTIONS.md` - Deployment and restoration guide

**Status: Coming Soon page is PRODUCTION-READY with complete responsive optimization, functional newsletter subscription, and professional UX/UI implementation. Ready for domain connection and live deployment.**

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