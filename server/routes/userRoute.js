const express=require("express");
const { signup, signin, deleteUser, like, dislike, getUser,update, getLiked } = require("../controllers/userController");
const { isAuthenticated } = require("../middleware/auth");
const router=express.Router();
router.route("/signup").post(signup);
router.route("/signin").post(signin);
router.route("/user/:id").put(isAuthenticated,update);
router.route("/user/:id").delete(isAuthenticated,deleteUser);
router.route("/find/:id").get(isAuthenticated,getUser);
router.route("/getLiked").get(isAuthenticated,getLiked);
module.exports=router;