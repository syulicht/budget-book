import { createRootRoute, createRoute, redirect } from "@tanstack/react-router";
import SignUp from "../feature/SignUp/SignUp";
import SignIn from "../feature/SignIn/SignIn";
import Dashboard from "../feature/Dashboard/Dashboard";
import { checkAuthentication } from "../utils/checkAuthentication";
import AuthenticatedLayout from "./_authenticated";

const rootRoute = createRootRoute();

const signUpRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/signup',
    component: SignUp
});

const signInRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/signin',
    component: SignIn
});

const protectedRoute = createRoute({
    getParentRoute: () => rootRoute,
    beforeLoad: async() => {
        if(!checkAuthentication()){
            throw redirect({to: '/signin'});
        }
    },
    component: AuthenticatedLayout,
    path: '/',
});

const dashboardRoute = createRoute({
    getParentRoute: () => protectedRoute,
    path: '/dashboard',
    component: Dashboard
})

protectedRoute.addChildren([
    dashboardRoute
]);


export const routeTree = rootRoute.addChildren([
    signUpRoute,
    signInRoute,
    protectedRoute
]);
