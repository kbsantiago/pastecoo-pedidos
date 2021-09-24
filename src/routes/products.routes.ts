import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateProductController } from "../modules/products/useCases/createProductUseCase/CreateProductController";
import { ListProductsController } from "../modules/products/useCases/listProductsUseCase/ListProductsController";

const productsRoutes = Router();

const createProductController = new CreateProductController();
const listProductsController = new ListProductsController();

productsRoutes.use(ensureAuthenticated);
productsRoutes.get("/", listProductsController.handler);
productsRoutes.post("/", createProductController.handler);

export { productsRoutes };