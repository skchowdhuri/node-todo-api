const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

var url='mongodb://localhost:27017';
var dbName='todoApp';

MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    db.collection('ToDos').findOneAndDelete({text:'sagor'},function(err,res){
        if(err){
            return console.log('There is a problem'+err);
        }
        console.log(res);
    })




    client.close();
  });