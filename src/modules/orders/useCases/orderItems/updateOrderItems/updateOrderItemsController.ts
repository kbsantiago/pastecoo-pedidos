import { container } from "tsyringe";
import { Request, Response } from "express";
import { UpdateOrderItemsUseCase } from "./updateOrderItemsUseCase";

class UpdateOrderItemsController {
    async handler(request: Request, response: Response): Promise<Response>{
        const { orderId, productId, quantity, price } = request.body;
        const updateOrderItemsUseCase = container.resolve(UpdateOrderItemsUseCase);
        return response.status(200).json();
    }
}

export { UpdateOrderItemsController }