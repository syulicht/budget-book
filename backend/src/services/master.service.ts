import { prisma } from "../../prisma/prismaClient"

export class MasterService {
    async getAllMasters (userId: number) {
        return await prisma.type.findMany({
            where: {userId: userId}
        });
    }
}