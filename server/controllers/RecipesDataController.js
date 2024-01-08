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

    if (response.status >= 200 && response.status < 300) {
      html = response.data;
      const $ = cheerio.load(html);
      $('ul[class*="ingredients"] > li', html).each(function() {
        const list = $(this).text();
        ingredients.push(list);
      });

      $('ul[class*= "instructions"], ul[class*= "directions"]', html).each(function () {
        $(this).find('li').each(function () {
          instructions.push($(this).text());
        });
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
