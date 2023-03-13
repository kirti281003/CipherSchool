const express=require("express");
const { getVideo, deleteVideo, updateVideo, addVideo, addlike, adddislike, addView } = require("../controllers/postController");
const { isAuthenticated } = require("../middleware/auth");
const router=express.Router();
router.route("/video/:id").get(isAuthenticated,getVideo).delete(isAuthenticated,deleteVideo);
router.route("/video/:id").put(isAuthenticated,addView)
router.route("/postVideo").post(isAuthenticated,addVideo);
router.route("/video/:id/like").put(isAuthenticated,addlike);
router.route("/video/:id/dislike").put(isAuthenticated,adddislike);
module.exports=router;