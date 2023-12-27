/* eslint-disable max-len */
const {Pool} = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const ChaptersController = {};

ChaptersController.addChapter = async (req, res, next) => {
  try {
    console.log('hi');
    const {title} = req.body;
    const returnChapter = await pool.query('INSERT INTO public.collections (title) VALUES ($1) RETURNING *', [title]);
    res.locals.returnChapter = returnChapter;
    return next();
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({error: 'Internal Server Error'});
  }
};


ChaptersController.displayAllChapters = async (req, res, next) => {
  const result = await pool.query('SELECT * FROM public.collections');
  res.locals.result = result.rows;
  return next();
};

module.exports = ChaptersController;
