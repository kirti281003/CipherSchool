const express=require("express");
const { getVideo, deleteVideo, updateVideo, addVideo } = require("../controllers/postController");
const { isAuthenticated } = require("../middleware/auth");
const router=express.Router();
router.route("/video/:id").get(isAuthenticated,getVideo).delete(isAuthenticated,deleteVideo).put(isAuthenticated,updateVideo);
router.route("/postVideo").post(isAuthenticated,addVideo);
module.exports=router;