/* eslint-disable no-param-reassign */
import axios from 'axios';

export default async () => {
  await axios.interceptors.request.use((config) => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NfdXVpZCI6IjM1ZWM0MDg5LWQzNmQtNGFkZC1iYTUyLTYzYzU3MDRiM2EyZSIsImF1dGhvcml6ZWQiOnRydWUsImV4cCI6MTYwMjM0NjE5NSwidXNlcl9pZCI6Mn0.3nsunNTPAdYQ4w3XV2aGFo0DQI_1yZMFAHId-5KDKK8';

    config.headers.Authorization = `Bearer ${token}`;
    config.headers['Content-Type'] = 'application/json';
    config.headers['Access-Control-Allow-Origin'] = 'proj-dompet';
    config.headers['Access-Control-Allow-Methods'] = 'GET,POST,PATCH,OPTION';

    return config;
  }, (error) => Promise.reject(error));
};
