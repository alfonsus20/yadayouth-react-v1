import React from "react";

const Speaker = ({ image, name, description }) => {
  return (
    <div className="flex flex-col w-full md:w-1/2 my-4 md:my-0 items-center">
      <img src={image} alt="speaker" className="w-80 h-auto mx-auto" />
      <div className="md:border-4 border-orange text-blue text-xl text-center font-book px-4 py-0 rounded-xl my-4 md:w-7/12">
        {name}
      </div>
      <p className="font-light text-center w-9/12 md:w-7/12">{description}</p>
    </div>
  );
};

export default Speaker;
