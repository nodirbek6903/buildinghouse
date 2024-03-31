import React from "react";
import "./Footer.css";
import Logo from "../../images/footer-logo.png";
import {
  FaGoogle,
  FaInstagram,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const {t} = useTranslation()
  return (
    <div className="footer-container">
      <div className="footer-cards">
        <div className="footer-card">
          <a href="#" className="logo">
            <img src={Logo} alt="" />
          </a>
          <span className="footer-text">{t("footer-card1-text")}</span>
          <div className="footer-icons">
            <a href="https://instagram.com/nod1rbek_023" target="_blank" className="footer-icon">
              <FaInstagram className="icon" />
            </a>
            <a href="https://twitter.com" target="_blank" className="footer-icon">
              <FaTwitter className="icon" />
            </a>
            <a href="https://t.me/Nodirbek_6903" target="_blank" className="footer-icon">
              <FaTelegram className="icon" />
            </a>
            <a href="https://google.com" target="_blank" className="footer-icon">
              <FaGoogle className="icon" />
            </a>
          </div>
        </div>
        <div className="footer-card">
          <span>{t("footer-card2-text1")}</span>
          <a href="#enterprises" className="footer-link">
          {t("footer-card2-text2")}
          </a>
          <a href="#about" className="footer-link">
          {t("footer-card2-text3")}
          </a>
          <a href="#news" className="footer-link">
          {t("footer-card2-text4")}
          </a>
          <a href="#projects" className="footer-link">
          {t("footer-card2-text5")}
          </a>
        </div>
        <div className="footer-card">
          <span>{t("footer-card3-text")}</span>
          <a href="tel:+998903646903" className="footer-link">
            +998903646903
          </a>
          <a href="tel:+998940410403" className="footer-link">
            +998940410403
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
