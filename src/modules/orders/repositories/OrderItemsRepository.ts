import { getRepository, Repository } from "typeorm";
import { OrderItem } from "../entities/OrderItem";
import { IAddOrUpdateItemOrderDTO, IOrderItemsRepository, IRemoveItemOrderDTO } from "./IOrdersItemsRepository";


class OrderItemsRepository implements IOrderItemsRepository {
    private repository: Repository<OrderItem>;

    constructor() {
        this.repository = getRepository(OrderItem);
    }

    async get(orderId: string): Promise<OrderItem[]> {
        return await this.repository.find({ where: { orderId: orderId } })
    }
    async create({ orderId, productId, quantity, price }: IAddOrUpdateItemOrderDTO): Promise<void> {
        const orderItem = this.repository.create(
            { orderId, productId, quantity, price }
        );
        await this.repository.save(orderItem);
    }
    async update({ orderId, productId, quantity, price }: IAddOrUpdateItemOrderDTO): Promise<void> {

    }
    async delete({ orderId, productId }: IRemoveItemOrderDTO): Promise<void> {
        const item = await this.repository.findOne({ where: { orderId: orderId, productId: productId } })
        this.repository.delete(item);
    }
}

export { OrderItemsRepository }