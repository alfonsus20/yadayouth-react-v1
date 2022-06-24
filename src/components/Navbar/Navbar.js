import { useLocation } from "react-router-dom";
import NavList from "./NavList";
import NavLogo from "./NavLogo";

const Navbar = ({ menu, toggleMenu, mobile }) => {
  const location = useLocation();

  return (
    <div className="sticky top-0 z-30">
      <header
        className={`flex flex-col md:flex-row text-white relative ${
          location.pathname !== "/" && "top-0"
        } bg-blue px-4 py-4 md:px-12 z-30 justify-center`}
        style={{ minHeight: 70 }}
      >
        <NavLogo toggleMenu={toggleMenu} menu={menu} />
        <NavList menu={menu} mobile={mobile} toggleMenu={toggleMenu} />
      </header>
    </div>
  );
};

export default Navbar;
