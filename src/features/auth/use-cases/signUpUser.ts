import {hashPassword} from '@/core/lib/hash'
import {UserRepository} from '@/features/auth/interfaces/UserRepository'

type SignUpProps = {
	email: string
	username: string
	password: string
}
export async function signUpUser(input: SignUpProps, userRepo: UserRepository) {
	const existing = await userRepo.findByEmail(input.email)

	if (existing) throw new Error('Email already registered')
	const hashed = await hashPassword(input.password)

	return userRepo.createUser({
		email: input.email,
		username: input.username,
		hashedPassword: hashed,
	})
}
