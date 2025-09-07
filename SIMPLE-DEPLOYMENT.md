# Simple Backend Deployment Options

## Option 1: Render.com (Recommended - Free Tier)
1. Go to https://render.com
2. Sign up with GitHub
3. Click "New" > "Web Service"
4. Connect your GitHub repository: SIGIL-OLX
5. Configure:
   - Name: sigil-olx-backend
   - Runtime: Node
   - Build Command: npm install
   - Start Command: node server.js
   - Add environment variables:
     - NODE_ENV=production
     - MONGODB_URI=your_mongodb_connection_string
     - JWT_SECRET=your_jwt_secret

## Option 2: Railway.app (Free Trial)
- Already configured with railway.yml
- Requires plan upgrade for continued use

## Option 3: Cyclic.sh (Free)
1. Go to https://cyclic.sh
2. Connect GitHub repository
3. Auto-deploys from main branch

## Option 4: Glitch.com (Free)
1. Go to https://glitch.com
2. Import from GitHub
3. Simple deployment with web interface

## MongoDB Database
For any option, you'll need a MongoDB database:
1. Go to https://cloud.mongodb.com
2. Create free M0 cluster
3. Create database user
4. Whitelist IP: 0.0.0.0/0
5. Get connection string

## Environment Variables Needed
```
NODE_ENV=production
PORT=10000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/sigilolx
JWT_SECRET=your-super-secret-jwt-key-here
```

After deployment, update your frontend .env:
```
REACT_APP_API_URL=https://your-backend-url.render.com
```
