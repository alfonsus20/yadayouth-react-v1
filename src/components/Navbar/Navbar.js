import React, { useState } from "react";
import Container from "../Container";
import NavList from "./NavList";
import NavLogo from "./NavLogo";

const Navbar = () => {
  const [menu, toggleMenu] = useState(false);

  return (
    <header className={`flex flex-col md:flex-row text-white fixed bg-blue py-4 px-24 w-full z-10 ${menu ? 'h-screen' : 'h-auto'} md:h-auto`}>
      <NavLogo toggleMenu = {toggleMenu} menu = {menu}/>
      <NavList menu = {menu} />
    </header>
  );
};

export default Navbar;
