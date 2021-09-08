import { IItemsRepository } from "../repositories/IItemsRepository";
import { ItemsRepository } from "../repositories/ItemsRepository"; 

interface IRequest {
    name: string;
    price: number;
}

class CreateOrderService {
    constructor(private itemsRepository: IItemsRepository ) {}

    execute({ name, price }: IRequest): void{
        this.itemsRepository.create( { name, price });
    }
}

export { CreateOrderService }