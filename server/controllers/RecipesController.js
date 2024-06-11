/* eslint-disable camelcase */
const {Pool} = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const RecipesController = {};

RecipesController.addRecipe = async (req, res, next) => {
  let {title, image, url, chapterId} = req.body;
  chapterId = parseInt(chapterId);

  try {
    // Insert into the recipe table
    const recipeResult = await pool.query(
        'INSERT INTO public.recipes (title, image, url) VALUES ($1, $2, $3) RETURNING _id',
        [title, image, url],
    );

    const recipeId = recipeResult.rows[0]._id;
    console.log('recipeId', recipeId);

    // Insert into the recipes_in_chapters table
    await pool.query(
        'INSERT INTO public.recipes_in_chapters (recipe_id, chapter_id) VALUES ($1, $2)',
        [recipeId, chapterId],
    );

    res.locals.recipeId = recipeId;
    return next();
  } catch (error) {
    console.error('Error executing query adding recipe', error);
    res.status(500).json({error: 'Internal Server Error'});
  }
};

RecipesController.updateRecipe = async (req, res, next) => {
  console.log('this is happening actually heheheh')
  const {id} = req.params;
  const {title, image, url, chapterId, comments} = req.body;
  console.log(chapterId, '<-- chapterId', 
  id, '<--- id', image, '<--image', url, '<-- url ', title, '<--title');
  try {
    // await pool.query('BEGIN');
    const updatedRecipe = await pool.query('UPDATE public.recipes SET title = $1, image = $2, url = $3, comments = $4 WHERE _id = $5 RETURNING _id',
      [title, image, url, comments, id]);
    const updatedChapterId = await pool.query('UPDATE public.recipes_in_chapters SET chapter_id = $1 WHERE recipe_id = $2 RETURNING chapter_id',
      [chapterId, id]);
    // await pool.query('COMMIT');

    console.log(updatedChapterId, 'updated CHAPTER_ID!!!')


    res.locals.updatedRecipe = {
      chapter_id: chapter_id,
      updatedRecipe: updatedRecipe,
    }
    console.log('updatedRecipe', updatedRecipe);
    return next();
  } catch (error) {
    await pool.query('ROLLBACK');
    console.error('Error executing query updating recipe', error);
    res.status(500).json({error: 'Internal Server Error'});
  };
  // finally {
  //   await pool.release();
  // }
};

RecipesController.deleteRecipe = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteLink = await pool.query('DELETE FROM recipes_in_chapters WHERE recipe_id = $1', [id]);
    const deleted = await pool.query('DELETE FROM recipes WHERE _id = $1 RETURNING _id', [id]);
    res.locals.delete = deleted;
    console.log('recipe is successfully deleted', res.locals.delete);
    return next();
  } catch (error) {
    console.error('Error executing query deleting recipe', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
module.exports = RecipesController;
