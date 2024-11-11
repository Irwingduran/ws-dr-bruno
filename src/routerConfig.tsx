import { Home, ServiceCancer, ServiceGrowth, ServiceCancerEs, ServiceGrowthEs, Inicio } from "./pages";

export const routes = [
    // english version 
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/ServiceCancer',
        element: <ServiceCancer/>
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
        path: '/es/ServiceCancer',
        element: <ServiceCancerEs/>
    },
    {
        path: '/es/ServiceGrowth',
        element: <ServiceGrowthEs/>
    },
]