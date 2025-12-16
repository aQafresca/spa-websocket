import { z } from 'zod';

export const searchProductsSchema = z.object({
  page: z.coerce.number().int().positive().catch(1).default(1),
});
