import React from "react";
import Container from "../Container";
import YadaYouthMainLogo from "../../assets/yadayouthmainlogo.png";
import { MENUS, SOCMED } from "../../utils/constants";
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <Container
      bgColor="blue"
      additional="flex flex-row flex-wrap justify-around text-white text-lg "
      padding="3% 7%"
      id='contacts'
    >
      <div className="flex flex-col w-full sm:w-6/12 my-8">
        <img src={YadaYouthMainLogo} alt = "Yada Youth Main Logo"className="w-24" />
        <p>yadayouth.id</p>
        <p className="text-3xl">Yada Youth Indonesia</p>
        <p className="text-base">Empowering Children of Tomorrow</p>
        <p>Copyright &copy; 2021</p>
      </div>
      <div className="flex flex-col w-6/12 sm:w-3/12 justify-between my-8">
        <h3 className="font-bold">Navigation</h3>
        <dl>
          {MENUS.map((menu,id) => (
            <FooterLink key={id} text={menu.name} link={menu.link} />
          ))}
        </dl>
      </div>
      <div className="flex flex-col w-6/12 sm:w-3/12 justify-between h-auto  my-8">
        <h3 className="font-bold">Contact Us</h3>
        <dl className="flex flex-col justify-between  space-y-6">
          {SOCMED.map((socmed,id) => (
            <FooterLink
              key = {id}
              icon={socmed.icon}
              link={socmed.link}
              text={socmed.name}
            />
          ))}
        </dl>
      </div>
    </Container>
  );
};

export default Footer;
