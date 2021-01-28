const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'hbs');

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
    extname: '.hbs'
}));








module.exports = app;