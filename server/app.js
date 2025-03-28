const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const specs = require('./config/swagger');

// Load environment variables
dotenv.config();

// Import routes
const portfolioRoutes = require('./routes/portfolio');
const tradesRoutes = require('./routes/trades');
const analysisRoutes = require('./routes/analysis');

// MongoDB URI configuration
const getMongoURI = () => {
  if (process.env.NODE_ENV === 'test') {
    return process.env.MONGODB_TEST_URI || 'mongodb://127.0.0.1:27017/ai_hedge_fund_test';
  }
  return process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ai-hedge-fund';
};

// Create Express application
const app = express();

// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
console.log('Swagger documentation available at /api-docs');

// Create a single MongoDB connection
let dbConnection = null;
const connectDB = async () => {
  if (dbConnection) return dbConnection;
  
  try {
    dbConnection = await mongoose.connect(getMongoURI());
    console.log('Connected to MongoDB');
    return dbConnection;
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

// Connect to MongoDB only if not in test environment
if (process.env.NODE_ENV !== 'test') {
  connectDB();
}

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Routes
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/trades', tradesRoutes);
app.use('/api/analysis', analysisRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Only start the server if this file is run directly
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`API Documentation available at http://localhost:${PORT}/api-docs`);
  });
}

module.exports = { app, mongoose, connectDB }; 