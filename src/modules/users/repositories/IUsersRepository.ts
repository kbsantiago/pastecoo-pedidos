import { User } from "../entities/User";

interface ICreateUserDTO {
    name: string;
    username: string;
    roleId: string; 
    password: string;
    created_by: string;
}

interface IUpdateUserDTO {
    id: string;
    name: string;
    username: string;
    roleId: string; 
    password: string;
    updated_by: string;
}

interface IUsersRepository {
    get(): Promise<User[]>;
    getById(id: string): Promise<User>;
    getByUsername(username: string): Promise<User>;
    create({ name, username, roleId, password, created_by }: ICreateUserDTO): Promise<void>;
    update({ id, name, username, roleId, password, updated_by }: IUpdateUserDTO): Promise<void>;
    delete(id: string): Promise<void>;
}

export { IUsersRepository, ICreateUserDTO, IUpdateUserDTO };
