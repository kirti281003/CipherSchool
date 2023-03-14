const express=require("express");
const { getVideoComments, deleteComment, postComment, getComment } = require("../controllers/commentController");

const { isAuthenticated } = require("../middleware/auth");
const router=express.Router();
router.route("/video/:id/comments").get(isAuthenticated,getVideoComments).post(isAuthenticated,postComment);
router.route("/comment/:id").delete(isAuthenticated,deleteComment);
router.route("/comment/:id").get(isAuthenticated,getComment);

module.exports=router;