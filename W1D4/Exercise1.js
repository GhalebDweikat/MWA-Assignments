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
    const child = fork('fileReader.js');
    child.send({msg: fileUrl});
    child.on('message', (msg)=>{
       if(msg.type === 'data') {
           resp.write(msg.data);
       }
       else
           resp.end();
    });

}).listen(1993, ()=>console.log('listening on 1993'));