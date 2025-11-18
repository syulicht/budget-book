import { z } from "zod";

export const createUserSchema = z.object({
    email: z.email('メールアドレスの形式が不正です'),
    password: z.string().min(6, '6文字以上でお願いします')
});