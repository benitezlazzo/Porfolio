import React, { useState } from "react";
import { Link } from "react-router-dom";
const Carta = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">Juan Ignacio Benitez Lazzo</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="/" onClick={Carta} class="navnav">Home</Link>
        <Link to="/Projects" onClick={Carta} class="navnav">Projects </Link>
        <Link to="/About" onClick={Carta} class="navnav">About</Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Carta;