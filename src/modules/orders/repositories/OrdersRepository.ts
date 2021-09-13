import { getRepository, Repository } from "typeorm";
import { Order } from "../entities/Order";
import { IOrdersRepository, ICreateOrderDTO, IUpdateOrderDTO} from "./IOrdersRepository";

class OrdersRepository implements IOrdersRepository{
    private repository: Repository<Order>;
    
    constructor() {
        this.repository = getRepository(Order)
    }

    async get(): Promise<Order[]> {
        return await this.repository.find();
    }

    async create({ customerName, status, paymentType, amount }: ICreateOrderDTO): Promise<string> {
        const order = this.repository.create({
            customerName, status, paymentType, amount,
        });

        await this.repository.save(order);
        return order.id;
    }

    async getById(id: string): Promise<Order> {
        return await this.repository.findOne({ id });
    }

    async update({ id, customerName, status, paymentType, amount }: IUpdateOrderDTO): Promise<void> {
        // const order = this.repository.({

        // });
        
        // this.repository.update(order);
    }

    async delete(id:string): Promise<void> {
        this.repository.delete(id);   
    }
}

export { OrdersRepository } 