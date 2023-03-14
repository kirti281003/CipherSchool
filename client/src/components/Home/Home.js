import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allPosts } from "../../actions/postAction";
import VideoCard from "../Video/VideoCard";
import "./Home.css";

function Home()
{const dispatch=useDispatch();
    const{videos,error,loading}=useSelector(state=>state.videos);
    console.log(videos);
    useEffect(()=>
    {
  
        dispatch(allPosts())
  
       
    },[dispatch])

    return(
        <>
        <div className="Homebar">
<h1>Welcome To The Future Of Learning</h1>
<p>Start Learning by best creators for absolutely free</p>
</div>
 <div className="videos">
 {videos &&
 videos.map(video=>(
    <VideoCard video={video}></VideoCard>
 ))}
    
 </div>
        </>
    )
}

export default Home;