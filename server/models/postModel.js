const mongoose=require("mongoose");
const postSchema =new mongoose.Schema({
userId:{
    type:String,

},
title:{
    type:String,
    required:true
},
desc:{
    type:String,
    required:true
},
imgUrl:{
    type:String,
},
videoUrl:{
    type:String,
    required:true
},
views:{
    type:Number,
default:0
},

likes:{
    type:[String],
    default:[]
},
dislikes:{
    type:[String],
    default:[]
},
comments:[{
name:{
    type:String,
    required:true
},
desc:{
    type:String,
    required:true
}
}]



})
module.exports= mongoose.model("Post",postSchema);