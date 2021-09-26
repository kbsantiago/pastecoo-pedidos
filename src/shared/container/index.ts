import { container } from "tsyringe";
import { IOrdersRepository } from "../../modules/orders/repositories/IOrdersRepository";
import { OrdersRepository } from "../../modules/orders/repositories/OrdersRepository";
import { IProductsRepository } from "../../modules/products/repositories/IProductsRepository";
import { ProductsRepository } from "../../modules/products/repositories/ProductsRepository";
import { IRolesRepository } from "../../modules/roles/repositories/IRolesRepository";
import { RolesRepository } from "../../modules/roles/repositories/RolesRepository";
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/users/repositories/UsersRepository";

container.registerSingleton<IOrdersRepository>(
    "OrdersRepository", 
    OrdersRepository
);

container.registerSingleton<IProductsRepository>(
    "ProductsRepository", 
    ProductsRepository
);

container.registerSingleton<IUsersRepository>(
    "UsersRepository", 
    UsersRepository
);

container.registerSingleton<IRolesRepository>(
    "RolesRepository", 
    RolesRepository
);



