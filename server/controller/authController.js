const jwt = require('jsonwebtoken');
const User = require('../model/userModel')
const AppError = require('../utils/AppError');
const { promisify } = require('util');

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

  exports.login = async(req,res,next) => {
    const {email , password} = req.body;
    
    if(!email || !password){
        return next(new AppError("Pls Provide Email and Password",400))
    }

    const user = await User.findOne({email}).select('+password')
   
    
    if(!user || !(await user.correctPassword(password,user.password))){
       return next (new AppError("Incorrect Email or Password",401))
    }

    const token = signToken(user._id)

    res.status(200).json({
        status:'success',
        token,
        user
    })
  }

exports.protect = async (req, res, next) => {
    let token;
  
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }
  
    if (!token) {
      return next(new AppError('You are not logged in! please log in ', 401));
    }
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  
    const currentUser = await User.findById(decoded.id);
  
    if (!currentUser) {
      return next(new AppError('the token does not exist', 401));
    }
  
    req.user = currentUser;
  
    next();
  };
  
exports.restrictTo = (...roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        return next(
          new AppError(
            'You do Not have a permission to perform this action ',
            403
          )
        );
      }
      next();
    };
  };

