import React from "react";
import Slider from "react-slick";
import PuffLoader from "react-spinners/PuffLoader";
import { css } from "@emotion/react";

const PostCarousel = ({ posts, loading, slidesToShow, slidesToScroll }) => {
  const override = css`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll,
    autoplay: true,
    autoplayspeed: 2000,
    responsive: [
      {
        breakpoint: 1204,
        settings: {
          slidesToShow: slidesToShow > 2 ? 2 : 1,
          slidesToScroll: slidesToScroll > 2 ? 2 : 1,
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
        <div className="w-full h-100 grid place-items-center text-orange text-2xl">
          <div className="w-full">
            <div className="text-2xl text-orange text-center mb-2">
              Loading...
            </div>
            <div className="w-full h-24 relative">
              <PuffLoader loading={loading} color="#FF4C2E" css={override} />
            </div>
          </div>
        </div>
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
