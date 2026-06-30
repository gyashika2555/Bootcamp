import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8888/pages';

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const registerUser = (payload) => client.post('/register', payload);

export const loginUser = (payload) => client.post('/login', payload);

export const fetchDashboard = (token) =>
  client.get('/dashboard', {
    headers: { Authorization: `Bearer ${token}` },
  });

export default client;
