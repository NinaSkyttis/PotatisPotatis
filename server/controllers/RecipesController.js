/* eslint-disable camelcase */
const {Pool} = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const RecipesController = {};

RecipesController.addRecipe = async (req, res, next) => {
  let {title, url, collectionId} = req.body;
  collectionId = parseInt(collectionId);

  try {
    // Insert into the recipe table
    const recipeResult = await pool.query(
        'INSERT INTO public.recipes (title, url) VALUES ($1, $2) RETURNING _id',
        [title, url],
    );

    const recipeId = recipeResult.rows[0]._id;
    console.log('recipeId', recipeId);

    // Insert into the recipes_in_chapters table
    await pool.query(
        'INSERT INTO public.recipes_in_chapters (recipe_id, chapter_id) VALUES ($1, $2)',
        [recipeId, collectionId],
    );

    res.locals.recipeId = recipeId;
    return next();
  } catch (error) {
    console.error('Error executing query adding recipe', error);
    res.status(500).json({error: 'Internal Server Error'});
  }
};

module.exports = RecipesController;