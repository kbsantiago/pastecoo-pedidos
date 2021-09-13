import { Item } from "../entities/Product";

interface ICreateItemDTO {
    name: string; 
    price: number;
}

interface IUpdateItemDTO {
    id: string;
    name: string;
    price: number;
}

interface IItemsRepository {
    get(): Item[];
    getById(id: string): Item;
    create({ name, price }: ICreateItemDTO): string;
    update({ id, name, price }: IUpdateItemDTO ): void;
    delete(id: string): void;
}

export { IItemsRepository, ICreateItemDTO, IUpdateItemDTO }