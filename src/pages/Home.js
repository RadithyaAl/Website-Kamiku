import '../Page_stylesheets/Home.css';

const Home = () => {
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
        <p>KAMIKU (Keluarga Mahasiswa ITB Kuningan) adalah sebuah komunitas mahasiswa ITB yang berasal dari Kuningan, Jawa Barat. Tempat berkumpul, belajar, berkreasi dan pulang kampung. Rumah kebersamaan</p>
        <div className='VisiMisi-Container'>
            <span className='VisiMisi'>
                <h3>VISI</h3>
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Penatibus nascetur hendrerit. sdfsdfskdjfjhkjd</p>
            </span>
            <span className='VisiMisi'>
                <h3>MISI</h3>
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Penatibus nascetur hendrerit.</p>
            </span>
            <span className='VisiMisi'>
                <h3>TUJUAN</h3>
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Penatibus nascetur hendrerit. consectetuer adipiscing elit. consectetuer adipiscing elit.</p>
            </span>
        </div>
    </div>
    </div>
    </>
    )
}

export default Home
