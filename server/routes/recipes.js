/* eslint-disable max-len */
const express = require('express');
// const app = express();
// eslint-disable-next-line new-cap
const router = express.Router();
const {Pool} = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// module.exports = app;

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM public.recipe');
    console.log(result.rows, '<--- this is the result');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({error: 'Internal Server Error'});
  }
});

module.exports = router;
