// React components can use these API functions to interact with the backend
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const registerUser = async (username, password) => {
  return api.post('/register', { username, password });
};

export const loginUser = async (username, password) => {
  return api.post('/login', { username, password });
};
