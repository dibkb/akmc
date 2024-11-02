import axios from "axios";
import useAuthStore from "@/app/src/stores/authStore";
import { BACKEND_URL } from "@/config";

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
