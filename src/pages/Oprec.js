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

const Oprec = () => {
  useEffect(() => {
    document.title = "Open Recruitment Staff";
  });

  return (
    <div>
      <Button scrollUp />
      <Container screen bgColor="yellow">
        <Fade>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
              <h1 className="text-5xl text-blue font-bold">Join Our Team At</h1>
              <h2 className="text-6xl my-4 text-orange font-medium">
                YadaYouth
              </h2>
              <p className="text-xl text-blue text-center md:text-left font-book">
                We are opening recruitment for staff position!
              </p>
              <div className="mt-2">
                <Button
                  text="Learn More"
                  bgColor="orange"
                  width="48"
                  color="yellow"
                  rounded="full"
                  path="#positions"
                  onClick={() =>
                    scroller.scrollTo("positions", {
                      smooth: "easeInOut",
                      duration: 500,
                      offset: -76.8,
                    })
                  }
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="/oprec/coworking.png"
                alt="webinar"
                className="mx-auto md:ml-auto md:mr-0 w-full md:w-8/12"
              />
            </div>
          </div>
          <img
            src="/shapes/arrow.png"
            alt="Arrow"
            className="cursor-pointer mx-auto my-6 sm:my-0 absolute bottom-16 left-1/2 transform -translate-x-1/2"
            onClick={() =>
              scroller.scrollTo("positions", {
                smooth: "easeInOut",
                duration: 500,
                offset: -70,
              })
            }
          />
        </Fade>
      </Container>
      <Container center padding="6% 7% 0% 7%" id="positions">
        <Title
          text="Available Positions"
          bgColor="orange"
          color="white"
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
            className={"absolute left-40 hidden lg:block"}
          />
        </Fade>
        <Fade left>
          <img
            src="/shapes/blueshape.png"
            alt="Blue Shape"
            className={"absolute right-40 hidden lg:block"}
          />
        </Fade>
      </Container>
      <Container padding="0% 7% 6% 7%">
        {DIVISIONS.map((division) => (
          <Division
            name={division.name}
            subdivisions={division.subdivisions}
            color={division.color}
          />
        ))}
      </Container>
      <Container
        center
        additional={classes.register}
        bgColor="blue"
        padding="4% 7%"
      >
        <div className="px-4 md:px-16 py-10 rounded-2xl w-12/12 md:w-8/12  flex flex-col justify-center items-center text-center">
          <Title
            text="Timeline"
            bgColor="orange"
            width="104"
            color="white"
            borderColor="orange"
            additional="mb-10"
          />
          <div className="grid grid-cols-3 gap-x-2 md:gap-x-4">
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
            className={classes.diamondLeft + " hidden md:block"}
          />
          <img
            src="/shapes/yellowdiamondshape.png"
            alt="White Diamond"
            className={classes.diamondRight + " hidden md:block"}
          />
          <img
            src="/shapes/yellowshape.png"
            alt="White Shape"
            className={classes.whiteShapeLeft + " hidden md:block"}
          />
          <img
            src="/shapes/yellowshape.png"
            alt="White Shape"
            className={classes.whiteShapeRight + " hidden md:block"}
          />
        </div>
      </Container>
      <Container center additional={classes.register} bgImage="gradient_2.jpg">
        <div className="x-4 md:px-16 py-10 rounded-2xl w-10/12 md:w-8/12 border-white border-4 flex flex-col justify-center items-center bg-white text-center">
          <h2 className="text-2xl font-bold">So, What Are You Waiting For?</h2>
          <Button
            text="REGISTER NOW!"
            bgColor="blue-light"
            color="yellow"
            width="80"
            url="https://docs.google.com/forms/d/e/1FAIpQLSftXxbffI7xQYIGWgDWasD3OeK32X3-kFJ0eaTJPlAocGbAuA/viewform"
            rounded="full"
          />
          <img
            src="/shapes/whitediamondshape.png"
            alt="White Diamond"
            className={classes.diamondLeft + " hidden md:block"}
          />
          <img
            src="/shapes/whitediamondshape.png"
            alt="White Diamond"
            className={classes.diamondRight + " hidden md:block"}
          />
          <img
            src="/shapes/whiteshape.png"
            alt="White Shape"
            className={classes.whiteShapeLeft + " hidden md:block"}
          />
          <img
            src="/shapes/whiteshape.png"
            alt="White Shape"
            className={classes.whiteShapeRight + " hidden md:block"}
          />
        </div>
      </Container>
      <Container center>
        <Title
          text="Frequently Asked Questions"
          bgColor="orange"
          width="104"
          color="white"
          borderColor="white"
        />
        <div className="w-full px-4 md:px-20">
          {FAQ.map((question) => (
            <Accordion question={question.question} answer={question.answer} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Oprec;
