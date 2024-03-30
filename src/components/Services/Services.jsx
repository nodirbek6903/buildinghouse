import React, { useEffect } from "react";
import "./Services.css";
import SerImg1 from "../../images/service-img1.png";
import SerImg2 from "../../images/service-img2.png";
import SerImg3 from "../../images/service-img3.png";
import SerImg4 from "../../images/service-img4.png";
import CompanyImg from "../../images/company-image2.jpg";
import anime from "animejs";

const Services = () => {
  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY>100){
        anime({
          targets: ".company-cards .employe h1 span",
          innerHTML: [0, 120],
          duration: 1500,
          round: 1,
          easing: "linear",
        });
        anime({
          targets: ".company-cards .objects h1 span",
          innerHTML: [0, 43],
          duration: 1500,
          round: 1,
          easing: "linear",
        });
        anime({
          targets: ".company-cards .equipment h1 span",
          innerHTML: [0, 250],
          duration: 1500,
          round: 1,
          easing: "linear",
        });
        anime({
          targets: ".company-cards .years h1 span",
          innerHTML: [0, 2],
          duration: 1500,
          round: 1,
          easing: "linear",
        });
      }
    }
    window.addEventListener("scroll",handleScroll)
    return () => {
      window.addEventListener("scroll",handleScroll)
    }
  }, []);
  return (
    <div className="services-container">
      <div className="section-title">
        <span>Our services</span>
      </div>
      <div className="services-cards">
        <div className="div">
          <div className="card card1">
            <h3>You can get free information from our company's specialists</h3>
            <img src={SerImg1} className="card-image" alt="Image1" />
          </div>
          <div className="card card2">
            <h3>Documents clearance</h3>
            <img src={SerImg2} className="card-image" alt="Image1" />
          </div>
        </div>
        <div className="div">
          <div className="card card3">
            <h3>Repair correction service</h3>
            <img src={SerImg3} className="card-image" alt="Image1" />
          </div>
          <div className="card card4">
            <h3>Team of professionals</h3>
            <img src={SerImg4} className="card-image" alt="Image1" />
          </div>
        </div>
      </div>

      <div className="company">
        <div className="company-statistics">
          <div className="company-title">
            <span>Our company</span>
          </div>
          <div className="company-cards">
            <div className="employe">
              <h1>
                <span>0</span> +
              </h1>
              <span>Number of employee</span>
            </div>
            <div className="objects">
              <h1>
                <span>0</span> +
              </h1>
              <span>Objects</span>
            </div>
            <div className="equipment">
              <h1>
                <span>0</span> +
              </h1>
              <span>Special equipment</span>
            </div>
            <div className="years">
              <h1>
                <span>0</span> +
              </h1>
              <span>14 years on the market</span>
            </div>
          </div>
        </div>
        <div className="company-img">
          <img src={CompanyImg} alt="CompanyImage" />
        </div>
      </div>
    </div>
  );
};

export default Services;
