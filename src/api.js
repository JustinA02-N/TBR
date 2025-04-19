import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000' // Placeholder for future Hapi.js API
});

export default API;
