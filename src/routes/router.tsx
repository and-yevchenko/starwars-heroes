import {
    createRootRoute,
    createRoute,
    createRouter,
    Outlet,
} from '@tanstack/react-router';
import { Home } from '../pages/Home/Home';
import { Hero } from '../pages/Hero/Hero';
import { ErorrPage } from '../pages/ErrorPage/ErrorPage';
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'

//Using TanStack Router
//If necessary, you can enable TanStack Router Devtools
const rootRoute = createRootRoute({
    //main route
    component: () => (
        <>
            <Outlet />
            {/* <TanStackRouterDevtools /> */}
        </>
    ),
    notFoundComponent: () => {
        return <ErorrPage />;
    },
});

const homeRoute = createRoute({
    //route with a list of characters
    getParentRoute: () => rootRoute,
    path: '/',
    component: Home,
});

const heroRoute = createRoute({
    //route with a graph for a specific character
    getParentRoute: () => rootRoute,
    path: '/hero/$id',
    component: Hero,
});

const routeTree = rootRoute.addChildren([homeRoute, heroRoute]);

export const router = createRouter({ routeTree });
