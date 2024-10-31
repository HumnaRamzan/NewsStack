import React from "react";
import Slider from "react-slick";

const HeroComp = ({ newsData }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="slider-container">
            <Slider {...settings}>
              {newsData.slice(0, 5).map((data, index) => {
                return (
                  <div className="slider-style" key={index}>
                    <div className="slider-image-box">
                      <img
                        src={data.urlToImage}
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="slider-detail">
                      <h3>{data.title}</h3>
                      <p>{data.description}</p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComp;
