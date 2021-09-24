import { inject, injectable } from "tsyringe";
import { PasswordUtils } from "../../../../utils/PasswordUtils";
import { UsersRepository } from "../../repositories/UsersRepository";


@injectable()
class CreateUserUseCase {
    constructor(@inject("UsersRepository") 
                private usersRepository: UsersRepository) {} 

    async execute({ name, username, roleId, password, created_by  }): Promise<void> {
        const passwordHash = await new PasswordUtils().encrypt(password);
        await this.usersRepository.create({
            name, username, roleId, password: passwordHash, created_by
        })
    } 
}

export { CreateUserUseCase };
