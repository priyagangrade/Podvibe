import axios from "axios";

// ✅ Create axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
  timeout: 10000,
  withCredentials: true,
});

// ✅ Request interceptor to attach token
api.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("podvibeUser") || "{}");
    if (user.token) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Response interceptor for handling auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("podvibeUser");
      window.location.href = "/sign-in";
    }
    return Promise.reject(error);
  }
);

export default api;
