import {signInAction} from './action'
import {SignInInput} from '@/core/lib/validators/userSchema'

/**
 * Bridge between the presenter and APIs, or server actions
 */

export async function submitSignInForm(data: SignInInput) {
	const result = await signInAction(data)
	if (!result.success) {
		throw new Error(result.message || 'Signing in failed')
	}
}
