const express = require('express');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));

app.use(require('./routes/rentCar.route'));

app.set('view engine', 'hbs');


app.engine('hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
    extname: '.hbs'
}));



module.exports = app;