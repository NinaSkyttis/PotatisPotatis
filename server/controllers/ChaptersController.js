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
  const chapters = await pool.query('SELECT * FROM public.chapters');
  const recipesInChapters = await pool.query('SELECT * FROM public.recipes_in_chapters');
  const recipes = await pool.query('SELECT * FROM public.recipes');
  const returnObj = {
    chapters: chapters.rows,
    recipesInChapters: recipesInChapters.rows,
    recipes: recipes.rows,
  };
  res.locals.result = returnObj;
  return next();
};


ChaptersController.displayChapter = async (req, res, next) => {
  const id = req.params.id;
  const chapterResult = await pool.query('SELECT recipes.* FROM recipes JOIN recipes_in_chapters ON recipes._id = recipes_in_chapters.recipe_id WHERE recipes_in_chapters.chapter_id = $1', [id]);
  res.locals.chapterResult = chapterResult.rows;
  return next();
};

module.exports = ChaptersController;
