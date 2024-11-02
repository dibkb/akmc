import axios from "axios";
import { BACKEND_URL } from "@/config";
import useAuthStore from "@/src/store/authStore";

const authorizedApi = axios.create({
  baseURL: BACKEND_URL,
});

authorizedApi.interceptors.request.use(
  (config) => {
    const { jwtAccessToken } = useAuthStore.getState();
    if (jwtAccessToken) {
      config.headers["Authorization"] = `Bearer ${jwtAccessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authorizedApi.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default authorizedApi;
