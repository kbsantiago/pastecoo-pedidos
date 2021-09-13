import { Router } from "express";
import { ordersRoutes } from "./orders.routes";

const router = Router();

router.use("/orders", ordersRoutes);

export { router }