import { Router } from "express";
import { AuthenticationController } from "../modules/authentication/useCases/AuthenticationController";

const authenticationRoutes = Router();

const authenticationController = new AuthenticationController();

authenticationRoutes.post("/", authenticationController.handler);

export { authenticationRoutes }


