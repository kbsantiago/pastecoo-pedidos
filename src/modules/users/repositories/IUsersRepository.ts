import { User } from "../entities/User";

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
    get(): User[];
    getById(id: string): User;
    create({ customerName, status, paymentType, amount }: ICreateOrderDTO): string;
    update({ id, customerName, status, paymentType, amount }: IUpdateOrderDTO): void;
    delete(id: string): void;
}

export { IOrdersRepository, ICreateOrderDTO, IUpdateOrderDTO };