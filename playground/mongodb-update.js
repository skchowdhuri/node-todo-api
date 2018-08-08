const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

var url='mongodb://localhost:27017';
var dbName='todoApp';

MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    db.collection('ToDos').findOneAndUpdate({text:'sagor'},{$set:{text:'sagor4', test:false}}, {returnOriginal:false},function(err,res){
        if(err){
            return console.log(err);
        }
        console.log(JSON.stringify(res,undefined,2));
    })




    client.close();
  });