import { Home, ServiceGrowth, ServiceGrowthEs, Inicio } from "./pages";

export const routes = [
    // english version 
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/ServiceGrowth',
        element: <ServiceGrowth/>
    },
    // spanish version
    {
        path: '/es/Inicio',
        element: <Inicio/>
    },
    {
        path: '/es/ServiceGrowth',
        element: <ServiceGrowthEs/>
    },
]