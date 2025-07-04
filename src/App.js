
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from "./Components/Home.js";
import About from './Components/About.js';
import Navbar from "./Components/Navbar.js";
import PerpustakaanKamiku from './Components/PerpustakaanKamiku.js';
import BlogKamiku from './Components/Blog.js';
import Footer from './Components/Footer.js';
import ProkerKamiku from './Components/ProkerKamiku.js';

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
    <Route path="/proker/:id" element={<ProkerKamiku />} />
  </Routes>
  <Footer/>
  </div>
  </BrowserRouter>
  )
}

export default App;
