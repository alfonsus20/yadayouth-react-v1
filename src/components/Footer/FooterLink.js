import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { HashLink } from "react-router-hash-link";

const FooterLink = ({ icon, text, pathname, hash, socmed }) => {
  const location = useLocation();

  if (socmed) {
    return (
      <a href={pathname} className="font-book cursor-pointer" target="blank">
        {icon && (
          <>
            <i className={icon}></i>&nbsp;
          </>
        )}
        {text}
      </a>
    );
  }

  if (hash) {
    return (
      <dd>
        <HashLink
          to={pathname + "#" + hash}
          smooth
          className="font-book cursor-pointer"
        >
          {icon && (
            <>
              <i className={icon}></i>&nbsp;
            </>
          )}
          {text}
        </HashLink>
      </dd>
    );
  }

  return (
    <dd>
      <HashLink
        className="font-book cursor-pointer"
        to={pathname}
        smooth
      >
        {icon && (
          <>
            <i className={icon}></i>&nbsp;
          </>
        )}
        {text}
      </HashLink>
    </dd>
  );
};

export default FooterLink;
