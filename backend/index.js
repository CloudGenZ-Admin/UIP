const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Import Sequelize Instance
const sequelize = require('./config/db');

// Import Routes
const apiRoutes = require('./routes/apiRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 5000;

// Test DB connection, Sync Models, and Start Server
sequelize.authenticate()
  .then(() => {
    console.log(' MySQL Database connected successfully via Sequelize.');
    // { alter: true } ensures tables are updated if you change your models!
    return sequelize.sync({ alter: false }); 
  })
  .then(() => {
    console.log(' All database models synced successfully.');
    app.listen(PORT, () => {
      console.log(` Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(' Unable to connect to the database:', err);
  });