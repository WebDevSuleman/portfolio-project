# Development Guide

## Getting Started with Development

### First Time Setup
1. Clone or extract the source code
2. Run `npm install` to install all dependencies
3. Run `npm run dev` to start the development server
4. Open `http://localhost:5000` in your browser

### Development Workflow
- Frontend changes auto-reload with Vite HMR
- Backend changes restart the server automatically
- TypeScript compilation happens in real-time
- Tailwind CSS classes are processed instantly

## Project Architecture

### Frontend (client/)
Built with React 18 and modern tools:

**Key Directories:**
- `src/components/ui/` - shadcn/ui component library
- `src/components/sections/` - Homepage sections (hero, about, projects, etc.)
- `src/components/layout/` - Navigation and footer
- `src/pages/` - Route components (home, blog, admin)
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utilities and configuration

**Routing:** Uses Wouter for lightweight client-side routing
**State Management:** TanStack Query for server state, React hooks for local state
**Forms:** React Hook Form with Zod validation
**Styling:** Tailwind CSS with custom design tokens

### Backend (server/)
Express.js server with TypeScript:

**Files:**
- `index.ts` - Main server entry point with middleware setup
- `routes.ts` - All API endpoints and handlers
- `storage.ts` - Database interface (in-memory for dev, PostgreSQL for prod)
- `vite.ts` - Vite integration for serving frontend in development

**Database:** Drizzle ORM with PostgreSQL (in-memory storage for development)
**Validation:** Zod schemas for request/response validation
**Session Management:** Express sessions with PostgreSQL store

### Shared (shared/)
Common types and schemas:
- `schema.ts` - Drizzle database schemas and Zod validation types
- Ensures type safety between frontend and backend

## Customization Guide

### 1. Personal Information
Update your details in these files:

**Hero Section** (`client/src/components/sections/hero.tsx`):
```typescript
// Change name, title, and description
const name = "Your Name";
const title = "Your Professional Title";
const description = "Your bio description";
```

**About Section** (`client/src/components/sections/about.tsx`):
```typescript
// Update your story and background
const aboutText = "Your personal story...";
```

**Contact Info** (`client/src/components/sections/contact.tsx`):
```typescript
// Update contact details
const email = "your.email@example.com";
const phone = "Your phone number";
```

### 2. Projects Portfolio
Edit sample projects in `server/storage.ts`:

```typescript
// Add your real projects
{
  title: "Your Project Name",
  description: "Project description",
  longDescription: "Detailed description",
  technologies: ["React", "Node.js", "PostgreSQL"],
  image: "project-image.jpg",
  liveUrl: "https://your-project.com",
  githubUrl: "https://github.com/yourusername/project",
  featured: true
}
```

### 3. Blog Content
Add your articles in `server/storage.ts`:

```typescript
{
  title: "Your Article Title",
  slug: "your-article-slug",
  content: "Your article content in markdown",
  excerpt: "Brief summary",
  tags: ["JavaScript", "Web Development"],
  published: true,
  publishedAt: new Date("2024-01-01")
}
```

### 4. Styling & Branding

**Colors** (`client/src/index.css`):
```css
:root {
  --primary: your-primary-hsl;
  --secondary: your-secondary-hsl;
  --accent: your-accent-hsl;
}
```

**Fonts** (`client/src/index.css`):
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font');

body {
  font-family: 'Your Font', sans-serif;
}
```

**Logo/Brand** (`client/src/components/layout/navigation.tsx`):
```typescript
// Replace brand name
<Link href="/" className="text-xl font-bold">
  Your Brand
</Link>
```

### 5. Social Links
Update social media links in `client/src/components/layout/navigation.tsx`:

```typescript
const socialLinks = [
  { name: "GitHub", url: "https://github.com/yourusername" },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
  { name: "Twitter", url: "https://twitter.com/yourusername" }
];
```

## Adding New Features

### New Page
1. Create component in `client/src/pages/new-page.tsx`
2. Add route in `client/src/App.tsx`:
```typescript
<Route path="/new-page" component={NewPage} />
```
3. Add navigation link if needed

### New API Endpoint
1. Add to `server/routes.ts`:
```typescript
app.get('/api/new-endpoint', (req, res) => {
  // Handler logic
});
```
2. Update storage interface if database access needed
3. Add frontend query in relevant component

### New Database Table
1. Add schema to `shared/schema.ts`:
```typescript
export const newTable = pgTable('new_table', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  // ... other fields
});
```
2. Generate migration: `npm run db:generate`
3. Update storage interface
4. Add API endpoints

## Production Deployment

### Environment Variables
Create `.env` file:
```
DATABASE_URL=postgresql://user:password@host:port/database
SESSION_SECRET=your-very-secure-session-secret
NODE_ENV=production
PORT=5000
```

### Database Setup
1. Create PostgreSQL database
2. Set DATABASE_URL in environment
3. Run migrations: `npm run db:migrate`

### Build & Deploy
```bash
npm run build  # Creates optimized production build
npm start      # Starts production server
```

## Common Development Tasks

### Adding New UI Component
1. Create in `client/src/components/ui/` (if reusable)
2. Export from appropriate index file
3. Import and use in your pages/components

### Debugging API Issues
- Check browser Network tab for HTTP errors
- View server logs in terminal
- Add console.log statements in routes
- Use TypeScript compiler for type errors

### Database Development
- Development uses in-memory storage
- Changes require server restart
- Check `server/storage.ts` for current data
- Use PostgreSQL for production persistence

### Styling Development
- Use Tailwind CSS classes
- Check `tailwind.config.ts` for custom configuration
- Dark mode: add `dark:` prefix to classes
- Custom styles: edit `client/src/index.css`

## Performance Optimization

### Frontend
- React Query caches API responses automatically
- Vite bundles and optimizes code
- Images should be optimized before adding
- Use React.memo for expensive components

### Backend
- Database queries are optimized by Drizzle ORM
- Express middleware handles compression
- Static files served with proper caching headers
- Session store uses PostgreSQL in production

## Troubleshooting

### Common Issues

**Port Already in Use**
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9
```

**TypeScript Errors**
- Check import paths use correct aliases (@/ for client/src)
- Ensure shared types are imported correctly
- Run `npm run build` to see all TypeScript errors

**Styling Issues**
- Tailwind classes not working: check `tailwind.config.ts`
- Dark mode issues: ensure `dark:` variants are added
- Custom CSS not applying: check specificity and order

**Database Issues**
- Development: check `server/storage.ts` for data structure
- Production: verify DATABASE_URL and connection
- Migrations: run `npm run db:generate` after schema changes

This guide covers the essentials for developing and customizing your portfolio. The codebase follows modern best practices and is designed to be easily extensible.