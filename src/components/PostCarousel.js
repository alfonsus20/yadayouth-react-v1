import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";

const PostCarousel = () => {
  const [posts, setPosts] = useState([]);

  const fetchInstagramPosts = async () => {
    try {
      const { data } = await axios.get(
        "https://yadayouth-backend.vercel.app/api/instagram/"
      );
      setPosts(data.data);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchInstagramPosts();
  },[]);

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
          <div key={post.id} className="p-8 outline-none">
            <a href={post.permalink} target='blank'>
              <img src={post.media_url} alt="feed" />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PostCarousel;