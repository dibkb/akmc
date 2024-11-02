import { BACKEND_URL } from "@/config";
import axios from "axios";

const baseUrl = axios.create({
  baseURL: BACKEND_URL,
});
export { baseUrl };
