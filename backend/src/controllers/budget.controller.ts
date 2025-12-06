import { Request, Response, NextFunction } from "express";
import { BudgetService } from "../services/budget.service";
import { UserService } from "../services/user.service";
import { NotFoundError } from "../middlewares/errorHandler";

const budgetService = new BudgetService();
const userService = new UserService();

export class BudgetController {
    async getCurrentMonthBudgetData (req: Request, res: Response, next: NextFunction) {
        try {
            const nowDate = new Date();
            const {startParam, endParam, typeIdParam, ExOrInParam} = req.params;
            const start = new Date(startParam) ?? new Date(nowDate.getFullYear(), nowDate.getMonth(), 1);
            const end = new Date(endParam) ?? new Date(nowDate.getFullYear(), nowDate.getMonth()+1, 0);
            const type = Number(typeIdParam) ?? 0;
            const ExOrIn = Number(ExOrInParam) ?? 0;
            const user = await userService.getUserInfo(req.userId);
            if(!user) throw new NotFoundError('ユーザーが見つかりません');
            const data = await budgetService.getBudgetList(start, end, type, ExOrIn, user.id);
            res.status(200).json(data);
        } catch (err) {
            console.log(err);
            throw new Error('収支履歴の取得に失敗しました');
        }
    }
}