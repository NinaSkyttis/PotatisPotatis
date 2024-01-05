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
  let newList = [];

  try {
    const response = await axios.get(url);

    // Check if the response status is successful (2xx)
    if (response.status >= 200 && response.status < 300) {
      html = response.data;
      const $ = cheerio.load(html);
      $('ul:contains("Tbsp") > li', html).each(function() {
        const list = $(this).text();
        newList.push(list);
      });
      let ingredientsList = ''

      res.locals.list = newList;
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
