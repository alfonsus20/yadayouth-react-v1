import React from "react";
import Title from "./Title";

function Requirements({ name, color, content }) {
  return (
    <div className="w-full">
      <Title
        text="General Requirements"
        bgColor="blue"
        color="white"
        borderColor="white"
        width="96"
        additional="mt-16 mb-6 mx-auto"
      />
      <div className="bg-yellow px-16 py-6 border-4 border-orange rounded-2xl my-8">
        <ol className="list-disc pl-5">
          <li>Anyone between the ages of 16 - 23</li>
          <li>Willing to commit for 6 months</li>
          <li>Dedicated for contribute towards the youth</li>
          <li>Adaptable with remote working system</li>
          <li>Basic English profiency</li>
          <li>Have a good attitude and communicative</li>
          <li>Creative, innovative, responsible, and able to work in a team</li>
          <li>Able to operate </li>
        </ol>
      </div>
    </div>
  );
}

export default Requirements;
