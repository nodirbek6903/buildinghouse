import React from 'react'
import "./Main.css"
import { useTranslation } from 'react-i18next'

const Main = () => {
  const {t} = useTranslation()
  return (
    <div className='main-container'>
        <div className="main-content">
            <h1>Ataev <br /> Bahodir Build</h1>
            <p>{t("main-text")}</p>
            <div className="main-buttons">
                <a href='#projects' className='main-btn'>{t("main-btn1")}</a>
                <a href='tel: +998974839999' className='main-btn'>{t("main-btn2")}</a>
            </div>
        </div>
    </div>
  )
}

export default Main