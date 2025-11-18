import { createRootRoute, createRoute } from "@tanstack/react-router";
import SignUp from "../feature/SignUp/SignUp";
import SignIn from "../feature/SignIn/SignIn";

const rootRoute = createRootRoute();

const signUpRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/signup',
    component: SignUp
});

const signInRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: 'signin',
    component: SignIn
})


export const routeTree = rootRoute.addChildren([
    signUpRoute,
    signInRoute
]);
