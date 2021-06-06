import React from "react";
import { HashLink } from "react-router-hash-link";
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
  additional,
  fontSize,
  url,
  ...rest
}) => {
  if (scrollUp) {
    return (
      <div
        className="fixed bottom-12 right-16 w-16 h-16 bg-blue z-30 border-white shadow-2xl cursor-pointer grid place-items-center"
        onClick={() => scroll.scrollToTop({ duration: 500 })}
        style={{ borderWidth: 5, borderRadius: 25 }}
      >
        <img
          src="/shapes/arrow-white.png"
          className="w-6 h-6"
          alt="arrow-white"
        />
      </div>
    );
  } else if (url) {
    return (
      <a href={url} target="blank">
        <div
          className={`bg-${bgColor} w-${width} text-center text-${color} text-${fontSize} mt-4 px-${px} py-${py} rounded-${rounded} border-${borderWidth} border-${borderColor} ${additional}`}
          {...rest}
        >
          {text}
        </div>
      </a>
    );
  } else if (path) {
    return (
      <HashLink to={`${path}`} smooth>
        <div
          className={`bg-${bgColor} w-${width} text-center text-${color} text-${fontSize} mt-4 px-${px} py-${py} rounded-${rounded} border-${borderWidth} border-${borderColor} ${additional}`}
          {...rest}
        >
          {text}
        </div>
      </HashLink>
    );
  } else {
    return (
      <div
        className={`bg-${bgColor} w-${width} text-center cursor-pointer text-${color} text-${fontSize} mt-4 px-${px} py-${py} rounded-${rounded} border-${borderWidth} border-${borderColor} ${additional}`}
        {...rest}
      >
        {text}
      </div>
    );
  }
};

Button.defaultProps = {
  px: 3,
  py: 2,
  fontSize: "xl",
  rounded: "lg",
};

export default Button;
