import { inject, injectable } from "tsyringe";
import { Product } from "../../entities/Product";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
class ListProductsUseCase {
    constructor(@inject("ProductsRepository")
                private productsRepository: IProductsRepository ) {}

    async execute(): Promise<Product[]> {
        return await this.productsRepository.get();
    }
}

export { ListProductsUseCase }