import { inject, injectable } from "tsyringe";
import { OrderItemsRepository } from "../../../repositories/OrderItemsRepository";

interface IRequest {
    orderId,
    productId,
    quantity,
    price,
}

@injectable()
class UpdateOrderItemsUseCase {
    constructor(
        @inject("OrderItemsRepository")
        private orderItemsRepository: OrderItemsRepository) { }

    async execute({ orderId, productId, quantity, price}: IRequest): Promise<void> {
        await this.orderItemsRepository.create({ orderId, productId, quantity, price});
    }
}

export { UpdateOrderItemsUseCase } 