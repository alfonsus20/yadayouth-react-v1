import React from "react";
import { Link as LinkScroll } from "react-scroll";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ text, pathname, hash, mobile, toggleMenu }) => {
  const location = useLocation();

  if (location.pathname !== pathname) {
    return (
      <Link className="p-4 text-xl cursor-pointer" to={{ pathname, hash }}>
        {text}
      </Link>
    );
  }

  return (
    <LinkScroll
      className="p-4 text-xl cursor-pointer"
      to={hash}
      offset={-90}
      smooth
      duration={500}
      hashSpy
      onClick={() => toggleMenu(!mobile)}
    >
      {text}
    </LinkScroll>
  );
};

export default NavLink;
