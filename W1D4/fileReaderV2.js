const path = require('path');
const fs = require('fs');

const readFile = function(input){

    //console.log(input);
    //console.log(path.join(__dirname, input));
    var dataStrm = fs.createReadStream(__dirname + '/' +  input); // I tried with path, kept breaking
    dataStrm.pipe(process.stdout);
}

process.on('message', (msg)=>{
    readFile(msg.msg);
});