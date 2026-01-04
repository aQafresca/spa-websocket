import { z } from 'zod';

export const messageFormSchema = z.object({
  message: z.string().trim().min(1).max(20),
});

export type TMessageFormArea = z.infer<typeof messageFormSchema>;

export const messageDefaultValues: TMessageFormArea = {
  message: '',
};
