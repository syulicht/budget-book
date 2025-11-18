import bcrypt from 'bcrypt'
import { prisma } from '../../prisma/prismaClient';
import z from 'zod';
import { createUserSchema } from '../schema/createUserSchema';

type AccountInfo = z.infer<typeof createUserSchema>

export class UserService {
    async createUser (data: AccountInfo) {
        const encryptedPass = await bcrypt.hash(data.password, 10);
        await prisma.user.create({data: {...data, password: encryptedPass, name: ''}});
    }
}