const mongoose=require('mongoose');

var userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 4
    }
});

var userModel=mongoose.model('user',userSchema);


module.exports={userModel};