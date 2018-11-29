const path = require('path');
const fs = require('fs');

const readFile = function(input){

    console.log(input);
    //console.log(path.join(__dirname, input));
    var dataStrm = fs.createReadStream(__dirname + '/' +  input); // I tried with path, kept breaking
    dataStrm.on('data', function(data){
        //process.send({msg: {type: 'data', data: data.toString()}});
        process.send({type: 'data', data: data.toString()});
    });
    dataStrm.on('end', function(){
        process.send({type: 'end', data: null});

    })
}

process.on('message', (msg)=>{
    readFile(msg.msg);
});