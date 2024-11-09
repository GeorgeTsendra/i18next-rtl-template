import axios from "axios";

export const setHeader = () => {
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
};

const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/api",
  withCredentials: false,
  headers: setHeader(),
});

axiosInstance.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
