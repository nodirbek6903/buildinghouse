import React, { useEffect, useState } from "react";
import NavLogo from "../../images/footer-logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [checked, setChecked] = useState(false);
  const [selectedLanguages, setSelectedLanguages] = useState("EN");
  const [scroll,setScroll] = useState(false)

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
      }
      else{
        setScroll(false)
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
          <a href="#">Information</a>
          <a href="#">About Us</a>
          <a href="#">Enterprises</a>
          <a href="#" className="nav-logo">
            <img src={NavLogo} alt="Logo" />
          </a>
          <a href="#">Our advantages</a>
          <a href="#">News</a>
          <a href="#">Communication</a>
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
