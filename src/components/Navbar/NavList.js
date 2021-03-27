import React from "react";
import NavLink from "./NavLink";

const NavList = ({menu}) => {
  return (
    <ul className = {`list-none ${menu ? 'flex': 'hidden'} md:flex flex-col justify-around h-full md:h-auto md:flex-row justify-around mx-auto md:mr-0 text-center md:text-center`}>
      <NavLink text="Home" />
      <NavLink text="About" />
      <NavLink text="Services" />
      <NavLink text="Donate" />
      <NavLink text="Contact Us" />
    </ul>
  );
};

export default NavList;
