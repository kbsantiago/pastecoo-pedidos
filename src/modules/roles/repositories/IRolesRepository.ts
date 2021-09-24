import { Role } from "../entities/Role";

interface ICreateRoleDTO {
    name: string;
    created_by: string;
}

interface IUpdateRoleDTO {
    id: string;
    name: string;
    updated_by: string;
}

interface IRolesRepository {
    get(): Promise<Role[]>;
    getById(id: string): Promise<Role>;
    create({ name, created_by }: ICreateRoleDTO): Promise<string>;
    update({ id, name, updated_by }: IUpdateRoleDTO): Promise<void>;
    delete(id: string): Promise<void>;
}

export { IRolesRepository, ICreateRoleDTO, IUpdateRoleDTO } 