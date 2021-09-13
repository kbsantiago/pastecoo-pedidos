import { User } from "../entities/User";
import { IOrdersRepository, ICreateOrderDTO, IUpdateOrderDTO} from "./IUsersRepository";

class OrdersRepository implements IOrdersRepository{
    private orders: User[];

    private static INSTANCE: OrdersRepository;

    public static getInstance(): OrdersRepository {
        if(!OrdersRepository.INSTANCE) {
            OrdersRepository.INSTANCE = new OrdersRepository();
        }
        return OrdersRepository.INSTANCE;
    }

    constructor() {
        this.orders = [];
    }

    get() {
        return this.orders;
    }

    create({ customerName, status, paymentType, amount }: ICreateOrderDTO) {
        const order = new User();

        Object.assign(User,
            customerName,
            status, 
            paymentType,
            amount);
        
        this.orders.push(order);
        return order.id;
    }

    getById(): User {
        throw new Error("Method not implemented.");
    }
    update({ id, customerName, status, paymentType, amount }: IUpdateOrderDTO): void {
        const order = new User();

        Object.assign(User,
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