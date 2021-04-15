import React from "react";
import { Link as LinkScroll } from "react-scroll";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ text, pathname, hash, mobile, toggleMenu }) => {
  const location = useLocation();

  if (location.pathname !== pathname) {
    return (
      <Link className="px-4 text-xl cursor-pointer" to={{ pathname, hash }} onClick={() => toggleMenu(!mobile)}>
        {text}
      </Link>
    );
  }

  return (
    <LinkScroll
      className="p-4 text-xl cursor-pointer"
      to={hash}
      offset={-96}
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