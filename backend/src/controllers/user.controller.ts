import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/user.service";

const userService = new UserService();

export class UserController {
    async signUp (req: Request, res: Response, next: NextFunction) {
        const data = req.body;
        await userService.createUser(data);
        res.status(201).json({message: 'succeed creating user'});
    }
}