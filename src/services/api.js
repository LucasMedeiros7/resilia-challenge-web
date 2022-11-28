import axios from 'axios';

const api = axios.create({
  baseURL: 'https://resilia-challenge-api.onrender.com'
});

export default api;
