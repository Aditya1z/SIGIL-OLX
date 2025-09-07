const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Connect to MongoDB
const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    return;
  }
  
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/campus-marketplace', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

// Middleware
app.use(cors({
  origin: '*',
  credentials: true
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Simple test routes
app.get('/api', (req, res) => {
  res.json({ 
    message: 'SIGIL OLX API is running!', 
    timestamp: new Date().toISOString(),
    status: 'healthy'
  });
});

app.get('/api/health', (req, res) => {
  res.json({ 
    message: 'Health check passed!', 
    timestamp: new Date().toISOString(),
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  });
});

// Test database connection
app.get('/api/test-db', async (req, res) => {
  try {
    await connectDB();
    res.json({ 
      message: 'Database connection successful!',
      status: 'connected',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Database connection failed', 
      error: error.message 
    });
  }
});

// Basic auth endpoints
app.post('/api/auth/register', async (req, res) => {
  try {
    await connectDB();
    res.json({ 
      message: 'Registration endpoint working',
      received: Object.keys(req.body)
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    await connectDB();
    res.json({ 
      message: 'Login endpoint working',
      received: Object.keys(req.body)
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Basic products endpoints
app.get('/api/products', async (req, res) => {
  try {
    await connectDB();
    res.json({ 
      message: 'Products endpoint working',
      products: []
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Handle all other routes
app.use('*', (req, res) => {
  res.status(404).json({ 
    message: 'Endpoint not found',
    path: req.originalUrl,
    method: req.method
  });
});

module.exports = app;
