import yadayouth from "../api/yadayouth";

export const getInstagramPosts = async () => {
  return yadayouth.get("/api/instagram/");
};
