import { container } from "tsyringe";
import { Request, Response } from "express";
import { CreateRolesUseCase } from "./CreateRolesUseCase";

class CreateRolesController {
    async handler(request: Request, response: Response): Promise<Response> {
        const user = request.user;
        const { name } = request.body;
        const createRolesUseCase = container.resolve(CreateRolesUseCase);
        await createRolesUseCase.execute({ name, created_by: user.id});
        return response.status(201).json();
    }
}

export { CreateRolesController } 