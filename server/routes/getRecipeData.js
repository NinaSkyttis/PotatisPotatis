/* eslint-disable max-len */
const express = require('express');
const RecipesDataController = require('../controllers/RecipesDataController');
// eslint-disable-next-line new-cap
const router = express.Router();
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

router.get('/:url(*)', RecipesDataController.getData, (req, res) => {
  res.json(res.locals.list);
});

module.exports = router;