import { Router } from "express";
import createOrderController from "../modules/orders/useCases/createOrder";
import listOrdersController from "../modules/orders/useCases/listOrders";

const ordersRoutes = Router();

ordersRoutes.get("/", (request, response) => {
    return listOrdersController().handle(request, response);
});

ordersRoutes.post("/", (request, response) => {
    return createOrderController().handler(request, response);
});

export { ordersRoutes };