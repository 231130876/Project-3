import React from "react";
import { Link } from "react-router-dom";  // Import Link dari react-router-dom
import "./Navbar.css"; // Import file CSS
import disneyLogo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo di sebelah kiri */}
      <div className="navbar-logo">
        <img src={disneyLogo} alt="Disney Logo" />
      </div>

      {/* Menu item di tengah */}
      <ul className="navbar-menu">
        <li>
          <Link to="/">DISNEY+HOTSTAR</Link>  {/* Menggunakan Link untuk mengarah ke Home */}
        </li>
        <li>
          <Link to="/movies">MOVIES</Link>
        </li>
        <li>
          <Link to="/parks">PARKS</Link>
        </li>
        <li>
          <Link to="/cruise">CRUISE</Link>
        </li>
      </ul>

      {/* Link ke halaman login */}
      <div className="navbar-login">
        <Link to="/login">Login</Link>  {/* Menggunakan Link untuk navigasi */}
      </div>
    </nav>
  );
}

export default Navbar;
