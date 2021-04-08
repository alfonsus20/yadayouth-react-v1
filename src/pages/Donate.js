import React, { useEffect } from "react";
import DonationImg from "../assets/donation.png";
import Container from "../components/Container";
import Footer from "../components/Footer/Footer";
import MandiriLogo from "../assets/mandiri.png";
import BNILogo from "../assets/bni.png";
import { DONATION_GOALS } from "../utils/constants";
import DonationCard from "../components/DonationCard";
import Helmet from "react-helmet";

const Donate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Helmet>
        <title>Donate</title>
      </Helmet>
      <Container center additional="text-blue" bgColor="yellow" id="donate">
        <h1 className="text-4xl font-bold mt-28 md:mt-24">
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
            />
          </p>
          <img src={DonationImg} className="mx-auto mb-12 md:hidden" />
        </div>
      </Container>
      <Container center bgColor="yellow" padding="8% 7% 6% 7%">
        <div className="py-12 px-16 border-4 border-orange rounded-3xl w-9/12 bg-white">
          <h2 className="text-center text-4xl text-blue mb-12 font-bold">
            How To Donate?
          </h2>
          <div className="text-black flex flex-row">
            <div className="w-1/2">
              <div className="flex flex-row space-x-4">
                <img src={BNILogo} className="w-36 h-10" />
                <div>
                  <strong>0842396708</strong>
                  <br /> a/n Yakina Athiyyah D.
                </div>
              </div>
              <div className="flex flex-row space-x-4">
                <img src={MandiriLogo} className="w-36 h-10" />
                <div>
                  <strong>0842396708</strong>
                  <br /> a/n Yakina Athiyyah D.
                </div>
              </div>
            </div>
            <div className="w-1/2">
              Please <strong>add a Rp1</strong> to the donation (Ex: for 50k
              donation please make it Rp50.001 and/or add the description “yada
              youth donation” in the description/notes to help us calculate the
              funds raised accurately)
            </div>
          </div>
        </div>
      </Container>
      <Container padding="6% 15%">
        <div className="flex flex-wrap flex-row">
          {DONATION_GOALS.map((goal, idx) => {
            return <DonationCard key={idx} goal={goal} idx={idx} />;
          })}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Donate;
