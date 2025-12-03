import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { validateRequest } from "../middlewares/validateRequest";
import { createUserSchema } from "../schema/createUserSchema";
import { authenticate } from "../middlewares/authenticate";
import { BudgetController } from "../controllers/budget.controller";

const router = Router();

const userController = new UserController();
const budgetController = new BudgetController();

router.post('/signup', validateRequest(createUserSchema), userController.signUp);
router.post('/signin', validateRequest(createUserSchema), userController.login);

router.get('/getUser', authenticate, userController.getUserInfo);
router.get('/getBudgetData/:start/:end', authenticate, budgetController.getCurrentMonthBudgetData);

export default router;