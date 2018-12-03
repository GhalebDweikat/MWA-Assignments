const express = require('express');
const morgan = require('morgan')
const expressValidator = require('express-validator');
const cors = require('cors')

const app = express();

app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(expressValidator());

app.route('/grades')
    .get(function(req, res, next){
        res.end(getAllGrades());
    })
    .post(function(req, res, next) {
        AddGrade(req);
        res.redirect('/grades');
    });

app.route('/grades/:id')
    .get(function(req, res, next){
        res.end(getGrade(req.id));
    })
    .put(function(req, res, next){
        UpdateGrade(req);
        res.redirect('/grades')
    })
    .delete(function(req, res, next){
        DeleteGrade(req);
        res.redirect('/grades')
    });

app.listen(1993, ()=>{console.log('Listening on 1993')});