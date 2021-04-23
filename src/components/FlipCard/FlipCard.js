import React from "react";
import classes from "./FlipCard.module.css";

const FlipCard = ({ front, back }) => {
  return (
    <div className={`${classes.flipCard} my-4 md:m-4 w-full md:w-6/12 relative z-20`}>
      <div
        className={`${classes.flipCardInner} relative w-full h-full`}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className={`${classes.front} bg-yellow text-center rounded-2xl px-2 py-6 absolute grid place-items-center`}
        >
          <div>
            <h4 className="text-blue font-book text-2xl ">Talking Points:</h4>
            <h3 className="text-white font-bold  text-4xl">{front}</h3>
          </div>
        </div>
        <div
          className={`${classes.back} border-4 border-blue rounded-2xl px-2 py-6 text-blue font-light absolute bg-white`}
        >
          <ul className={classes.points}>
            {back.map((item, idx) => (
              <li key = {idx}> {item} </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
