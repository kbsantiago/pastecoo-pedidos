import { inject, injectable } from "tsyringe";
import { sign } from "jsonwebtoken";

import { PasswordUtils } from "../../../utils/PasswordUtils";
import { UsersRepository } from "../../users/repositories/UsersRepository";
import { AppError } from "../../../errors/AppError";

interface IRequest {
    username: string;
    password: string;
}

interface IResponse {
    user: {
        id: string,
        username: string;
    },
    token: string;
}

@injectable()
class AuthenticationUseCase {  
    private key:string = "0c01565485bc32a662900696c9ce228e";

    constructor(@inject("UsersRepository")
                private usersRepository: UsersRepository) {}

    async execute({ username, password }: IRequest): Promise<IResponse> {

        const user = await this.usersRepository.getByUsername(username);

        if(!user) {
            throw new AppError('Email or password is incorrect.', 400);
        }

        const isValid = new PasswordUtils().isValid(user.password, password);

        if(!isValid) {
            throw new AppError('Email or password is incorrect.', 400);
        }

        const token = sign({}, this.key, { subject: user.id, expiresIn: "1d", }); 

        const result: IResponse = {
            token,
            user: {
                id: user.id, 
                username: user.username,
            }
        }

        return result;
    }
}

export { AuthenticationUseCase }