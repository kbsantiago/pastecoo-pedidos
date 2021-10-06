import { inject, injectable } from "tsyringe";
import { OrdersRepository } from "../../../repositories/OrdersRepository";

@injectable()
class TopFiveOrderItemsUseCase {
    constructor(@inject("OrdersRepository")
                private ordersRepository: OrdersRepository) { }

    async execute() {
        return await this.ordersRepository.getTopFiveOrdersItems();                
    }
}

export { TopFiveOrderItemsUseCase }