import { z } from 'zod';

export const loginSearchSchema = z.object({
  redirect: z.string().catch('').default(''),
  reason: z.string().catch('').default(''),
});

export const defaultSearchValues = { redirect: '', reason: '' };
