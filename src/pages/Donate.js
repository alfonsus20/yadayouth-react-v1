import React, { useEffect } from "react";
import DonationImg from "../assets/donation.png";
import Container from "../components/Container";
import MandiriLogo from "../assets/mandiri.png";
import BNILogo from "../assets/bni.png";
import { DONATION_GOALS } from "../utils/constants";
import DonationCard from "../components/DonationCard";
import Button from "../components/Button";
import { scroller } from "react-scroll";
import { useLocation } from "react-router-dom";

const Donate = () => {
  const location = useLocation();
  useEffect(() => {
    document.title = "Donate";
    scroller.scrollTo(location.hash.replace("#", ""), {
      duration: 500,
      smooth: "easeInOut",
      offset: -112,
    });
  }, [location]);
  return (
    <>
      <Button scrollUp />
      <Container
        center
        additional="text-blue"
        bgColor="yellow"
        id="donate"
        screen
      >
        <h1 className="text-4xl font-bold">
          We Need YOU to Help The Children Of Tomorrow!
        </h1>
        <div
          className="flex flex-col-reverse border-yellow md:border-orange border-4 py-8 px-0 md:px-28 rounded-xl sm:rounded-full md:mt-20 "
          style={{ maxWidth: 900 }}
        >
          <p className="text-2xl w-full md:w-7/12 relative">
            Through your kind donations, you can make positive impact towards
            children empowerment in Indonesia!
            <img
              src={DonationImg}
              className="w-80 h-auto hidden md:absolute md:-right-3/4 md:-bottom-1/2 md:block"
              alt="donation"
            />
          </p>
          <img
            src={DonationImg}
            className="mx-auto mb-12 md:hidden"
            alt="donation"
          />
        </div>
      </Container>
      <Container center bgColor="yellow" id="how">
        <div className="py-12 px-8 sm:px-16 border-4 border-orange rounded-3xl w-full sm:w-9/12 bg-white text-lg">
          <h2 className="text-center text-4xl text-blue mb-12 font-bold">
            How To Donate?
          </h2>
          <div className="text-black flex flex-col lg:flex-row space-x-4">
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:block space-y-4 sm:space-y-0">
              <div className="flex flex-col text-center justify-center items-center sm:text-left space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8 ">
                <img src={BNILogo} className="w-auto" alt="bni-logo" />
                <div>
                  <strong>0842396708</strong>
                  <br /> a/n Yakina Athiyyah D.
                </div>
              </div>
              <div className="flex flex-col text-center justify-center items-center  sm:text-left space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8 ">
                <img src={MandiriLogo} className="w-auto" alt="mandiri-logo" />
                <div>
                  <strong>0842396708</strong>
                  <br /> a/n Yakina Athiyyah D.
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 text-justify">
              Please <strong>add a Rp1</strong> to the donation (Ex: for 50k
              donation please make it Rp50.001 and/or add the description “yada
              youth donation” in the description/notes to help us calculate the
              funds raised accurately)
            </div>
          </div>
        </div>
      </Container>
      <Container padding="6% 15%">
        <h2 className="text-center text-4xl text-blue mb-8 font-bold">
          All the funds raised will be used for:
        </h2>
        <div className="flex flex-wrap flex-row">
          {DONATION_GOALS.map((goal, idx) => {
            return <DonationCard key={idx} goal={goal} idx={idx} />;
          })}
        </div>
      </Container>
    </>
  );
};

export default Donate;
