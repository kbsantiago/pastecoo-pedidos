import { inject, injectable } from "tsyringe"
import { RolesRepository } from "../../repositories/RolesRepository"

interface IRequest {
    name: string;
    created_by: string;
}

@injectable()
class CreateRolesUseCase {
    constructor(@inject("RolesRepository")
                private rolesRepository: RolesRepository) {}

    async execute({ name, created_by }: IRequest): Promise<void> {
        await this.rolesRepository.create({ name, created_by });
    }
}
 
export { CreateRolesUseCase }