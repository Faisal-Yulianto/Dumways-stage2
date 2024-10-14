import axios from 'axios';
import Cookies from 'js-cookie';

const baseUrl = import.meta.env.VITE_API_URL;
const axiosInstance = axios.create({
  baseURL: `${baseUrl}/api/auth/login`, 
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      Cookies.remove('token'); 
      window.location.href = '/login'; 
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
