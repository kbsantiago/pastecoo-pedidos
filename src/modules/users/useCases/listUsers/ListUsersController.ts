import { container } from "tsyringe";
import { Request, Response } from "express"; 
import { ListUsersUseCase } from "./ListUsersUseCase";

class ListUsersController {
    async handler(request: Request, response: Response): Promise<Response> {
        const listUsersUseCase = container.resolve(ListUsersUseCase);
        const users = await listUsersUseCase.execute();
        return response.status(200).json(users);
    }
}

export { ListUsersController }