export const countWords = (str) => {
  const pattern = "\\w+";
  const reg = new RegExp(pattern, "g");
  return (str.match(reg) || []).length;
};
