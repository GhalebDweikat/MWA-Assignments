const url = require('url');
const http = require('http');
const querystring = require('querystring');
const fs = require('fs');
const {fork} = require('child_process');

http.createServer((req, resp) => {


    const fileUrl = querystring.parse(url.parse(req.url).query).url;

    if(fileUrl === undefined) {
        resp.writeHead(404);
        resp.end('File Not Found');
        return;
    }

    resp.writeHead(200, {'Content-Type' : 'text/plain'});
    const child = fork('fileReaderV2.js', {stdio: 'pipe'});
    child.send({msg: fileUrl});
    child.stdout.pipe(resp);




}).listen(1993, ()=>console.log('listening on 1993'));