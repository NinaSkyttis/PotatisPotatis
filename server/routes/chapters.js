/* eslint-disable max-len */
const express = require('express');
const app = express();
const collectionsController = require('../controllers/CollectionsController');
// const { Pool } = require('pg');

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });


module.exports = app;

// getting all
app.get('/', collectionsController.displayAllCollections, (req, res) => {
  // console.log('this is happening now')
  res.status(200).json(res.locals.result.rows);
});
// getting one
app.get('/:id', (req, res) => {
//   const id = req.params.id;
  res.send(req.params.id);
});

// creating one
app.post('/addChapter', collectionsController.addCollection, (req, res) => {
  res.status(200).json(res.locals.returnTitle);
});


// updating one
app.patch('/:id', (req, res) => {
 res.send(req.params.id)
});

// deleting one
app.delete('/:id', (req, res) => {

});
