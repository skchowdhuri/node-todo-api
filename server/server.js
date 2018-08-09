var express=require('express');
const _=require('lodash');
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
    });
});
app.get('/todos',(req,res)=>{
    todoModel.find({},function(err,doc){
        res.send(doc);
    })
})
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
});

app.delete('/todos/:id', (req,res)=>{
    var id=req.params.id;
    if(!ObjectID.isValid){
        return res.status(400).send();
    }
    todoModel.findByIdAndRemove(id, function(err,doc){
        if(err || !doc){
            return res.status(404).send();
        }
        res.send(doc);
    })
});
app.patch('/todos/:id', (req,res)=>{
    var id=req.params.id;
    var body=_.pick(req.body, ['text','completed']);
    if(!ObjectID.isValid){
        return res.status(400).send();
    }
    if(_.isBoolean(body.completed) && (body.completed)){
        body.completedAt=new Date().getTime();
    }
    else{
        console.log('Boolean');
        body.completed=false;
        body.completedAt=null;
    }
    todoModel.findByIdAndUpdate(id, {$set:body},{new: true},function(err, doc){
        if(err || !doc){
            return res.status(400).send();
        }
        return res.send(doc);
    })

})

app.listen(port,()=>{
    console.log('Listening at port',port);
});

module.exports={app};