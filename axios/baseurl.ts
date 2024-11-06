import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://akmc-server.vercel.app",
  // baseURL: "http://localhost:8000",
});
export { baseUrl };
