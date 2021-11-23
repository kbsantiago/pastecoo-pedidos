import { Request, Response } from "express";
import { container } from "tsyringe";
import { PatchOrdersUseCase } from "./PatchOrdersUseCase";

class PatchOrdersController {
    async handle(request: Request, response: Response): Promise<Response> {
        const user = request.user;
        const { id, status } = request.body;
        const patchOrdersUseCase = container.resolve(PatchOrdersUseCase);
        await patchOrdersUseCase.execute({ id, status, updated_by: user.id });
        return response.status(200).json();
    }
}

export { PatchOrdersController }