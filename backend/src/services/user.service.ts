import bcrypt from 'bcrypt'
import { prisma } from '../../prisma/prismaClient';

interface AccountInfo {
    email: string,
    password: string
}

export class UserService {
    async createUser (data: AccountInfo) {
        const encryptedPass = await bcrypt.hash(data.password, 10);
        await prisma.user.create({data: {...data, password: encryptedPass, name: ''}});
    }
}