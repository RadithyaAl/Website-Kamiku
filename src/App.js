
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from "./pages/Home.js";
import About from './pages/About.js';
import Navbar from "./Navbar/Navbar.js";
import PerpustakaanKamiku from './pages/PerpustakaanKamiku.js';
import BlogKamiku from './pages/Blog.js';

function App() {
  return(
  <BrowserRouter>
  <div className='App'>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/About' element={<About/>} />
    <Route path='/PerpustakaanKamiku' element={<PerpustakaanKamiku/>} />
    <Route path='/Blog' element={<BlogKamiku/>} />
  </Routes>
  </div>
  </BrowserRouter>
  )
}

export default App;
