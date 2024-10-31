import axios from "axios";

const apiUrl =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=3f0b40ed9c894eea9d2954567c8420f4";

//for getting news
export const showNews = () => {
  return axios.get(`${apiUrl}`);
};
