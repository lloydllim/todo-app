'use client'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {SignInSchema, SignInInput} from '@/core/lib/validators/userSchema'

/**
 * A custom hook that manages states, validation handling, other frontend logics
 */

export function useSignInPresenter(onValid: (data: SignInInput) => void) {
	const {
		register,
		handleSubmit,
		formState: {errors, isSubmitting},
	} = useForm<SignInInput>({
		resolver: zodResolver(SignInSchema),
	})

	return {
		register,
		onSubmit: handleSubmit(onValid),
		errors,
		isSubmitting,
	}
}
