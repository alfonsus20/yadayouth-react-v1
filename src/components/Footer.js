import React from "react";
import Container from "./Container";
import YadaYouthMainLogo from "../assets/yadayouthmainlogo.png";
import InstagramLogo from "../assets/instagram.png";
import LinkedinLogo from "../assets/linkedin.png";
import TiktokLogo from "../assets/tiktok.png";

const Footer = () => {
  return (
    <Container
      bgColor="blue"
      additional="flex flex-row flex-wrap justify-around text-white text-lg"
      padding = '3% 7%'
    >
      <div className="flex flex-col w-full sm:w-6/12 my-8">
        <img src={YadaYouthMainLogo} className="w-24" />
        <p>yadayouth.id</p>
        <p className="text-3xl">Yada Youth Indonesia</p>
        <p className="text-base">Empowering Children of Tomorrow</p>
        <p>Copyright @2021</p>
      </div>
      <div className="flex flex-col w-6/12 sm:w-3/12 justify-between my-8">
        <h3 className="font-bold">Navigation</h3>
        <dl>
          <dd>Home</dd>
          <dd>About</dd>
          <dd>Services</dd>
          <dd>Donate</dd>
          <dd>Contact</dd>
        </dl>
      </div>
      <div className="flex flex-col w-6/12 sm:w-3/12 justify-between h-auto  my-8">
        <h3 className="font-bold">Contact Us</h3>
        <dl className="flex flex-col justify-between  space-y-6">
          <dd>
            <i className="fa fa-instagram"></i>
            &nbsp; yadayouth.id
          </dd>
          <dd>
            <i className="fa fa-linkedin"></i>
            &nbsp; company/yada-youth
          </dd>
          <dd>
            <i className="fab fa-tiktok"></i>
            &nbsp; yadayouth.id
          </dd>
        </dl>
      </div>
    </Container>
  );
};

export default Footer;
