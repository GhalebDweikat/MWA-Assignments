const express = require('express');
const mongodb = require('mongodb');
const crypto = require('crypto');
const algorithm = 'aes256',
    password = 'asaadsaad';

const client = new mongodb.MongoClient('mongodb://localhost:27017');

const app = express();

app.get('/secret', (req, res) => {
    client.connect(function (err) {
        if(err) console.log(err);
        const db = client.db('Week2');
        const collection = db.collection('monday');

        collection.findOne({message: {$exists: true}}, function (err, doc) {
            if (err){
                console.log(err);
                res.status(500).end();
            }
            else {
                const decipher = crypto.createDecipher(algorithm,password);
                let dec = decipher.update(doc.message,'hex','utf8');
                res.status(200).end(JSON.stringify(dec));
            }
        });
    });
});


app.listen(1993, ()=>{console.log('Listening on 1993')});