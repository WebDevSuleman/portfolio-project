# Portfolio Source Code

This is the complete source code for your Full-Stack MERN Developer Portfolio website.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- (Optional) PostgreSQL database for production

### Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   
   The application will run on `http://localhost:5000`
   - Frontend: Vite dev server with hot reload
   - Backend: Express API server
   - Database: In-memory storage (development)

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Start Production Server**
   ```bash
   npm start
   ```

## 📁 Project Structure

```
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── layout/     # Navigation, Footer
│   │   │   ├── sections/   # Home page sections
│   │   │   └── ui/         # shadcn/ui components
│   │   ├── pages/          # Route components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utilities & config
│   │   └── index.css       # Global styles
│   └── index.html          # HTML template
├── server/                 # Express Backend
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API routes
│   ├── storage.ts          # Database interface
│   └── vite.ts             # Vite integration
├── shared/                 # Shared types & schemas
│   └── schema.ts           # Database & validation schemas
└── Configuration files
```

## 🛠 Technology Stack

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool with HMR
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Modern component library
- **Wouter** - Lightweight routing
- **TanStack Query** - Server state management
- **React Hook Form** - Form handling
- **Zod** - Runtime validation

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **TypeScript** - Type safety
- **Drizzle ORM** - Type-safe database queries
- **PostgreSQL** - Production database
- **Zod** - API validation

## 🎨 Features

### Core Pages
- **Home** - Hero, About, Projects, Blog preview, Tech stack, Contact
- **Blog** - Article listing with search/filter
- **Blog Posts** - Individual article pages
- **Admin** - Content management dashboard

### Functionality
- **Dark/Light Theme** - Toggle with persistence
- **Responsive Design** - Mobile-first approach
- **Project Showcase** - Interactive cards with modals
- **Contact Form** - Working backend integration
- **Blog CMS** - Full content management
- **SEO Optimized** - Proper meta tags

## ⚙️ Configuration

### Environment Variables
Create `.env` file for production:
```
DATABASE_URL=your_postgresql_connection_string
SESSION_SECRET=your_secure_session_secret
NODE_ENV=production
PORT=5000
```

### Database Setup
1. **Development**: Uses in-memory storage (no setup needed)
2. **Production**: Configure PostgreSQL connection in `.env`

### Customization

#### Content
- Edit sample data in `server/storage.ts`
- Add your projects, blog posts, and personal info
- Update contact form to send to your email

#### Styling
- Modify `client/src/index.css` for theme colors
- Edit Tailwind config in `tailwind.config.ts`
- Customize components in `client/src/components/`

#### Branding
- Update hero section in `client/src/components/sections/hero.tsx`
- Modify about section in `client/src/components/sections/about.tsx`
- Add your social links in navigation

## 🚀 Deployment Options

### 1. Static Frontend Only
Deploy `dist/public/` to:
- Netlify
- Vercel  
- GitHub Pages
- AWS S3

### 2. Full-Stack Hosting
Deploy complete app to:
- Railway
- Render
- DigitalOcean App Platform
- Heroku

### 3. VPS/Server
1. Upload source code to server
2. Install Node.js and PostgreSQL
3. Set environment variables
4. Run `npm install && npm run build && npm start`
5. Configure reverse proxy (Nginx/Apache)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run db:generate` - Generate database migrations
- `npm run db:migrate` - Run database migrations

## 🔧 Development Tips

### Adding New Pages
1. Create component in `client/src/pages/`
2. Add route in `client/src/App.tsx`
3. Update navigation if needed

### API Endpoints
- `GET /api/projects` - All projects
- `GET /api/projects/featured` - Featured projects
- `GET /api/blog` - All blog posts
- `GET /api/blog/:slug` - Single blog post
- `POST /api/contacts` - Submit contact form
- Admin routes for CRUD operations

### Database Schema
See `shared/schema.ts` for complete data models:
- Projects (title, description, technologies, links)
- Blog Posts (content, tags, publication status)
- Contacts (form submissions)

## 📞 Support

This is your complete source code! You can:
- Customize any part of the design or functionality
- Add new features and pages
- Deploy to any hosting provider
- Modify the database schema
- Integrate with external APIs

The code is well-documented and follows modern best practices for easy maintenance and extension.