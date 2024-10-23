import React from "react";
import './Nav.css';
import disneyLogo from '../assets/logo+.png';

const Nav = () => {
    return (
        <div className="nav">
            <p>
                FILM & SERIAL SERU HANYA DI {" "}
                <img src={disneyLogo} alt="Disney Logo" className="logo" />
            </p>
        </div>
    );
}

export default Nav;
