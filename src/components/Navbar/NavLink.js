import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ text, pathname, hash, mobile, toggleMenu }) => {
  return (
    <Link
      className="px-4 text-xl cursor-pointer"
      to={{ pathname, hash }}
      onClick={() => toggleMenu(!mobile)}
    >
      {text}
    </Link>
  );
};

export default NavLink;