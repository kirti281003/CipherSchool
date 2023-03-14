import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerPost } from "../../actions/postAction";
import "./Post.css";

function Post()
{const dispatch=useDispatch();
    const[title,setTitle]=useState("");
    const[desc,setDesc]=useState("");
    const[photo,setImage]=useState();
    const[video,setVideo]=useState();
    const {error}=useSelector(state=>state.video);
    useEffect(()=>{
if(error)
{
    window.alert(error);
}
    },[dispatch,error])
    const submitPost=(e)=>
    {e.preventDefault();
        
        dispatch(registerPost(title,desc,photo,video));
        window.alert("Successfully Posted");
  
    }
    return(
        <>
{/* <form onSubmit={submitPost} method="POST" action="/registerPost">
<input type="text" onChange={(e)=>setTitle(e.target.value)}/>
<input type="text" onChange={(e)=>setDesc(e.target.value)}/>
<input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
<input type="file" onChange={(e)=>setVideo(e.target.files[0])}/>
<button>Submit</button>
</form> */}
<div class="container">
  <div class="title">Registration</div>
  <form  onSubmit={submitPost} method="POST" action="/registerPost">
    <div class="user__details">
      <div class="input__box">
        <span class="details">Title</span>
        <input type="text"  onChange={(e)=>setTitle(e.target.value)} required/>
      </div>
      <div class="input__box">
        <span class="details">Description</span>
        <input type="text" onChange={(e)=>setDesc(e.target.value)} required/>
      </div>
      <div class="input__box">
        <span class="details">Thumbnail</span>
        <input type="file"  onChange={(e)=>setImage(e.target.files[0])} required/>
      </div>
      <div class="input__box">
        <span class="details">Video</span>
        <input type="file" onChange={(e)=>setVideo(e.target.files[0])} required/>
      </div>
      {/* <div class="input__box">
        <span class="details">Password</span>
        <input type="password" placeholder="********" required/>
      </div>
      <div class="input__box">
        <span class="details">Confirm Password</span>
        <input type="password" placeholder="********" required/>
      </div>

    </div>
    <div class="gender__details">
      <input type="radio" name="gender" id="dot-1"/>
      <input type="radio" name="gender" id="dot-2"/>
      <input type="radio" name="gender" id="dot-3"/>
      <span class="gender__title">Gender</span>
      <div class="category">
        <label for="dot-1">
          <span class="dot one"></span>
          <span>Male</span>
        </label>
        <label for="dot-2">
          <span class="dot two"></span>
          <span>Female</span>
        </label>
        <label for="dot-3">
          <span class="dot three"></span>
          <span>Prefer not to say</span>
        </label>
      </div>
    </div> */}
    </div>
    <div class="button">
      <input type="submit" value="Register"/>
    </div>
  </form>
</div>
        </>
    )
}
export default Post;