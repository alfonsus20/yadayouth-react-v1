import React from "react";
import NavLink from "./NavLink";

const NavList = () => {
  return (
    <ul className = 'list-none flex flex-row ml-auto'>
      <NavLink text="Home" />
      <NavLink text="About" />
      <NavLink text="Services" />
      <NavLink text="Donate" />
      <NavLink text="Contact Us" />
    </ul>
  );
};

export default NavList;
