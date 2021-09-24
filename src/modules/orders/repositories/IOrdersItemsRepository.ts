import { OrderItem } from "../entities/OrderItem";

interface IAddOrUpdateItemOrderDTO {
    orderId: string;
    productId: string;
    quantity: number;
    price: number;
}

interface IRemoveItemOrderDTO {
    orderId: string;
    productId: string;
    quantity: number;
}

interface IOrderItemsRepository {
    get(orderId: string, productId: string): Promise<OrderItem[]>;    
    create({ orderId, productId, quantity, price }: IAddOrUpdateItemOrderDTO): Promise<void>;    
    update({ orderId, productId, quantity, price }: IAddOrUpdateItemOrderDTO)
    delete({ orderId, productId }: IRemoveItemOrderDTO): Promise<void>;
}

export { IOrderItemsRepository, IAddOrUpdateItemOrderDTO, IRemoveItemOrderDTO }