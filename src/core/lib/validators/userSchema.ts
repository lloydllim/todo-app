import {z} from 'zod'

export const SignUpSchema = z.object({
	email: z.string().email('Invalid email address'),
	username: z.string().min(6, 'Username must be at least 6 characters'),
	password: z.string().min(6, 'Password must be at least 6 characters'),
})

export type SignUpInput = z.infer<typeof SignUpSchema>

export const SignInSchema = z.object({
	email: z.string().email('Invalid email address'),
	password: z.string().min(6, 'Password must be at least 6 characters'),
})

export type SignInSchema = z.infer<typeof SignInSchema>

export const ChangePasswordSchema = z
	.object({
		currentPassword: z.string().min(6, 'Current password is required'),
		newPassword: z.string().min(6, 'New password must be at least 6 characters'),
		confirmPassword: z.string().min(6, 'Confirm your new password'),
	})
	.refine((data) => data.newPassword === data.confirmPassword, {
		message: 'Passwords do not match',
		path: ['confirmPassword'],
	})

export type ChangePasswordInput = z.infer<typeof ChangePasswordSchema>

export const EditProfileSchema = z.object({
	email: z.string().email('Invalid email address').optional(),
	username: z.string().min(6, 'Username must be at least 6 characters').optional(),
})

export type EditProfileInput = z.infer<typeof EditProfileSchema>
