const express = require('express');
 const mongoose = require('mongoose'); 
 const cors = require('cors');
  require('dotenv').config();

const connectDB = require('./config/db'); 
const healthRoutes = require('./routes/healthRoutes');

const app = express(); app.use(cors()); app.use(express.json());

//Connect to MongoDB connectDB();

//Routes app.use('/api/healthcard', healthRoutes);

//Start server const PORT = process.env.PORT || 5000; app.listen(PORT, () => console.log(Server running on port ${PORT}));

