import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3080",
  timeout: 1000,
});
