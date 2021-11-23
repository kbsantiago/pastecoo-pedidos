import { Order } from "../entities/Order";
import { OrderItem } from "../entities/OrderItem";

interface ICreateOrderDTO {
    number: number;
    customerName: string;    
    items: OrderItem[];
    status: string;
    paymentType: string; 
    amount: number;
    created_by: string;
}

interface IUpdateOrderDTO {
    id: string;
    number: number;    
    customerName: string;
    items: OrderItem[];
    status: string;
    paymentType: string; 
    amount: number;
    updated_by: string;
}

interface IUpdateStatusOrderDTO {
    id: string;   
    status: string;
    updated_by: string;
}

interface IReturnSequenceValue {
    number: number;
}

interface IReturnTopFiveOrderItems {
    id: string;
    productName: string;
    quantity: number;
}

interface IOrdersRepository {
    get(): Promise<Order[]>;
    getById(id: string): Promise<Order>;
    create({ number, customerName, items, status, paymentType, amount, created_by }: ICreateOrderDTO): Promise<string>;
    update({ id, number, customerName, items, status, paymentType, amount, updated_by }: IUpdateOrderDTO): Promise<void>;
    delete(id: string): void;
}

export { IOrdersRepository, ICreateOrderDTO, IUpdateOrderDTO, IReturnSequenceValue, IReturnTopFiveOrderItems, IUpdateStatusOrderDTO };