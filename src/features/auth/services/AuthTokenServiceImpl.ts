// features/auth/services/AuthTokenServiceImpl.ts
import { SignJWT, jwtVerify } from 'jose'
import { AuthTokenInterface } from '@/core/services/AuthTokenInterface'

const secret = new TextEncoder().encode(process.env.JWT_SECRET!)

export class AuthTokenServiceImpl implements AuthTokenInterface {
	async signToken(payload: {userId: string}): Promise<string> {
		return await new SignJWT(payload)
			.setProtectedHeader({alg: 'HS256'})
			.setIssuedAt()
			.sign(secret)
	}

	async verifyToken(token: string): Promise<{userId: string} | null> {
		try {
			const { payload } = await jwtVerify(token, secret)
			return { userId: payload.userId as string }
		} catch {
			return null
		}
	}
}
