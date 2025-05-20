'use server'

import {SignInSchema} from '@/core/lib/validators/userSchema'
import {getRepository} from '@/core/repositories/repositoryRegistry'
import {signInUser} from '@/features/auth/use-cases/signInUser'

type SignInProps = {
	email: string
	password: string
}

export async function signInAction(data: SignInProps) {
	const result = SignInSchema.safeParse(data)

	if (!result.success) {
		return {success: false, errors: result.error.flatten().fieldErrors}
	}

	const userRepo = await getRepository('user', 'mock')

	try {
		await signInUser(result.data, userRepo)
		return {success: true}
	} catch (err: any) {
		return {success: false, message: err.message}
	}
}
