import '../Page_stylesheets/Home.css';
import {Proker} from "../DataBase/Data_kamiku.js";
import { AboutKAMIKU } from '../DataBase/Data_kamiku.js';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const tentangkamiku = AboutKAMIKU.find(item => item.type === "tentangkamiku");
    const navigate = useNavigate();

    return (
    <> 
    <div className='Home-Style'>

        <div className="Image-Container">
            <img src="/Images/IMG_7197.JPG" alt="" className='kgts-background'/>
            <div className="Img-text-background">
                <div className='img-text'>
                <h1>Keluarga Mahasiswa ITB Kuningan</h1>
                </div>
            </div>
        </div>

    <div className='Home-MainText'>
        <p>{tentangkamiku.deskripsi}</p>
        <h2 style={{ paddingTop: 20 }}>Proker KAMIKU</h2>
        <div className='Tabel-proker-container'>
                {Proker.map((item, index) => (
                        <div key={index} className='Tabel-proker'  onClick={() => navigate(`/articles/${item.id}`)}>
                            <img src={item.gambar} alt={item.proker} className='proker-background'/>
                            <div className='proker-deskripsi'>
                                <p>{item.proker}</p>
                                <p>{item.deskripsi}</p>
                            </div>
                            
                        </div>
                    ))}
        </div>
    </div>
    </div>
    </>
    )
}

export default Home
