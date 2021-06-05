import React from "react";
import OprecCard from "./OprecCard";
import Title from "./Title";

const Division = ({ name, color, subdivisions }) => {
  return (
    <div className="w-full">
      <Title
        text={name}
        bgColor={color}
        color="white"
        borderColor="white"
        width="96"
        additional="mt-16 mb-6 mx-auto"
      />
      <div>
        <div className="flex flex-wrap flex-row justify-around">
          {subdivisions.map((subdivision, idx) => (
            <OprecCard
              key={idx}
              image={subdivision.image}
              title={subdivision.title}
              description={subdivision.description}
              color ={color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Division;
