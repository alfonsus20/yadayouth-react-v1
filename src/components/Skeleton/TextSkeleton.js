import React from "react";

const TextSkeleton = ({ amount }) => {
  let skeletons = [];

  for (let i = 0; i < amount; i++) {
    skeletons.push(
      <div key={i} className="w-full h-4 rounded-md animate-pulse bg-gray my-4"></div>
    );
  }

  return <>{skeletons.map((skeleton) => skeleton)}</>;
};

export default TextSkeleton;
