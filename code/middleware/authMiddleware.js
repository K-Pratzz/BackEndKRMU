const jwt=require('jsonwebtoken');
const user=require('../model/user');
const SECRET_KEY="mysecretNone";
const authMiddleware=async (req,res,next)=>{
  const token=req.header('Authorization')?.replace('Bearer ','');
  if(!token){
    return res.status(401).json({message:'No token, authorization denied'});
  }
  try{
    const decoded=jwt.verify(token,SECRET_KEY);
    req.user=await user.findById(decoded.id).select('-password');
    if(!req.user){
      return res.status(401).json({message:'User not found'});
    }
    next();
  }catch(error){
    res.status(401).json({message:'Token is not valid'});

  }
};
const restrictTo=(...roles)=>{
  return (req,res,next)=>{
    if(!roles.includes(req.user.role)){
      return res.status(403).json({message:'You do not have permission to perform this action'});
    }
    next();
  }
};
module.exports={authMiddleware, restrictTo};