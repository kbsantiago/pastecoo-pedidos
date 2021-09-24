import { inject, injectable } from "tsyringe";
import { Role } from "../../entities/Role";
import { IRolesRepository } from "../../repositories/IRolesRepository";
import { RolesRepository } from "../../repositories/RolesRepository";

@injectable()
class ListRolesUseCase {
    constructor(@inject("RolesRepository")
                private rolesRepository: RolesRepository) {}
                
    async execute(): Promise<Role[]> {
        return await this.rolesRepository.get()
    }
}

export { ListRolesUseCase }