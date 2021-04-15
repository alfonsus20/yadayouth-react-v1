import React from "react";
import { Link } from "react-router-dom";

const FooterLink = ({ icon, text, pathname, hash }) => {
  return (
    <dd>
      <Link className="font-book cursor-pointer" to={{ pathname, hash }}>
        {icon && (
          <>
            <i className={icon}></i>&nbsp;
          </>
        )}
        {text}
      </Link>
    </dd>
  );
};

export default FooterLink;
