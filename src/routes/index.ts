import { Router } from "express";
import { authenticationRoutes } from "./authentication.routes";
import { usersRoutes } from "./users.routes";
import { rolesRoutes } from "./roles.routes";
import { productsRoutes } from "./products.routes";
import { ordersRoutes } from "./orders.routes";

const router = Router();

router.use("/login", authenticationRoutes);
router.use("/users", usersRoutes);
router.use("/roles", rolesRoutes);
router.use("/products", productsRoutes);
router.use("/orders", ordersRoutes);

export { router }