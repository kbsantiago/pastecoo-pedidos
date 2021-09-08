import { Item } from "../model/Item";
import { ICreateItemDTO, IItemsRepository } from "./IItemsRepository";

class ItemsRepository implements IItemsRepository{
    get(): Item[] {
        return null;
    }
    getById(): Item {
        return null;
    }
    create({ name, price }: ICreateItemDTO): string {
        const item = new Item();

        Object.assign(item, name, price);

        return item.id;
    }
    update(): void {

    }
    delete(): void {

    }
}

export { ItemsRepository }