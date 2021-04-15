import React from "react";
import NavList from "./NavList";
import NavLogo from "./NavLogo";

const Navbar = ({menu, toggleMenu, mobile}) => {
  return (
    <header
      className={`flex flex-col md:flex-row text-white sticky top-0 bg-blue md:px-12 z-10`}
    >
      <NavLogo toggleMenu={toggleMenu} menu={menu} />
      <NavList menu={menu} mobile={mobile} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Navbar;