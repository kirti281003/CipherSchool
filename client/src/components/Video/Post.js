import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerPost } from "../../actions/postAction";

function Post()
{const dispatch=useDispatch();
    const[title,setTitle]=useState("");
    const[desc,setDesc]=useState("");
    const[photo,setImage]=useState();
    const[video,setVideo]=useState();
    const submitPost=(e)=>
    {e.preventDefault();
        
        dispatch(registerPost(title,desc,photo,video))
  
    }
    return(
        <>
<form onSubmit={submitPost} method="POST" action="/registerPost">
<input type="text" onChange={(e)=>setTitle(e.target.value)}/>
<input type="text" onChange={(e)=>setDesc(e.target.value)}/>
<input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
<input type="file" onChange={(e)=>setVideo(e.target.files[0])}/>
<button>Submit</button>
</form>
        </>
    )
}
export default Post;