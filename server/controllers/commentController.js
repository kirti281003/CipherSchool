const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Comment=require("../models/commentModel");
const Post=require("../models/postModel");
exports.postComment=catchAsyncErrors(async(req,res,next)=>{
const id=req.user.id;
const videoId=req.params.id;
const {desc}=req.body;
const comment =await Comment.create({
    userId:id,
    videoId:videoId,
    desc:desc
});
const video=await Post.findByIdAndUpdate(req.params.id,{
  $push:{comments:{name:req.user.name,desc:desc}}
},{new:true})
res.status(200).json({
    success:true,
    comment,
    video
})

})
exports.deleteComment=catchAsyncErrors(async(req,res,next)=>{
    await Comment.findByIdAndDelete(req.params.id);
    res.status(200).json({
        success:true
    })

})
exports.getVideoComments=catchAsyncErrors(async(req,res,next)=>{
const video=await Post.findById(req.params.id);
const comments=video.comments;
res.status(200).json({
    success:true,
 comments

})
})
exports.getComment=catchAsyncErrors(async(req,res,next)=>{
    const comment=await Comment.findById(req.params.id);
    res.status(200).json({
        success:true,
        comment
    })
})
