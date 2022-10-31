import axios from 'axios';

const api = axios.create({
  baseURL: 'https://resilia-challenge-api.herokuapp.com'
});

export default api;
