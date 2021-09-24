import { inject, injectable } from "tsyringe";
import { User } from "../../entities/User";
import { UsersRepository } from "../../repositories/UsersRepository";

@injectable()
class ListUsersUseCase {
    constructor(@inject("UsersRepository")
                private usersRepository: UsersRepository) {}

    async execute(): Promise<User[]> {
        return this.usersRepository.get();        
    }
}

export { ListUsersUseCase } 