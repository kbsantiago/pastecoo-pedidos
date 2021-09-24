import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateOrdersController } from "../modules/orders/useCases/orders/createOrders/CreateOrdersController";
import { ListOrdersController } from "../modules/orders/useCases/orders/listOrders/ListOrdersController";

const ordersRoutes = Router();

const createOrderController = new CreateOrdersController();
const listOrdersController = new ListOrdersController();

ordersRoutes.use(ensureAuthenticated);
ordersRoutes.get("/", listOrdersController.handler);
ordersRoutes.post("/", createOrderController.handler);

export { ordersRoutes };