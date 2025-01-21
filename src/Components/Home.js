import '../Page_stylesheets/Home.css';
import {Proker, VisiMisi, AboutKAMIKU} from "../DataBase/Data_kamiku.js";
// import {Artikel} from "../DataBase/Data_artikel.js;"
import { useNavigate } from 'react-router-dom';

const Home = () => {
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
        <p>{AboutKAMIKU.find(item => item.id === "tentangkamiku").deskripsi}</p>
        <h2 style={{ paddingTop: 20 }}>Proyek Kerja Tahunan KAMIKU</h2>
        <div className='Tabel-proker-container'>
                {Proker.map((item, index) => (
                        <div key={index} className='Tabel-proker'  onClick={() => navigate(`/proker/${item.id}`)}>
                            <img src={item.gambar} alt={item.proker} className='proker-background'/>
                            <div className='proker-deskripsi'>
                                <p>{item.proker}</p>
                                <p>{item.deskripsi}</p>
                            </div>
                            
                        </div>
                    ))}
        </div>
        <div className='Visi-Misi-container'>
            <h2>Visi</h2>
            <p>{VisiMisi.find(item => item.id === "Visi").deskripsi}</p>
            <h2>Misi</h2>
            <ul>
                {VisiMisi.filter(item => item.id === "Misi").map(misi => (
                    <>
                        <li>{misi.p1}</li>
                        <li>{misi.p2}</li>
                        <li>{misi.p3}</li>
                        <li>{misi.p4}</li>
                        <li>{misi.p5}</li>
                        <li>{misi.p6}</li>
                        <li>{misi.p7}</li>
                        <li>{misi.p8}</li>
                        <li>{misi.p9}</li>
                    </>
                ))}
            </ul>
        </div>

        <div className='Pengumuman-Container'>
            <h2>Pengumuman</h2>
            <a href='https://linktr.ee/kgts2025' className='Pengumuman-Link'>
                Lihat Pengumuman
            </a>
        </div>


    </div>
    </div>
    </>
    )
}

export default Home
