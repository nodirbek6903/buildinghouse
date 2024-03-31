import React, { useEffect, useState } from "react";
import NavLogo1 from "../../images/footer-logo.png";
import NavLogo2 from "../../images/ataevBahodir.png";
import "./Navbar.css";
import { useTranslation } from "react-i18next";
import { FaBars, FaPhoneAlt, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [logoSrc, setLogoSrc] = useState(NavLogo2);
  const [mobNavbar,setMobNavbar] = useState(false);
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const handleMobNavbar = () => {
    setMobNavbar(!mobNavbar);
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
        setLogoSrc(NavLogo1);
      } else {
        setScroll(false);
        setLogoSrc(NavLogo2);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  return (
    <div className="nav-container">
      <div className={`container ${scroll ? "active" : ""}`}>
        <div className={`nav-lists ${scroll ? "active" : ""}`}>
          <a href="#" className="nav-list">
            {t("nav-link1")}
          </a>
          <a href="#about" className="nav-list">
            {t("nav-link2")}
          </a>
          <a href="#enterprises" className="nav-list">
            {t("nav-link3")}
          </a>
          <a href="#" className="nav-logo">
            <img src={logoSrc} alt="Logo" />
          </a>
          <a href="#" className="nav-list">
            {t("nav-link4")}
          </a>
          <a href="#news" className="nav-list">
            {t("nav-link5")}
          </a>
          <a href="#communication" className="nav-list">
            {t("nav-link6")}
          </a>
          <select
            name="languages"
            id=""
            onChange={handleLanguageChange}
            className="nav-languages"
          >
            <option value="en">EN</option>
            <option value="ru">RU</option>
            <option value="uz">UZ</option>
          </select>
        </div>
      </div>
      <div className={`mob-container ${scroll ? "active" : ""}`}>
        <div className="mob-icons">
        <FaBars className="mob-icon bars" onClick={handleMobNavbar} />
        </div>
        <div className={`mob-nav-items ${mobNavbar ? "mob-active" : ""}`}>
          <FaTimes className="mob-close close" onClick={handleMobNavbar} />
          <div className="mob-nav-item">
          <a href="#" className="mob-nav-list">
            {t("nav-link1")}
          </a>
          <a href="#about" className="mob-nav-list">
            {t("nav-link2")}
          </a>
          <a href="#enterprises" className="mob-nav-list">
            {t("nav-link3")}
          </a>
          <a href="#" className="mob-nav-list">
            {t("nav-link4")}
          </a>
          <a href="#news" className="mob-nav-list">
            {t("nav-link5")}
          </a>
          <a href="#communication" className="mob-nav-list">
            {t("nav-link6")}
          </a>
          <select className="mob-nav-languages">
            <option value="en">EN</option>
            <option value="ru">RU</option>
            <option value="uz">UZ</option>
          </select>
          </div>
        </div>
        <a href="#" className="mob-nav-logo">
            <img src={NavLogo2} alt="Logo" />
          </a>
          <div className="mob-icons">
          <a href="tel:+998903646903"><FaPhoneAlt className="mob-icon" /></a>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
