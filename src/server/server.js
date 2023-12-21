const express = require('express');
const path = require('path');

// Creating an instance of the express app
const app = express();

// telling my app to listen on PORT 3000
const PORT = process.env.PORT || 3000;

// serving my static files, including javascript bundles through dist/bundle.js
app.use(express.static(path.join(__dirname, '../dist')));


// creating a "catch all route" in order to catch all 
// requests that hasn't been handled by previous routes. 
// on this get request, we are sending the file index.html 
// in the dist folder. 
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
});

app.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`);
})