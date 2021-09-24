import { container } from "tsyringe";
import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProductUseCase"

class CreateProductController {
    async handler(request: Request, response: Response): Promise<Response> {
        const user = request.user;
        const { name, description, image_url, price } = request.body;
        const createProductUseCase = container.resolve(CreateProductUseCase);
        await createProductUseCase.execute({ name, description, image_url, price, created_by: user.id });
        return response.status(201).json();
    }
}

export { CreateProductController } 