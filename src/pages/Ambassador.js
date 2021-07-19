import React, { useEffect } from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import Title from "../components/Title";
import { DIVISIONS, FAQ, OPREC_TIMELINE } from "../utils/constants";
import { scroller } from "react-scroll";
import classes from "./Webinar.module.css";
import Fade from "react-reveal/Fade";
import Division from "../components/Division";
import TimelineCard from "../components/TimelineCard";
import Accordion from "../components/Accordion";
import WhatIs from "../components/WhatIs";
import Requirements from "../components/Requirements";

const Ambassador = () => {
  useEffect(() => {
    document.title = "Open Recruitment Staff";
  });

  return (
    <div>
      <Button scrollUp />
      <Container screen bgColor="yellow">
        <Fade>
          <div className="flex flex-col md:flex-row relative">
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
              <h1 className="text-4xl text-blue font-bold">Open Recruitment</h1>
              <h2 className="text-6xl my-1 mb-4 text-orange font-medium">
                Project Ambassador
              </h2>
              <p className="text-xl text-blue text-center md:text-left font-book">
                We are opening recruitment for Project Ambassador Batch 2
              </p>
              <div className="mt-2">
                <Button
                  text="REGISTER NOW"
                  bgColor="blue"
                  width="52"
                  color="yellow"
                  rounded="full"
                  additional="mx-auto md:mx-0"
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
                  width="36"
                  color="yellow"
                  rounded="full"
                  fontSize="12"
                  additional="mx-auto md:mx-0"
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
      </Container>
      <Container
        center
        padding="0%"
        id="positions"
        additional="max-w-10xl mx-auto"
      >
        <WhatIs />
      </Container>
      <Container padding="0% 7% 6% 7%" additional="max-w-10xl mx-auto">
        <Requirements />
      </Container>
      <Container center additional="max-w-10xl mx-auto">
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
              question={question.question}
              answer={question.answer}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Ambassador;
