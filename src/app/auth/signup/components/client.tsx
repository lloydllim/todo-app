'use client'

/**
 * Making this as the bridge between adapters, presenters, and dumb UIs
 */

import { RegisterFormUI } from './form'
import { useSignUpPresenter } from '../presenters'
import { submitSignUpForm } from '../adapters'

export default function RegisterClient() {
	const {register, errors, isSubmitting, onSubmit} = useSignUpPresenter(
		async (data) => {
			try {
				await submitSignUpForm(data)
				// TODO: add success handling e.g. toast, redirect, etc.
				alert('Registration successful!')
			} catch (error) {
				// TODO: add user-friendly error handling here
				console.error('Registration error:', error)
				alert('Registration failed, please try again.')
			}
		}
	)

	return (
		<RegisterFormUI
			onSubmit={onSubmit}
			register={register}
			errors={errors}
			isSubmitting={isSubmitting}
		/>
	)
}
