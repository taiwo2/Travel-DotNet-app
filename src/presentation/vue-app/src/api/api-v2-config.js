import axios from "axios";

const debug = process.env.NODE_ENV !== "production";
const baseURL = debug
  ? "https://localhost:7231/api/v2.0/"
  : "https://traveltour.io/api/v2.0/";

let api = axios.create({ baseURL });

export default api;
