# Backend Deployment Guide

## Railway Deployment (if plan allows)
The Railway CLI is already set up. If you upgrade your plan, you can deploy with:
```bash
railway up
```

## Alternative: Render Deployment

### 1. Create account at render.com
1. Go to https://render.com
2. Sign up with GitHub
3. Connect your SIGIL-OLX repository

### 2. Create Web Service
1. Click "New +" > "Web Service"
2. Connect your GitHub repository: SIGIL-OLX
3. Configure settings:
   - Name: sigil-olx-backend
   - Region: Any region close to you
   - Branch: main
   - Root Directory: (leave empty - uses root)
   - Runtime: Node
   - Build Command: npm install
   - Start Command: node server.js

### 3. Environment Variables
Add these in Render dashboard:
```
NODE_ENV=production
MONGODB_URI=mongodb+srv://your-mongodb-atlas-connection-string
JWT_SECRET=your-super-secret-jwt-key-here
PORT=10000
```

### 4. MongoDB Atlas Setup
1. Go to https://cloud.mongodb.com
2. Create free cluster
3. Create database user
4. Whitelist IP: 0.0.0.0/0 (for Render)
5. Get connection string

## Alternative: Vercel Backend
You can also deploy the backend to Vercel:

1. Create `api/` folder in root
2. Move server logic to serverless functions
3. Deploy with `vercel --prod`

## Alternative: Heroku
1. Install Heroku CLI
2. `heroku create sigil-olx-backend`
3. `git push heroku main`

Your backend will be available at the provided URL after deployment.
