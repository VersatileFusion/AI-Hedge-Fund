const { mongoose, connectDB } = require('../app');

// Connect to the test database before running any tests
beforeAll(async () => {
  try {
    // Connect to the database
    await connectDB();
    console.log('Test database connected');
    
    // Clear all collections for a fresh start
    const collections = await mongoose.connection.db.collections();
    for (let collection of collections) {
      await collection.deleteMany({});
    }
    console.log('Test database cleared');
  } catch (error) {
    console.error('Error setting up test database:', error);
    throw error;
  }
});

// Close database connection after all tests
afterAll(async () => {
  try {
    await mongoose.connection.close();
    console.log('Test database connection closed');
  } catch (error) {
    console.error('Error closing test database connection:', error);
  }
}); 