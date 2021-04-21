import React from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const Button = ({
  path,
  text,
  bgColor,
  width,
  color,
  scrollUp,
  px,
  py,
  borderColor,
  borderWidth,
  rounded,
  url,
  ...rest
}) => {
  if (scrollUp) {
    return (
      <div
        className="fixed bottom-12 right-16 w-16 h-16 bg-blue z-10 border-white shadow-2xl cursor-pointer grid place-items-center"
        onClick={() => scroll.scrollToTop({ duration: 500 })}
        style={{ borderWidth: 5, borderRadius: 25 }}
      >
        <img src="shapes/arrow-white.png" className="w-6 h-6" alt="arrow-white" />
      </div>
    );
  }
  if (url) {
    return (
      <a href={url} target="blank">
        <div
          className={`bg-${bgColor} w-${width} text-center text-${color} text-xl mt-4 px-${px} py-${py} rounded-${rounded} border-${borderWidth} border-${borderColor}`}
          {...rest}
        >
          {text}
        </div>
      </a>
    );
  }
  return (
    <Link to={`${path}`}>
      <div
        className={`bg-${bgColor} w-${width} text-center text-${color} text-xl mt-4 px-${px} py-${py} rounded-${rounded} border-${borderWidth} border-${borderColor}`}
        {...rest}
      >
        {text}
      </div>
    </Link>
  );
};

Button.defaultProps = {
  px: 3,
  py: 2,
  rounded: "lg",
};

export default Button;
