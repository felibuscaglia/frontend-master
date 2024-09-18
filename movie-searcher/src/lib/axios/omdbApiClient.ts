import axios from "axios";

const omdbApiClient = axios.create({
  baseURL: "http://www.omdbapi.com/",
  params: {
    apikey: "49d0f163",
  },
});

export default omdbApiClient;
