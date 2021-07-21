import React, { useEffect } from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import Title from "../components/Title";
import { scroller } from "react-scroll";
import classes from "./Ambassador.module.css";
import Fade from "react-reveal/Fade";
import AmbassadorBenefitCard from "../components/AmbassadorBenefitCard";
import { AMBASSADOR_BENEFITS } from "../utils/constants";

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
                    scroller.scrollTo("ambassador", {
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
                scroller.scrollTo("ambassador", {
                  smooth: "easeInOut",
                  duration: 500,
                  offset: -70,
                })
              }
            />
          </div>
        </Fade>
      </Container>
      <Container center bgColor="orange" padding="6% 0" id="ambassador">
        <div className="w-full ">
          <div className="text-white text-center text-3xl font-medium mb-8 sm:mb-4">
            <em>What is Yada Youth Ambassador?</em>
          </div>
          <div className="bg-yellow px-8">
            <div className="max-w-3xl flex flex-col sm:flex-row mx-auto items-center">
              <div className="sm:mr-8 my-4 sm:my-8">
                <img
                  src="/ambassador-pictures/what-is.png"
                  className="w-80"
                  alt="what is"
                />
              </div>
              <div className="text-blue-light">
                <h3 className="mb-2 text-lg">
                  Yada Youth Ambassador is a program aimed to help Yada Youth to
                  achieve its main purpose; empowering children of tomorrow.
                </h3>
                <p className="text-md mb-8 sm:mb-0">
                  Ambassadors will be responsible to create and manage their own
                  project related to the vision and mission of Yada Youth, under
                  the guidance and supervision of Yada Youth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container padding="0% 7% 6% 7%" additional="max-w-10xl mx-auto">
        <div>
          <Title
            text="General Requirements"
            bgColor="blue"
            color="white"
            borderColor="white"
            width="96"
            additional="mt-16 mb-6 mx-auto"
          />
          <div className="bg-yellow px-16 py-6 border-4 max-w-4xl mx-auto border-orange rounded-2xl my-8">
            <ol className="list-disc pl-5">
              <li>Anyone between the ages of 16 - 23</li>
              <li>Willing to commit for 6 months</li>
              <li>Dedicated for contribute towards the youth</li>
              <li>Adaptable with remote working system</li>
              <li>Basic English profiency</li>
              <li>Have a good attitude and communicative</li>
              <li>
                Creative, innovative, responsible, and able to work in a team
              </li>
              <li>Able to operate gsuite (docs, sheets, ppt, etc)</li>
            </ol>
          </div>
        </div>
        <div>
          <Title
            text="Benefits of Being an Ambassador"
            bgColor="blue"
            color="white"
            borderColor="white"
            width="120"
            additional="mt-16 mb-6 mx-auto"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-screen-lg mx-auto">
            {AMBASSADOR_BENEFITS.map((benefit, i) => (
              <AmbassadorBenefitCard {...benefit} key={i} index={i} />
            ))}
          </div>
        </div>
      </Container>
      <Container center bgColor="blue" padding="0% 7%">
        <Title
          text="Timeline"
          bgColor="white"
          color="orange"
          borderColor="white"
          width="96"
          additional="mt-16 mb-6 mx-auto"
        />
        <div className="mb-8 sm:mb-0">
          <img
            src="/pictures/artboard.png"
            className="sm:w-11/12 mx-auto"
            alt="artboard"
          />
        </div>
      </Container>
      <Container
        center
        additional={classes.register}
        bgImage="gradient_2.jpg"
        id="register"
      >
        <div className="md:px-16 py-10 rounded-2xl w-10/12 md:w-8/12 border-white border-4 flex flex-col justify-center items-center bg-white text-center">
          <h2 className="text-2xl font-bold mb-2">
            <em>So, What Are You Waiting For?</em>
          </h2>
          <Button
            text="REGISTER NOW!"
            bgColor="blue-light"
            color="yellow"
            width="80"
            url="https://tinyurl.com/ProjectAmbassadorsBatch2"
            rounded="full"
          />
          <p className="text-xl font-book mt-4">
            For further inquiries don't hesitate to contact us through:
          </p>
          <p className="font-bold text-xl">
            <em>yycomdev@gmail.com or dm us!</em>
          </p>
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

export default Ambassador;
