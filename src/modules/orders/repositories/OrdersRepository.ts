import { Order } from "../model/Order";
import { IOrdersRepository, ICreateOrderDTO, IUpdateOrderDTO} from "./IOrdersRepository";

class OrdersRepository implements IOrdersRepository{

    private orders: Order[];

    constructor() {
        this.orders = [];
    }

    get() {
        return this.orders;
    }

    create({ customerName, status, paymentType, amount }: ICreateOrderDTO) {
        const order = new Order();

        Object.assign(Order,
            customerName,
            status, 
            paymentType,
            amount);
        
        this.orders.push(order);
        return order.id;
    }

    getById(): Order {
        throw new Error("Method not implemented.");
    }
    update({ id, customerName, status, paymentType, amount }: IUpdateOrderDTO): void {
        const order = new Order();

        Object.assign(Order,
            customerName,
            status, 
            paymentType,
            amount);
        
        this.orders.push(order);
    }
    delete(id:string): void {
        throw new Error("Method not implemented.");
    }

}

export { OrdersRepository } 