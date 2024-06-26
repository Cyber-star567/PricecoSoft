const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    
    user_email: {
        type: String,
        required: true,
    },
    
    user_name: {
        type: String,
        required: true,
    },
   
    user_mobile: {
        type: Number,
        required: true
    },
    user_password: {
        type: String,
        required: true
    },
    status:{
        type:Number,
        default:0
    },
    otp:{
        type:String
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
