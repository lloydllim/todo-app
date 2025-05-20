'use client'

import type {FieldErrors} from 'react-hook-form'
import type {SignInInput} from '@/core/lib/validators/userSchema'
import {FormInput} from '@/components/forms/FormInput'

/**
 *  The dumb component, more of a UI HTMl stylings that only receives props
 *  Front Facing components
 */

type Props = {
	onSubmit: (values: any) => void
	errors: FieldErrors<SignInInput>
	isSubmitting: boolean
	register: any
}

export function LoginFormUI({onSubmit, errors, isSubmitting, register}: Props) {
	return (
		<form
			onSubmit={onSubmit}
			className='w-full max-w-md mx-auto mt-10 bg-white p-8 rounded-2xl shadow-lg space-y-6'
		>
			<h2 className='text-2xl font-bold text-center text-gray-800'>
				Login to your Account
			</h2>

			<FormInput
				id='email'
				label='Email'
				type='email'
				placeholder='you@example.com'
				registration={register('email')}
				error={errors.email}
			/>

			<FormInput
				id='password'
				label='Password'
				type='password'
				placeholder='••••••••'
				registration={register('password')}
				error={errors.password}
			/>

			{/* Submit */}
			<div>
				<button
					type='submit'
					disabled={isSubmitting}
					className={`w-full py-2 px-4 text-white font-semibold rounded-lg transition-all duration-300 ${
						isSubmitting
							? 'bg-gray-400 cursor-not-allowed'
							: 'bg-blue-600 hover:bg-blue-700'
					}`}
				>
					{isSubmitting ? 'Signing In...' : 'Sign In'}
				</button>
			</div>

			<p className='text-center text-sm text-gray-500'>
				Don't have an account yet?{' '}
				<a
					href='/auth/signup'
					className='text-blue-600 hover:underline'
				>
					Sign up
				</a>
			</p>
		</form>
	)
}
