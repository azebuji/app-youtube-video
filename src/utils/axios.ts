import axios from "axios";

const url = "http://localhost:9070";


export const baseURL = url;

const axiosInstance = axios.create({ baseURL });

axiosInstance.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  throw error;
});
axiosInstance.interceptors.response.use(
  (response) => { return response },
  (error) => {
    throw error.response && (error.response.data?.statusText ? error.response.data.statusText : "Erro") || "Erro"
  }
);

export default axiosInstance;