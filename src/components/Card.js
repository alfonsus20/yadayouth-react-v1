import React from "react";

const Card = ({ image, title, body }) => {
  return (
    <div className="flex flex-col px-4 py-8 bg-yellow w-72 text-xl mx-auto mt-8 rounded-lg border-4 border-orange h-auto">
      <img src={image} alt={title} className="mx-auto h-3/5" />
      <h4 className="font-medium my-1">{title}</h4>
      <p className='font-light'>{body}</p>
    </div>
  );
};

export default Card;
