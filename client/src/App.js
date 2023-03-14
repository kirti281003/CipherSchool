
import './App.css';
import Login from './components/Login/Login';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Video from './components/Video/Video';
import Post from './components/Video/Post';
import SideNav from './components/SideNav/Header';
import Header from './components/SideNav/Header';
import SignUp from './components/Login/SignUp';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <Header/>
          <Routes>
          <Route path="/" element={<Home/>}/>
            <Route path="/signin" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/video/:id" element={<Video/>}/>
            <Route path="/registerPost" element={<Post/>}/>
          </Routes>
        </BrowserRouter>
     
    </div>
  );
}

export default App;
