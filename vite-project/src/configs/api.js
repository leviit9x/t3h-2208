import axios from "axios";

const baseURL = "http://localhost:8000";
const TIMEOUT = 10000;

export const api = axios.create({
  baseURL,
  timeout: TIMEOUT,
});

api.interceptors.request.use(
  (config) => {
    console.log("{config}.{request}", config);
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
    console.log("{config}.{response}", response);
    return response.data;
  },
  (error) => {
    error;
  }
);
