import React, { useEffect, useState } from "react";
import NavList from "./NavList";
import NavLogo from "./NavLogo";
import useWindowDimensions from "../../utils/window-dimension";

const Navbar = () => {
  const [menu, toggleMenu] = useState(false);

  const {width} = useWindowDimensions();

  useEffect(() => {
    if (width > 768) {
      toggleMenu(true);
    }else{
      toggleMenu(false)
    }
  }, [width]);

  return (
    <header
      className={`flex flex-col md:flex-row text-white fixed bg-white md:bg-blue py-0 px-0 md:px-24 w-full z-10 h-auto`}
    >
      <NavLogo toggleMenu={toggleMenu} menu={menu} />
      <NavList menu={menu} mobile = {width <= 768}/>
    </header>
  );
};

export default Navbar;
