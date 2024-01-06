const {Pool} = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
const cheerio = require('cheerio');
const axios = require('axios');

const RecipesDataController = {};

RecipesDataController.getData = async (req, res, next) => {
  console.log('Reached getRecipeData route');
  let html;
  const url = decodeURIComponent(req.params.url);
  const ingredients = [];
  const instructions = [];

  try {
    const response = await axios.get(url);

    // Check if the response status is successful (2xx)
    if (response.status >= 200 && response.status < 300) {
      html = response.data;
      const $ = cheerio.load(html);
      // $('ul:contains("tsp"):first > li', html).each(function() {
      $('ul[class*="ingredients"] > li', html).each(function () {
        const list = $(this).text();
        ingredients.push(list);
      });

      $('ul[class*= "instructions"], ul[class*= "directions"] > li', html).each(function () {
        const list = $(this).text();
        instructions.push(list);
      });

      const image = $('img').first().attr('src');

      res.locals.list = {
        image,
        ingredients,
        instructions,
      };
      return next();
    } else {
      throw new Error(`Failed to fetch URL: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error fetching URL:', error.message);
    res.status(500).json({error: 'Internal Server Error'});
  }
};

module.exports = RecipesDataController;
