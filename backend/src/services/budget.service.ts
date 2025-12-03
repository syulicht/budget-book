import { prisma } from "../../prisma/prismaClient";

export class BudgetService {
    async getBudgetList (start: Date, end: Date, type: number, ExOrIn: number, userId: number) {
        const typeCondition = type === -1 ? {}: type;
        const ExOrInCondition = ExOrIn === -1 ? {}: ExOrIn;
        return await prisma.budget.findMany({
            where: {
                date: {
                    gte: start,
                    lte: end
                },
                userId: userId,
                type: typeCondition,
                ExOrIn: ExOrInCondition
            }
        })
    }
}