import React from "react";

const AmbassadorBenefitCard = ({ title, description, index }) => {
  return (
    <div
      className={`w-full ${
        index === 4 ? "md:col-span-2" : "md:col-span-1"
      } px-8 py-6 text-center bg-yellow rounded-lg border-4 border-orange ${
        index === 4 ? "md:max-w-lg" : "md:max-w-sm"
      } mx-auto flex flex-col justify-center items-center`}
    >
      <h4 className="text-lg font-bold">
        <em>{title}</em>
      </h4>
      <p className="font-book">{description}</p>
    </div>
  );
};

export default AmbassadorBenefitCard;
