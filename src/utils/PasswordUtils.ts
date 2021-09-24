import { hash, compare } from "bcryptjs";

class PasswordUtils {

    async encrypt(password: string): Promise<string> {
        return await hash(password, 8);
    }

    async isValid(password: string, hash: string): Promise<boolean> {                
        return await compare(password, hash);
    }
}

export { PasswordUtils }