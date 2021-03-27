import React from "react";
import Container from "../Container";
import NavList from "./NavList";
import NavLogo from "./NavLogo";


const Navbar = () => {
  return (
    <header className="flex flex-row text-white fixed bg-blue py-4 px-24 w-full z-10">
      <NavLogo />
      <NavList />
    </header>
  );
};

export default Navbar;
