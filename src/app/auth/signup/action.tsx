'use server'

/**
 *  The server action, connects adapter to the backend's use-case
 */

import {SignUpSchema} from '@/core/lib/validators/userSchema'
import {getRepository} from '@/core/repositories/repositoryRegistry'
import {signUpUser} from '@/features/auth/use-cases/signUpUser'

export async function signUpAction(data: {
	email: string
	username: string
	password: string
}) {
	const result = SignUpSchema.safeParse(data)

	if (!result.success) {
		return {success: false, errors: result.error.flatten().fieldErrors}
	}

	const userRepo = await getRepository('user', 'mock')

	try {
		await signUpUser(result.data, userRepo)
		return {success: true}
	} catch (e: any) {
		return {success: false, message: e.message}
	}
}
