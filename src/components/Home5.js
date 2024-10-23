import React from "react";
import './Home5.css';
import ForHome5 from '../assets/imgHome4.png';
import ForHome6 from '../assets/disneypresent.png';
import ForFooter from '../assets/footer.png';

const Home5 = () => {
    return (
        <div className="home5-container">
            <div className="home5">
                <img src={ForHome5} alt="Home 5" />
            </div>
            <div className="home6">
                <img src={ForHome6} alt="Home 6" />
            </div>
            <div className="footer">
                <img src={ForFooter} alt="Footer" />
            </div>
        </div>
    );
}

export default Home5;
