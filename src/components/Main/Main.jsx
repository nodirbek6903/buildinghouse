import React from 'react'
import "./Main.css"

const Main = () => {
  return (
    <div className='main-container'>
        <div className="main-content">
            <h1>Ataev <br /> Bahodir Build</h1>
            <p>Excellence in everything</p>
            <div className="main-buttons">
                <a href='/projects' className='main-btn'>Our Projects</a>
                <a href='tel: +998974839999' className='main-btn'>Connection</a>
            </div>
        </div>
    </div>
  )
}

export default Main