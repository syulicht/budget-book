import { NextFunction, Request, Response } from "express"
import { ZodError } from "zod";

export const validateRequest = (schema: any) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse(req.body);
            next();
        } catch(err) {
            res.status(400).json({
                success: false,
                errors: (err as any).issues.map((e: any) => e.message)
            })
        }
    }
}