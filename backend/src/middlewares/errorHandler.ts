import { NextFunction, Request, Response } from "express";

export class NotFoundError extends Error {
    statusCode = 404;
    constructor(message = 'リソースが見つかりません') {
        super(message);
        this.statusCode = 404;
    }
}

export class AuthorizationError extends Error {
    statusCode = 401;
    constructor(message = '認証に失敗しました') {
        super(message);
        this.statusCode = 401;
    }
}

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err);

    const statusCode = err.statusCode || 500;
    const message = statusCode === 500 ?
                    'サーバー内でエラーが発生しました。' :
                    err.message || 'エラーが発生しました';
    res.status(statusCode).json({
        success: false,
        message: message
    });
}