import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/user.service";
import { NotFoundError } from "../middlewares/errorHandler";

const userService = new UserService();

export class UserController {
    async signUp (req: Request, res: Response, next: NextFunction) {
        const data = req.body;
        await userService.createUser(data);
        res.status(201).json({message: 'succeed creating user'});
    }

    async login (req: Request, res: Response, next: NextFunction) {
        const data = req.body;
        const token = await userService.login(data);
        res.status(200).json(token);
    }

    async getUserInfo (req: Request, res: Response, next: NextFunction) {
        try {
            const user = await userService.getUserInfo(req.userId);
            res.status(200).json(user);    
        } catch (err) {
            throw new NotFoundError('ユーザーが見つかりません');
        }
    }
}