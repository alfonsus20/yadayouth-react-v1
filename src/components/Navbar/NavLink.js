import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

const NavLink = ({ text, pathname, hash, mobile, toggleMenu }) => {
  const location = useLocation();
  if (location.pathname !== pathname) {
    return (
      <Link
        to={{ pathname, hash }}
        className="px-4 text-xl cursor-pointer"
        onClick={() => toggleMenu(!mobile)}
      >
        {text}
      </Link>
    );
  }
  return (
    <LinkScroll
      activeClass = 'active'
      spy
      className="px-4 text-xl cursor-pointer"
      to={hash}
      onClick={() => toggleMenu(!mobile)}
      offset = {-77}
      smooth
      duration={500}
    >
      {text}
    </LinkScroll>
  );
};

export default NavLink;
