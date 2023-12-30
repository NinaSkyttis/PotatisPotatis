/* eslint-disable max-len */
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const ChaptersController = require('../controllers/ChaptersController');
const {Pool} = require('pg');

// eslint-disable-next-line no-unused-vars
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});


// getting all
router.get('/', ChaptersController.displayAllChapters, (req, res) => {
  console.log(res.locals.result, 'in getreq for chapters');
  res.status(200).json(res.locals.result);
});
// getting one
router.get('/:id', ChaptersController.displayChapter, (req, res) => {
  res.status(200).json(res.locals.chapterResult)
});

// creating one
router.post('/', ChaptersController.addChapter, (req, res) => {
  res.status(200).json(res.locals.returnChapter);
});

// updating one
router.patch('/:id', (req, res) => {
  res.send(req.params.id);
});

// deleting one
router.delete('/:id', (req, res) => {

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
