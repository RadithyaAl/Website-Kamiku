import { Link, useNavigate } from 'react-router-dom'
import './Navbar-style.css'

const Navbar = () => {
    const navigate = useNavigate();
  
    const handleLogoClick = () => {
      navigate('/'); // Mengarahkan ke halaman Home
    }
  
    return (
      <div className="Navigation-Bar">
        <div className="Top-nav-left">
          <img 
            src="/Images/Logo_Kamiku.png" 
            alt="Logo Kamiku" 
            className="Kamiku_Image" 
            onClick={handleLogoClick} 
          />
          <a className='Tulisan_Kamiku' href=''>KAMIKU</a>
        </div>
        <div className="Top-nav-right">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
          </ul>
        </div>
      </div>
    );
  }
  
export default Navbar;