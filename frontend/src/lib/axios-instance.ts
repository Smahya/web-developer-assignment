import { ENV_VARS } from "@/utils/constants";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: ENV_VARS.API_BASE_URL,
});

/**
 * Response interceptor with better error handling
 * */
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      /**
       * Server error with response
       * */
      console.error(`API Error ${error.response.status}:`, error.response.data);
    } else if (error.request) {
      /**
       * Network error
       * */
      console.error("Network Error:", error.request);
    } else {
      /**
       * Request setup error
       * */
      console.error("Request Error:", error.message);
    }

    /**
     * Re-throw the error to be handled by individual services
     * */
    throw error;
  }
);

axiosInstance.interceptors.request.use(
  (config) => {
    /**
     * Common headers can be added here
     * eg.config.headers.Authorization = `Bearer ${token}`
     * */
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
