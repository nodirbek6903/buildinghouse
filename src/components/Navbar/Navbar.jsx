import React, { useEffect, useState } from "react";
import NavLogo1 from "../../images/footer-logo.png";
import NavLogo2 from "../../images/ataevBahodir.png"
import "./Navbar.css";

const Navbar = () => {
  const [checked, setChecked] = useState(false);
  const [selectedLanguages, setSelectedLanguages] = useState("EN");
  const [scroll,setScroll] = useState(false)
  const [logoSrc,setLogoSrc] = useState(NavLogo2);

  const handleLanguageChange = (language) => {
    setSelectedLanguages(language);
    setChecked(false);
  };
  const handleClickLanguage = () => {
    setChecked(!checked);
  }

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 20){
        setScroll(true)
        setLogoSrc(NavLogo1)
      }
      else{
        setScroll(false)
        setLogoSrc(NavLogo2)
      }
    }

    window.addEventListener("scroll",handleScroll)
    return () => {
      window.addEventListener("scroll",handleScroll)
    }
  },[scroll])

  return (
    <div className={`nav-container ${scroll ? "active" : ""}`}>
      <div className="container">
        <div className={`nav-lists ${scroll ? "active" : ""}`}>
          <a href="#" className="nav-list">Information</a>
          <a href="#about" className="nav-list">About Us</a>
          <a href="#enterprises" className="nav-list">Enterprises</a>
          <a href="#" className="nav-logo">
            <img src={logoSrc} alt="Logo" />
          </a>
          <a href="#" className="nav-list">Our advantages</a>
          <a href="#news" className="nav-list">News</a>
          <a href="#communication" className="nav-list">Communication</a>
          <input
            type="checkbox"
            className="checkbox-btn"
            onChange={() => setChecked(!checked)}
          />
          <div className="nav-languages">
            <a href="#" className="selected-languages" onClick={handleClickLanguage}>{selectedLanguages}</a>
            {checked && (
              <div className="languages">
              <a
                href="#"
                onClick={() => handleLanguageChange("EN")}
                className={selectedLanguages === "EN" ? "selected" : ""}
              >
                EN
              </a>
              <a
                href="#"
                onClick={() => handleLanguageChange("RU")}
                className={selectedLanguages === "RU" ? "selected" : ""}
              >
                RU
              </a>
              <a
                href="#"
                onClick={() => handleLanguageChange("UZ")}
                className={selectedLanguages === "UZ" ? "selected" : ""}
              >
                UZ
              </a>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
