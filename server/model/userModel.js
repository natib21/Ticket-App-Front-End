const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require('bcryptjs');
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
    passwordConfirm: {
        type: String,
        required: [true, 'Please provide a password'],
        validate: {
          validator: function (el) {
            return el === this.password;
          },
          message: 'password are not the same',
        },
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

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
  
    this.password = await bcrypt.hash(this.password, 12);
  
    this.passwordConfirm = undefined;
    next();
  });
  
userSchema.methods.correctPassword = async function (
    candidatePassword,
    userPassword
  ) {
    return await bcrypt.compare(candidatePassword, userPassword);
  };
 
const User = mongoose.model('user', userSchema);

module.exports = User;