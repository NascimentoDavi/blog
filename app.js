require ('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');

const app = express();
const PORT = 5000 || process.env.PORT;

// Public folder to hold js code
app.use(express.static('public'));

// Templating engine -> Instead of using html to display data, we use view engines
// EJS -> Similar sintax to HTML
app.use(expressLayout);
app.set('layout', './layout/main');
app.set('view engine', 'ejs');

// As a home pag
app.use('/', require('./server/routes/main'));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});