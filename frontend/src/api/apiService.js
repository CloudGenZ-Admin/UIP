import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Apna backend URL yahan dalein

// Axios instance create karein
const apiClient = axios.create({
  baseURL: API_URL,
});

// Request Interceptor: Admin token attach karne ke liye
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('adminToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const apiService = {
  // --- AUTH ---
  login: (data) => apiClient.post('/auth/login', data),

  // --- STORIES ---
  submitStory: (data) => apiClient.post('/stories', data),
 getStories: (page = 1) => apiClient.get(`/stories?page=${page}`),
  deleteStory: (id) => apiClient.delete(`/stories/${id}`),
  updateStory: (id, data) => apiClient.put(`/stories/${id}`, data), 


  // --- PEER SUPPORT ---
  submitPeerSupport: (data) => apiClient.post('/peer-support', data),
  getPeerSupports: () => apiClient.get('/peer-support'),
  deletePeerSupport: (id) => apiClient.delete(`/peer-support/${id}`),

  // --- WELLNESS ---
  submitWellness: (data) => apiClient.post('/wellness', data),
  getWellness: () => apiClient.get('/wellness'),
  deleteWellness: (id) => apiClient.delete(`/wellness/${id}`),

  // --- CULTURAL EVENTS ---
  submitCultural: (data) => apiClient.post('/cultural', data),
  getCultural: () => apiClient.get('/cultural'),
  deleteCultural: (id) => apiClient.delete(`/cultural/${id}`),

  // --- EVENTS ---

  submitEvent: (data) => apiClient.post('/createEvent', data),
  getEvents: () => apiClient.get('/getEvent'),
  deleteEvent: (id) => apiClient.delete(`/events/${id}`),

};