import React from "react";

const Container = ({
  children,
  center,
  bgColor,
  id,
  additional,
  padding,
  screen,
  bgImage,
}) => {
  const containerStyle = { padding: padding };

  if (bgImage) {
    containerStyle['backgroundImage'] = `url(/backgrounds/${bgImage})`  ;
  }

  return (
    <div
      className={`bg-${bgColor} ${additional} ${
        center && "flex flex-col justify-center items-center"
      } ${screen && "min-h-screen"} relative`}
      id={id}
      style={containerStyle}
    >
      {children}
    </div>
  );
};

Container.defaultProps = {
  bgColor: "white",
  padding: "6% 7%",
  additional: "",
};

export default Container;
