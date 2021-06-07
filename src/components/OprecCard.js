import React from "react";

const OprecCard = ({ image, title, description, color }) => {
  return (
    <div
      className={`flex flex-row items-center border-4 border-${color} rounded-lg ${title === 'Human Resource' || title === 'Research and Expansion' ? 'w-full md:mx-24': 'w-128'} bg-yellow my-4 p-4`}
    >
      <div className="flex-none">
        <img src={image} alt="position" className="w-40 h-auto md:w-auto" />
      </div>
      <div className="flex-auto">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-md font-light text-justify" dangerouslySetInnerHTML={{__html: description}}></p>
      </div>
    </div>
  );
};

export default OprecCard;
