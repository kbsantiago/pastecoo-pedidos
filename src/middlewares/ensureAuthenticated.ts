import { NextFunction, Request, Response  } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/users/repositories/UsersRepository";


interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction ) {

    const authenticationHeader = request.headers.authorization;

    if(!authenticationHeader) {
        throw new AppError("Token missing.", 401);
    }

    const [, token] = authenticationHeader.split(" ");

    try {
        const { sub: user_id } = verify(token, "0c01565485bc32a662900696c9ce228e") as IPayload;

        const usersRepository = new UsersRepository();
        const user = await usersRepository.getById(user_id);
        
        if(!user) {
            throw new AppError("User does not exists.", 401);
        }

        request.user = {
            id: user.id,
        }

        next();
    } catch {
        throw new AppError("Invalid Token.", 401);
    }
}