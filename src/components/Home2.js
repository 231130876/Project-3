import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate dari react-router-dom
import './Home2.css';

const Home2 = () => {
    const navigate = useNavigate(); // Menginisialisasi navigate

    const handleClick = () => {
        navigate("/signup"); // Mengarahkan ke halaman sign up
    };

    return (
        <div className="home2">
            <h1>
                Dapatkan berita terbaru film <b>Disney, aplikasi dan yang lainnya! </b>
                <button onClick={handleClick}>Daftar sekarang</button>
            </h1>
        </div>
    );
}

export default Home2;
