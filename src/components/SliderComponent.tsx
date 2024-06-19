// SliderComponent.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImg1 from "./../assets/slider/img1.png";
import SliderImg2 from "./../assets/slider/img2.png";
import SliderImg3 from "./../assets/slider/img3.png";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const images = [SliderImg1, SliderImg2, SliderImg3];

  return (
    <div className="container-sliders mx-auto">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="container-slider">
            <img className="slider-img" src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
