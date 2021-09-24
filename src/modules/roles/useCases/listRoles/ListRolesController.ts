import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListRolesUseCase } from "./ListRolesUseCase";


class ListRolesController {
    async handler(request: Request, response: Response): Promise<Response> {
        const listRolesUseCase = container.resolve(ListRolesUseCase);
        const roles = await listRolesUseCase.execute();
        return response.status(200).json(roles);
    }
}

export { ListRolesController }