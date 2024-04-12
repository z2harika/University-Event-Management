// axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://uem-backend.vercel.app/api',
});

export default instance;
