import React from "react";
import YadaYouthLogo from "../../assets/yadayouthmainlogo.png";
import { Link } from "react-router-dom";

const NavLogo = ({ toggleMenu, menu }) => {
  return (
    <div className="flex flex-row items-center bg-blue">
      <Link to="/#home">
        <img src={YadaYouthLogo} alt="yada-youth-logo" className="w-20" />
      </Link>
      <i
        onClick={() => toggleMenu(!menu)}
        className="fas fa-bars text-2xl ml-auto block md:hidden"
      ></i>
    </div>
  );
};

export default NavLogo;
