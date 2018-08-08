const mongoose=require('mongoose');

var todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        default: 'Sagor Chowdhuri'
    },
    completed: {type: Boolean,default:false},
    completedAt: {type: Number,default:null}
})

var todoModel=mongoose.model('todo',todoSchema);

module.exports={todoModel};