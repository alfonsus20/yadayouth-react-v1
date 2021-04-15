import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

const FooterLink = ({ icon, text, pathname, hash }) => {
  const location = useLocation();

  if (location.pathname !== pathname) {
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
  }

  return (
    <dd>
      <LinkScroll
        activeClass="active"
        className="font-book cursor-pointer"
        to={hash}
        offset={-96}
        smooth
        duration={500}
        hashSpy
        // onClick={() => toggleMenu(!mobile)}
      >
        {icon && (
          <>
            <i className={icon}></i>&nbsp;
          </>
        )}
        {text}
      </LinkScroll>
    </dd>
  );
};

export default FooterLink;
