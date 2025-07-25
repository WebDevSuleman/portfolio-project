# Deployment Guide

## Quick Deployment Options

### 1. Static Hosting (Frontend Only) - Recommended for Simple Setup

**Best for:** Personal portfolios, demo sites, static content

**Steps:**
1. Upload contents of `dist/public/` folder to:
   - **Netlify**: Drag & drop the `dist/public` folder
   - **Vercel**: Connect GitHub repo or drag & drop
   - **GitHub Pages**: Push `dist/public` contents to `gh-pages` branch
   - **AWS S3**: Upload to S3 bucket with static hosting enabled

**Note:** Contact form will not work without backend. Consider using:
- Netlify Forms
- Formspree
- EmailJS
- Contact form services

### 2. Full-Stack Hosting (Complete Application)

**Best for:** Complete functionality including contact form and CMS

#### Railway (Recommended)
1. Connect GitHub repository
2. Railway will auto-detect Node.js
3. Set build command: `npm run build`
4. Set start command: `npm start`
5. Deploy automatically

#### Render
1. Connect GitHub repository
2. Select "Web Service"
3. Build command: `npm run build`
4. Start command: `npm start`
5. Deploy

#### DigitalOcean App Platform
1. Connect GitHub repository
2. Select Node.js environment
3. Build command: `npm run build`
4. Run command: `npm start`

### 3. VPS/Server Deployment

#### Prerequisites
- Ubuntu 20.04+ server
- Domain name (optional)
- SSH access

#### Setup Steps

1. **Install Node.js:**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

2. **Install PM2 (Process Manager):**
```bash
sudo npm install -g pm2
```

3. **Upload and Setup:**
```bash
# Upload your portfolio files to server
scp -r portfolio/ user@your-server:/home/user/

# SSH into server
ssh user@your-server

# Navigate to project
cd /home/user/portfolio

# Install dependencies
npm install

# Build project
npm run build

# Start with PM2
pm2 start dist/index.js --name "portfolio"
pm2 startup
pm2 save
```

4. **Setup Nginx (Optional):**
```bash
sudo apt install nginx

# Create nginx config
sudo nano /etc/nginx/sites-available/portfolio
```

Add this configuration:
```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## Database Setup (Production)

### Using Neon (PostgreSQL)
1. Create account at [neon.tech](https://neon.tech)
2. Create new database
3. Copy connection string
4. Set environment variable:
```bash
export DATABASE_URL="postgresql://user:password@host:port/database"
```

### Using Supabase
1. Create project at [supabase.com](https://supabase.com)
2. Go to Settings > Database
3. Copy connection string
4. Set environment variable

### Local PostgreSQL
```bash
# Install PostgreSQL
sudo apt install postgresql postgresql-contrib

# Create database and user
sudo -u postgres psql
CREATE DATABASE portfolio;
CREATE USER portfolio_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE portfolio TO portfolio_user;
\q

# Set environment variable
export DATABASE_URL="postgresql://portfolio_user:your_password@localhost:5432/portfolio"
```

## Environment Variables

Create `.env` file in project root:
```env
# Database (for production)
DATABASE_URL=your_postgresql_connection_string

# Environment
NODE_ENV=production

# Optional: Custom port
PORT=5000
```

## SSL Certificate (Optional)

### Using Certbot (Let's Encrypt)
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

## Monitoring and Maintenance

### PM2 Commands
```bash
# View running processes
pm2 list

# View logs
pm2 logs portfolio

# Restart application
pm2 restart portfolio

# Stop application
pm2 stop portfolio

# Monitor in real-time
pm2 monit
```

### Backup (If using database)
```bash
# Backup database
pg_dump $DATABASE_URL > backup.sql

# Restore database
psql $DATABASE_URL < backup.sql
```

## Troubleshooting

### Common Issues

1. **Port already in use:**
```bash
sudo lsof -i :5000
sudo kill -9 <PID>
```

2. **Permission denied:**
```bash
sudo chown -R $USER:$USER /path/to/portfolio
```

3. **Build fails:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

4. **Contact form not working:**
- Check if backend is running
- Verify API endpoints are accessible
- Check browser console for errors

## Performance Optimization

### Nginx Caching
Add to nginx config:
```nginx
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### PM2 Cluster Mode
```bash
pm2 start dist/index.js --name "portfolio" -i max
```

This guide covers most deployment scenarios. Choose the option that best fits your needs and technical expertise.