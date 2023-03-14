import { Link } from "react-router-dom";
import "./VideoCard.css";

function VideoCard({video})
{
    return(
        <>
        <Link className="Videolink" to={`/video/${video._id}`}>
        <img src={video.imgUrl}></img>
        <h1>{video.title}</h1>
</Link>
        </>
    )
}
export default VideoCard