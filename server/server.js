var express=require('express');
var bodyParser=require('body-parser');
const {ObjectID}=require('mongodb');

var {mongoose}=require('./db/mongoose.js');
var {todoModel}=require('./models/todo.js');
var {userModel}=require('./models/user.js');

var port=process.env.PORT || 3000;
var app=express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    var todo= new todoModel({
        text: req.body.text
    });
    todo.save(function(err, doc){
        if(err){
            res.status(400).send(err);
            return console.log('There is a problem');

        }
        console.log('Saved');
        res.send(doc);
    })
    todo
});
app.get('/todos/:id',(req,res)=>{
    var id=req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(400).send();
    }
    todoModel.findById(id, function(err,doc){
        if(err || !doc){
            return res.status(404).send();
        }
        res.send(doc);
    });
})

app.listen(port,()=>{
    console.log('Listening at port',port);
});

module.exports={app};