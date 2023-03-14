
import './App.css';
import Login from './components/Login/Login';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Video from './components/Video/Video';
import Post from './components/Video/Post';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home/>}/>
            <Route path="/signin" element={<Login/>}/>
            <Route path="/video/:id" element={<Video/>}/>
            <Route path="/registerPost" element={<Post/>}/>
          </Routes>
        </BrowserRouter>
     
    </div>
  );
}

export default App;
