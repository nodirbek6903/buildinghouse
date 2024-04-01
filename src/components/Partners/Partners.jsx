import React from 'react'
import "./Partners.css"
import Img1 from "../../images/partners1.jpg"
import Img2 from "../../images/partners2.jpg"
import Img3 from "../../images/partners3.jpg"
import Img4 from "../../images/partners4.jpg"
import Img5 from "../../images/partners5.jpg"
import Img6 from "../../images/partners6.jpg"
import Img7 from "../../images/partners7.jpg"
import Img8 from "../../images/partners8.jpg"
import TexImg from "../../images/qurilish.jpg"
import { useTranslation } from 'react-i18next'

const Partners = () => {
    const {t} = useTranslation()
  return (
    <div className='partners-container' id='information'>
        <div className="section-title">
            <span>{t("partners-title")}</span>
        </div>
        <div className="partners-img-container">
            <img src={Img1} alt="" />
            <img src={Img2} alt="" />
            <img src={Img3} alt="" />
            <img src={Img4} alt="" />
            <img src={Img5} alt="" />
            <img src={Img6} alt="" />
            <img src={Img7} alt="" />
            <img src={Img8} alt="" />
        </div>
        <div className="tex-container">
            <div className="tex-img">
                <img src={TexImg} alt="" />
            </div>
            <div className="tex-content">
                <h1 className="tex-title">Ataev Bahodir <br />Build</h1>
                <p className="tex-descr">
                    {t("partners-card-descr")}
                </p>
                <a href="#" className='tex-btn'>{t("partners-card-btn")}</a>
            </div>
        </div>
    </div>
  )
}

export default Partners