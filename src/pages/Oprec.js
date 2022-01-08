import React from "react";
import Button from "../components/Button";
import Title from "../components/Title";
import { POSITIONS, FAQ, OPREC_TIMELINE } from "../utils/constants";
import { scroller } from "react-scroll";
import Fade from "react-reveal/Fade";
import Division from "../components/Division";
import TimelineCard from "../components/TimelineCard";
import Accordion from "../components/Accordion";
import { Helmet } from "react-helmet";

const Oprec = () => {
  return (
    <div>
      <Helmet>
        <title>Open Recruitment Staff</title>
      </Helmet>
      <Button scrollUp />
      <div className="min-h-screen bg-yellow">
        <div className="max-w-8xl px-12 py-16 mx-auto">
          <Fade>
            <div className="flex flex-col md:flex-row relative">
              <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
                <h1 className="text-4xl text-blue font-bold">
                  Join Our Team At
                </h1>
                <h2 className="text-7xl my-1 mb-4 text-orange font-medium">
                  YadaYouth
                </h2>
                <p className="text-xl text-blue text-center md:text-left font-book">
                  We are opening recruitment for staff position!
                </p>
                <div className="mt-2">
                  <Button
                    text="REGISTER NOW"
                    bgColor="blue"
                    color="yellow"
                    rounded="full"
                    fontSize="md"
                    onClick={() =>
                      scroller.scrollTo("register", {
                        smooth: true,
                        offset: -76.8,
                      })
                    }
                  />
                  <Button
                    text="Learn More"
                    bgColor="orange"
                    color="yellow"
                    rounded="full"
                    fontSize="md"
                    onClick={() =>
                      scroller.scrollTo("positions", {
                        smooth: true,
                        offset: -76.8,
                      })
                    }
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src="/oprec-pictures/coworking.png"
                  alt="webinar"
                  className="mx-auto md:ml-auto md:mr-0 w-full md:w-8/12"
                />
              </div>
              <img
                src="/shapes/arrow.png"
                alt="Arrow"
                className="cursor-pointer mx-auto my-6 sm:my-0 absolute -bottom-4 md:-bottom-20 left-1/2 transform -translate-x-1/2"
                onClick={() =>
                  scroller.scrollTo("positions", {
                    smooth: "easeInOut",
                    duration: 500,
                    offset: -70,
                  })
                }
              />
            </div>
          </Fade>
        </div>
      </div>
      <div
        id="positions"
        className="p-12 max-w-7xl mx-auto flex flex-col items-center relative"
      >
        <Title
          text="Available Positions"
          bgColor="yellow"
          color="black"
          borderColor="white"
          width="84"
        />
        <p className="text-center text-xl w-full md:w-7/12 my-4 font-book">
          Are you currently looking for opportunities to work and empower
          children of Indonesia? What are you waiting for? We are looking
          forward to see you becoming a part of Yada Youth!
        </p>
        <Fade right>
          <img
            src="/shapes/blueshape.png"
            alt="Blue Shape"
            className="absolute top-24 left-20 hidden lg:block"
          />
        </Fade>
        <Fade left>
          <img
            src="/shapes/blueshape.png"
            alt="Blue Shape"
            className="absolute top-24 right-20 hidden lg:block"
          />
        </Fade>
      </div>
      <div className="max-w-7xl mx-auto p-12 pt-0">
        {POSITIONS.map((position, idx) => {
          return <Division key={idx} {...position} />;
        })}
      </div>
      <div className="bg-blue relative">
        <div className="px-2 md:px-16 py-16 rounded-2xl w-12/12 md:w-8/12  flex flex-col justify-center items-center text-center max-w-5xl mx-auto relative">
          <Title
            text="Timeline"
            bgColor="orange"
            width="104"
            color="white"
            borderColor="orange"
            additional="mb-10"
          />
          <div className="grid grid-cols-3 gap-x-1 md:gap-x-4">
            {OPREC_TIMELINE.map((phase, idx) => (
              <TimelineCard
                key={idx}
                period={phase.period}
                date={phase.date}
                phase={phase.phase}
              />
            ))}
          </div>
          <img
            src="/shapes/yellowdiamondshape.png"
            alt="White Diamond"
            className="absolute hidden lg:block left-0 top-16"
          />
          <img
            src="/shapes/yellowdiamondshape.png"
            alt="White Diamond"
            className="absolute hidden lg:block right-0 top-16"
          />
          <img
            src="/shapes/yellowshape.png"
            alt="White Shape"
            className="absolute hidden lg:block left-0 bottom-16"
          />
          <img
            src="/shapes/yellowshape.png"
            alt="White Shape"
            className="absolute hidden lg:block right-0 bottom-16"
          />
        </div>
      </div>
      <div center className="max-w-7xl mx-auto p-12">
        <Title
          text="Frequently Asked Questions"
          bgColor="orange"
          width="104"
          color="white"
          borderColor="white"
        />
        <div className="w-full px-4 md:px-20">
          {FAQ.map((question, idx) => (
            <Accordion
              key={idx}
              title={question.question}
              content={<p className="mt-4">{question.answer}</p>}
            />
          ))}
        </div>
      </div>
      <div
        className="relative bg-cover bg-no-repeat py-20 flex"
        style={{ backgroundImage: "url('/backgrounds/gradient_2.jpg')" }}
        id="register"
      >
        <div className="max-w-7xl mx-auto w-full relative">
          <div className="md:px-16 py-10 rounded-2xl w-10/12 md:w-8/12 border-white border-4 flex flex-col justify-center items-center bg-white text-center max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold">
              So, What Are You Waiting For?
            </h2>
            <Button
              text="REGISTER NOW!"
              bgColor="blue-light"
              color="yellow"
              fontSize="md"
              url="https://docs.google.com/forms/d/e/1FAIpQLSfQx-WVawwv3uR3QaLTsQpbnB1PZlTm4yCxHbqxy7gep5AhAw/viewform"
              rounded="full"
            />
            <img
              src="/shapes/whitediamondshape.png"
              alt="White Diamond"
              className="absolute hidden lg:block left-16 top-2"
            />
            <img
              src="/shapes/whitediamondshape.png"
              alt="White Diamond"
              className="absolute hidden lg:block right-16 top-2"
            />
            <img
              src="/shapes/whiteshape.png"
              alt="White Shape"
              className="absolute hidden lg:block left-16 bottom-2"
            />
            <img
              src="/shapes/whiteshape.png"
              alt="White Shape"
              className="absolute hidden lg:block right-16 bottom-2"
            />
          </div>
        </div>
      </div>

      <div className="p-12 flex flex-col items-center">
        <Title
          text="Supported by"
          bgColor="blue"
          color="white"
          borderColor="white"
          width="96"
          additional="mt-16 mb-6 mx-auto"
        />
        <div className="max-w-4xl mb-8 sm:mb-0">
          <img
            src="/oprec-pictures/medpar.png"
            className="sm:w-11/12 mx-auto"
            alt="Media Partner Yada Youth"
          />
        </div>
      </div>
    </div>
  );
};

export default Oprec;
