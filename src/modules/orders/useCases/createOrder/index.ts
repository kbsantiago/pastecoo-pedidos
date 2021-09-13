import { OrdersRepository } from "../../repositories/OrdersRepository";
import { CreateOrderController } from "./CreateOrderController";
import { CreateOrderUseCase } from "./CreateOrderUseCase";


export default(): CreateOrderController => {
    const ordersRepository = new OrdersRepository();
    const createOrderUseCase = new CreateOrderUseCase(ordersRepository);
    const createOrderController = new CreateOrderController(createOrderUseCase);

    return createOrderController;
}

