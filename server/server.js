/* eslint-disable max-len */
// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config();

const {Pool} = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Access the value of NODE_ENV
const environment = process.env.NODE_ENV || 'development';

// Check if the app is in production mode
if (environment === 'production') {
  console.log('Running in production mode');
} else {
  console.log('Running in development mode');
}

const cors = require('cors');
const collectionsController = require('./controllers/CollectionsController');
app.use(cors());

// Middleware
app.use(bodyParser.json());

// Example endpoint
app.get('/api/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM public.recipe');
    console.log(result.rows, '<--- this is the result');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({error: 'Internal Server Error'});
  }
});

app.post('/api/addChapter', collectionsController.addCollection, (req, res) => {
  res.status(200).json(result.rows);
  // handle error here
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
