import { OrdersRepository } from "../repositories/OrdersRepository"; 

const ordersRepository =  new OrdersRepository();

interface IRequest {
    customerName, 
    status, 
    paymentType, 
    amount
}

class CreateOrderService {
    constructor(private orderRepository: OrdersRepository) {}

    execute({ customerName, status, paymentType, amount }: IRequest): void{
        this.orderRepository.create( { customerName, status, paymentType, amount });
    }
}

export { CreateOrderService }