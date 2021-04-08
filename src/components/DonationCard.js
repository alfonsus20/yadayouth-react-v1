import React from "react";

const DonationCard = ({goal, idx}) => {
  const color = idx % 4 === 0 || idx % 4 === 3 ? "yellow" : "orange";
  return (
    <div className="px-16 py-8 w-1/2">
      <div
        className={`px-12 py-8 border-4 border-${color} rounded-2xl text-center`}
      >
        <span className={`text-${color} text-2xl`}>{idx + 1}</span>
        <p>{goal}</p>
      </div>
    </div>
  );
};

export default DonationCard;
