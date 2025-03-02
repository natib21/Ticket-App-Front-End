const User = require('../model/userModel')



exports.getAllUsers =async (req,res,next)=>{

    const users = await User.find();

    res.status(200).json({
        status: 'success',
        message: users.length,
        data: users,
      });
}


exports.getUser = async(req,res,next)=>{
    const user = await User.findById(req.params.id);

    res.status(200).json({
        status: 'success',
        data: user,
      });
}

exports.createAgent = async(req,res,next)=>{
  const newAgent = await User.create(req.body)

  res.status(201).json({
    status:"success",
    user:newAgent
  })
}

exports.updateUser = async(req,res,next)=>{
  const user = await User.findByIdAndUpdate(req.params.id,req.body,{
        runValidators: true,
        new: true,
      });

      if (!user) {
        return next(new AppError('No user item Found with that ID', 404));
      }
      res.status(200).json({
        status: 'success',
        user,
      });

}
exports.deleteUser = async(req, res) => {
  const user = await User.findOneAndDelete(req.params.id);
  if (!user) {
    return next(new AppError('No user item Found with that ID', 404));
  }
  res.status(204).json({
    status: 'success',
    user: null,
  });
};