export interface UserRepository {
  createUser(user: { email: string; hashedPassword: string }): Promise<any>;
  findByEmail(email: string): Promise<any | null>;
}