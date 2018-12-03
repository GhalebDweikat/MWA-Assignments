const express = require('express');
const morgan = require('morgan')
const expressValidator = require('express-validator');

const app = express();

app.use(morgan('combined'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(expressValidator());

app.route('/grades')
    .get()
    .post();

app.route('/grades/:id')
    .get()
    .put()
    .delete();

app.listen(1993, ()=>{console.log('Listening on 1993')});