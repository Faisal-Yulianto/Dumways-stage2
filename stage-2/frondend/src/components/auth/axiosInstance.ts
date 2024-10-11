import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
  baseURL: 'https://dumways-stage2.vercel.app/api/auth/login', // Atur base URL sesuai dengan server Anda
  withCredentials: false, // Agar cookies dikirim bersama request
});

// Interceptor untuk menangani token expired
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Token expired atau unauthorized
      Cookies.remove('token'); // Hapus token yang expired dari cookies
      window.location.href = '/login'; // Redirect ke halaman login
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
