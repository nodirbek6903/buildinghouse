import React from "react";
import "./News.css";
import News1 from "../../images/news1.jpg";
import News2 from "../../images/news2.jpg";
import News3 from "../../images/news3.jpg";
import News4 from "../../images/service-img2.jpg";

const News = () => {
  return (
    <div className="news-container">
      <div className="section-title">
        <span>All our news</span>
      </div>
      <div className="news-cards">
        <div className="news-card">
          <div className="news-image">
            <img src={News1} alt="News1" />
          </div>
          <div className="news-texts">
            <button className="news-btn">News</button>
            <h1 className="news-title">
              Who is a construction project manager?
            </h1>
            <p className="news-descr">
              The Discover Invest company has several construction project
              managers. This is a specialist responsible for the successful
              implementation of the construction site entrusted to him. He
              manages the entire process, from the planning stage and approval
              of project documentation to the commissioning of the building, and
              sometimes also performs post-project support. Latest
            </p>
          </div>
        </div>
        <div className="news-card">
          <div className="news-image">
            <img src={News2} alt="News1" />
          </div>
          <div className="news-texts">
            <button className="news-btn">News</button>
            <h1 className="news-title">
              Congratulations to everyone on the upcoming 2024!
            </h1>
            <p className="news-descr">
              The sophisticated interior design of the halls will create an
              atmosphere of comfort even before entering the apartment, and a
              convenient navigation system will help you easily get to the floor
              you need or exit to the territory
            </p>
          </div>
        </div>
        <div className="news-card">
          <div className="news-image">
            <img src={News3} alt="News1" />
          </div>
          <div className="news-texts">
            <button className="news-btn">News</button>
            <h1 className="news-title">Location</h1>
            <p className="news-descr">
              The transport infrastructure allows you to easily move to anywhere
              in the city: you just have to choose the desired and desired
              direction.
            </p>
          </div>
        </div>
        <div className="news-card">
          <div className="news-image">
            <img src={News4} alt="News1" />
          </div>
          <div className="news-texts">
            <button className="news-btn">News</button>
            <h1 className="news-title">
              We continue to introduce you to the multifunctional objects of
              Discover Invest.
            </h1>
            <p className="news-descr">
              We continue to introduce you to the multifunctional objects of
              Discover Invest. One of them is the Yangi Choshtepa residential
              complex built in the Yangihayat district of Tashkent. The total
              construction area is 12 hectares. To date, 29 houses have been
              built.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
