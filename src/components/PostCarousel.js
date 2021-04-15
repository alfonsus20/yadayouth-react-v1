import React from "react";
import Slider from "react-slick";
import Feed1 from "../assets/feed-1.png";
import Feed2 from "../assets/feed-2.png";
import Feed3 from "../assets/feed-3.png";

const PostCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplayspeed : 2000,
    responsive: [
      {
        breakpoint: 1204,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <div className= 'p-2 outline-none'>
          <img src={Feed1}  alt='feed'/>
        </div>
        <div className= 'p-4 outline-none'>
          <img src={Feed3} alt='feed' />
        </div>
        <div className= 'p-4 outline-none'>
          <img src={Feed2}  alt='feed'/>
        </div>
        <div className= 'p-4 outline-none'>
          <img src={Feed1}  alt='feed'/>
        </div>
        <div className= 'p-4 outline-none'>
          <img src={Feed3}  alt='feed'/>
        </div>
        <div className= 'p-4 outline-none'>
          <img src={Feed2}  alt='feed'/>
        </div>
      </Slider>
    </div>
  );
};

export default PostCarousel;