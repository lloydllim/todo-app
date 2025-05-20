'use client'

/**
 * Making this as the bridge between adapters, presenters, and dumb UIs
 */

import {LoginFormUI} from './form'
import {useSignInPresenter} from '../useSignInPresenter'
import { submitSignInForm } from '../submitSignInAdapter'

export default function LoginClient() {
	const {register, errors, isSubmitting, onSubmit} = useSignInPresenter(
		async (data) => {
			try {
				await submitSignInForm(data)
				// TODO: add success handling e.g. toast, redirect, etc.
				alert('Signin successful!')
			} catch (error) {
				// TODO: add user-friendly error handling here
				console.error('Signin error:', error)
				alert('Signin failed, please try again.')
			}
		}
	)

	return (
		<LoginFormUI
			onSubmit={onSubmit}
			register={register}
			errors={errors}
			isSubmitting={isSubmitting}
		/>
	)
}
