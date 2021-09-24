import { container } from "tsyringe";
import { Request, Response } from "express";
import { UpdateProductUseCase } from "./UpdateProductUseCase"

class UpdateProductController {
    async handler(request: Request, response: Response): Promise<Response> {
        const { id, name, description, image_url, price } = request.body;
        const updateProductUseCase = container.resolve(UpdateProductUseCase);
        await updateProductUseCase.execute({ id, name, description, image_url, price });
        return response.status(200).json();
    }
}

export { UpdateProductController } 