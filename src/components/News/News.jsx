import React from "react";
import "./News.css";
import News1 from "../../images/news1.jpg";
import News2 from "../../images/news2.jpg";
import News3 from "../../images/news3.jpg";
import News4 from "../../images/service-img2.jpg";
import { useTranslation } from "react-i18next";

const News = () => {
  const {t} = useTranslation()
  return (
    <div className="news-container" id="news">
      <div className="section-title">
        <span>{t("news-title")}</span>
      </div>
      <div className="news-cards">
        <div className="news-card">
          <div className="news-image">
            <img src={News1} alt="News1" />
          </div>
          <div className="news-texts">
            <button className="news-btn">{t("news-card-btn")}</button>
            <h1 className="news-title">
            {t("news-card1-title")}
            </h1>
            <p className="news-descr">
              {t("news-card1-descr")}
            </p>
          </div>
        </div>
        <div className="news-card">
          <div className="news-image">
            <img src={News2} alt="News1" />
          </div>
          <div className="news-texts">
            <button className="news-btn">{t("news-card-btn")}</button>
            <h1 className="news-title">
            {t("news-card2-title")}
            </h1>
            <p className="news-descr">
            {t("news-card2-descr")}
            </p>
          </div>
        </div>
        <div className="news-card">
          <div className="news-image">
            <img src={News3} alt="News1" />
          </div>
          <div className="news-texts">
            <button className="news-btn">{t("news-card-btn")}</button>
            <h1 className="news-title">{t("news-card3-title")}</h1>
            <p className="news-descr">
            {t("news-card3-descr")}
            </p>
          </div>
        </div>
        <div className="news-card">
          <div className="news-image">
            <img src={News4} alt="News1" />
          </div>
          <div className="news-texts">
            <button className="news-btn">{t("news-card-btn")}</button>
            <h1 className="news-title">
            {t("news-card4-title")}
            </h1>
            <p className="news-descr">
            {t("news-card4-descr")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
