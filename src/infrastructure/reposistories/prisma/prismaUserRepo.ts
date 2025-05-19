// infrastructure/repositories/prisma/prismaUserRepo.ts
import { UserRepository } from '@/features/auth/interfaces/UserRepository'
import { prisma } from '@/core/db/prisma-client'

export const prismaUserRepo: UserRepository = {
	findByEmail: async (email) => prisma.user.findUnique({where: {email}}),
	createUser: async ({email, hashedPassword}) =>
		prisma.user.create({data: {email, hashedPassword}}),
}
