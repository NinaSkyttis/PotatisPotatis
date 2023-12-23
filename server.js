// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

const {Pool} = require('pg');

const pool = new Pool({
  connectionString: 'postgres://swfyqpyr:zkH5T2acBEwEW2BatfDQxZNfl2VQDBUT@drona.db.elephantsql.com/swfyqpyr',
});


// Middleware
app.use(bodyParser.json());

// Example endpoint
app.get('/api/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM your_table');
    res.json(result.rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({error: 'Internal Server Error'});
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
