const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

var url='mongodb://localhost:27017';
var dbName='todoApp';

MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    db.collection('ToDos').find().toArray().then(function(doc){
        assert.equal(null,err);
        assert.ok(doc!=null);
        console.log(JSON.stringify(doc,undefined,2));
    });
    client.close();
  });