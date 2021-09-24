import { container } from "tsyringe";
import { Request, Response } from "express";
import { AuthenticationUseCase } from "./AuthenticatonUseCase";


class AuthenticationController {
    async handler(request: Request, response: Response): Promise<Response> {
        const {username, password} = request.body;
        const authenticationUseCase = container.resolve(AuthenticationUseCase);
        const authResponse = await authenticationUseCase.execute( { username, password } );
        return response.status(200).json(authResponse);
    }
}

export { AuthenticationController }