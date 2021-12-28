import yadayouth from "../api/yadayouth";

export const getInstagramPosts = async () => {
  return new Promise((resolve, reject) => {
    yadayouth
      .get("/api/instagram/")
      .then(({ data }) => resolve(data))
      .catch((e) => reject(e));
  });
};
