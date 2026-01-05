import type { IUser } from '@/features/auth/model';

export const mockUser: IUser = {
  id: 1,
  email: 'test@test.com',
  firstName: 'John',
  lastName: 'Doe',
  username: 'johndoe',
  image: 'url-to-image',
};
