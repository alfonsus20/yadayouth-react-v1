import React from "react";

const Title = ({ text, color, bgColor , borderColor}) => {
  return (
    <h2
      className={`text-center text-${color} text-2xl rounded-2xl bg-${bgColor} w-64 py-2 border-${borderColor} border-4`}
    >
      {text}
    </h2>
  );
};

export default Title;