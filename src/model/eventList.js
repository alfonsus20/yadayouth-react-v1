import yadayouth from "../api/yadayouth";

export const getEventList = async () => {
  return yadayouth.get("/api/past-event/");
};
