import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { HashLink } from "react-router-hash-link";

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

  const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -96;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <LinkScroll
      activeClass = 'active'
      className="px-4 text-xl cursor-pointer"
      to={hash}
      onClick={() => toggleMenu(!mobile)}
      offset = {-96}
      smooth
      duration={500}
    >
      {text}
    </LinkScroll>
    // <HashLink to={{ pathname, hash }} smooth scroll={el=>scrollWidthOffset(el)}>
    //   {text}
    // </HashLink>
  );
};

export default NavLink;
