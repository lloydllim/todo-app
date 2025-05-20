import {UserRepository} from '@/features/auth/interfaces/UserRepository'

type SignInProps = {
	email: string
	password: string
}

export async function signInUser(
	input: {email: string; password: string},
	userRepo: UserRepository
) {
	const user = await userRepo.findByEmail(input.email)

	return user
}
