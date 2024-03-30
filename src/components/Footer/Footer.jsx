import React from 'react'
import "./Footer.css"
import Logo from "../../images/footer-logo.png"
import {FaGoogle, FaInstagram,FaTelegram,FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="footer-cards">
        <div className="footer-card">
          <a href="#" className="logo">
            <img src={Logo} alt="" />
          </a>
          <span className="footer-text">Subscribe to our social networks</span>
          <div className="footer-icons">
            <a href="#"><FaInstagram className='footer-icon' /></a>
            <a href="#"><FaTwitter className='footer-icon' /></a>
            <a href="#"><FaTelegram className='footer-icon' /></a>
            <a href="#"><FaGoogle className='footer-icon' /></a>
          </div>
        </div>
        <div className="footer-card">
          <span>Our company</span>
          <a href="#">Enterprises</a>
          <a href="#">About Us</a>
          <a href="#">News</a>
          <a href="#">Our Projects</a>
        </div>
        <div className="footer-card">
          <span>Communication</span>
          <a href="tel:+998903646903">+998903646903</a>
          <a href="tel:+998940410403">+998940410403</a>
        </div>
      </div>
    </div>
  )
}

export default Footer