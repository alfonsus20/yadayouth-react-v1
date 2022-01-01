import React from "react";
import Button from "../Button";
import { countWords } from "../../utils/functions";

const ArticleCard = ({ title, description, publishTime, image, id }) => {
  const content = description
    .split(" ")
    .slice(0, 20)
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
        <h3 className="text-2xl text-blue font-bold my-4 sm:my-0">{title}</h3>
        <p
          className="text-md font-book text-justify mt-2 paragraph"
          dangerouslySetInnerHTML={{ __html: content }}
        ></p>
        <div className="flex flex-col sm:flex-row sm:items-center">
          <time className="mt-4 mr-4 font-light sm:w-8/12 text-blue text-sm">
            Published At : {publishTime}
          </time>
          <div className="mx-auto md:ml-0 sm:w-4/12">
            <Button
              color="blue"
              bgColor="white"
              text="Read More"
              rounded="2xl"
              fontSize="sm"
              path={`/articles/${id}`}
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
