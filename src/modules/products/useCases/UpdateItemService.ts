import { IItemsRepository } from "../repositories/IItemsRepository";
import { ItemsRepository } from "../repositories/ItemsRepository"; 

interface IRequest {
    id: string;
    name: string;
    price: number;
}

class CreateOrderService {
    constructor(private itemsRepository: IItemsRepository ) {}

    execute({ id, name, price }: IRequest): void{
        this.itemsRepository.update( { id, name, price });
    }
}

export { CreateOrderService }