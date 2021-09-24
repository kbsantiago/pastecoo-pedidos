import { getRepository, Repository } from "typeorm";
import { Role } from "../entities/Role";
import { IRolesRepository, ICreateRoleDTO, IUpdateRoleDTO } from "./IRolesRepository";

class RolesRepository implements IRolesRepository {
    private repository: Repository<Role>;

    constructor() {
        this.repository = getRepository(Role);
    }

    async get(): Promise<Role[]> {     
        return await this.repository.find();
    }
    async getById(id: string): Promise<Role> {
        return this.repository.findOne( { where: { id: id } } );
    }
    async getByName(name: string): Promise<Role> {
        return this.repository.findOne( { where: { name: name } } );
    }
    async create({ name, created_by }: ICreateRoleDTO): Promise<string> {
        const role = this.repository.create( { name, created_by } );
        await this.repository.save(role);
        return role.id;
    }
    async update({ id, name }: IUpdateRoleDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }

}

export { RolesRepository } 