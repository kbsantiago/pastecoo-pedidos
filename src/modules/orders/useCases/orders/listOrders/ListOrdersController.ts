import { container } from "tsyringe";
import { Request, Response } from "express";
import { ListOrdersUseCase } from "./ListOrdersUseCase";

class ListOrdersController {
    async handler(request: Request, response: Response): Promise<Response>{
        const listOrdersUseCase = container.resolve(ListOrdersUseCase);
        const all = await listOrdersUseCase.execute();
        return response.status(200).json(all);
    }
}

export { ListOrdersController }