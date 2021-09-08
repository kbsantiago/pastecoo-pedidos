import { IItemsRepository } from "../repositories/IItemsRepository";
import { ItemsRepository } from "../repositories/ItemsRepository"; 

interface IRequest {
    id: string;
}

class CreateOrderService {
    constructor(private itemsRepository: IItemsRepository ) {}

    execute({ id }: IRequest): void{
        this.itemsRepository.getById(id);
    }
}

export { CreateOrderService }