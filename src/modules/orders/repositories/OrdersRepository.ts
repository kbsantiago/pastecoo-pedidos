import { getRepository, Repository } from "typeorm";
import { Order } from "../entities/Order";
import { IOrdersRepository, ICreateOrderDTO, IUpdateOrderDTO, IReturnSequenceValue} from "./IOrdersRepository";

class OrdersRepository implements IOrdersRepository{
    private repository: Repository<Order>;
    
    constructor() {
        this.repository = getRepository(Order)
    }

    async get(): Promise<Order[]> {
        return await this.repository.find();
    }

    async create({ number, customerName, status, paymentType, amount, created_by }: ICreateOrderDTO): Promise<string> {
        console.log(number);
        const order = this.repository.create({
            number, customerName, status, paymentType, amount, created_by
        });

        await this.repository.save(order);
        return order.id;
    }

    async getById(id: string): Promise<Order> {
        return await this.repository.findOne({ id });
    }

    async update({ id, customerName, status, paymentType, amount, updated_by }: IUpdateOrderDTO): Promise<void> {
        // const order = this.repository.({

        // });
        
        // this.repository.update(order);
    }

    async delete(id:string): Promise<void> {
        this.repository.delete(id);   
    }

    async getNextOrderNumber(): Promise<number> {
        const orderNumber = await this.repository.query("SELECT nextval('SEQ_ORDER_NUMBER')");         
        return orderNumber[0].nextval;              
    }
}

export { OrdersRepository } 