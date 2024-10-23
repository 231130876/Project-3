import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import untuk routing
import Navbar from "./components/Navbar";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Home2 from "./components/Home2";
import Home3 from "./components/Home3";
import Home4 from "./components/Home4";
import Home5 from "./components/Home5";
import Login from "./components/Login";  // Import halaman login
import Signup from './components/Signup';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar dan Nav akan tetap ada di semua halaman */}
        <Navbar />
        <Nav />

        {/* Routing ke halaman-halaman */}
        <Routes>
          {/* Halaman utama */}
          <Route path="/" element={
            <>
              <Home />
              <Home2 />
              <Home3 />
              <Home4 />
              <Home5 />
            </>
          } />
          
          {/* Halaman Login */}
          <Route path="/" element={<Home />} />    {/* Rute untuk Home */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> {/* Route untuk Signup */}
          <Route path="/movies" element={<Home4 />} /> {/* Route untuk Movies */}
          <Route path="/parks" element={<Home3 />} />
          <Route path="/cruise" element={<Home2 />} /> 
          {/* Tambahkan routing lain jika diperlukan */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
