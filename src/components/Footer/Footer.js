import React from "react";
import { SOCMED } from "../../utils/constants";
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <div className="bg-blue p-12" id="contacts">
      <div className="max-w-7xl mx-auto flex flex-row flex-wrap justify-between text-white text-lg">
        <div className="flex flex-col my-8">
          <img
            src="/pictures/yadayouthmainlogo.svg"
            alt="Yada Youth Main Logo"
            className="w-24"
          />
          <p className="font-book text-lg">yadayouth.id</p>
          <p className="font-bold text-3xl">Yada Youth Indonesia</p>
          <p className="font-medium text-base">
            Empowering Children of Tomorrow
          </p>
          <p className="font-light text-xs">Copyright &copy; 2022</p>
        </div>
        <div className="flex flex-col justify-between my-8">
          <h3 className="font-medium">Contact Us</h3>
          <dl className="flex flex-col justify-between  space-y-6">
            {SOCMED.map((socmed, id) => (
              <FooterLink
                key={id}
                icon={socmed.icon}
                pathname={socmed.link}
                text={socmed.name}
                socmed={socmed.socmed}
              />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Footer;
