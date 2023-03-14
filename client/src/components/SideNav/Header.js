import "./Header.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
function Header()
{
    return(
   

  <>
    <nav>
  <input type="checkbox" id="check" />
  <label for="check" class="checkbtn">
    <i class="fas fa-bars"></i>
  </label>
  <label for="" class="logo">
    <img src={logo}></img>

  </label>
  <ul  >

    <li><Link to="/"  onClick='closeNav()'>Home</Link></li>
    <li><Link to="/about" onClick='closeNav()'>About</Link></li>

    <li><Link to="/signin" onClick='closeNav()'>Login</Link></li>
    <li><Link to="/signup" onClick='closeNav()'>SignUp</Link></li>
    <li><Link to="/registerPost" onClick='closeNav()'>Post</Link></li>
    
  </ul>
</nav>
        </>
    )
}
export default Header;