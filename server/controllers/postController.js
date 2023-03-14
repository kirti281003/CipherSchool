const Post=require("../models/postModel");
const User=require("../models/userModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");
const cloudinary=require('cloudinary').v2;
cloudinary.config({
    cloud_name:"dlgp2ufmn",
    api_key:"738354633193825",
    api_secret:"SzqyhWymF0CoH2bbDut25UzhTPQ"
})
exports.addVideo=catchAsyncErrors(async(req,res,next)=>{

    const{title,desc}=req.body;
const file=req.files.video;
const photoFile=req.files.photo;
    cloudinary.uploader.upload(file.tempFilePath,{resource_type:"video"},async(err,result)=>{
        cloudinary.uploader.upload(photoFile.tempFilePath,async(err,fileresult)=>{
            const post=await Post.create({
                userId:req.user.id,
                   title:title,
                   desc:desc,
                   videoUrl:result.url,
                   imgUrl:fileresult.url
                });
                res.status(200).json({
                        success:true,
                        post
                })
        })
     
    })

})
exports.updateVideo=catchAsyncErrors(async(req,res,next)=>{
    
})
exports.deleteVideo=catchAsyncErrors(async(req,res,next)=>{
    const video=await Post.findById(req.params.id);
    if(req.user.id===video.userId)
    {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({
        success:true
    })
}
else
{
    return next(new ErrorHandler("Cannot Delete Video",403))
}
})
exports.getVideo=catchAsyncErrors(async(req,res,next)=>{
    const video=await Post.findById(req.params.id);
    res.status(200).json({
        success:true,
        video
    })
})

exports.addlike=catchAsyncErrors(async(req,res,next)=>{
    const id=req.user.id;
    const videoId=req.params.id;
    const video=await Post.findByIdAndUpdate(videoId,{
        $addToSet:{likes:id},
        $pull:{dislikes:id}
    },{new:true})
    const user=await User.findByIdAndUpdate(id,{
        $addToSet:{liked:videoId},
        $pull:{disliked:videoId}
    },{new:true})
    res.status(200).json({
        success:true,
        video,
        user
    })
})

exports.adddislike=catchAsyncErrors(async(req,res,next)=>{
    const id=req.user.id;
    const videoId=req.params.id;
    const video=await Post.findByIdAndUpdate(videoId,{
        $addToSet:{dislikes:id},
        $pull:{likes:id}
    },{new:true})
    const user=await User.findByIdAndUpdate(id,{
        $addToSet:{disliked:videoId},
        $pull:{liked:videoId}
    },{new:true})
    res.status(200).json({
        success:true,
        video,
        user
    })
})
exports.addView=catchAsyncErrors(async(req,res,next)=>{
    const video=await Post.findByIdAndUpdate(req.params.id,{
        $inc:{views:1}
    },{new:true})
    res.status(200).json({
        success:true,
        video
    })

})
exports.allVideos=catchAsyncErrors(async(req,res,next)=>{
    const videos=await Post.find();
    res.status(200).json({
        success:true,
        videos
    })
})