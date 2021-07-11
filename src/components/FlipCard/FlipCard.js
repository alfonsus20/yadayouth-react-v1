import React, { useEffect, useRef, useState } from "react";
import classes from "./FlipCard.module.css";
import useWindowDimension from "../../utils/window-dimension";

const FlipCard = ({ front, back }) => {
  const flipCardRef = useRef(null);

  const { width } = useWindowDimension();

  const [cardHeight, setCardHeight] = useState(0);

  useEffect(() => {
    setCardHeight(flipCardRef.current.clientHeight);
  }, [width]);

  return (
    <div
      className={`${classes.flipCard}  w-full md:w-6/12 relative z-20 my-4 md:m-4 wrapper`}
      ref={flipCardRef}
    >
      <div className={`${classes.flipCardInner} relative w-full h-full`}>
        <div
          className={`${classes.front} bg-yellow text-center rounded-2xl px-2 py-6 absolute grid place-items-center front`}
          style={{ height: cardHeight }}
        >
          <div>
            <h4 className="text-blue font-book text-2xl ">Talking Points:</h4>
            <h3 className="text-white font-bold  text-4xl">{front}</h3>
          </div>
        </div>
        <div
          className={`${classes.back} border-4 border-blue rounded-2xl px-2 py-3 md:py-6 text-blue font-light absolute bg-white back`}
          style={{ height: cardHeight }}
        >
          <ul className={classes.points}>
            {back.map((item, idx) => (
              <li key={idx}> {item} </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
