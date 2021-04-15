import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { Link } from "react-router-dom";

const PostCarousel = () => {
  const [posts, setPosts] = useState([]);

  // const fetchInstagramPosts = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       "https://yadayouth-backend.vercel.app/api/instagram/"
  //     );
  //     setPosts(data.data);
  //     console.log(data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // useEffect(() => {
  //   fetchInstagramPosts();
  // },[posts]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplayspeed: 2000,
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
        {posts.map((post) => (
          <div key={post.id} className="p-2 outline-none">
            <Link to={post.permalink}>
              <img src={post.media_url} alt="feed" />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PostCarousel;
