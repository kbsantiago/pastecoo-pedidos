import { inject, injectable } from "tsyringe";
import { OrdersRepository } from "../../../repositories/OrdersRepository"; 

interface IRequest {
    customerName, 
    status, 
    paymentType, 
    amount,
    created_by,
}

@injectable()
class CreateOrdersUseCase {
    constructor(
        @inject("OrdersRepository")
        private orderRepository: OrdersRepository) {}

    async execute({ customerName, status, paymentType, amount, created_by }: IRequest): Promise<number> {
        const number  = await this.orderRepository.getNextOrderNumber();           
        await this.orderRepository.create( { number, customerName, status, paymentType, amount, created_by });
        return number;
    }
}

export { CreateOrdersUseCase }