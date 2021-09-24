import { getRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { IUsersRepository, ICreateUserDTO, IUpdateUserDTO} from "./IUsersRepository";

class UsersRepository implements IUsersRepository{
    private repository: Repository<User>;
    
    constructor() {
        this.repository = getRepository(User);
    }

    async get(): Promise<User[]> {
        return await this.repository.find();
    }

    async create({ name, username, roleId, password, created_by }: ICreateUserDTO): Promise<void> {        
        const user = this.repository.create({
            name, username, roleId, password, created_by
        });
        await this.repository.save(user);
    }

    async getById(id: string): Promise<User> {
        return await this.repository.findOne(id);
    }

    async getByUsername(username: string): Promise<User> {
        return this.repository.findOne( { where: { username: username } });
    }

    async update({ id, name, username, roleId, password, updated_by }: IUpdateUserDTO): Promise<void> {
        const user = this.repository.create({
            name, username, roleId, password, updated_by
        });
        await this.repository.save(user);
    }
    
    async delete(id:string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}

export { UsersRepository } 