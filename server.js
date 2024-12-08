const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Importeer routes
const authRoutes = require('./routes/auth');
const orderRoutes = require('./routes/orders');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Verbinden met MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB verbonden'))
  .catch((err) => console.error('MongoDB verbindingsfout:', err));

// Routes
app.use('/api/v1/auth', authRoutes); // Login routes
app.use('/api/v1/orders', orderRoutes); // Order routes

// Server starten
app.listen(PORT, () => {
  console.log(`Server draait op http://localhost:${PORT}`);
});


