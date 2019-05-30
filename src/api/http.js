import axios from 'axios';

const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});

http.interceptors.request.use(function (config) {
  const token = localStorage.getItem('surveys_jwt');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

export default http;
