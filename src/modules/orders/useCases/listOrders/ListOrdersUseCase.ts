import { Order } from "../../entities/Order";
import { OrdersRepository } from "../../repositories/OrdersRepository"; 

class ListOrdersUseCase {
    constructor(private orderRepository: OrdersRepository) {}

    async execute(): Promise<Order[]>{
        return await this.orderRepository.get();
    }
}

export { ListOrdersUseCase }