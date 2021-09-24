import { container } from "tsyringe";
import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    async handler(request: Request, response:Response): Promise<Response> {        
        const user = request.user;
        const { name, username, roleId, password } = request.body;
        const createUserUseCase = container.resolve(CreateUserUseCase);
        await createUserUseCase.execute({ name, username, roleId, password, created_by: user.id });
        return response.status(201).json();
    }
};

export { CreateUserController }