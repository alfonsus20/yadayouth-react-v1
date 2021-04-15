import React from "react";

const Title = ({ text, color, bgColor , borderColor, width}) => {
  return (
    <h2
      className={`text-center text-${color} text-2xl rounded-2xl bg-${bgColor} w-${width} py-2 border-${borderColor} border-4 font-bold`}
    >
      {text}
    </h2>
  );
};

Title.defaultProps = {
  width : 64
}

export default Title;