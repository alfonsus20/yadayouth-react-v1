import React, { useEffect } from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import { animateScroll as scroll } from "react-scroll";

const NotFound = () => {
  useEffect(() => {
    document.title = "Not Found";
    scroll.scrollToTop({ duration: 500 });
  });

  return (
    <Container center screen padding="3% 7% 4% 7%" id="not-found">
      <div className="flex flex-col justify-center items-center text-center">
        <img
          src="pictures/yadayouthmainlogo.png"
          className="w-24 mb-8"
          alt="yada-youth-logo"
        />
        <img src="pictures/not-found.png" alt="not-found" />
        <h1 className="text-4xl text-blue font-bold my-8">
          The page is unknown or does not exist
        </h1>
        <p className="text-3xl text-orange font-bold">
          Sorry about that, but the page you looking for is unavalaible
        </p>
        <div className="flex flex-row mt-4 space-x-4">
          <Button
            text="Go Home"
            bgColor="blue"
            color="white"
            path="/#home"
            px={8}
            borderWidth={4}
            borderColor="blue"
            rounded="full"
          />
          <Button
            text="Contact Us"
            bgColor="white"
            color="blue"
            path="/#contacts"
            px={8}
            borderWidth={4}
            borderColor="blue"
            rounded="full"
          />
        </div>
      </div>
    </Container>
  );
};

export default NotFound;