// core/services/AuthTokenInterface.ts

export interface AuthTokenInterface {
	signToken(payload: {userId: string}): Promise<string>
	verifyToken(token: string): Promise<{userId: string} | null>
}
