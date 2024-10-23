import React from "react";
import './Home.css';
import Seventeen from "../assets/seventeen-bg.jpeg";
import InsideOutVideo from "../assets/insideOut2-video.mp4";
import DisneyHoliday from "../assets/disneyHoliday-bg.jpeg";
import SeventeenTeks from "../assets/seventeen-teks.png"; // Logo yang akan di atas slide
import InsideOut from "../assets/insideOut2-teks.png";
import DisneyAdventure from "../assets/DisneyAdventure-teks.png";

const Home = () => {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Seventeen} className="d-block w-100" alt="Seventeen Show" />
          <img src={SeventeenTeks} alt="Logo" className="overlay-logo1" /> {/* Gambar di atas */}
        </div>
        <div className="carousel-item">
          <video className="d-block w-100" autoPlay loop muted>
            <source src={InsideOutVideo} type="video/mp4" />
          </video>
          <img src={InsideOut} alt="Logo" className="overlay-logo2" /> {/* Gambar di atas */}
        </div>
        <div className="carousel-item">
          <img src={DisneyHoliday} className="d-block w-100" alt="Disney Awards" />
          <img src={DisneyAdventure} alt="Logo" className="overlay-logo3" /> {/* Gambar di atas */}
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Home;
