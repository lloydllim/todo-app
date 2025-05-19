'use client'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {SignUpSchema, SignUpInput} from '@/core/lib/validators/userSchema'

/**
 * A custom hook that manages states, validation handling, other frontend logics
 */

export function useSignUpPresenter(onValid: (data: SignUpInput) => void) {
	const { register, handleSubmit, formState: {errors, isSubmitting} } = useForm<SignUpInput>({
		resolver: zodResolver(SignUpSchema),
	})

	return {
		register,
		onSubmit: handleSubmit(onValid),
		errors,
		isSubmitting,
	}
}
