const Post=require("../models/postModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const cloudinary=require('cloudinary').v2;
cloudinary.config({
    cloud_name:"dlgp2ufmn",
    api_key:"738354633193825",
    api_secret:"SzqyhWymF0CoH2bbDut25UzhTPQ"
})
exports.addVideo=catchAsyncErrors(async(req,res,next)=>{

    const{title,desc}=req.body;
const file=req.files.video
    cloudinary.uploader.upload(file.tempFilePath,{resource_type:"video"},async(err,result)=>{
      
        const post=await Post.create({
        userId:req.user.id,
           title:title,
           desc:desc,
           videoUrl:result.url
        });
        res.status(200).json({
                success:true,
                post
        })
    })

})
exports.updateVideo=catchAsyncErrors(async(req,res,next)=>{
    
})
exports.deleteVideo=catchAsyncErrors(async(req,res,next)=>{
    
})
exports.getVideo=catchAsyncErrors(async(req,res,next)=>{
    
})