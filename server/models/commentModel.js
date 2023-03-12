import mongoose, { Schema } from "mongoose";
const commentSchema =new mongoose.Schema({
userId:{
    type:String,
    required:true
},
videoId:{
    type:String,
    required:true
},
desc:{
    type:String,
    required:true
}



})
module.exports= mongoose.model("Comment",commentSchema);