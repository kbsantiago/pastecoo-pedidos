import { container } from "tsyringe";
import { Request, Response } from "express";
import { AddOrderItemsUseCase } from "./addOrderItemsUseCase";

class AddOrderItemsController {
    async handler(request: Request, response: Response): Promise<Response>{
        const { orderId, productId, quantity, price } = request.body;
        const addOrderItemsUseCase = container.resolve(AddOrderItemsUseCase);
        return response.status(201).json();

        // update order amount
        
    }
}

export { AddOrderItemsController }