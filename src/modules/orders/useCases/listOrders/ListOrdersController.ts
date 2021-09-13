import { Request, Response } from "express";
import { ListOrdersUseCase } from "./ListOrdersUseCase";

class ListOrdersController {
    constructor(private listOrdersUseCase: ListOrdersUseCase) {}

    handle(request: Request, response: Response): Response {
        const all = this.listOrdersUseCase.execute();
        return response.json(all);
    }
}

export { ListOrdersController }