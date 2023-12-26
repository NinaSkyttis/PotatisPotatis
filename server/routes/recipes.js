/* eslint-disable max-len */
const express = require('express');
const router = express.Router();
const {Pool} = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM public.recipe');
    res.header('Content-Type', 'application/json'); // Set the content type header
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({error: 'Internal Server Error'});
  }
});

module.exports = router;
