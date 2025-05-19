import {UserRepository} from '@/features/auth/interfaces/UserRepository'

const users: any[] = []

export const mockUserRepo: UserRepository = {
	createUser: async ({email, hashedPassword}) => {
		const user = {id: `${(users.length = 1)}`, email, hashedPassword}
		users.push(user)
		return user
	},
	findByEmail: (email: string) => {
		return users.find((user) => user.email === email) || null
	},
}
