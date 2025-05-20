'use server'

import { SignInSchema } from '@/core/lib/validators/userSchema'
import { getRepository } from '@/core/repositories/repositoryRegistry';

export async function signInAction(data: {email: string; password: string}) {
	const result = SignInSchema.safeParse(data)

	if (!result.success) {
		return { success: false, errors: result.error.flatten().fieldErrors }
	}

    const userRepo = await getRepository( 'user', 'prisma' )

    try {

    } catch ( err ) {
        
    }
}
