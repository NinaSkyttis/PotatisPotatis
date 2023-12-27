const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
require('dotenv').config();
// const chaptersController = require('./controllers/ChaptersController');

const {Pool} = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});


app.use(bodyParser.json());
app.use(cors());

// Importing routes
const chaptersRouter = require('./routes/chapters');
const recipesRouter = require('./routes/recipes');

app.use('/api/chapters', chaptersRouter);
app.use('/api/recipes', recipesRouter);


// app.get('/api/recipes', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM public.recipe');
//     console.log(result.rows, '<--- this is the result');
//     res.status(200).json(result.rows);
//   } catch (error) {
//     console.error('Error executing query', error);
//     res.status(500).json({error: 'Internal Server Error'});
//   }
// });

// app.post('/api/chapters', chaptersController.addChapter, (req, res) => {
//   res.status(200).json(result.rows);
//   // handle error here
// });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Access the value of NODE_ENV
const environment = process.env.NODE_ENV || 'development';

// Check if the app is in production mode
if (environment === 'production') {
  console.log('Running in production mode');
} else {
  console.log('Running in development mode');
}
