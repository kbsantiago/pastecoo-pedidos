import { getRepository, Repository } from "typeorm";
import { Product } from "../entities/Product";
import { ICreateProductDTO, IProductsRepository, IUpdateProductDTO } from "./IProductsRepository";

class ProductsRepository implements IProductsRepository{
    private repository: Repository<Product>;

    constructor() {
        this.repository = getRepository(Product);
    }

    async get(): Promise<Product[]> {
        return await this.repository.find();
    }
    async getByName(name: string): Promise<Product> {
        return await this.repository.findOne({ where: { name: name }});
    }
    async create({ name, description, image_url, price, created_by }: ICreateProductDTO): Promise<string> {
        const product = this.repository.create({
            name, description, image_url, price, created_by
        });
        await this.repository.save(product);
        return product.id;
    }
    async update({ id, name, description, image_url, price, updated_by }: IUpdateProductDTO): Promise<void> {

    }
    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}

export { ProductsRepository }