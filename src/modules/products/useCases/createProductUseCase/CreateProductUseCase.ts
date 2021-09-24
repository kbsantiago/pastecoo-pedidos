import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IProductsRepository } from "../../repositories/IProductsRepository";

interface IRequest {
    name: string;
    description: string;
    image_url: string;
    price: number;
    created_by: string;
}

@injectable()
class CreateProductUseCase {
    constructor(@inject("ProductsRepository") 
                private productsRepository: IProductsRepository ) {}

    async execute({ name, description, image_url, price, created_by }: IRequest): Promise<void>{
        const product = this.productsRepository.getByName(name);

        if(!product) {
            throw new AppError("Product already exists.", 400);
        }

        await this.productsRepository.create( { name, description, image_url, price, created_by } );
    }
}

export { CreateProductUseCase }