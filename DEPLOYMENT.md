# SIGIL OLX Frontend Deployment Guide

## Prerequisites
1. Make sure you have a Vercel account connected to GitHub
2. Build the project successfully (already done)

## Deploy to Vercel

### Option 1: Manual Deployment
1. Go to https://vercel.com/dashboard
2. Click "Add New..." > "Project"
3. Import your GitHub repository: SIGIL-OLX
4. Configure the project:
   - Framework Preset: Create React App
   - Root Directory: ./client
   - Build Command: npm run build
   - Output Directory: build
   - Install Command: npm install

### Option 2: CLI Deployment
Run these commands in PowerShell:

```powershell
# Navigate to client directory
cd "C:\Users\rajad\Desktop\Projects\SIGIL OLX\client"

# Deploy to Vercel
vercel --prod

# When prompted:
# - Project name: sigil-olx (lowercase, no special characters)
# - Root directory: ./
# - Build settings: Accept defaults
```

### Option 3: GitHub Integration (Recommended)
1. Push your code to GitHub (already done)
2. Go to https://vercel.com/dashboard
3. Import from GitHub: select SIGIL-OLX repository
4. Set Root Directory to: client
5. Vercel will auto-detect React settings

## Environment Variables
After deployment, add these environment variables in Vercel dashboard:
- REACT_APP_API_URL: Your Railway backend URL

## Post-Deployment
1. Update the backend CORS settings to include your Vercel domain
2. Test all functionality on the deployed site
