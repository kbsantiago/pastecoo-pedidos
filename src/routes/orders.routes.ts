import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateOrdersController } from "../modules/orders/useCases/orders/createOrders/CreateOrdersController";
import { ListOrdersController } from "../modules/orders/useCases/orders/listOrders/ListOrdersController";
import { TopFiveOrderItemsController } from "../modules/orders/useCases/orders/topFiveOrderItems/TopFiveOrderItemsController";
import { PatchOrdersController } from "../modules/orders/useCases/orders/patchOrderUseCase/PatchOrdersController";

const ordersRoutes = Router();

const createOrderController = new CreateOrdersController();
const listOrdersController = new ListOrdersController();
const topFiveOrderItemsController = new TopFiveOrderItemsController();
const patchOrdersController = new PatchOrdersController();

ordersRoutes.use(ensureAuthenticated);
ordersRoutes.get("/", listOrdersController.handler);
ordersRoutes.post("/", createOrderController.handler);
ordersRoutes.patch("/", patchOrdersController.handle);
ordersRoutes.get("/top-five", topFiveOrderItemsController.handler);

export { ordersRoutes };