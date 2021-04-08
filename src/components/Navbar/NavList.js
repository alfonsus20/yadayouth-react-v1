import React from "react";
import NavLink from "./NavLink";
import { MENUS } from "../../utils/constants";

const NavList = ({ menu }) => {
  return (
    <ul
      className={`list-none ${
        menu ? "flex" : "hidden"
      } md:flex flex-col justify-around h-full md:h-auto md:flex-row mx-auto md:mr-0 text-center md:text-center`}
    >
      {MENUS.map((menuItem,id) => (
        <NavLink key={id} text={menuItem.name} pathname={menuItem.pathname} hash ={menuItem.hash} />
      ))}
    </ul>
  );
};

export default NavList;
