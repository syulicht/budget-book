import { NextFunction, Request, Response } from "express";

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