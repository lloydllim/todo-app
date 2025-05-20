import bcrypt from 'bcryptjs'

export const hashPassword = (password: string) => {
	const hashed_password = bcrypt.hash( password, 10 )
	return hashed_password
}
