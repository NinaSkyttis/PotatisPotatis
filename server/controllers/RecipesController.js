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
    const result = await pool.query(
        // eslint-disable-next-line max-len
        'INSERT INTO public.recipe (title, url, collection_id) VALUES ($1, $2, $3)', [title, url, collectionId],
    );
    res.locals.result = result;
    return next();
  } catch (error) {
    console.error('Error excecuting query adding recipe', error);
    res.status(500).json({error: 'Internal Server Error'});
  }
};

module.exports = RecipesController;
