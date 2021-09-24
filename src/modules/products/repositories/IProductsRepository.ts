import { Product } from "../entities/Product";

interface ICreateProductDTO {
    name: string; 
    description: string;
    image_url: string;
    price: number;
    created_by: string;
}

interface IUpdateProductDTO {
    id: string;
    name: string;
    description: string;
    image_url: string;
    price: number;
    updated_by: string;
}

interface IProductsRepository {
    get(): Promise<Product[]>;
    getByName(name: string): Promise<Product>;
    create({ name, description, image_url, price, created_by }: ICreateProductDTO): Promise<string>;
    update({ id, name, description, image_url, price, updated_by }: IUpdateProductDTO ): Promise<void>;
    delete(id: string): Promise<void>;
}

export { IProductsRepository, ICreateProductDTO, IUpdateProductDTO }