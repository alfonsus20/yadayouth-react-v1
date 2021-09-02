import React from "react";

const TimelineCard = ({ period, date, phase }) => {
  return (
    <div className="text-center border-2 md:border-4 border-orange bg-yellow rounded-2xl p-3 md:p-4 flex flex-col justify-center">
      <p className="font-bold">{period}</p>
      <p className="font-bold">{date}</p>
      <p className="font-light text-sm">{phase}</p>
    </div>
  );
};

export default TimelineCard;
