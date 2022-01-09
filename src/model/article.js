import yadayouth from "../api/yadayouth";

export const getArticleList = () => {
  return yadayouth.get("/api/article/");
};

export const getArticleById = (id) => {
  return yadayouth.get(`/api/article/${id}`);
};
