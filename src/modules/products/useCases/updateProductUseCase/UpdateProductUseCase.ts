import { inject, injectable } from "tsyringe";
import { IProductsRepository } from "../../repositories/IProductsRepository";

interface IRequest {
    id: string;
    name: string;
    description: string;
    image_url: string;
    price: number;
}

@injectable()
class UpdateProductUseCase {
    constructor(@inject("ProductsRepository")
                private productsRepository: IProductsRepository ) {}

    async execute({ id, name, description, image_url, price }: IRequest): Promise<void>{
        this.productsRepository.update( { id, name, description, image_url, price });
    }
}

export { UpdateProductUseCase }