import { inject, injectable } from "tsyringe";
import { Order } from "../../../entities/Order";
import { OrdersRepository } from "../../../repositories/OrdersRepository"; 

@injectable()
class ListOrdersUseCase {
    constructor(@inject("OrdersRepository")
        private ordersRepository: OrdersRepository) {}

    async execute(): Promise<Order[]>{
        const result = await this.ordersRepository.get();
        console.log(result);
        return result;
    }
}

export { ListOrdersUseCase }