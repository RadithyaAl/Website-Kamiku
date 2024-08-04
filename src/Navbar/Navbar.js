import { Link, useNavigate } from 'react-router-dom'
import './Navbar-style.css'

const Navbar = () => {
    const navigate = useNavigate();
    // Fungsi untuk menangani klik pada gambar

    const handleLogoClick = () => {
        navigate('/'); // Mengarahkan ke halaman Home
    }

    return (
        <div className='Navigation-Bar'>
        <ul>
            <li><img src="/Images/Logo_Kamiku.png" alt="" className='Kamiku_Image' onClick={handleLogoClick} /></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
             
        </ul>
        </div>

    )
}

export default Navbar