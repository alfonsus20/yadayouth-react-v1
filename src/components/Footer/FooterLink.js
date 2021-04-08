import React from "react";
import { Link } from "react-router-dom";

const FooterLink = ({ icon, text, link }) => {
  return (
    <dd>
      <Link to={`/${link}`}>
        {icon && <><i className={icon}></i>&nbsp;</>}  
        {text}
      </Link>
    </dd>
  );
};

export default FooterLink;
