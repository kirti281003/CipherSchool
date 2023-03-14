import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPost } from "../../actions/postAction";
import { Player } from 'video-react';
import "./Video.css";
import CommentSection from "./CommentSection";

function Video()
{var style={
  color:"white"
};
function like()
{
  style={color:"yellow"}
}
  
  const dispatch=useDispatch();
  const {video,loading}=useSelector(state=>state.video);
  const{id}=useParams();
  useEffect(()=>{
dispatch(getPost(id))
  },[dispatch,id])
if(video)
{
  return(
    <>
    <h1 className="videotitle">{video.title}</h1>
    <div className="player">
    <Player
      playsInline
      poster={video.imgUrl}
      src={video.videoUrl}
    />
    </div>
    <div className="videodesc">
    
    <h4>{video.views} Views</h4>
    <div className="reaction">
  <i class=" like  fa-sharp fa-solid fa-thumbs-up" onClick={like} style={style}></i>
    <i class=" like  fa-sharp fa-solid fa-thumbs-down" onClick={like} style={style}></i>
    </div>
   
      <p>{video.desc}...</p>
    </div>
    <CommentSection/>
    </>
  )
}
}
export default Video;