import React from "react";

const Card = ({ image, title, body }) => {
  return (
    <div className="flex flex-col px-4 py-8 bg-yellow w-72 text-xl mx-auto mt-8 rounded-lg border-4 border-orange">
      <img src={image} alt={title} className="mx-auto " />
      <h4 className="font-bold">{title}</h4>
      <p>{body}</p>
    </div>
  );
};

export default Card;
