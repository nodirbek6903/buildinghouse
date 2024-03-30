import React from "react";
import "./Footer.css";
import Logo from "../../images/footer-logo.png";
import {
  Fa500Px,
  FaGoogle,
  FaInstagram,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-cards">
        <div className="footer-card">
          <a href="#" className="logo">
            <img src={Logo} alt="" />
          </a>
          <span className="footer-text">Subscribe to our social networks</span>
          <div className="footer-icons">
            <a href="#" className="footer-icon">
              <FaInstagram className="icon" />
            </a>
            <a href="#" className="footer-icon">
              <FaTwitter className="icon" />
            </a>
            <a href="#" className="footer-icon">
              <FaTelegram className="icon" />
            </a>
            <a href="#" className="footer-icon">
              <FaGoogle className="icon" />
            </a>
          </div>
        </div>
        <div className="footer-card">
          <span>Our company</span>
          <a href="#" className="footer-link">
            Enterprises
          </a>
          <a href="#" className="footer-link">
            About Us
          </a>
          <a href="#" className="footer-link">
            News
          </a>
          <a href="#" className="footer-link">
            Our Projects
          </a>
        </div>
        <div className="footer-card">
          <span>Communication</span>
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
