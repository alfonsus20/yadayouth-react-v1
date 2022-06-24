import axios from "axios";

const yadayouth = axios.create({
  baseURL: "https://api.yada-youth.id",
});

export default yadayouth;
