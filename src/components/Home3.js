import React from "react";
import './Home3.css';
import TheJudge from '../assets/TheJudge1.jpeg';
import Agatha from '../assets/Agatha2.jpeg';
import SeoulBuster from '../assets/SeoulBusters3.jpeg';
import Grotes from '../assets/Grotesquerie4.jpeg';

const Home3 = () => {
    return (
        <div className="home3">
            {/* Setiap section berisi gambar dan teks */}
            <div className="section">
                <img src={TheJudge} className="image TJ" alt="The Judge" />
                <h1 className="title">THE JUDGE FROM HELL NOW ON DISNEY+HOTSTAR</h1>
                <p className="stream-now">STREAM SEKARANG</p>
            </div>

            <div className="section">
                <img src={Agatha} className="image Ag" alt="Agatha" />
                <h1 className="title">AGATHA ALL ALONG NOW ON DISNEY+HOTSTAR</h1>
                <p className="stream-now">STREAM SEKARANG</p>
            </div>

            <div className="section">
                <img src={SeoulBuster} className="image SB" alt="Seoul Buster" />
                <h1 className="title">SEOUL BUSTERS NOW ON DISNEY+HOTSTAR</h1>
                <p className="stream-now">STREAM SEKARANG</p>
            </div>

            <div className="section">
                <img src={Grotes} className="image Gr" alt="Grotesquerie" />
                <h1 className="title">GROTESQUERIE NOW ON DISNEY+HOTSTAR</h1>
                <p className="stream-now">STREAM SEKARANG</p>
            </div>
        </div>
    );
}

export default Home3;
