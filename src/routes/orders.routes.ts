import { Router } from 'express';
import { OrdersRepository } from '../modules/orders/repositories/OrdersRepository';
import { CreateOrderService } from '../modules/orders/services/CreateOrderService';

const ordersRoutes = Router();
const ordersRepository = new OrdersRepository();

ordersRoutes.get("/", (request, response) => {
    const orders = ordersRepository.get();
    return response.status(200).json({ orders });
});

ordersRoutes.post("/", (request, response) => {
    const { customerName, status, paymentType, amount } = request.body;
    const createOrderService = new CreateOrderService(ordersRepository);
    createOrderService.execute({ customerName, status, paymentType, amount })
    return response.status(201).json();
});

export { ordersRoutes };