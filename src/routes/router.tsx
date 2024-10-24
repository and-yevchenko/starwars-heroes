import {
    createRootRoute,
    createRoute,
    createRouter,
    Outlet,
} from '@tanstack/react-router';
import { Home } from '../pages/Home/Home';
import { Hero } from '../pages/Hero/Hero';
import { ErorrPage } from '../pages/ErrorPage/ErrorPage';

const rootRoute = createRootRoute({
    component: () => (
        <>
            <Outlet />
        </>
    ),
    notFoundComponent: () => {
        return <ErorrPage />;
    },
});

const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Home,
});

const heroRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/hero/$id',
    component: Hero,
});

const routeTree = rootRoute.addChildren([homeRoute, heroRoute]);

export const router = createRouter({ routeTree });
