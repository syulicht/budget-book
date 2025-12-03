import { NextFunction, Request, Response } from "express";
import { MasterService } from "../services/master.service";

const masterService = new MasterService();

export class MasterController {
    async getAllMasters(req: Request, res: Response, next: NextFunction) {
        const masters = await masterService.getAllMasters(req.userId ?? 0);
        return res.status(200).json(masters);
    }
}