/* eslint-disable max-len */
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const ChaptersController = require('../controllers/ChaptersController');
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});


// getting all
router.get('/', ChaptersController.displayAllChapters, (req, res) => {
  console.log(res.locals.result, 'in getreq for chapters')
  res.status(200).json(res.locals.result);
});
// getting one
router.get('/:id', (req, res) => {
//   const id = req.params.id;
  res.send(req.params.id);
});

// creating one
router.post('/', ChaptersController.addChapter, (req, res) => {
  res.status(200).json(res.locals.returnChapter);
});

// router.post('/api/chapters', chaptersController.addChapter, (req, res) => {
//   res.status(200).json(result.rows);
//   // handle error here
// });


// updating one
router.patch('/:id', (req, res) => {
  res.send(req.params.id);
});

// deleting one
router.delete('/:id', (req, res) => {

});


module.exports = router;
