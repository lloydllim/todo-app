import {z} from 'zod'

export const SignUpSchema = z.object({
	email: z.string().email('Invalid email address'),
	username: z.string().min(6, 'Username must be at least 6 characters'),
	password: z.string().min(6, 'Password must be at least 6 characters'),
})

export type SignUpInput = z.infer<typeof SignUpSchema>;