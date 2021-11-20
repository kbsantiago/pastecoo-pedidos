import { Console } from "console";
import { getRepository, Repository } from "typeorm";
import { ordersRoutes } from "../../../routes/orders.routes";
import { Order } from "../entities/Order";
import { OrderItem } from "../entities/OrderItem";
import { IOrdersRepository, ICreateOrderDTO, IUpdateOrderDTO, IReturnSequenceValue, IReturnTopFiveOrderItems} from "./IOrdersRepository";

class OrdersRepository implements IOrdersRepository{
    private repository: Repository<Order>;
    
    constructor() {
        this.repository = getRepository(Order)
    }

    async get(): Promise<Order[]> {
        const orders = await this.repository.find();

        orders.forEach(element => {
            getRepository(OrderItem).find( { where: { orderId: element.id } } ).then( result =>  {                
                if(result.length > 0) {
                    element.items = [ ];
                    result.forEach(item => element.items.push(item));                    
                }
            });            
        });

        return orders;
    }

    async create({ number, customerName, items, status, paymentType, amount, created_by }: ICreateOrderDTO): Promise<string> {        
        const order = this.repository.create({
            number, customerName, items, status, paymentType, amount, created_by
        });

        order.items.forEach(element => {
            element.orderId = order.id;
            order.amount += element.price;
        });

        await this.repository.save(order);
        await this.repository.manager.transaction.apply;

        order.items.forEach(element => {
            getRepository(OrderItem).save(element);
        });

        return order.id;
    }

    async getById(id: string): Promise<Order> {
        return await this.repository.findOne({ id });
    }

    async update({ id, number, customerName, status, paymentType, amount, updated_by }: IUpdateOrderDTO): Promise<void> {
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

    async getTopFiveOrdersItems(): Promise<IReturnTopFiveOrderItems[]> {
        const items = await getRepository(OrderItem).query('select p."id", p."name", p."price", p."image_url", sum(quantity) as "quantity" from "OrderItems" o, "Products" p where CAST(o."productId" as text) = CAST(p.id as text) group by p."id", p."name", p."price", p."image_url" order by sum(quantity) desc limit 5');        
        console.log(items);
        return items;
    }
}

export { OrdersRepository } 