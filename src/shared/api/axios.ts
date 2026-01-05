import axios from 'axios';

import { AppError } from '@/shared/api';
import { tokenStorage } from '@/shared/lib/storage';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = tokenStorage.get();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (res) => res,
  (error) => {
    const status = error.response?.status;
    const data = error.response?.data;

    const message = data?.message || data?.error || 'Server error';
    const code = data?.code;

    if (!error.response) {
      return Promise.reject(new AppError('Network error. Please check your connection.'));
    }

    return Promise.reject(new AppError(message, status, code));
  },
);
