//dependencies
const express = require('express');
const axios = require('axios');

//init
const app = express();

//setup
app.enable('trust proxy');
app.enable('case sensitive routing');
app.enable('strict routing');
app.disable('x-powered-by');
app.disable('etag');

//route
app.get('/users', (req, resp) => {
    resp.append('Link', ['<https://randomuser.me/api/?p=1>; rel="first"', '<https://randomuser.me/api/?p=2>; rel="next"']);
    resp.writeHead(200, {'Cache-Control': 'private, max-age=86400'});
    axios.get('https://randomuser.me/api/?results=10')
        .then(function (response) {
            resp.write(JSON.stringify(response.data));
            resp.end();
        })
        .catch(function (error) {
            resp.write(error);
            resp.end();
        });
})

//boot up
app.listen(1993, ()=>{console.log('Listening on 1993')});