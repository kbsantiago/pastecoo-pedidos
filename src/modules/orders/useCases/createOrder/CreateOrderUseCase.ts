import { OrdersRepository } from "../../repositories/OrdersRepository"; 

interface IRequest {
    customerName, 
    status, 
    paymentType, 
    amount
}

class CreateOrderUseCase {
    constructor(private orderRepository: OrdersRepository) {}

    async execute({ customerName, status, paymentType, amount }: IRequest): Promise<string>{
        return await this.orderRepository.create( { customerName, status, paymentType, amount });
    }
}

export { CreateOrderUseCase }