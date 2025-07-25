# replit.md

## Overview

This is a modern full-stack portfolio application built with React and Express, featuring a developer portfolio with projects showcase, blog functionality, and admin capabilities. The application uses a clean, professional design with shadcn/ui components and follows modern web development best practices.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and dark/light theme support
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with organized route handlers
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Validation**: Zod schemas for runtime type validation
- **Storage**: Abstracted storage interface with in-memory implementation for development

### Development Architecture
- **Monorepo Structure**: Shared schema and types between client and server
- **Development Server**: Vite dev server with HMR and Express API proxy
- **Type Safety**: End-to-end TypeScript with shared type definitions

## Key Components

### Core Pages
- **Home**: Hero section, about, projects showcase, blog preview, tech stack, and contact form
- **Blog**: Blog listing with published articles and search/filter capabilities
- **Blog Post**: Individual article view with rich content display
- **Admin**: Content management interface for projects and blog posts

### Data Models
- **Projects**: Portfolio projects with title, description, technologies, images, and links
- **Blog Posts**: Articles with content, tags, publication status, and SEO metadata
- **Contacts**: Contact form submissions with user details and messages

### UI Components
- **Layout**: Navigation with smooth scrolling, responsive design, and theme toggle
- **Project Cards**: Interactive project displays with technology badges and action buttons
- **Blog Cards**: Article previews with read time, tags, and publication dates
- **Forms**: Contact forms and admin content creation with validation
- **Modals**: Project detail views and confirmation dialogs

## Data Flow

### Client-Side Data Management
1. TanStack Query handles all server state with automatic caching and synchronization
2. Forms use React Hook Form for local state and validation
3. Theme state managed through Context API with localStorage persistence
4. Navigation state handled by Wouter with smooth scrolling utilities

### API Communication
1. RESTful endpoints for CRUD operations on projects, blog posts, and contacts
2. Type-safe API requests using shared TypeScript interfaces
3. Error handling with proper HTTP status codes and user feedback
4. Request/response logging for development debugging

### Database Operations
1. Drizzle ORM provides type-safe database queries with PostgreSQL
2. Schema definitions shared between client and server via `shared/schema.ts`
3. Development mode uses in-memory storage for quick iteration
4. Production ready for PostgreSQL with Neon Database integration

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, TanStack Query for state management
- **Build Tools**: Vite with React plugin, TypeScript compiler, PostCSS with Tailwind
- **Routing**: Wouter for lightweight client-side routing
- **Database**: Drizzle ORM with PostgreSQL driver (@neondatabase/serverless)

### UI and Styling
- **Component Library**: Comprehensive shadcn/ui components built on Radix UI
- **Styling**: Tailwind CSS with custom design system and dark mode support
- **Icons**: Lucide React for consistent iconography
- **Form Handling**: React Hook Form with Zod resolver for validation

### Development Tools
- **Type Safety**: TypeScript with strict configuration
- **Validation**: Zod for runtime type checking and schema validation
- **Development**: Replit-specific plugins for enhanced development experience
- **Session Management**: Express session with PostgreSQL store

## Deployment Strategy

### Production Build Process
1. **Frontend**: Vite builds optimized static assets to `dist/public`
2. **Backend**: esbuild bundles server code to `dist/index.js` with external dependencies
3. **Database**: Drizzle migrations ensure schema consistency across environments
4. **Assets**: Static files served from Express with proper caching headers

### Environment Configuration
- **Development**: Local development with in-memory storage and hot reloading
- **Production**: PostgreSQL database with connection pooling and error handling
- **Environment Variables**: Database URL and session secrets configured per environment

### Hosting Considerations
- **Static Assets**: Frontend built for CDN deployment with proper cache headers
- **API Server**: Express server configured for containerized deployment
- **Database**: PostgreSQL compatible with major cloud providers (Neon, Supabase, AWS RDS)
- **Session Storage**: Configured for PostgreSQL in production with fallback options