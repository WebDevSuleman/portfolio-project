# Portfolio Website

A modern, responsive full-stack portfolio website built with React, TypeScript, Express.js, and Tailwind CSS. Features a professional design with dark/light mode toggle, blog CMS, project showcase, and contact functionality.

## Features

- ✅ **Responsive Design**: Mobile-first approach with beautiful layouts
- ✅ **Dark/Light Mode**: Theme toggle with localStorage persistence
- ✅ **Project Showcase**: Featured projects with technology badges and links
- ✅ **Blog System**: Full CMS with individual post pages
- ✅ **Contact Form**: Working contact form with backend integration
- ✅ **Admin Dashboard**: Content management for projects and blog posts
- ✅ **SEO Ready**: Proper meta tags and structured content
- ✅ **Performance Optimized**: Production-ready build with optimizations

## Tech Stack

### Frontend
- React 18 with TypeScript
- Tailwind CSS for styling
- shadcn/ui component library
- TanStack Query for state management
- Wouter for routing
- React Hook Form with Zod validation

### Backend
- Node.js with Express
- TypeScript
- Drizzle ORM (ready for PostgreSQL)
- In-memory storage for development
- RESTful API design

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Extract the deployment package
2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Start production server:
```bash
npm start
```

## Deployment

### Option 1: Static Hosting (Frontend Only)
Upload the contents of `dist/public/` to any static hosting provider:
- Netlify
- Vercel  
- GitHub Pages
- AWS S3

### Option 2: Full-Stack Deployment
Deploy both frontend and backend to platforms like:
- Railway
- Render
- DigitalOcean
- AWS/GCP/Azure

#### Environment Variables
For production with PostgreSQL, set:
```
DATABASE_URL=your_postgresql_connection_string
NODE_ENV=production
```

## Project Structure

```
portfolio/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utilities and configurations
│   └── index.html
├── server/                # Backend Express application
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   └── storage.ts        # Data layer
├── shared/               # Shared types and schemas
├── dist/                 # Production build output
└── package.json
```

## API Endpoints

- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects
- `GET /api/blog` - Get published blog posts
- `GET /api/blog/:slug` - Get individual blog post
- `POST /api/contact` - Submit contact form
- `POST /api/projects` - Create new project (admin)
- `POST /api/blog` - Create new blog post (admin)

## Customization

### Personal Information
Update the following files with your details:
- `client/src/components/sections/hero.tsx` - Hero section
- `client/src/components/sections/about.tsx` - About section
- `client/src/components/layout/footer.tsx` - Footer information
- `client/src/components/layout/navigation.tsx` - Site title

### Content
- Use the admin dashboard at `/admin` to manage projects and blog posts
- Replace sample data in `server/storage.ts` with your content
- Update technology stack in `client/src/components/sections/tech-stack.tsx`

### Styling
- Colors and design tokens: `client/src/index.css`
- Component styles: Individual component files
- Theme configuration: `tailwind.config.ts`

## Database Setup (Optional)

For production use with PostgreSQL:

1. Install database drivers:
```bash
npm install pg @types/pg
```

2. Update `drizzle.config.ts` with your database URL
3. Run migrations:
```bash
npm run db:push
```

## Support

This portfolio template includes:
- Professional design patterns
- Best practices implementation
- Production-ready configuration
- Comprehensive documentation

Perfect for developers, writers, and creative professionals looking to showcase their work online.

## License

MIT License - Feel free to customize for your needs.