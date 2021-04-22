import React, { useEffect } from "react";
import Button from "../components/Button";
import classes from "./RegisterWebinar.module.css";
import { animateScroll as scroll } from "react-scroll";
import { useLocation } from "react-router-dom";
import Container from "../components/Container";

const RegisterWebinar = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Register Webinar";
    scroll.scrollToTop({ duration: 500 });
  }, [location.pathname]);

  return (
    <div>
      <Button scrollUp />
      <div className={`flex flex-col md:flex-row ${classes.hero}`}>
        <div className="flex flex-col justify-center w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-6xl text-blue">Yada Talks 2021</h1>
          <p className="text-2xl text-orange mt-4 text-center md:text-left">
            HOW CAN (YOU)TH MAKE A DIFFERENCE <br /> An Empowerment to Empower
          </p>
          <h2 className="text-3xl my-2 text-blue font-light">
            May 2<sup>nd</sup>, 2021
          </h2>
        </div>
        <div className=" w-full md:w-1/2">
          <img
            src={process.env.PUBLIC_URL + '/pictures/connect.png'}
            alt='webinar'
            className="mx-auto md:ml-auto md:mr-0 w-full md:w-8/12"
          />
        </div>
      </div>
      <Container padding="3% 0%">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSda15McXJBsqsxaN84rezu3ElGNPs0pKTsQ7nS9Uj2_HiOaJQ/viewform?embedded=true"
          width="100%"
          height="1400"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </Container>
    </div>
  );
};

export default RegisterWebinar;
