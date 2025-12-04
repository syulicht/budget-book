import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { validateRequest } from "../middlewares/validateRequest";
import { createUserSchema } from "../schema/createUserSchema";
import { authenticate } from "../middlewares/authenticate";
import { BudgetController } from "../controllers/budget.controller";
import { MasterController } from "../controllers/master.controller";

const router = Router();

const userController = new UserController();
const budgetController = new BudgetController();
const masterController = new MasterController();

router.post('/signup', validateRequest(createUserSchema), userController.signUp);
router.post('/signin', validateRequest(createUserSchema), userController.login);

router.get('/getUser', authenticate, userController.getUserInfo);
router.get('/getBudgetData/:startParam/:endParam/:ExOrInParam/:typeIdParam', authenticate, budgetController.getCurrentMonthBudgetData);

router.get('/getAllMasters', authenticate, masterController.getAllMasters);
export default router;