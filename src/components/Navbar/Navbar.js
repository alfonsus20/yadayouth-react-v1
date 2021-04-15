import React, { useEffect, useState } from "react";
import NavList from "./NavList";
import NavLogo from "./NavLogo";
import useWindowDimensions from "../../utils/window-dimension";

const Navbar = () => {
  const [menu, toggleMenu] = useState(false);

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width > 768) {
      toggleMenu(true);
    } else {
      toggleMenu(false);
    }
  }, [width]);

  return (
    <header
      className={`flex flex-col md:flex-row text-white sticky top-0 bg-blue md:px-12 z-10`}
    >
      <NavLogo toggleMenu={toggleMenu} menu={menu} />
      <NavList menu={menu} mobile={width <= 768} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Navbar;