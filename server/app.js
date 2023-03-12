const express=require("express");
const app=express();
const errorMiddleware=require("./middleware/errors");

const cookieParser=require("cookie-parser");
const fileUpload=require('express-fileupload');
const bodyParser=require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles:true
}))
const user=require("./routes/userRoute");
const video=require("./routes/postRoute");
app.use("/api/v1",user);
app.use("/api/v1",video);
app.use(errorMiddleware);
module.exports=app;