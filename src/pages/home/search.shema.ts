import { z } from 'zod';

export const searchProductsSchema = z.object({
  page: z.coerce.number().int().positive().catch(1).default(1),
  search: z.string().catch('').default(''),
});

export const defaultSearchValues = { page: 1, search: '' };
