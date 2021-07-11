import React from "react";
import { HashLink } from "react-router-hash-link";

const FooterLink = ({ icon, text, pathname, hash, socmed }) => {
  if (socmed) {
    return (
      <a
        href={pathname}
        className="font-book cursor-pointer hover:text-orange"
        target="blank"
      >
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
          to={hash === "contacts" ? "#" + hash : pathname + "#" + hash}
          smooth
          className="font-book cursor-pointer hover:text-orange"
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
        className="font-book cursor-pointer hover:text-orange"
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
