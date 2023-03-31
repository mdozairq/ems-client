import axios from 'axios';

const API = axios.create({ baseURL: 'https://nice-teal-calf-wear.cyclic.app' });


API.interceptors.request.use((req) => {
  if (localStorage.getItem('admin')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

export const fetchEmployeeList = () => API.get('/employee?page_size=5&page=0');
export const adminSignIn = (formData) => API.post('/auth/login', formData);
