// test-mongodb.js - Test your MongoDB connection
const mongoose = require('mongoose');

// Replace with your actual MongoDB URI
const MONGODB_URI = 'mongodb+srv://sigiladmin:yourpassword@cluster0.xxxxx.mongodb.net/sigilolx?retryWrites=true&w=majority';

async function testConnection() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('✅ Connected to MongoDB Atlas successfully!');
        console.log('Database:', mongoose.connection.name);
        await mongoose.connection.close();
        console.log('✅ Connection closed');
    } catch (error) {
        console.error('❌ MongoDB connection error:', error.message);
    }
}

testConnection();
