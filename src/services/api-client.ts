import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ca649f6a033f4c3ebf2175d2b70cae35",
  },
});
