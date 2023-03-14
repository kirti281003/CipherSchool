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
        <form className="LoginForm" onSubmit={loginSubmit} method="POST" action="/signin" >
<input type="text" className="logininput" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}></input>
<input type="password" className="logininput" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}></input>
<button>Submit</button>
        </form>
    </>)
}
export default Login;