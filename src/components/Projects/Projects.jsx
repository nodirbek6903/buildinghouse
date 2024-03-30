import React from "react";
import "./Projects.css";
import MagicCity from "../../images/magic-city.jpg";
import GardenRes from "../../images/gardenResidence.jpg";
import Fonon from "../../images/fonon.avif";
import Invento from "../../images/invento.avif";
import PresidentSchool from "../../images/presidentschool.jpg";
import Boulevard from "../../images/boulevard.jpg";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="section-title">
        <span>Our Projects</span>
      </div>
      <div className="projects-cards">
        <div className="card">
          <div className="card-texts">
            <span className="card-title">Magic City</span>
            <span className="card-descr">
              This is a large-scale socially significant project. The cultural
              and entertainment cluster in Tashkent is one of the new
              attractions.
            </span>
          </div>
          <div className="card-img">
            <img src={MagicCity} alt="" />
          </div>
        </div>
        <div className="card">
          <div className="card-texts">
            <span className="card-title">Gardens Residence</span>
            <span className="card-descr">
              Multifunctional residential complex created to provide comfort to
              the residents of Uzbekistan.
            </span>
          </div>
          <div className="card-img">
            <img src={GardenRes} alt="" />
          </div>
        </div>
        <div className="card">
          <div className="card-texts">
            <span className="card-title">Fonon</span>
            <span className="card-descr">
              A grandiose residential area in the heart of the capital.
            </span>
          </div>
          <div className="card-img">
            <img src={Fonon} alt="" />
          </div>
        </div>
        <div className="card">
          <div className="card-texts">
            <span className="card-title">Invento</span>
            <span className="card-descr">
              Fonon is a jewelry production plant in Uzbekistan built on the
              basis of Italian ones in 2020. Fonon is the only large enterprise
              in Central Asia producing jewelry from precious metals in European
              and Oriental styles,
            </span>
          </div>
          <div className="card-img">
            <img src={Invento} alt="" />
          </div>
        </div>
        <div className="card" id="about">
          <div className="card-texts">
            <span className="card-title">Presidential School</span>
            <span className="card-descr">
              International kindergarten and school located in the international
              business center of Tashkent City.
            </span>
          </div>
          <div className="card-img">
            <img src={PresidentSchool} alt="" />
          </div>
        </div>
        <div className="card">
          <div className="card-texts">
            <span className="card-title">Boulevard</span>
            <span className="card-descr">
              This is an educational institution that provides knowledge at an
              international level
            </span>
          </div>
          <div className="card-img">
            <img src={Boulevard} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
