import { useParams } from 'react-router-dom';
import { Artikel } from '../DataBase/Data_artikel.js';
import '../Page_stylesheets/Article.css';
/*
    note : pelajari tentang useefect, usestate, dan useparams. serta bagian backend seperti axios dan lain-lain.
*/
const Article = () => {
    const { id } = useParams();
    const article = Artikel.find(item => item.id === id);

    if (!article) {
        return (
            <div className="article-container">
                <h1 className="error-message">404 - Article Not Found</h1>
            </div>
        );
    }

    return (
        <div className="article-container">
            <div className="article-header">
                <h1>{article.proker}</h1>
            </div>
            <div className="image-container">
                <img src={article.gambar} alt={article.proker} />
                <div className="img-overlay">Event Image</div>
            </div>
            <div className="article-content">
                <p>{article.P1}</p>
                <p>{article.P2}</p>
                <p>{article.P3}</p>
            </div>
        </div>
    );
};

export default Article;
