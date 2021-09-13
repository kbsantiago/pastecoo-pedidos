import { Order } from "../entities/Order";

interface ICreateOrderDTO {
    customerName: string;
    status: string;
    paymentType: string; 
    amount: number;
}

interface IUpdateOrderDTO {
    id: string;
    customerName: string;
    status: string;
    paymentType: string; 
    amount: number;
}

interface IOrdersRepository {
    get(): Promise<Order[]>;
    getById(id: string): Promise<Order>;
    create({ customerName, status, paymentType, amount }: ICreateOrderDTO): Promise<string>;
    update({ id, customerName, status, paymentType, amount }: IUpdateOrderDTO): Promise<void>;
    delete(id: string): void;
}

export { IOrdersRepository, ICreateOrderDTO, IUpdateOrderDTO };