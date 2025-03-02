const jwt = require('jsonwebtoken');
const User = require('../model/userModel')
const AppError = require('../utils/AppError')

const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE_IN,
    });
  };

  exports.signUp = async(req,res,next)=>{
    const newUser = await User.create(req.body)

   const token =  signToken(newUser._id)
 
    res.status(201).json({
        status:"Success",
        token,
        data:{
            user:newUser
        }
    })

  }