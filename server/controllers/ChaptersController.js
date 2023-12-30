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
    const returnChapter = await pool.query(
        'INSERT INTO public.chapters (title) VALUES ($1) RETURNING *', [title],
    );
    res.locals.returnChapter = returnChapter;
    return next();
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({error: 'Internal Server Error'});
  }
};


ChaptersController.displayAllChapters = async (req, res, next) => {
  const result = await pool.query('SELECT * FROM public.chapters');
  console.log('this is the result of the latest input', res.locals.result);
  res.locals.result = result.rows;
  return next();
};


ChaptersController.displayChapter = async (req, res, next) => {
  const id = req.params.id;
  const chapterResult = await pool.query('SELECT recipe.* FROM recipe JOIN recipes_in_chapters ON recipe._id = recipes_in_chapters.recipe_id WHERE recipes_in_chapters.collection_id = $1', [id]);
  res.locals.chapterResult = chapterResult.rows;
  return next();
}

module.exports = ChaptersController;
