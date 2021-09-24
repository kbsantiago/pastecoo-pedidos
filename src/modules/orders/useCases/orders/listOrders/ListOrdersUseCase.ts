import { inject, injectable } from "tsyringe";
import { Order } from "../../../entities/Order";
import { OrdersRepository } from "../../../repositories/OrdersRepository"; 

@injectable()
class ListOrdersUseCase {
    constructor(@inject("OrdersRepository")
        private ordersRepository: OrdersRepository) {}

    async execute(): Promise<Order[]>{
        return await this.ordersRepository.get();
    }
}

export { ListOrdersUseCase }