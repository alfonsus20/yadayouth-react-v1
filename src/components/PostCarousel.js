import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import yadayouth from "../api/yadayouth";

const PostCarousel = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchInstagramPosts = async () => {
    try {
      setLoading(true);
      const { data } = await yadayouth.get(
        "/api/instagram/"
      );
      setLoading(false);
      setPosts(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchInstagramPosts();
  }, []);

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
      {loading ? (
        <div className="w-full h-100 grid place-items-center text-orange text-2xl">Loading...</div>
      ) : (
        <Slider {...settings}>
          {posts.map((post) => (
            <div key={post.id} className="md:p-2 lg:p-4 outline-none">
              <a href={post.permalink} target="blank">
                <img src={post.media_url} alt="feed" />
              </a>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default PostCarousel;
