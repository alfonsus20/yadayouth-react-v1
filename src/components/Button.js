import React from "react";
import { Link } from "react-router-dom";
import ArrowWhite from "../assets/arrow-white.png";
import { animateScroll as scroll } from "react-scroll";

const Button = ({ path, text, bgColor, width, color, scrollUp, px, py , borderColor, borderWidth, rounded,  ...rest }) => {
  if (scrollUp) {
    return (
      <div
        className="fixed bottom-12 right-16 p-4 bg-blue z-10 border-8 border-white shadow-2xl cursor-pointer    "
        onClick={() => scroll.scrollToTop({duration: 500})} style={{borderRadius: 25}}
      >
        <img src={ArrowWhite} className="w-4 h-4" alt="arrow-white" />
      </div>
    );
  }
  return (
    <Link to={`${path}`}>
      <div
        className={`bg-${bgColor} w-${width} text-${color} text-xl mt-4 px-${px} py-${py} rounded-${rounded} border-${borderWidth} border-${borderColor}`}
        {...rest}
      >
        {text}
      </div>
    </Link>
  );
};

Button.defaultProps = {
    px : 3,
    py: 2,
    rounded : 'lg'
}

export default Button;