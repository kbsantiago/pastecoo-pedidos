import { Request, Response } from "express";
import { CreateOrderUseCase } from "./CreateOrderUseCase";

class CreateOrderController {
    constructor(private createOrderUseCase: CreateOrderUseCase) { }

    async handler(request: Request, response: Response): Promise<Response>{
        const { customerName, status, paymentType, amount } = request.body;
        const orderId = await this.createOrderUseCase.execute({ customerName, status, paymentType, amount })
        return response.status(201).json(orderId);
    }
}

export { CreateOrderController }