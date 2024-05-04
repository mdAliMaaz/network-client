import Axios from "axios";
const headers = { "Access-Control-Allow-Origin": "*", withCredentials: true };

export const axios = Axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers,
});
