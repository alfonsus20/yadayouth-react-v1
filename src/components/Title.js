import React from "react";

const Title = ({ text, color, bgColor , borderColor, width, px, py , fontSize}) => {
  return (
    <h2
      className={`text-center text-${color} text-${fontSize} rounded-2xl bg-${bgColor} w-${width} px-${px} py-${py} border-${borderColor} border-4 font-bold`}
    >
      {text}
    </h2>
  );
};

Title.defaultProps = {
  width : 64,
  py : 2,
  px : 0,
  fontSize : "2xl"
}

export default Title;