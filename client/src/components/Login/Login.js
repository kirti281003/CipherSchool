const { useState, useEffect } = require("react");
const { useDispatch, useSelector } = require("react-redux");
const { login } = require("../../actions/userAction");

function Login()
{const dispatch=useDispatch();
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const{error,user}=useSelector(state=>state.user)
    function loginSubmit(e)
    {e.preventDefault();
        dispatch(login(email,password));

    }
    useEffect(()=>{
        if(error)
        {
        window.alert(error)
        }
    },[error])
    return(<>
        {/* <form className="LoginForm" onSubmit={loginSubmit} method="POST" action="/signin" >
<input type="text" className="logininput" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}></input>
<input type="password" className="logininput" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}></input>
<button>Submit</button>
        </form> */}
        <div class="container">
  <div class="title">Registration</div>
  <form  onSubmit={loginSubmit} method="POST" action="/registerPost">
    <div class="user__details">
      <div class="input__box">
        <span class="details">Email</span>
        <input type="text"  onChange={(e)=>setEmail(e.target.value)} required/>
      </div>
      <div class="input__box">
        <span class="details">Password</span>
        <input type="password" onChange={(e)=>setPassword(e.target.value)} required/>
      </div>

      </div>
    <div class="button">
      <input type="submit" value="Register"/>
    </div>
  </form>
</div>
    </>)
}
export default Login;