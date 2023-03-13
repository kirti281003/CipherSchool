const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const userSchema =new mongoose.Schema({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:true
},
liked:{
    type:[String]
},
disliked:{
    type:[String]
}

})
userSchema.pre("save",async function(next){
    if(!this.isModified("password"))
    {
        next();
    }
this.password=await bcrypt.hash(this.password,10);
})
userSchema.methods.comparePassword=async function(enteredpassword)
{
    return await bcrypt.compare(enteredpassword,this.password);
}

userSchema.methods.getJWTToken=function(){
return jwt.sign({id:this._id},process.env.JWT_SECRET,{
    expiresIn:process.env.JWT_EXPIRE
})
}
module.exports= mongoose.model("User",userSchema);