export const countWords = (str) => {
  const pattern = "\\w+";
  const reg = new RegExp(pattern, "g");
  return (str.match(reg) || []).length;
};

export const getColor = (color) => {
  switch (color) {
    case "orange":
      return "text-orange";
    case "yellow":
      return "text-yellow";
    case "blue":
      return "text-blue";
    case "white":
      return "text-white";
    default:
      return "";
  }
};

export const getBorderColor = (borderColor) => {
  switch (borderColor) {
    case "orange":
      return "border-orange";
    case "yellow":
      return "border-yellow";
    case "blue":
      return "border-blue";
    case "white":
      return "border-white";
    default:
      return "";
  }
};

export const getBackgroundColor = (bgColor) => {
  switch (bgColor) {
    case "orange":
      return "bg-orange";
    case "yellow":
      return "bg-yellow";
    case "blue":
      return "bg-blue";
    case "white":
      return "bg-white";
    case "blue-light":
      return "bg-blue-light";
    default:
      return "";
  }
};

export const getBorderRadius = (rounded) => {
  switch (rounded) {
    case "sm":
      return "rounded-sm";
    case "md":
      return "rounded-md";
    case "lg":
      return "rounded-lg";
    case "2xl":
      return "rounded-2xl";
    case "full":
      return "rounded-full";
    case "xl":
    default:
      return "rounded-xl";
  }
};
