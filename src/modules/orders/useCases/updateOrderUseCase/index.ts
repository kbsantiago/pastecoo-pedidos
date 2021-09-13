import { OrdersRepository } from "../../repositories/OrdersRepository";
import { UpdateOrdersController } from "./UpdateOrdersController";
import { UpdateOrdersUseCase } from "./UpdateOrdersUseCase";


const ordersRepository = OrdersRepository.getInstance();
const updateOrderUseCase = new UpdateOrdersUseCase(ordersRepository);
const updateOrdersController = new UpdateOrdersController(updateOrderUseCase);

export { updateOrdersController }