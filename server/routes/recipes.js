/* eslint-disable max-len */
const express = require('express');
const RecipesController = require('../controllers/RecipesController');
// eslint-disable-next-line new-cap
const router = express.Router();
const {Pool} = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});


router.get('/', async (req, res) => {
  // console.log('heyey')
  try {
    const result = await pool.query('SELECT * FROM public.recipes');
    // console.log(result.rows, '<--- this is the result');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({error: 'Internal Server Error'});
  }
});

router.post('/', RecipesController.addRecipe, (req, res) => {
  res.status(200).json(res.locals.result);
});

router.patch('/:id', RecipesController.updateRecipe, (req, res) => {
  res.status(200).json(res.locals.updatedRecipe);
});

router.delete('/:id', RecipesController.deleteRecipe, (req, res) => {
  res.status(200).json(res.locals.deletedRecipe);
});

// router.get('/', async (req, res) => {
//   try {
//     // Your existing code
//   } catch (error) {
//     console.error('Error in chapters route:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });


module.exports = router;
