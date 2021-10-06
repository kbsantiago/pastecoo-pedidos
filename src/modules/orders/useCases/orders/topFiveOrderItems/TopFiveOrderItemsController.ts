import { container } from "tsyringe";
import { Request, Response } from "express";
import { TopFiveOrderItemsUseCase } from "./TopFiveOrderItemsUseCase";


class TopFiveOrderItemsController {
    async handler(request: Request, response:Response): Promise<Response> {
        const topFiveOrderItemsUseCase = container.resolve(TopFiveOrderItemsUseCase);
        const topFiveOrderItems = await topFiveOrderItemsUseCase.execute();
        return response.status(200).json(topFiveOrderItems);
    }
}

export { TopFiveOrderItemsController }