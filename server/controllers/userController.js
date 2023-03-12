const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User=require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const sendToken = require("../utils/jwtToken");

exports.signup=catchAsyncErrors(async(req,res,next)=>{
    const{name,email,password}=req.body;
    const user=await User.create({
        name:name,
        email:email,
        password:password
    })
 sendToken(user,200,res);
})

exports.signin=catchAsyncErrors(async(req,res,next)=>{
    const {email,password}=req.body;
    if(!email || !password)
    {
        return next(new ErrorHandler("Please Enter All Details",400))
    }
    const user=await User.findOne({email}).select("+password");
    if(!user)
    {
        return next(new ErrorHandler("User Not Found",404))
    }
    const isMatch=await user.comparePassword(password);
    if(!isMatch)
    {
        return next(new ErrorHandler("User Not Found",404))
    }
sendToken(user,200,res);
})

exports.update=catchAsyncErrors(async(req,res,next)=>{
if(req.params.id===req.user.id)
{
    const updatedUser=await User.findByIdAndUpdate(req.params.id,{
        $set:req.body
    },{new:true})
    res.status(200).json({
        success:true,
        updatedUser
    })
}
else{
    return next(new ErrorHandler("Update cannot be done",403))
}
})

exports.deleteUser=catchAsyncErrors(async(req,res,next)=>{
    if(req.params.id===req.user.id)
{
 await User.findByIdAndDelete(req.params.id)
    res.status(200).json({
        success:true,
    })
}
else{
    return next(new ErrorHandler("Delete cannot be done",403))
}
})

exports.getUser=catchAsyncErrors(async(req,res,next)=>{
    const user= await User.findById(req.params.id);
    if(!user)
    {
        return next(new ErrorHandler("No such User",404))
    }
    res.status(200).json({
        success:true,
        user
    })
})
exports.like=catchAsyncErrors(async(req,res,next)=>{
    
})

exports.dislike=catchAsyncErrors(async(req,res,next)=>{
    
})