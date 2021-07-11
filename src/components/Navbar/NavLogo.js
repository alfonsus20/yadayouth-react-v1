import React from "react";
import { Link } from "react-router-dom";

const NavLogo = ({ toggleMenu, menu }) => {
  return (
    <div className="flex flex-row items-center bg-blue">
      <Link to="/">
        <img
          src="/pictures/yadayouthmainlogo.svg"
          alt="yada-youth-logo"
          className="w-12"
        />
      </Link>
      <i
        onClick={() => toggleMenu(!menu)}
        className="fas fa-bars text-2xl ml-auto block md:hidden"
      ></i>
    </div>
  );
};

export default NavLogo;
