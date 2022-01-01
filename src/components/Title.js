import React from "react";
import {
  getBackgroundColor,
  getBorderColor,
  getColor,
} from "../utils/functions";

const Title = ({ text, color, bgColor, borderColor }) => {
  return (
    <h2
      className={`text-center ${getColor(
        color
      )} text-2xl rounded-2xl ${getBackgroundColor(
        bgColor
      )} px-5 py-1 ${getBorderColor(borderColor)} border-4 font-bold mx-auto mb-6`}
      style={{ width: "fit-content" }}
    >
      {text}
    </h2>
  );
};

export default Title;
