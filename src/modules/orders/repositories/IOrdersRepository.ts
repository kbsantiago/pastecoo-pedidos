import { Order } from "../model/Order";

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
    get(): Order[];
    getById(): Order;
    create({ customerName, status, paymentType, amount }: ICreateOrderDTO): string;
    update(): void;
    delete(): void;
}

export { IOrdersRepository, ICreateOrderDTO };