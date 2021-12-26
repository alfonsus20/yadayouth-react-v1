import React from "react";
import Container from "../components/Container";
import { DONATION_GOALS } from "../utils/constants";
import DonationCard from "../components/DonationCard";
import Button from "../components/Button";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";

const Donate = () => {
  return (
    <>
      <Helmet>
        <title>Donate</title>
      </Helmet>
      <Button scrollUp />
      <div
        className=" min-h-screen px-12 py-24 flex flex-col items-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('./backgrounds/donation-page.png')" }}
        id="donate"
      >
        <Fade bottom>
          <h1 className="text-5xl font-bold text-white max-w-2xl text-center">
            We Need YOU to Help The Children Of Tomorrow!
          </h1>
        </Fade>
        <Fade bottom>
          <div className="flex flex-col-reverse bg-blue bg-opacity-60 border-yellow border-4 py-8 px-0 md:px-28 rounded-xl sm:rounded-full md:mt-20 max-w-4xl">
            <p className="text-2xl w-full md:w-7/12 relative text-white">
              Through your kind donations, you can make positive impact towards
              children empowerment in Indonesia!
              <img
                src="/pictures/donation.png"
                className="w-80 h-auto hidden md:absolute md:-right-3/4 md:-bottom-1/2 md:block"
                alt="donation"
              />
            </p>
            <img
              src="/pictures/donation.png"
              className="mx-auto mb-12 md:hidden"
              alt="donation"
            />
          </div>
        </Fade>
      </div>
      <Container center bgColor="yellow" id="how">
        <Fade bottom>
          <div className="py-12 px-8 sm:px-16 border-4 border-orange rounded-3xl w-full sm:w-9/12 bg-white text-lg  max-w-5xl mx-auto">
            <h2 className="text-center text-4xl text-blue mb-12 font-bold">
              How To Donate?
            </h2>
            <div className="text-black flex flex-col lg:flex-row space-x-0 lg:space-x-4">
              <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:block space-y-4 sm:space-y-0">
                <div className="flex flex-col text-center justify-center items-center sm:text-left space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8 ">
                  <img src="logos/bni.png" className="w-auto" alt="bni-logo" />
                  <div>
                    <strong>0842396708</strong>
                    <br /> a/n Yakina Athiyyah D.
                  </div>
                </div>
                <div className="flex flex-col text-center justify-center items-center  sm:text-left space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8 ">
                  <img
                    src="logos/mandiri.png"
                    className="w-auto"
                    alt="mandiri-logo"
                  />
                  <div>
                    <strong>1330016450835</strong>
                    <br /> a/n Febrio Luqman W.
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2  mt-8 lg:mt-0 text-justify">
                Please <strong>add a Rp1</strong> to the donation (Ex: for 50k
                donation please make it Rp50.001 and/or add the description
                “yada youth donation” in the description/notes to help us
                calculate the funds raised accurately)
              </div>
            </div>
          </div>
        </Fade>
      </Container>
      <Container padding="6% 15%" additional="max-w-10xl mx-auto">
        <Fade bottom>
          <h2 className="text-center text-4xl text-blue mb-8 font-bold">
            All the funds raised will be used for:
          </h2>
        </Fade>
        <Fade bottom>
          <div className="flex flex-wrap flex-row">
            {DONATION_GOALS.map((goal, idx) => {
              return <DonationCard key={idx} goal={goal} idx={idx} />;
            })}
          </div>
        </Fade>
      </Container>
    </>
  );
};

export default Donate;
