import { toast } from 'sonner';

import { AppError } from '@/shared/api/appErrors.ts';

export const handleGlobalError = (error: unknown) => {
  if (error instanceof AppError) {
    if (error.status === 401) {
      return;
    }
    toast.error(error.message);
  } else if (error instanceof Error) {
    toast.error(error.message);
  } else {
    toast.error('Unknown error');
  }
};
