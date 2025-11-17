import { createRootRoute, createRoute } from "@tanstack/react-router";
import signUp from "../feature/SignUp/signUp";

const rootRoute = createRootRoute();

const signUpRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/signup',
    component: signUp
});


export const routeTree = rootRoute.addChildren([
    signUpRoute
]);
