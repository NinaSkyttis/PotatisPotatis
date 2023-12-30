const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const cors = require('cors');
require('dotenv').config();
// const chaptersController = require('./controllers/ChaptersController');

const {Pool} = require('pg');
// eslint-disable-next-line no-unused-vars
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'));

app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});
// Importing routes
const chaptersRouter = require('./routes/chapters');
const recipesRouter = require('./routes/recipes');

app.use('/api/chapters', chaptersRouter);
app.use('/api/recipes', recipesRouter);

app.get('*', (req, res) => {
  console.log('Requested URL:', req.url);
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

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
