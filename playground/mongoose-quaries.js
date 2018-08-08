const {mongoose}=require('./../server/db/mongoose');
const {todoModel}=require('./../server/models/todo');
const {userModel}=require('./../server/models/user');

var id='5b65414da384fa16a8dc64f';
todoModel.find({
    _id: id
},function(err,doc){
    console.log('Todos',doc);
});

todoModel.findOne({
    _id: id
},function(err,doc){
    console.log('Todo',doc);
});

todoModel.findById(id, 'text',function(err,doc){
    if(!doc){
        return console.log('No id found');
    }
    console.log('Todo By Id',doc);
});
