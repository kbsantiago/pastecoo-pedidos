import { inject, injectable } from "tsyringe";
import { OrderItem } from "../../../entities/OrderItem";
import { OrderItemsRepository } from "../../../repositories/OrderItemsRepository";

@injectable()
class ListOrderItemsUseCase {
    constructor(@inject("OrderItemsRepository")
                private orderItemsRepository: OrderItemsRepository) {}

    async execute(orderId: string ): Promise<OrderItem[]> {
        return await this.orderItemsRepository.get(orderId);
    }
}

export { ListOrderItemsUseCase } 