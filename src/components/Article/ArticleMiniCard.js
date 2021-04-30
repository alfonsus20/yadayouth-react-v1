import React from "react";

const ArticleMiniCard = () => {
  return (
    <div
      className="flex flex-col-reverse sm:flex-row py-8 px-8 rounded-lg mb-4 w-100 mx-auto md:space-x-2"
      style={{
        background:
          "linear-gradient(118.47deg, #FCC339 36.62%, #FDAE5A 67.58%)",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="flex flex-col w-full sm:w-6/12 justify-around mr-4">
        <h3 className="text-2xl text-blue  my-4 sm:my-0">
          Child Empowerment In Playing Phase
        </h3>
        <div className="flex flex-col sm:flex-row">
          <time className="font-light text-blue text-sm">
            Published At : Thursday, April 22th 2021
          </time>
        </div>
      </div>
      <div className="w-full sm:w-6/12 grid place-items-center">
        <img
          src="/pictures/feed.png"
          alt="article"
          className="sm:ml-auto w-full sm:w-56 h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default ArticleMiniCard;
