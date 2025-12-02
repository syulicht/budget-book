import bcrypt from 'bcrypt'
import { prisma } from '../../prisma/prismaClient';
import z from 'zod';
import jwt from 'jsonwebtoken';
import { createUserSchema } from '../schema/createUserSchema';
import { AdaptabilityError, AuthorizationError, NotFoundError } from '../middlewares/errorHandler';

type AccountInfo = z.infer<typeof createUserSchema>

export class UserService {
    async createUser (data: AccountInfo) {
        const registeredUser = await prisma.user.findUnique({where: {email: data.email}});
        if(registeredUser) throw new AdaptabilityError('既に登録済みのユーザーです');
        const encryptedPass = await bcrypt.hash(data.password, 10);
        await prisma.user.create({data: {...data, password: encryptedPass, name: ''}});
    }

    async login (data: AccountInfo) {
        const user = await prisma.user.findUnique({where: {email: data.email}});
        if(!user) throw new NotFoundError('ユーザーが見つかりません');

        const isValid = await bcrypt.compare(data.password, user.password);
        if(!isValid) throw new AuthorizationError('ログインに失敗しました');

        const token = jwt.sign({id: user.id, name: user.name}, `${process.env.JWT_TOKEN_SECRET_KEY}`, {expiresIn: '1h'});
        return token;
    }

    async getUserInfo (userId: number | undefined) {
        const user = await prisma.user.findFirst({where: {id: userId}});
        return user;
    }
}