import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';

declare module 'express' {
    export interface Request {
        userId? : number
    }
}

declare module 'jsonwebtoken' {
    export interface JwtPayload {
        id: number
    }
}

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({message: '認証トークンがありません'});
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET_KEY as string) as JwtPayload;
        (req as any).userId = Number(decoded.id);
        next();
    } catch(err) {
        return res.status(401).json({message: '認可に失敗しました'});
    }
}