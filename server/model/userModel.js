const mongoose = require('mongoose');
const validator = require('validator')
const userSchema = mongoose.Schema({
    userName: {
        type:String,
        required:[true,"user name is required"],
        trim:true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long']
    },
    role: {
         type: String,
         enum: ['admin', 'agent', 'customer'],
         default: 'customer' 
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },

})

const User = mongoose.model('user', userSchema);

module.exports = User;