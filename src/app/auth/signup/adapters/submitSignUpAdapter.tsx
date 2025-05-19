import {signUpAction} from '../action'
import {SignUpInput} from '@/core/lib/validators/userSchema'

/**
 * Bridge between the presenter and APIs, or server actions
 */

export async function submitSignUpForm(data: SignUpInput) {
	const result = await signUpAction(data)
	if (!result.success) {
		throw new Error(result.message || 'Signing up failed')
	}
}
