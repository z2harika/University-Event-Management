// axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://uembackend.vercel.app/api',
});

export default instance;
