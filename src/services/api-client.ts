import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5689f2f5121d4b84b50457eedc02938e",
  },
});
