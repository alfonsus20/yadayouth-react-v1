import React from "react";
import NavLink from "./NavLink";
import { MENUS } from "../../utils/constants";
import { motion } from "framer-motion";

const NavList = ({ menu, mobile }) => {
  const variants = {
    hidden: {
      left: "-150%",
    },
    visible: {
      left: 0,
    },
  };
  return (
    <motion.ul
      className={`flex md:flex flex-col w-full md:w-auto justify-around items-center ${mobile && 'mobile'} md:h-auto md:flex-row mx-auto md:mr-0 text-center md:text-center absolute md:relative bg-blue mt-24 md:mt-0`}
      variants={variants}
      animate={menu ? "visible" : "hidden"}
      transition = {{x: {type: 'spring', stiffness : 0}}}
    >
      {MENUS.map((menuItem, id) => (
        <NavLink
          key={id}
          text={menuItem.name}
          pathname={menuItem.pathname}
          hash={menuItem.hash}
        />
      ))}
    </motion.ul>
  );
};

export default NavList;
