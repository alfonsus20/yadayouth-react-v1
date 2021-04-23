import React from "react";
import NavList from "./NavList";
import NavLogo from "./NavLogo";

const Navbar = ({menu, toggleMenu, mobile}) => {
  return (
    <header
      className={`flex flex-col md:flex-row text-white sticky top-0 bg-blue px-4 py-4 md:px-12 z-30 justify-center`} style={{minHeight:76.8}}
    >
      <NavLogo toggleMenu={toggleMenu} menu={menu} />
      <NavList menu={menu} mobile={mobile} toggleMenu={toggleMenu}  />
    </header>
  );
};

export default Navbar;