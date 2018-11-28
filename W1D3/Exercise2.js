const http = require('http');
const fs = require('fs');

const server = http.createServer();

// server.on('request', function(req, resp){
//     resp.writeHead(200, {'Content-Type' : 'text/plain'});
//     var data = fs.readFileSync(__dirname + '/bigfile.txt', 'utf-8')
//     resp.end(data);
// });

// server.on('request', function(req, resp){
//     resp.writeHead(200, {'Content-Type' : 'text/plain'});
//     fs.readFile(__dirname + '/bigfile.txt', 'utf-8', function(data){ resp.end(data);});
// });

// server.on('request', function(req, resp){
//     resp.writeHead(200, {'Content-Type' : 'text/plain'});
//     var dataStrm = fs.createReadStream(__dirname + '/bigfile.txt');
//     dataStrm.on('data', function(data){
//         if(!resp.write(data))
//             dataStrm.pause();
//     });
//     resp.on('drain', function(){
//         dataStrm.resume();
//     })
//     dataStrm.on('end', function(){
//         resp.end();
//     })
// });

server.on('request', function(req, resp){
    resp.writeHead(200, {'Content-Type' : 'text/plain'});
    var dataStrm = fs.createReadStream(__dirname + '/bigfile.txt');
    dataStrm.pipe(resp);
});


server.listen(8080);