import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/bc-logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        {/* Centered content */}
        <div className="navbar-content">
          <div className="navbar-left">
            <img src={logo} alt="Logo" className="login-logo" />
          </div>

          <div className="navbar-right">
            <ul className="menu">
              <li>Vision RAG</li>
              <li>PDF to HTML</li>
              <li>Blogger</li>
              <li>EcoLinguistic</li>
            </ul>
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User"
              className="user-image"
            />
            <button
              className="hamburger"
              onClick={() => setMenuOpen(true)}
            >
              &#9776;
            </button>
          </div>
        </div>
      </nav>

      {/* Off-canvas menu */}
      <div className={`offcanvas ${menuOpen ? "open" : ""}`}>
        <div className="offcanvas-header">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User"
            className="user-image-offcanvas"
          />
          <button className="close-btn" onClick={() => setMenuOpen(false)}>
            &times;
          </button>
        </div>
        <ul className="offcanvas-menu">
          <li>Vision RAG</li>
          <li>PDF to HTML</li>
          <li>Blogger</li>
          <li>EcoLinguistic</li>
        </ul>
      </div>

      {/* Overlay behind offcanvas */}
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}
    </>
  );
}
