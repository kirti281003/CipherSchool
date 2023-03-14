const app=require("./app.js");
const dotenv=require("dotenv");
const connect=require("./config/database");
const path = require('path')
dotenv.config({path:'config/config.env'});
connect();
app.listen(4000,()=>{
    console.log("4000");
})