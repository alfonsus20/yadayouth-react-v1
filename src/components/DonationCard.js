import React from "react";

const DonationCard = ({ goal, idx }) => {
  const color = idx % 4 === 0 || idx % 4 === 3 ? "yellow" : "orange";
  const bgColor = idx % 4 === 0 || idx % 4 === 3 ? "orange" : "yellow";
  return (
    <div className="px-4 lg:px-16 py-4 lg:py-8 w-full lg:w-1/2 text-lg">
      <div
        className={`px-4 lg:px-12 py-16 border-4 border-${color} bg-${bgColor} rounded-2xl text-center`}
      >
        <p>{goal}</p>
      </div>
    </div>
  );
};

export default DonationCard;
