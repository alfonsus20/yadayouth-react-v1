import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import Feed1 from "../assets/feed-1.png";
import Feed2 from "../assets/feed-2.png";
import Feed3 from "../assets/feed-3.png";

const PostCarousel = () => {
  const [posts, setPosts] = useState([]);
  //   useEffect(() => {
  //     const data = axios.get("https://www.instagram.com/yadayouth.id/?__a=1", {
  //       headers: { "Access-Control-Allow-Origin": "*" },
  //     });
  //     console.log(data);
  //   }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
          <img src={Feed1} />
        </div>
        <div className= 'p-4 outline-none'>
          <img src={Feed3} />
        </div>
        <div className= 'p-4 outline-none'>
          <img src={Feed2} />
        </div>
        <div className= 'p-4 outline-none'>
          <img src={Feed1} />
        </div>
        <div className= 'p-4 outline-none'>
          <img src={Feed3} />
        </div>
        <div className= 'p-4 outline-none'>
          <img src={Feed2} />
        </div>
        <div className= 'p-4 outline-none'>
          <img src={Feed2} className="mx-auto" />
        </div>
        <div className= 'p-4 outline-none'>
          <img src={Feed3} className="mx-auto" />
        </div>
      </Slider>
    </div>
  );
};

export default PostCarousel;