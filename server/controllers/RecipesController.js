/* eslint-disable camelcase */
const {Pool} = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const RecipesController = {};

RecipesController.addRecipe = async (req, res, next) => {
  const {title, url, collection_id} = req.body;
  try {
    const result = await pool.query(
        // eslint-disable-next-line max-len
        'INSERT INTO public.recipe (title, url, collection_id) VALUES ($1, $2, $3)', [title, url, collection_id],
    );
    res.locals.result = result;
    return next();
  } catch (error) {
    console.error('Error excecuting query adding recipe', error);
    res.status(500).json({error: 'Internal Server Error'});
  }
};

module.exports = RecipesController;
