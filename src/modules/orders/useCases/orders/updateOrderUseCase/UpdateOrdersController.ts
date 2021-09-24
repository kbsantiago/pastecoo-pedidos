import { Request, Response } from "express";
import { UpdateOrdersUseCase } from "./UpdateOrdersUseCase";

class UpdateOrdersController {
    constructor(private updateOrdersUseCase: UpdateOrdersUseCase) {}

    handle(request: Request, response: Response): Response {
        const { id, customerName, status, paymentType, amount } = request.body;
        this.updateOrdersUseCase.execute({ id, customerName, status, paymentType, amount });
        return response.json({});
    }
}

export { UpdateOrdersController }