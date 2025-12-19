import axios from 'axios';

import { AppError } from '@/shared/api/appErrors.ts';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
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
