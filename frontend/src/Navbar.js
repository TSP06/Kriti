import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Kritilogo from "./assets/Kritilogo.png";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const downloadGuidelines = () => {
    const link = document.createElement("a");
    link.href = "/assets/guidelines.pdf";
    link.download = "Guidelines.pdf";
    link.click();
  };

  const handleNavigation = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="top-right-bg"></div>
      <div className="navbar-content">
        <img src={Kritilogo} alt="logo" className="nav-logo" onClick={() => navigate("/")} />
        <button className="hamburger" onClick={toggleMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <div className={`nav-element ${isMenuOpen ? "open" : ""}`}>
          <div className="nav-item" onClick={() => handleNavigation("announcements")}>Announcements</div>
          <div className="nav-item" onClick={downloadGuidelines}>Guidelines</div>
          <div className="nav-item" onClick={() => handleNavigation("problem-statements")}>Problem Statements</div>
          <div className="nav-item" onClick={() => handleNavigation("faqs")}>FAQs</div>
          <button className="nav-login-button" onClick={handleLogin}>Login</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

