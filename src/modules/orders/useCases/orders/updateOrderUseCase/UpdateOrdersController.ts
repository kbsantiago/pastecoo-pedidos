import { Request, Response } from "express";
import { UpdateOrdersUseCase } from "./UpdateOrdersUseCase";

class UpdateOrdersController {
    constructor(private updateOrdersUseCase: UpdateOrdersUseCase) {}

    handle(request: Request, response: Response): Response {
        const user = request.user;
        const { id, number, customerName, items, status, paymentType, amount } = request.body;
        this.updateOrdersUseCase.execute({ id, number, customerName, items, status, paymentType, amount, updated_by: user.id });
        return response.json({});
    }
}

export { UpdateOrdersController }