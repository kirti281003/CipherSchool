import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPost } from "../../actions/postAction";
import { Player } from 'video-react';
import "./Video.css";

function Video()
{const dispatch=useDispatch();
  const{id}=useParams();
  console.log(id);
  useEffect(()=>{
    dispatch(getPost(id))
  },[dispatch,id])
  const{video}=useSelector(state=>state.video)
  return(
    <>
    <div className="player">
   <Player
      playsInline
      poster={video.imgUrl}
      src={video.videoUrl}
    />
    </div>
    <div className="videodesc">
      <h1>{video.title}</h1>
      <p>{video.desc}</p>
    </div>
   
    </>
  )
}
export default Video;