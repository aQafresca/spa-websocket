import type { IAuthRequest, IAuthResponse, IUser } from '@/features/auth/model';
import { api } from '@/shared/api';
import { UrlEndpoints } from '@/shared/constants';

export const authService = {
  login: async (credentials: IAuthRequest) => {
    const data = await api.post<IAuthResponse>(`${UrlEndpoints.AUTH}/login`, credentials);

    return data.data;
  },
  getCurrentUser: async () => {
    const { data } = await api.get<IUser>(`${UrlEndpoints.AUTH}/me`);

    return data;
  },
};
