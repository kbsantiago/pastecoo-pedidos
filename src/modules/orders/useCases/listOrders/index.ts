import { OrdersRepository } from "../../repositories/OrdersRepository";
import { ListOrdersController } from "./ListOrdersController";
import { ListOrdersUseCase } from "./ListOrdersUseCase";

export default(): ListOrdersController => {
    const ordersRepository = new OrdersRepository();
    const listOrdersUseCase = new ListOrdersUseCase(ordersRepository);
    const listOrdersController = new ListOrdersController(listOrdersUseCase);

    return listOrdersController;
}
