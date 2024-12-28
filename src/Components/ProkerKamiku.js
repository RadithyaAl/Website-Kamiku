import { useParams } from 'react-router-dom';
import { Proyek_Kerja } from '../DataBase/Data_proker.js';
import '../Page_stylesheets/Article.css';

const ProkerKamiku = () => {
    const { id } = useParams();
    const Proyek = Proyek_Kerja.find(item => item.id === id);

    if (!Proyek) {
        return (
            <div className="article-container">
                <h1 className="error-message">404 - Article Not Found</h1>
            </div>
        );
    }

    return (
        <div className="article-container">
            <div className="article-header">
                <h1>{Proyek.proker}</h1>
            </div>
            <div className="image-container">
                <img src={Proyek.gambar} alt={Proyek.proker} />
            </div>
            <div className="article-content">
                <p>{Proyek.P1}</p>
                <p>{Proyek.P2}</p>
                <p>{Proyek.P3}</p>
                <h2>Dokumentasi</h2>
                <img src={Proyek.gambar2} alt={Proyek.proker} />
                <img src={Proyek.gambar3} alt={Proyek.proker} />
                <img src={Proyek.gambar4} alt={Proyek.proker} />
                <img src={Proyek.gambar5} alt={Proyek.proker} />
                <img src={Proyek.gambar6} alt={Proyek.proker} />

            </div>
        </div>
    );
};

export default ProkerKamiku;
