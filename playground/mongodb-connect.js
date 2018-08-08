const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

var url='mongodb://localhost:27017';
var dbName='todoApp';

MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    db.collection('ToDos').insertOne({
        text: 'Sagor7',
        test: true
    },(err,res=>{
        if(err){
            return console.log('There is an error',err);
        }
        console.log(res.ops[0]);
    }))
    client.close();
  });