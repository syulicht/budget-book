import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { validateRequest } from "../middlewares/validateRequest";
import { createUserSchema } from "../schema/createUserSchema";
import { authenticate } from "../middlewares/authenticate";

const router = Router();

const userController = new UserController();

router.post('/signup', validateRequest(createUserSchema), userController.signUp);
router.post('/signin', validateRequest(createUserSchema), userController.login);

router.get('/getUser', authenticate, userController.getUserInfo);

export default router;