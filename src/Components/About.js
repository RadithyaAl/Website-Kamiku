import React from "react"
import { AboutKAMIKU, VisiMisi } from "../DataBase/Data_kamiku";
import '../Page_stylesheets/About.css';
const About = () => {
    return(
    <>
    <div className="About-MainText">
        <h1>About KAMIKU</h1>
        <img src="/Images/IMG_0605.jpg" alt="logo kamiku " className="ImageAbout"/>
        <p>{AboutKAMIKU.find(item => item.id === "tentangkamiku").deskripsi}</p>
        <h1> Visi dan Misi Kamiku </h1>
            <div>
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
    </div>
    
    </>

)
}
export default About