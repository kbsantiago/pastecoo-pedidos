import { container } from "tsyringe";
import { Request, Response } from "express";
import { DeleteProductUseCase } from "./DeleteProductUseCase"

class DeleteProductController {
    async handler(request: Request, response: Response): Promise<Response> {
        const { id } = request.body;
        const deleteProductUseCase = container.resolve(DeleteProductUseCase);
        await deleteProductUseCase.execute(id);
        return response.status(201).json();
    }
}

export { DeleteProductController } 