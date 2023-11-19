import axios from "axios";
import { backEndServer } from "../const";



const axiosClient = axios.create({
    baseURL: backEndServer,
})

axiosClient.interceptors.request.use(
    config => {
      config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
          return config;
      },
      error => {
          return Promise.reject(error);
      }
  );

export default axiosClient