import { inject, injectable } from "tsyringe";
import { OrdersRepository } from "../../../repositories/OrdersRepository"; 

interface IRequest {
    id: string;
    status: string;
    updated_by: string;
}

@injectable()
class PatchOrdersUseCase {            
    constructor(@inject("OrdersRepository")
                private ordersRepository: OrdersRepository) {}

    async execute({ id, status, updated_by }: IRequest): Promise<void>{
        await this.ordersRepository.patch( { id, status, updated_by } );
    }
}

export { PatchOrdersUseCase }