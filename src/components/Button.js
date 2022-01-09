import React from "react";
import { HashLink } from "react-router-hash-link";
import { animateScroll as scroll } from "react-scroll";
import {
  getBackgroundColor,
  getBorderColor,
  getBorderRadius,
  getColor,
  getFontSize,
} from "../utils/functions";

const Button = ({
  path,
  text,
  bgColor,
  color,
  scrollUp,
  borderColor,
  rounded,
  fontSize,
  url,
}) => {
  if (scrollUp) {
    return (
      <button
        className="fixed bottom-12 right-16 w-16 h-16 bg-blue z-30 border-white shadow-2xl cursor-pointer grid place-items-center"
        onClick={() => scroll.scrollToTop({ duration: 500 })}
        style={{ borderWidth: 5, borderRadius: 25 }}
      >
        <img
          src="/shapes/arrow-white.png"
          className="w-6 h-6"
          alt="arrow-white"
        />
      </button>
    );
  } else if (url) {
    return (
      <a href={url} target="blank">
        <div
          className={`${getBackgroundColor(bgColor)} text-center ${getColor(
            color
          )} ${getFontSize(fontSize)} mt-4 px-3 py-2 ${getBorderRadius(rounded)} ${getBorderColor(
            borderColor
          )}`}
        >
          {text}
        </div>
      </a>
    );
  } else if (path) {
    return (
      <HashLink to={path} smooth>
        <div
          className={`${getBackgroundColor(bgColor)} text-center ${getColor(
            color
          )} ${getFontSize(fontSize)} mt-4 px-3 py-2 ${getBorderRadius(rounded)} ${getBorderColor(
            borderColor
          )}`}
        >
          {text}
        </div>
      </HashLink>
    );
  } else {
    return (
      <button
        className={`${getBackgroundColor(
          bgColor
        )} text-center cursor-pointer ${getColor(
          color
        )} ${getFontSize(fontSize)} mt-4 px-3 py-2 ${getBorderRadius(rounded)} ${getBorderColor(
          borderColor
        )}`}
      >
        {text}
      </button>
    );
  }
};

export default Button;
