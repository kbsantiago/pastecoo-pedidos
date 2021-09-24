import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateRolesController } from "../modules/roles/useCases/createRole/CreateRolesController";
import { ListRolesController } from "../modules/roles/useCases/listRoles/ListRolesController";

const rolesRoutes = Router();

const createRolesController = new CreateRolesController();
const listRolesController = new ListRolesController();

rolesRoutes.use(ensureAuthenticated);
rolesRoutes.get("/", listRolesController.handler);
rolesRoutes.post("/", createRolesController.handler);

export { rolesRoutes };