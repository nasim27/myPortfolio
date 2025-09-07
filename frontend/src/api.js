// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://myportfolio-a8wj.onrender.com/api/",
});

// ✅ Automatically attach token if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
});

export default api;
