import { Link, useNavigate } from 'react-router-dom'
import './Navbar-style.css'
import { useRef } from 'react';

const Navbar = () => {
    const navigate = useNavigate();
    const sidenavRef = useRef(null);
  
    const handleLogoClick = () => {
      navigate('/'); // Mengarahkan ke halaman Home
    }
    
    // fungsi openNav dan closeNav berfungsi untuk membuka bilah navigasi dengan memanipulasi DOM react
    const openNav = () => {
    
      if (sidenavRef.current) {
        sidenavRef.current.style.width = "250px"; 
      }
      
    };
    
    const closeNav = () => {

      if (sidenavRef.current) {
        sidenavRef.current.style.width = "0";
      }
    };
  
    return (
      <>
      
      <div className="Navigation-Bar">
        <div className="Top-nav-left">
          <img 
            src="/Images/Logo_Kamiku.png" 
            alt="Logo Kamiku" 
            className="Kamiku_Image" 
            onClick={handleLogoClick} 
          />
          <a className='Tulisan_Kamiku' onClick={handleLogoClick} href=''>KAMIKU</a>
        </div>
        <div className="Top-nav-right">
            <span className='Tombol-Menu' onClick={openNav}>&#9776;</span>
        </div>
      </div>
      
      <div ref={sidenavRef} className="sidenav">
          <a className="closebtn" onClick={closeNav} href=''>&times;</a>
          <Link to="/">Home</Link>
          <Link to="/PerpustakaanKamiku">Arsip Kamiku</Link>
          <Link to="/Blog">Blog</Link>
          <Link to="/About">About</Link>
      </div>
      </>
    );
  }
  
export default Navbar;