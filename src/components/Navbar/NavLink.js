import React from "react";
import { NavHashLink, HashLink } from "react-router-hash-link";

const NavLink = ({ text, pathname, hash, mobile, toggleMenu }) => {
  if (hash) {
    return (
      <HashLink
        className="px-4 text-xl cursor-pointer"
        to={{pathname, hash}}
        smooth
        onClick={() => toggleMenu(!mobile)}
      >
        {text}
      </HashLink>
    );
  }
  return (
    <NavHashLink
      className="px-4 text-xl cursor-pointer"
      to={pathname}
      smooth
      activeClassName="active"
      onClick={() => toggleMenu(!mobile)}
    >
      {text}
    </NavHashLink>
  );
};

export default NavLink;
