import axios from "axios";

const baseURL = "http://localhost:8000";
const TIMEOUT = 10000;

export const api = axios.create({
  baseURL,
  timeout: TIMEOUT,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return error;
  }
);

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error?.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    error;
  }
);
