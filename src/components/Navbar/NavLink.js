import { NavHashLink } from "react-router-hash-link";

const NavLink = ({ text, pathname, hash, mobile, toggleMenu }) => {
  if (hash) {
    return (
      <NavHashLink
        className="px-4 text-xl cursor-pointer hover:text-yellow"
        to={hash === "contacts" ? "#" + hash : pathname + "#" + hash}
        smooth
        onClick={() => toggleMenu(!mobile)}
        activeClassName="active"
      >
        {text}
      </NavHashLink>
    );
  }
  return (
    <NavHashLink
      className="px-4 text-xl cursor-pointer hover:text-yellow"
      to={pathname}
      smooth
      activeClassName="active"
      onClick={() => toggleMenu(!mobile)}
    >
      {text}
    </NavHashLink>
  );
};

export default NavLink;
