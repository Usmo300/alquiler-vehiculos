const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(require('./routes/rentCar.route'));

app.set('view engine', 'hbs');

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
    extname: '.hbs'
}));

app.get("/", (req, res) => {
    res.render('/cars/newCarForm', {layout: "main"});
  });

module.exports = app;