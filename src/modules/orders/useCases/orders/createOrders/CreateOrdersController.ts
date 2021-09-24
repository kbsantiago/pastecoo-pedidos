import { container } from "tsyringe";
import { Request, Response } from "express";
import { CreateOrdersUseCase } from "./CreateOrdersUseCase";

class CreateOrdersController {
    async handler(request: Request, response: Response): Promise<Response>{
        const user = request.user;
        const { customerName, status, paymentType, amount } = request.body;
        const createOrdersUseCase = container.resolve(CreateOrdersUseCase);
        const orderId = await createOrdersUseCase.execute({ customerName, status, paymentType, amount, created_by: user.id });
        return response.status(201).json(orderId);
    }
}

export { CreateOrdersController }