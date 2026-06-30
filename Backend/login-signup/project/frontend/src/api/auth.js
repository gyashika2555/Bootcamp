import axios from 'axios';

const envUrl = import.meta.env.VITE_API_URL;
const BASE_URL = envUrl 
  ? (envUrl.endsWith('/pages') ? envUrl : `${envUrl.replace(/\/$/, '')}/pages`)
  : 'https://login-signup-e69r.onrender.com/pages';

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
