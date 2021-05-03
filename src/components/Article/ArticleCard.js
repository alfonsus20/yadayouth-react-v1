import React from "react";
import Button from "../Button";

const ArticleCard = ({ title, description, publishTime, image,id }) => {
  const countWords = (str) => {
    return str.split(" ").filter((n) => n !== "").length;
  };

  const content = description
    .split(" ")
    .slice(0, 28)
    .join(" ")
    .concat(countWords(description) > 28 ? " ..." : "");

  return (
    <div 
      className="flex flex-col-reverse sm:flex-row py-8 px-8 lg:px-12 rounded-lg mb-8"
      style={{
        background:
          "linear-gradient(118.47deg, #FCC339 36.62%, #FDAE5A 67.58%)",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="flex flex-col w-full sm:w-8/12 justify-around mr-4">
        <h3 className="text-3xl text-blue font-bold my-4 sm:my-0">{title}</h3>
        <p className="text-lg font-book text-justify">{content}</p>
        <div className="flex flex-col sm:flex-row">
          <time className="mt-4 font-light text-blue">
            Published At : {publishTime}
          </time>
          <div className="mx-auto sm:ml-auto sm:mr-0">
            <Button
              color="blue"
              bgColor="white"
              text="Read More"
              additional="shadow-xl font-book w-40 md:w-52"
              rounded="2xl"
              path = {`/articles/${id}`}
            />
          </div>
        </div>
      </div>
      <div className="w-full sm:w-4/12 grid place-items-center">
        <img
          src={image}
          alt="article"
          className="sm:ml-auto w-full sm:w-56 h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default ArticleCard;
