import React from "react";
import Button from "../components/Button";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <div className="min-h-screen px-12 py-8" id="not-found">
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center text-center">
        <img
          src="/pictures/yadayouthmainlogo.svg"
          className="w-24 mb-8"
          alt="yada-youth-logo"
        />
        <img src="/pictures/not-found.png" alt="not-found" />
        <h1 className="text-4xl text-blue font-bold my-8">
          The page is unknown or does not exist
        </h1>
        <p className="text-xl md:text-2xl text-orange font-bold">
          Sorry about that, but the page you are looking for is unavalaible
        </p>
        <div className="flex flex-row mt-4 space-x-4">
          <Button
            text="Go Home"
            bgColor="blue"
            color="white"
            path="/"
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
    </div>
  );
};

export default NotFound;
