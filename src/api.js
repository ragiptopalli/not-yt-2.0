import axios from "axios";

const requestVideos = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: process.env.REACT_APP_YT_API_KEY,
  },
});

export default requestVideos;
