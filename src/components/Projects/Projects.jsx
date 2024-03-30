import React from "react";
import "./Projects.css";
import MagicCity from "../../images/magic-city.jpg";
import GardenRes from "../../images/gardenResidence.jpg";
import Fonon from "../../images/fonon.avif";
import Invento from "../../images/invento.avif";
import PresidentSchool from "../../images/presidentschool.jpg";
import Boulevard from "../../images/boulevard.jpg";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const {t} = useTranslation()
  return (
    <div className="projects-container">
      <div className="section-title">
        <span>{t("project-title")}</span>
      </div>
      <div className="projects-cards">
        <div className="card">
          <div className="card-texts">
            <span className="card-title">Magic City</span>
            <span className="card-descr">
            {t("project-card1-descr")}
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
            {t("project-card2-descr")}
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
            {t("project-card3-descr")}
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
            {t("project-card4-descr")}
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
            {t("project-card5-descr")}
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
            {t("project-card6-descr")}
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
