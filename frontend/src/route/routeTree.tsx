import { createRootRoute, createRoute } from "@tanstack/react-router";
import SignUp from "../feature/SignUp/SignUp";

const rootRoute = createRootRoute();

const signUpRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/signup',
    component: SignUp
});


export const routeTree = rootRoute.addChildren([
    signUpRoute
]);
