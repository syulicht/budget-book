import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({message: 'no token provided'});
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET_KEY as string);
        (req as any).user = decoded;
        next();
    } catch(err) {
        return res.status(401).json({message: '認可に失敗しました'});
    }
}