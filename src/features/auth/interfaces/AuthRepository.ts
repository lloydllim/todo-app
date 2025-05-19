import {User} from '@/core/entities/User'

export interface AuthRepository {
	login(email: string, password: string): Promise<User | null> // returns user or throws error
	logout(userId: string): Promise<void>
}
