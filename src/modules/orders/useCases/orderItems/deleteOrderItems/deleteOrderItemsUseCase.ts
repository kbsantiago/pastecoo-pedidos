import { inject, injectable } from "tsyringe";
import { OrderItemsRepository } from "../../../repositories/OrderItemsRepository";

interface IRequest {
    orderId,
    productId,
}

@injectable()
class DeleteOrderItemsUseCase {
    constructor(@inject("OrderItemsRepository")
                private orderItemsRepository: OrderItemsRepository) {

    }
    async execute({ orderId, productId }: IRequest): Promise<void> {

    }
}

export { DeleteOrderItemsUseCase } 