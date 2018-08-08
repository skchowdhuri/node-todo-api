const mongoose=require('mongoose');

var todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        minlength: 4,
        unique: true
    },
    completed: {type: Boolean,default:false},
    completedAt: {type: Number,default:null}
})

var todoModel=mongoose.model('todo',todoSchema);

module.exports={todoModel};