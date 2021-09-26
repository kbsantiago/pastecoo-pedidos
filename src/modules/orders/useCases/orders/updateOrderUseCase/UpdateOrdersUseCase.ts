import { inject, injectable } from "tsyringe";
import { OrderItem } from "../../../entities/OrderItem";
import { OrdersRepository } from "../../../repositories/OrdersRepository"; 

interface IRequest {
    id: string;
    number: number;
    customerName: string; 
    items: OrderItem[],
    status: string;
    paymentType: string;
    amount: number;
    updated_by: string;
}

@injectable()
class UpdateOrdersUseCase {            
    constructor(@inject("OrdersRepository")
                private ordersRepository: OrdersRepository) {}

    execute({ id, number, customerName, items, status, paymentType, amount, updated_by }: IRequest): void{
        this.ordersRepository.update( { id, number, customerName, items, status, paymentType, amount, updated_by } );
    }
}

export { UpdateOrdersUseCase }