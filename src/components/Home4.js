import React from "react";
import './Home4.css';
import Mufasa from '../assets/Mufasa1.jpeg';
import Moana from '../assets/Moana2.jpeg';
import InsideOut from '../assets/Insideout3.jpeg';
import Deadpool from '../assets/Deadpool4.jpeg';
const Home4 = () => {
    return (
        <div className="home4">
            <h1>Film-Film Baru dan Akan Datang</h1>
            <p>Jangan lupa untuk menyaksikan film-film ini di bioskop kesayangan kamu</p>
            {/* Kontainer gambar untuk menata gambar secara horizontal */}
            <div className="home4-images">
                <img src={Mufasa} alt="Mufasa" />
                <img src={Moana} alt="Moana" />
                <img src={InsideOut} alt="Inside Out" />
                <img src={Deadpool} alt="Deadpool" />
            </div>
        </div>
    );
}

export default Home4;
