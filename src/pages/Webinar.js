import React, { useEffect } from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import Title from "../components/Title";
import { SPEAKERS, TALKING_POINTS } from "../utils/constants";
import Speaker from "../components/Speaker";
import { scroller } from "react-scroll";
import classes from "./Webinar.module.css";
import FlipCard from "../components/FlipCard/FlipCard";
import Fade from 'react-reveal/Fade';

const Webinar = () => {
  useEffect(() => {
    document.title = "Webinar";
  });

  return (
    <div>
      <Button scrollUp />
      <Container screen additional={classes.hero} bgImage="gradient_1.jpg">
        <Fade>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
              <h1 className="text-6xl text-white">Yada Talks 1.0</h1>
              <h2 className="text-3xl my-2 text-white">
                May 2<sup>nd</sup>, 2021
              </h2>
              <p className="text-2xl text-blue mt-4 text-center md:text-left">
                HOW CAN (YOU)TH MAKE A DIFFERENCE <br /> An Empowerment to Empower
              </p>
              <div className="mt-4">
                <Button
                  text="Learn More"
                  bgColor="orange"
                  width="56"
                  color="yellow"
                  rounded="full"
                  onClick={() =>
                    scroller.scrollTo("learn-more", {
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
                src="/pictures/connect.png"
                alt="webinar"
                className="mx-auto md:ml-auto md:mr-0 w-full md:w-8/12"
              />
            </div>
          </div>
        </Fade>
      </Container>
      <Container center padding="6% 7% 3% 7%" id="learn-more">
        <Title
          text="About Yada Talks 1.0"
          bgColor="orange"
          color="white"
          borderColor="white"
          width="84"
        />
        <p className="text-center text-xl w-full md:w-7/12 my-4 font-book">
          Yada Talks is an online mini webinar series that seeks to educate the
          youth on understanding sustainable development of youth and further
          develop their awareness to do so.
        </p>
        <Fade bottom>
          <div className="flex flex-col md:flex-row z-20">
            {SPEAKERS.map((speaker, idx) => (
              <Speaker
                key={idx}
                image={speaker.image}
                description={speaker.description}
                name={speaker.name}
              />
            ))}
          </div>
        </Fade>
        <Fade right>
          <img
            src="/shapes/blueshape.png"
            alt="Blue Shape"
            className={classes.blueShapeLeft + " hidden lg:block"}
          />
        </Fade>
        <Fade left>
          <img
            src="/shapes/blueshape.png"
            alt="Blue Shape"
            className={classes.blueShapeRight + " hidden lg:block"}
          />
        </Fade>
        <div className="w-full flex flex-col py-8 md:flex-row">
          {TALKING_POINTS.map((point, idx) => (
            <FlipCard key={idx} front={point.front} back={point.back} />
          ))}
        </div>
        <img
          src="/pictures/speaker-background.svg"
          className="absolute bottom-0 right-0 z-10 hidden md:block"
          alt="speaker-background"
        />
      </Container>
      <Container center additional={classes.register} bgImage="gradient_2.jpg">
        <div className="x-4 md:px-16 py-10 rounded-2xl w-10/12 md:w-8/12 border-white border-4 flex flex-col justify-center items-center bg-white text-center">
          <h2 className="text-2xl font-bold">So, What Are You Waiting For?</h2>
          <p className="text-xl my-2 font-book ">
            Sunday, 2nd May 2021 <br /> Via Zoom meeting <br /> 09.00 – 10.30
            WIB
          </p>
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
    </div>
  );
};

export default Webinar;
