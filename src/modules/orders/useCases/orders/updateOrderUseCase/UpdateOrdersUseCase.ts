import { OrdersRepository } from "../../../repositories/OrdersRepository"; 

interface IRequest {
    id: string;
    customerName: string; 
    status: string;
    paymentType: string;
    amount: number;
}

class UpdateOrdersUseCase {
    constructor(private orderRepository: OrdersRepository) {}

    execute({ id, customerName, status, paymentType, amount }: IRequest): void{
        this.orderRepository.update( { id, customerName, status, paymentType, amount });
    }
}

export { UpdateOrdersUseCase }