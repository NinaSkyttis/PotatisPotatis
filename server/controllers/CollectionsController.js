/* eslint-disable max-len */
const {Pool} = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const collectionsController = {};

collectionsController.addCollection = async (req, res, next) => {
  try {
    const {title} = req.body;
    const result = await pool.query('INSERT INTO public.collections (title) VALUES ($1) RETURNING *', [title]);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({error: 'Internal Server Error'});
  }
};

module.exports = collectionsController;
