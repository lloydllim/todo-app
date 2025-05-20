import {hashPassword} from '@/core/lib/hash'
import {UserRepository} from '@/features/auth/interfaces/UserRepository'

export async function signUpUser(
	input: {email: string; password: string},
	userRepo: UserRepository
) {
	const existing = await userRepo.findByEmail(input.email)
	if (existing) throw new Error('Email already registered')
	const hashed = await hashPassword(input.password)
	return userRepo.createUser({email: input.email, hashedPassword: hashed})
}
