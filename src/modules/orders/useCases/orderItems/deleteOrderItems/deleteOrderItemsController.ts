import { container } from "tsyringe";
import { Request, Response } from "express";
import { DeleteOrderItemsUseCase } from "./deleteOrderItemsUseCase";

class DeleteOrderItemsController {
    async handler(request: Request, response: Response): Promise<Response>{
        const { orderId, productId } = request.body;
        const deleteOrderItemsUseCase = container.resolve(DeleteOrderItemsUseCase);
        await deleteOrderItemsUseCase.execute({ orderId, productId });
        return response.status(200).json();
    }
}

export { DeleteOrderItemsController }