const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth'); // Adjust the path as necessary

const app = express();

// Middleware and other configurations
app.use(express.json());

// Use the routes
app.use('/api/v1', authRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});