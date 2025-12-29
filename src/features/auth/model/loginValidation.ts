import z from 'zod';

export const loginFormSchema = z.object({
  username: z.string().trim().min(1),
  password: z.string().trim().min(5).max(20),
});

export type TLoginFormInputs = z.infer<typeof loginFormSchema>;

export const loginFormDefaultValues: TLoginFormInputs = {
  username: 'emilys',
  password: 'emilyspass',
};
