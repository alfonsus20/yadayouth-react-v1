import React from "react";
import { Link } from "react-router-dom";

const ArticleMiniCard = ({ title, time, image, id }) => {
  return (
    <Link
      to={`/articles/${id}`}
      className="flex flex-col-reverse sm:flex-row p-6 sm:p-8 rounded-lg mb-4 w-100 mx-auto md:space-x-2"
      style={{
        background:
          "linear-gradient(118.47deg, #FCC339 36.62%, #FDAE5A 67.58%)",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="flex flex-col w-full sm:w-6/12 justify-around mr-4">
        <h3 className="text-lg text-blue my-3 sm:my-0">{title}</h3>
        <time className="font-light text-blue text-sm">
          Published At : {time}
        </time>
      </div>
      <div className="w-full sm:w-6/12 grid place-items-center">
        <img
          src={image}
          alt="article"
          className="sm:ml-auto w-full sm:w-56 h-auto rounded-lg"
        />
      </div>
    </Link>
  );
};

export default ArticleMiniCard;
